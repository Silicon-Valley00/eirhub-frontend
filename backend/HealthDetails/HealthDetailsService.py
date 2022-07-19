import json
from flask import request,jsonify,Blueprint
from Patient.PatientModel import Patient
from HealthDetails.HealthDetailsModel import HealthDetails

health_details_route = Blueprint("health_details_route",__name__)


#Create healthdetails for a particular patient
@health_details_route.route("/healthdetails",methods = ["POST"])
def createHealthDetails():
    from app import session
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
            patientId = req["idPatient"]
            patientExists = session.query(Patient).filter(Patient.idPatient == patientId)
            if(not patientExists):
                return ({
                    'status': False,
                    'msg':"Patient ID does not exist."
                }),200

            last_visit = req["last_visit"]    
            blood_group = req["blood_group"]
            bmi = req["bmi"]
            blood_pressure = req["blood_pressure"]
            respiratory_rate = req["respiratory_rate"]
            pulse = req["pulse"]
            blood_sugar = req["blood_sugar"]
            weight = req["weight"]
            height = req["height"]
            
            newHealthDetails = HealthDetails(last_visit,blood_group,bmi,blood_pressure,respiratory_rate,pulse,blood_sugar,weight,height)
            newHealthDetails.idPatient = patientId
            try: 
                session.add(newHealthDetails)
                session.commit()
                return ({
                    'msg':{
                        'last_visit':newHealthDetails.last_visit,
                        'blood_group': newHealthDetails.blood_group,
                        'bmi' : newHealthDetails.bmi,
                        'blood_pressure': newHealthDetails.blood_pressure,
                        'idPatient' : newHealthDetails.idPatient,
                        'respiratory_rate' : newHealthDetails.respiratory_rate,
                        'pulse': newHealthDetails.pulse,
                        'blood_sugar':newHealthDetails.blood_sugar,
                        'weight' : newHealthDetails.weight,
                        'height' : newHealthDetails.height,

                    },
                    'status':True
                }),200  #StatusCode
            except Exception as e:
                return ("Connection Error: details not recorded : %s",e),400
        else:
            return 'Error: Content-Type Error',400

