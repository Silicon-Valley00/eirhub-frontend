import json
from flask import request,jsonify,Blueprint
from Patient.PatientModel import Patient
from HealthDetails.HealthDetailsModel import HealthDetails

health_details_route = Blueprint("health_details_route",__name__)


# Create healthdetails for a particular patient
# @health_details_route.route("/healthdetails",methods = ["POST"])
# def createHealthDetails():
#     from app import session
#     if request.method == 'POST':
#         content_type = request.headers.get('Content-Type')
#         if (content_type == 'application/json'):
#             req = request.json
#             patientId = req["idPatient"]
#             patientExists = session.query(Patient).filter(Patient.idPatient == patientId)
#             if(not patientExists):
#                 return ({
#                     'status': False,
#                     'msg':"Patient ID does not exist."
#                 }),400
                

#             last_visit = req["last_visit"]    
#             blood_group = req["blood_group"]
#             bmi = req["bmi"]
#             blood_pressure = req["blood_pressure"]
#             respiratory_rate = req["respiratory_rate"]
#             pulse = req["pulse"]
#             blood_sugar = req["blood_sugar"]
#             weight = req["weight"]
#             height = req["height"]
            
#             newHealthDetails = HealthDetails(last_visit= last_visit,blood_group = blood_group,bmi=bmi,blood_pressure=blood_pressure,respiratory_rate=respiratory_rate,pulse=pulse,blood_sugar= blood_sugar,weight=weight,height=height)
#             # newHealthDetails.idPatient = patientId
#             try: 
#                 session.add(newHealthDetails)
#                 session.commit()
               
#                 return (
#                     "created successfully"
                # {
                #     'msg':{
                #         'last_visit':newHealthDetails.last_visit,
                #         'blood_group': newHealthDetails.blood_group,
                #         'bmi' : newHealthDetails.bmi,
                #         'blood_pressure': newHealthDetails.blood_pressure,
                #         'idPatient' : newHealthDetails.idPatient,
                #         'respiratory_rate' : newHealthDetails.respiratory_rate,
                #         'pulse': newHealthDetails.pulse,
                #         'blood_sugar':newHealthDetails.blood_sugar,
                #         'weight' : newHealthDetails.weight,
                #         'height' : newHealthDetails.height,

                #     },
                #     'status':True
                # }),200  #StatusCode
        #         ),200
        #     except Exception as e:
        #         return ("Connection Error: details not recorded : %s",e),400
        # else:
        #     return ('Error: Content-Type Error'),400

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

#Update healthdetails        