from flask import Flask,jsonify
from PrescriptionModel import Prescription
from Patient.PatientModel import Patient 
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#function to get prescription of a patient 
@app.route("/prescription/<int:idPatient>",methods = ["GET"])
def get_prescription(idPatient):
    prescription =  Prescription.query.get(idPatient)
    if prescription is None:
        return {'drug_name':None,'dosage':None,'time_of_administration':None,'start_date':None,'end_date':None,'last_taken_date':None}
    return jsonify(prescription)

#post prescription of a patient
@app.route("/prescription/<int:idPatient>",methods = ["POST"])
def post_prescription(idPatient):
    pass
#to be completed