import http
import os
import string
from flask import Flask,jsonify,request
from flask_cors import CORS


from sqlalchemy import create_engine,Table,MetaData,Column,Integer,String
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from Patient.PatientService import patients_route
from Guardian.GuardianPersonService import guardian_route
from Doctor.DoctorService import doctor_route
from Prescription.PrescriptionService import prescription_route
from HealthDetails.HealthDetailsService import health_details_route
from Report.ReportService import reports_route

from HealthDetails.HealthDetailsModel import HealthDetails


app = Flask(__name__)
load_dotenv()
engine = create_engine( os.getenv('dbconnectionstring'))#establish a connection with the database
Session = sessionmaker(bind=engine)
session = Session()
meta = MetaData()
Base = declarative_base()


#App Blueprint
app.register_blueprint(patients_route)
app.register_blueprint(guardian_route)
app.register_blueprint(doctor_route)
app.register_blueprint(prescription_route)
app.register_blueprint(reports_route)

app.register_blueprint(health_details_route)
# app.register_blueprint(reports_route)

# Database Connection not needed right now. Commented out for now
try:
    engine.connect()
    Base.metadata.create_all(engine)
    session.commit()
    session.close()
    print("Database Successfully Connected")
except Exception as e:
    print('Database connection failed: %s'%(e))
# Echo for debugging for the moment


# Home route
@app.route("/",methods = ['GET'])
def home():
    return "Welcome to EirHub"



#main Logic
if __name__ == "__main__":
    CORS(app)
    app.run(debug=True)



