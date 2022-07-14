import http
import os
import string
from flask import Flask,jsonify,request
from werkzeug.security import generate_password_hash,check_password_hash
from flask_cors import CORS


from sqlalchemy import create_engine,Table,MetaData,Column,Integer,String
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from User.Person.PersonModel import Person
from User.Person.PersonService import checkUserEmail
from User.Doctor.DoctorModel import Doctor
from User.Patient.PatientModel import Patient
from User.Hospital.HospitalModel import Hospital

# result = session.query(Customer).join(Invoice).filter(Invoice.amount == 8500)
# for row in result:
#    for inv in row.invoices:
#       print (row.id, row.name, inv.invno, inv.amount)
app = Flask(__name__)
load_dotenv()
engine = create_engine( os.getenv('dbconnectionstring'))#establish a connection with the database
Session = sessionmaker(bind=engine)
session = Session()
meta = MetaData()
Base = declarative_base()

# Database Connection not needed right now. Commented out for now
try:
    engine.connect()
    Base.metadata.create_all(engine)
    session.commit()
    session.close()
    print("Database Successfully Connected")
except Exception as e:
    print('Database connection failed: %s'%(e))
# Echo for debugging for the moment


# Home route
@app.route("/",methods = ['GET'])
def home():
    # print(checkUserEmail(session=session,email="niiodartey10@gmail.com"))
    return "Welcome to EirHub"


# Test Route
@app.route("/person/<int:id>", methods=['GET', 'POST'])
def getPersonById(id):
    for i in doctors:
        for num, info in i.items():
            if id == num:
                return jsonify(info)
    else:
        return "ID not found"

# Test Route
# @app.route("/doctor/<int:id>", methods=['GET', 'POST'])
# def getDoctorById(id):
#     for i in doctors:
#         for num, info in i.items():
#             if id == num:
#                 return jsonify(info)
#     else:
#         return "ID not found"
# This was Jerry's

#Test Route for hospital model
@app.route("/hospital",methods = ['GET']) 
def hospitals():
    lhopital = Hospital("KATH","Kumasi","Pediatrics,Osteopathy,Cardiology",1097) 
    session = Session()
    # session.add(lhopital)
    # session.commit()
    # session.close()
    hospital = session.query(Hospital).all()

    return  (f'{hospital[3].location}')

#Test Route for hospital model
@app.route("/patient",methods = ['GET']) 
def patient():
    new_patient = Patient(75,1.90,"Bantama")
    session = Session()
    session.add(new_patient)
    session.commit()
    session.close()
    patient = session.query(Patient).all()

    return  (f'{patient[0].location}')


#Route for getting patients based on id
@app.route("/patient/<id>",methods = ['GET'])
def getPatientById(id):
    patient = session.query(Patient).get(id)
    return str(patient.location)

#Route for getting doctor details based on id
@app.route("/doctor/<id>",methods = ['GET'])
def getDoctorById(id):
    doctor = session.query(Doctor).get(id)
    return str(doctor.doctor_specialities)



# Will move signup into a service function later. Currently cleaning
@app.route("/signup",methods = ['POST'])
def userSignup():
    session = Session()
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
            email = req["user_email"]
            idPerson = session.query(Person.idPerson).filter(Person.user_email == email).first()
            if(idPerson):
                return ({
                    'status': False,
                    'msg':"User already registered. Do you want to login?"
                }),200
            passwordHash = generate_password_hash(req["password"])
            newPerson = Person(req['first_name'],req['middle_name'],req['last_name'],req['age'],req['person_image'],req['user_email'],passwordHash,req['date_of_birth'],req['house_address'],req['type_of_id'],req['id_number'],req['nationality'])
            try: 
                session.add(newPerson)
                session.commit()
            except Exception as e:
                return ("Connection Error: User not recorded : %s",e),400
            personId = session.query(Person.idPerson).filter(Person.user_email == req['user_email'], Person.id_number == req['id_number']).first()
            returnPerson = session.query(Person).get(personId)
            session.commit()
            return ({
                'msg':str(returnPerson.idPerson),
                'status':True
            }),200  #StatusCode
        else:
            return 'Error: Content-Type Error',400


# User Authentication for Login Flow
#Test with already existing details: 
#{
#     "email":"niiodartey10@gmail.com",
#     "password":"WhatTheFuckTHough5757?"
# }

@app.route("/login",methods=['POST'])
def userLogin():
    req = request.json
    if request.method == "POST":
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            # return (personservice.userLogin(session=Session(),email=req["email"],password=req["password"]))
            email = req["email"]
            password = req["password"]
            isdoctor = req["isDoctor"]
    #Test Check Email from Person  Service File.
            # print("One Down ",checkUserEmail(session=session,email="niiodartey10"))
            try:
                idPerson = session.query(Person.idPerson).filter(Person.user_email == email).first()
                if(idPerson):
                    idPerson = idPerson[0]
                    personDetail = None
                    userObject = {}
                    if(isdoctor):
                        personDetail = session.query(Person,Doctor).join(Person).filter(Person.idPerson == idPerson, Doctor.idPerson ==idPerson).first()
                        #Testing With Print
                        print(personDetail[0].first_name) 
                        print(personDetail[1].idDoctor)
                        # userObject for Doctor
                        userObject["doctor_ratings"] = personDetail[1].doctor_ratings
                        userObject["doctor_specialities"] = personDetail[1].doctor_specialities
                        userObject["license_number"] = personDetail[1].license_number
                    else:
                        personDetail = session.query(Person,Patient).join(Person).filter(Person.idPerson == idPerson, Patient.idPerson ==idPerson).first()
                        print(personDetail[0].first_name) 
                        print(personDetail[1].idPatient)
                        userObject["health_details_id"] = str(personDetail[1].health_details_id)
                    session.commit()
                    #General Info from Person Table
                    userObject["first_name"] = personDetail[0].first_name
                    userObject["middle_name"] = personDetail[0].middle_name
                    userObject["last_name"] = personDetail[0].last_name
                    userObject["age"] = personDetail[0].age
                    userObject["person_image"] = personDetail[0].person_image
                    userObject["user_email"] = personDetail[0].user_email
                    userObject["date_of_birth"] = personDetail[0].date_of_birth
                    userObject["house_address"] = personDetail[0].house_address
                    #Check Password after user email has been verified
                    try :
                        userPasswordHash =  str(personDetail[0].user_password)
                        if(check_password_hash(str(userPasswordHash),password)):
                            return ({
                                'status': True,
                                'user': userObject
                            }),200  #StatusCode  #Also make this entire response a json object.
                        else:
                            return({
                                'status': False,
                                'msg':"Incorrect Password. Kindly Try again"
                            }),200 #Check Status Code for wrong login 
                    except Exception as e:
                        return("Connection Error : %s",(e)),400
                else:
                    return(
                        {
                        'status': False,
                        'msg':"User not registered.Do you want to sign up?"
                        }
                    ),200 #Check Status Code for wrong login
            except Exception as e:
                print(e)
                return("Connection Error: Check your network connection"),400
        else:
            return ("Bad Request Error"),400


if __name__ == "__main__":
    CORS(app)
    app.run(debug=True)



