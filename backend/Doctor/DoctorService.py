from flask import Blueprint,request
from Doctor.DoctorModel import Doctor

doctor_route = Blueprint("doctor_route",__name__)

# Will move signup into a service function later. Currently cleaning
#Doctor Sign Up
@doctor_route.route("/doctorsignup",methods = ['POST'])
def createDoctor():
    from app import session
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
            hospital_code = req["hospital_code"]
            license_number = req["license_number"]
            isDoctor = session.query(Doctor).filter(Doctor.hospital_code == hospital_code, Doctor.license_number == license_number).first()
            if(isDoctor):
                return ({
                    'status': False,
                    'msg':"Doctor already registered. Do you want to login?"
                }),200
            first_name = req["first_name"]
            middle_name = req["middle_name"]
            last_name = req["last_name"]
            user_email = req["user_email"]
            person_image = req["person_image"]
            date_of_birth =req["date_of_birth"]
            house_address = req["house_address"]
            doctor_ratings = req["doctor_ratings"]
            doctor_specialties = req["doctor_specialties"]
            license_number = req["license_number"]
            gender = req["gender"]
            hospital_code = req["hospital_code"]
            newDoctor = Doctor(first_name=first_name,middle_name=middle_name,last_name=last_name,user_email=user_email,person_image=person_image,date_of_birth=date_of_birth,house_address=house_address,doctor_ratings=doctor_ratings,doctor_specialties=doctor_specialties,license_number=license_number,gender=gender,hospital_code=hospital_code)
            try: 
                session.add(newDoctor)
                session.commit()
            except Exception as e:
                return ("Connection Error: User not recorded : %s",e),400
            idDoctor = session.query(Doctor.idDoctor).filter(Doctor.license_number == req['license_number'], Doctor.hospital_code == req['hospital_code']).first()
            returnDoctor = session.query(Doctor).get(idDoctor)
            session.commit()
            return ({
                'msg':{
                    'first_name':returnDoctor.first_name,
                    'middle_name':returnDoctor.middle_name,
                    'last_name':returnDoctor.last_name,
                    'license_number':returnDoctor.license_number
                },
                'status':True
            }),200  #StatusCode
        else:
            return 'Error: Content-Type Error',400




@doctor_route.route("/doctorlogin",methods = ['POST'])
def doctorLogin():
    from app import session
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
            hospital_code = req["hospital_code"]
            license_number = req["license_number"]
            isDoctor = session.query(Doctor).filter(Doctor.hospital_code == hospital_code,Doctor.license_number == license_number).first()
            if(isDoctor):
                idDoctor = session.query(Doctor.idDoctor).filter(Doctor.license_number == req['license_number'], Doctor.hospital_code == req['hospital_code']).first()
                returnDoctor = session.query(Doctor).get(idDoctor)
                session.commit()
                return ({
                    'msg':{
                        'first_name':returnDoctor.first_name,
                        'middle_name':returnDoctor.middle_name,
                        'last_name':returnDoctor.last_name,
                        'license_number':returnDoctor.license_number
                    },
                    'status':True
                }),200  #StatusCode
            else:
                return(
                    {
                    'status': False,
                    'msg':"User not registered.Do you want to sign up?"
                    }
                ),200 #Check Status Code for wrong login
        else:
            return 'Error: Content-Type Error',400