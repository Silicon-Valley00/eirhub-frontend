import json
from flask import request,jsonify,Blueprint
from Patient.PatientModel import Patient
from HealthDetails.HealthDetailsModel import HealthDetails

health_details_route = Blueprint("health_details_route",__name__)



# Get HealthDetials By Id
@health_details_route.route("/healthdetails/<id>",methods = ["GET"])
def getHealthDetailsByPatientId(id):
    from app import session
   
    try:
        healthdetails = session.query(HealthDetails).filter(HealthDetails.idPatient == int(id)).first()
        return ({
            
            "msg": {
                "patient_id": healthdetails.idPatient,
                "last_visit": healthdetails.last_visit,
                "blood_group": healthdetails.blood_group,
                "bmi": healthdetails.bmi,
                "blood_pressure": healthdetails.blood_pressure,
                "respiratory_rate": healthdetails.respiratory_rate,
                "pulse": healthdetails.pulse,
                "blood_sugar":healthdetails.blood_sugar,
                "weight": healthdetails.weight,
                "height": healthdetails.height,
            },
            "status": True
            
            }),200
    except Exception as e:
        return(f"Error : ID does not exist: {e}"),400


#Update healthdetails by ID
@health_details_route.route("/uphealthdetails/<patientId>/",methods = ['PUT'])
def updateHealthDetailsById(patientId):
    from app import session
    req = request.json
    try: 
        session.query(HealthDetails).filter(HealthDetails.idPatient == int(patientId)).update(
             {
                    HealthDetails.idPatient: req['idPatient'],
                    HealthDetails.last_visit:req["last_visit"],
                    HealthDetails.blood_group: req["blood_group"],
                    HealthDetails.bmi: req["bmi"],
                    HealthDetails.blood_pressure: req["blood_pressure"],
                    HealthDetails.respiratory_rate: req["respiratory_rate"],
                    HealthDetails.pulse: req["pulse"],
                    HealthDetails.blood_sugar:req["blood_sugar"],
                    HealthDetails.weight: req["weight"],
                    HealthDetails.height: req["height"],
            }
             , synchronize_session = False
             )
        session.commit()
        healthDetailsInfo = session.query(HealthDetails).get(int(patientId))
        healthDetailsInfo = {
            'last_visit': healthDetailsInfo.last_visit,'blood_group': healthDetailsInfo.blood_group,'bmi': healthDetailsInfo.bmi,
             'blood_pressure': healthDetailsInfo.blood_pressure,'respiratory_rate': healthDetailsInfo.respiratory_rate,
             'pulse': healthDetailsInfo.pulse,'blood_sugar': healthDetailsInfo.blood_sugar, 'weight': healthDetailsInfo.weight, 'height' : healthDetailsInfo.height,
             'idPatient':healthDetailsInfo.idPatient
            }
        return ({
            'status': True,
            'msg': healthDetailsInfo
        }),200
    except Exception as e:
        return ({
            'status':False,
            'msg': ("Connection Error: User not updated : %s",e)
        }),400
   
