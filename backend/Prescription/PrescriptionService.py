from email.errors import InvalidMultipartContentTransferEncodingDefect
from multiprocessing import synchronize
from operator import methodcaller
from subprocess import IDLE_PRIORITY_CLASS
from flask import Blueprint,request,jsonify
from Prescription.PrescriptionModel import Prescription 
from flask_sqlalchemy import SQLAlchemy
import json

prescription_route = Blueprint("prescription_route",__name__)


@prescription_route.route('/prescription/<id>',methods = ['GET'])
#get the prescription based on id
def getPrescriptionById(id):
    from app import session
    try:#query for the data and display it if it exists
        prescription =  session.query(Prescription).get(id)
        return ({
            'msg': {
                'id': prescription.idPrescription,
                'drug_name':prescription.drug_name,
                'dosage':prescription.dosage,
                'time_of_administration':str(prescription.time_of_administration),#made str because object type of date isn't json serializable
                'start_date':str(prescription.start_date),
                'end_date':str(prescription.end_date),
                'last_taken_date':str(prescription.last_taken_date)
            },
            "status": True
            }),200
    except Exception as e:#display error code if data doesn't exist
        return(f"Error : Prescription does not exist :{e}"),400
    
#get all prescriptions and api 
@prescription_route.route("/prescription",methods = ['GET'])
def getPrescriptions():
    from app import session 
    try:
        prescriptions = session.query(Prescription).all()
        prescriptionInfo = []
        for prescription in prescriptions:
            prescriptionInfo.append((
                {
                    'id': prescription.idPrescription,
                    'drug_name':prescription.drug_name,
                    'dosage':prescription.dosage,
                    'time_of_administration':str(prescription.time_of_administration),
                    'start_date':str(prescription.start_date),
                    'end_date':str(prescription.end_date),
                    'last_taken_date':str(prescription.last_taken_date)
            }
            ))
        return ({
            'status': True,
            'msg': prescriptionInfo
        }),200
    except Exception as e:
        return("Connection Error: %s",e),400
    

@prescription_route.route("/prescription",methods = ["POST"])
def createPrescription():
    from app import session
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':#check if content is in json format
        req = request.json
        
        drug_name = req["drug_name"]
        start_date = req["start_date"]
        end_date = req['end_date']
        idPatient = req['idPatient']
        last_taken_date = req["last_taken_date"]
        dosage = req["dosage"]
        time_of_administration = req["time_of_administration"]
            #verify that prescription doesn't already exist
        prescriptionExists = session.query(Prescription).filter(Prescription.drug_name ==drug_name,Prescription.start_date == start_date,Prescription.end_date == end_date,Prescription.idPatient == idPatient,Prescription.time_of_administration == time_of_administration).first()
            
        if(prescriptionExists):
            return ({
                'status': False,
                'msg':"Prescription already exists. Enter another"
            }),200

            #create prescription for patient if it doesn't exist
        drug_name = req["drug_name"]
        dosage = req["dosage"]
        time_of_administration  = str(req["time_of_administration"])
        start_date  = str(req["start_date"])
        end_date = str(req["end_date"])
        last_taken_date  = str(req["last_taken_date"])
        idPatient = req["idPatient"]
        
      
            
            
        new_prescription = Prescription(drug_name,dosage,time_of_administration,start_date,end_date,last_taken_date,idPatient)
            
        try:#add prescription to the database
            session.add(new_prescription)
            session.commit()
            idPrescription = session.query(Prescription.idPrescription).filter(Prescription.drug_name == req['drug_name'],Prescription.start_date == str(req['start_date']),Prescription.end_date == str(req['end_date']),Prescription.idPatient == req['idPatient']).first()
            return_prescription = session.query(Prescription).get(idPrescription)
            session.commit()
            return ({#display message to prove that it was added successfully
                    "msg": {
                        "id": return_prescription.idPrescription,
                        "drug_name":return_prescription.drug_name,
                        "dosage":return_prescription.dosage,
                        "time_of_administration":str(return_prescription.time_of_administration),#made str because object type of date isn't json serializable
                        "start_date":str(return_prescription.start_date),
                        "end_date":str(return_prescription.end_date),
                        "last_taken_date":str(return_prescription.last_taken_date),
                        "idPatient":return_prescription.idPatient
                    },
                    "status": True
                    }),200
        except Exception as e:
            return ("Error: Prescription not recorded : %s",e),400
    else:
        return 'Error: Content-Type Error',400



#update prescription by prescription id 
@prescription_route.route("/prescription/<id>",methods = ["PUT"])
def updatePrescriptionById(id):
    from app import session
    req = request.json 
    try:
        session.query(Prescription).filter(Prescription.idPrescription == id).update(
            {   
                Prescription.drug_name : req["drug_name"],
                Prescription.start_date : req["start_date"],
                Prescription.end_date : req['end_date'],
                Prescription.idPatient : req['idPatient'],
                Prescription.last_taken_date : req["last_taken_date"],
                Prescription.dosage : req["dosage"],
                Prescription.time_of_administration :req["time_of_administration"]
            }
            ,synchronize_session = False
            )
        session.commit()
        return_prescription = session.query(Prescription).get(id)
        prescription_data = {
            "id": return_prescription.idPrescription,
            "drug_name":return_prescription.drug_name,
            "dosage":return_prescription.dosage,
            "time_of_administration":str(return_prescription.time_of_administration),#made str because object type of date isn't json serializable
            "start_date":str(return_prescription.start_date),
            "end_date":str(return_prescription.end_date),
            "last_taken_date":str(return_prescription.last_taken_date),
            "idPatient":return_prescription.idPatient
        }
        return ({
            'status': True,
            'msg': prescription_data
        }),200
    except Exception as e:
        return ({
            'status':False,
            'msg': ("Connection Error: User not updated : %s",e)
        }),400

#delete prescriptions api
@prescription_route.route("/prescription/<id>",methods = ["DELETE"])
def deletePrescription(id):
    from app import session
    try:
        prescription = session.query(Prescription).get(id)
        session.delete(prescription)
        session.commit()
        
        return({
            "msg": {
                "id": prescription.idPrescription,
                "drug_name":prescription.drug_name,
                "dosage":prescription.dosage,
                "time_of_administration":str(prescription.time_of_administration),#made str because object type of date isn't json serializable
                "start_date":str(prescription.start_date),
                "end_date":str(prescription.end_date),
                "last_taken_date":str(prescription.last_taken_date),
                "idPatient":prescription.idPatient
            },
            "status": True
            
        }),200
        
    except Exception as e:
        return ("Error: Could not delete prescriptino: %s",e),400
