import http
import os
import string
from flask import Flask,jsonify,request
from werkzeug.security import generate_password_hash,check_password_hash


from sqlalchemy import create_engine,Table,MetaData,Column,Integer,String
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from User.Person.personmodel import Person
from User.Doctor.doctormodel import Doctor
from User.Person import personservice
from User.Hospital.hospitalModel import Hospital


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
    # new = Student("Albus severus Potter","Potions") #
    # session.add(new)
    session.commit()
    session.close()
    print("Database Successfully Connected")
except Exception as e:
    print('Database connection failed: %s'%(e))
# Echo for debugging for the moment


# Home route
@app.route("/",methods = ['GET'])
def home():
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
@app.route("/doctor/<int:id>", methods=['GET', 'POST'])
def getDoctorById(id):
    for i in doctors:
        for num, info in i.items():
            if id == num:
                return jsonify(info)
    else:
        return "ID not found"

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




# Will move signup into a service function later. Currently cleaning
@app.route("/signup",methods = ['POST'])
def signup():
    session = Session()
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
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
            return str(returnPerson.idPerson),200  #StatusCode
        else:
            return 'Error: Content-Type Error',400


# User Authentication for Login Flow
#Test with already existing details: 
#{
#     "email":"niiodartey10@gmail.com",
#     "password":"WhatTheFuckTHough5757?"
# }
@app.route("/login",methods=['GET'])
def login():
    req = request.json
    if request.method == "GET":
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            # return (personservice.userLogin(session=Session(),email=req["email"],password=req["password"]))
            email = req["email"]
            password = req["password"]
    #Check Email 
            try:
                idPerson = session.query(Person.idPerson).filter(Person.user_email == email).first()
                if(idPerson):
                    personDetail = session.query(Person).get(idPerson)
                    session.commit()
                    #Check Password after user email has been verified
                    try :
                        userPasswordHash =  str(personDetail.user_password)
                        if(check_password_hash(str(userPasswordHash),password)):
                            userObject = {"firstname":str(personDetail.first_name)}
                            userObject["lastname"] = str(personDetail.last_name)
                            userObject["middlename"] = str(personDetail.last_name)
                            userObject["age"] = str(personDetail.last_name)
                            userObject["lastname"] = str(personDetail.last_name)
                            userObject["lastname"] = str(personDetail.last_name)
                            userObject["person_image"] = str(personDetail.person_image)
                            userObject["user_email"] = str(personDetail.user_email)
                            # user_name = Column('password',String(50))
                            # date_of_birth = Column('date_of_birth',String(50))
                            # house_address = Column('house_address',String(50))
                            # type_of_id = Column('type_of_id',String(50))
                            # id_number = Column('id_number',String(50))
                            # nationality = Column('nationality',String(50))
                            # userObject[""]
                            return (userObject),200  #StatusCode  #Also make this entire response a json object.
                        else:
                            return("Incorrect Password. Kindly Try again") #Check Status Code for wrong login 
                    except Exception as e:
                        return("Connection Error : %s",(e)),400
                else:
                    return("User not registered.Do you want to sign up?"),200 #Check Status Code for wrong login
            except Exception as e:
                print(e)
                return("Connection Error: Check your network connection"),400
        else:
            return "Bad Request Error",400


if __name__ == "__main__":
    app.run(debug=True)


