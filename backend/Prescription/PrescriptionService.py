from flask import Flask,jsonify,Blueprint,request
from PrescriptionModel import Prescription
from Patient.PatientModel import Patient 
from flask_sqlalchemy import SQLAlchemy
from app import session
import json

prescription_service_route = Blueprint("prescription_service_route",__name__)

#get prescription of a patient with a partiular id
@prescription_service_route.route("/prescription/<int:idPatient>",methods = ["GET"])
def get_prescription(idPatient):
    prescription =  Prescription.query.get(idPatient)
    if prescription is None:
        return {'drug_name':None,'dosage':None,'time_of_administration':None,'start_date':None,'end_date':None,'last_taken_date':None}
    return jsonify(prescription)


#post prescription of a patient with particular id
@prescription_service_route.route("/prescription/<int:idPatient>",methods = ["POST"])
def post_prescription(idPatient):
    req = request.json
    drug_name = req['drug_name']
    dosage = req['dosage']
    time_of_administration  = req['time_of_administration']
    start_date  = req['start_date']
    end_date = req['end_date']
    last_taken_date  = req['last_taken_date']
    
    new_presciption = Prescription(drug_name,dosage,time_of_administration,start_date,end_date,last_taken_date)
    try:
        session.add(new_presciption)
        session.commit()
    except Exception as e:
        return ("Error: Prescription not recorded : %s",e),400
#to be completed