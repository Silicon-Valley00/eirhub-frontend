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
from Doctor.DoctorService import doctorlogin
from Doctor import DoctorModel
from Patient.PatientService import patients_route
from HealthDetails.HealthDetailsModel import HealthDetails
# from Hospital.HospitalService import Hospital
# from HealthDetails.HealthDetailsModel import  HealthDetails
# from Prescription.PrescriptionService import  Prescription
# from Patient.PatientService import  Patient
# from Doctor.DoctorModel import Doctor
# from Report.ReportService import  Report
# from Guardian.GuardianPersonService import  GuardianPerson




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
app.register_blueprint(patients_route)

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


# # Test Route
# @app.route("/person/<int:id>", methods=['GET', 'POST'])
# def getPersonById(id):
#     for i in doctors:
#         for num, info in i.items():
#             if id == num:
#                 return jsonify(info)
#     else:
#         return "ID not found"

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
# @app.route("/hospital",methods = ['GET']) 
# def hospitals():
#     lhopital = Hospital("KATH","Kumasi","Pediatrics,Osteopathy,Cardiology",1097,'hhfhffuu','+23323233223') 
#     session = Session()
#     session.add(lhopital)
#     session.commit()
#     session.close()
#     hospital = session.query(Hospital).all()

#     return  (f'{hospital[1].location}')

# #Test Route for hospital model
# @app.route("/patient",methods = ['GET']) 
# def patient():
#     new_patient = Patient(75,1.90,"Bantama")
#     session = Session()
#     session.add(new_patient)
#     session.commit()
#     session.close()
#     patient = session.query(Patient).all()

    # return  (f'{patient[0].location}')


#Route for getting patients based on id
# @app.route("/patient/<id>",methods = ['GET'])
# def getPatientById(id):
#     patient = session.query(Patient).get(id)
#     return str(patient.location)

# #Route for getting doctor details based on id
# @app.route("/doctor/<id>",methods = ['GET'])
# def getDoctorById(id):
#     doctor = session.query(Doctor).get(id)
#     return str(doctor.doctor_specialities)

# # Route for getting all doctors
# @app.route("/doctor/all", methods = ["GET"])
# def getDoctors():
#     doctor = session.query(Doctor).all()
#     return str(doctor)



# Will move signup into a service function later. Currently cleaning
#Doctor Sign Up
@app.route("/signup",methods = ['POST'])
def userSignup():
    session = Session()
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
            hospital_code = req["hospital_code"]
            license_number = req["license_number"]
            isDoctor = session.query(DoctorModel.Doctor).filter(DoctorModel.Doctor.hospital_code == hospital_code, DoctorModel.Doctor.license_number == license_number).first()
            if(isDoctor):
                return ({
                    'status': False,
                    'msg':"Doctor already registered. Do you want to login?"
                }),200
            first_name = req["first_name"]
            middle_name = req["middle_name"]
            last_name = req["last_name"]
            user_email = req["user_email"]
            person_image = req["person_image"]
            date_of_birth =req["date_of_birth"]
            house_address = req["house_address"]
            doctor_ratings = req["doctor_ratings"]
            doctor_specialties = req["doctor_specialties"]
            license_number = req["license_number"]
            gender = req["gender"]
            hospital_code = req["hospital_code"]
            newDoctor = DoctorModel.Doctor(first_name=first_name,middle_name=middle_name,last_name=last_name,user_email=user_email,person_image=person_image,date_of_birth=date_of_birth,house_address=house_address,doctor_ratings=doctor_ratings,doctor_specialties=doctor_specialties,license_number=license_number,gender=gender,hospital_code=hospital_code)
            try: 
                session.add(newDoctor)
                session.commit()
            except Exception as e:
                return ("Connection Error: User not recorded : %s",e),400
            idDoctor = session.query(Doctor.idDoctor).filter(Doctor.license_number == req['license_number'], Doctor.hospital_code == req['hospital_code']).first()
            returnDoctor = session.query(Doctor).get(idDoctor)
            session.commit()
            return ({
                'msg':{
                    'first_name':returnDoctor.first_name,
                    'middle_name':returnDoctor.middle_name,
                    'last_name':returnDoctor.last_name,
                    'license_number':returnDoctor.license_number
                },
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
    session = Session()
    return(doctorlogin(session))
    
# {
#     "hospital_code":"OAa3456",
#     "license_number":"80034903"
# }


# @app.route("/logindoctor",methods=['POST'])
# def doctorLogin():
#     pass



# @app.route("/loginpatient",methods=['POST'])
# def patientLogin():
#     pass

# @app.route("/registerdoctor",methods=['POST'])
# def registerDoctor():
#     pass
# @app.route("/registerpatient",methods=['POST'])
# def userLogin():
#     req = request.json
#     if request.method == "POST":
#         pass



if __name__ == "__main__":
    CORS(app)
    app.run(debug=True)



