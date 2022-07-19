from flask import Flask,jsonify,Blueprint,request
from PrescriptionModel import Prescription
from Patient.PatientModel import Patient 
from flask_sqlalchemy import SQLAlchemy
from app import session
import json

prescription_service_route = Blueprint("prescription_service_route",__name__)


@prescription_service_route.route("/prescription/<int:idPrescription>/",methods = ["GET"])
def getPrescriptionById(idPrescription):
    prescription =  session.query(Prescription).get(idPrescription)
    if prescription is None:
        return ({# returns an empty json is the particular prescription doesn't exist
            'drug_name':None,
            'dosage':None,
            'time_of_administration':None,
            'start_date':None,
            'end_date':None,
            'last_taken_date':None})
    return ({
        'drug_name':prescription.drug_name,
        'dosage':prescription.dosage,
        'time_of_administration':prescription.time_of_administration,
        'start_date':prescription.star_date,
        'end_date':prescription.end_date,
        'last_taken_date':prescription.last_taken_date})



@prescription_service_route.route("/prescription/<int:idPrescription>",methods = ["POST"])
def createPrescription(idPrescription):
    req = request.json
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':#check if content is in json format
        drug_name = req["drug_name"]
        start_date = req["start_date"]
        end_date = req['end_date']
        #verify that prescription doesn't already exist
        prescriptionExists = session.query(Prescription).filter(Prescription.drug_name ==drug_name,Prescription.start_date == start_date,Prescription.end_date == end_date).first()
        
        if(prescriptionExists):
            return ({
                'status': False,
                'msg':"Prescription already exists. Enter another"
            }),200
    
        #create prescription for patient if it doesn't exist
        drug_name = req['drug_name']
        dosage = req['dosage']
        time_of_administration  = req['time_of_administration']
        start_date  = req['start_date']
        end_date = req['end_date']
        last_taken_date  = req['last_taken_date']
        
        new_presciption = Prescription(drug_name,dosage,time_of_administration,start_date,end_date,last_taken_date)
        try:#add prescription to the database
            session.add(new_presciption)
            session.commit()
        except Exception as e:
            return ("Error: Prescription not recorded : %s",e),400
        
# all prescriptions and api 
#update prescriptions api
#delete prescriptions api
