from flask import Flask,jsonify,request
from Doctor.DoctorModel import Doctor
def doctorlogin(session):
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