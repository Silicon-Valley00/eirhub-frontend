import json
from flask import Flask,jsonify,Blueprint
from Patient.PatientModel import Patient
# from app import session

patients_route = Blueprint("patients_route",__name__)
# engine = create_engine( os.getenv('dbconnectionstring'))#establish a connection with the database
# Session = sessionmaker(bind=engine)
# session = Session()

@patients_route.route("/patient",methods = ['GET'])
def getPatients():
    newPatient = Patient("Jerry","Leo","Jackman","https:/myImage.com","Jackman@gmail.com","madeit","2022-7-15"
    ,"12 molly street","+2332467897","57849003","Ghanaian")
    # session.add(newPatient)
    # session.commit()
    # session.close()
    # patients = session.query(Patient).all
    # json.dumps(patients)
    return newPatient.last_name

