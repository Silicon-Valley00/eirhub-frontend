import json
from flask import Flask,jsonify,Blueprint
from Patient.PatientModel import Patient

patients_route = Blueprint("patients_route",__name__)

@patients_route.route("/patient",methods = ['GET'])
def getPatients():
    from app import session
    #trial object to test database entries
    # newPatient = Patient("Terry","Meo","Lackman","https:/myImage.com","Lackman@gmail.com","madeit","2022-7-15"
    # ,"12 molly street","+2332467897","57849003","male","Ghanaian")
    # session.add(newPatient)
    # session.commit()
    # session.close()
    patients = session.query(Patient).all()
<<<<<<< Updated upstream
    for patient in patients:
        return ({
            "id": patient.idPatient,
            "First name": patient.first_name,
            "Last_name": patient.last_name,
            "email": patient.user_email,
            "Nationality": patient.nationality
        })

@patients_route.route("/patient/<id>",methods = ['GET'])
def getPatientById(id):
    from app import session
    patient = session.query(Patient).get(id)
    return ({
            "First name": patient.first_name,
            "Last_name": patient.last_name,
            "email": patient.user_email,
            "Nationality": patient.nationality
        })

=======
    print(type(patients))

    return json.dumps({"patients": patients})
>>>>>>> Stashed changes
