import json
from flask import Flask,jsonify,Blueprint
from Patient.PatientModel import Patient

patients_route = Blueprint("patients_route",__name__)

@patients_route.route("/patient",methods = ['GET'])
def getPatients():
    from app import session
    #trial object to test database entries
    # newPatient = Patient("Jerry","Leo","Jackman","https:/myImage.com","Jackman@gmail.com","madeit","2022-7-15"
    # ,"12 molly street","+2332467897","57849003","male","Ghanaian")
    # session.add(newPatient)
    # session.commit()
    # session.close()
    patients = session.query(Patient).all()
    print(type(patients))
    for patient in patients:
         return jsonify({
            "First name": patient.first_name,
            "Last_name": patient.last_name,
            "email": patient.user_email,
            "Nationality": patient.nationality
        })