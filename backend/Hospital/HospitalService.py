from unicodedata import name
from flask import Blueprint,request
from Hospital.HospitalModel import Hospital

hospital_route = Blueprint("hospital_route",__name__)

# Will move signup into a service function later. Currently cleaning
#Hospital Sign Up
@hospital_route.route("/hospital",methods = ['POST'])
def createHospital():
    from app import session
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
            hospitalcode = req["hospital_code"]
            isHospital = session.query(Hospital).filter(Hospital.hospital_code == hospitalcode).first()
            if(isHospital):
                return ({
                    'status': False,
                    'msg':"Hospital already registered."
                }),200
            hospital_name = req["hospital_name"]
            location = req["location"]
            hospital_specialities = req["hospital_specialities"]
            number_of_doctors = req["number_of_doctors"]
            hospital_code = req["hospital_code"]
            phone_number = req["phone_number"]
           
            newHospital = Hospital(hospital_name,location,hospital_specialities,number_of_doctors,hospital_code,phone_number)
            try: 
                session.add(newHospital)
                session.commit()
            except Exception as e:
                return ("Connection Error: User not recorded : %s",e),400
            
            session.commit()

            return ({
                    'msg': "New hospital created"

                    ,
                    'status':True
                }),200  #StatusCodem
        else:
            return 'Error: Content-Type Error',400

# def deleteHospital(){

# }


