import json
from flask import request,jsonify,Blueprint
from werkzeug.security import generate_password_hash, check_password_hash
from Patient.PatientModel import Patient

patients_route = Blueprint("patients_route",__name__)

#Get all patients
@patients_route.route("/patient",methods = ['GET'])
def getPatients():
    from app import session
    #trial object to test database entries
    # newPatient = Patient("Terry","Meo","Lackman","https:/myImage.com","Lackman@gmail.com","madeit","2022-7-15"
    # ,"12 molly street","+2332467897","57849003","male","Ghanaian")
    # session.add(newPatient)
    # session.commit()
    # session.close()
    try:
        patients = session.query(Patient).all()
        Json_patients = [{
            "status": True,
            "msg": {

                "id": patient.idPatient,
                "first_name": patient.first_name,
                "middle_name": patient.middle_name,
                "last_name": patient.last_name,
                "email": patient.user_email,
                "nationality": patient.nationality
            }
            
            } for patient in patients ]
        return jsonify(Json_patients),200
    except Exception as e:
        return (f"connection error: could not get patients:{e}"),400    

@patients_route.route("/patient/<id>",methods = ['GET'])
def getPatientById(id):
    from app import session
    patient = session.query(Patient).get(id)
    return ({
            "first_name": patient.first_name,
            "middle_name": patient.middle_name,
            "last_name": patient.last_name,
            "email": patient.user_email,
            "nationality": patient.nationality
        })



#Patient Sign Up 
@patients_route.route("/patientsignup",methods = ['POST'])
def createPatient():
    from app import session
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
            email = req["email"]
            password = req["password"]
            isPatient = session.query(Patient).filter(Patient.user_email == email).first()
            if(isPatient):
                return ({
                    'status': False,
                    'msg':"Patient Email already registered. Do you want to login?"
                }),200
            first_name = req["first_name"]
            middle_name = req["middle_name"]
            last_name = req["last_name"]
            email = req["email"]
            person_image = req["person_image"]
            date_of_birth =req["date_of_birth"]
            house_address = req["house_address"]
            password = req["password"]
            phone_number = req["phone_number"]
            id_number = req["id_number"]
            nationality = req["nationality"]
            gender = req["gender"]
            doctor_id = req["doctor_id"]
            guardian_id = req["guardian_id"]
            #Hash Password
            passwordHash = generate_password_hash(password)
            newPatient = Patient(first_name=first_name,middle_name=middle_name,last_name=last_name,user_email=email,user_password=passwordHash,
            person_image=person_image,date_of_birth=date_of_birth,house_address=house_address,phone_number=phone_number,id_number=id_number,
            gender=gender,nationality=nationality,guardian_id=guardian_id,doctor_id=doctor_id)
            try: 
                session.add(newPatient)
                session.commit()
            except Exception as e:
                return ("Connection Error: User not recorded : %s",e),400
            idPatient = session.query(Patient.idPatient).filter(Patient.user_email == email).first()
            patientInfo = session.query(Patient).get(idPatient)
            session.commit()
            if(check_password_hash(patientInfo.user_password,password)):
                return ({
                    'msg':{
                        'first_name':patientInfo.first_name,
                        'middle_name':patientInfo.middle_name,
                        'last_name':patientInfo.last_name,
                        'email':patientInfo.user_email,
                        'date_of_birth':patientInfo.date_of_birth,
                        'phone_number':patientInfo.phone_number,
                        'id_number':patientInfo.id_number,
                        'gender':patientInfo.gender,
                        'guardian_id': patientInfo.idGuardian,
                        'doctor_id': patientInfo.idDoctor

                    },
                    'status':True
                }),200  #StatusCode
        else:
            return 'Error: Content-Type Error',400



#Patient LogIn 
@patients_route.route("/patientlogin",methods = ['POST'])
def patientLogin():
    from app import session
    content_type = request.headers.get('Content-Type')
    if(content_type == 'application/json'):
        req = request.json
        email = req["email"]
        password = req["password"]
    #Check Email 
        try:
            idPatient = session.query(Patient.idPatient).filter(Patient.user_email == email).first()
            if(idPatient):
                patientInfo = session.query(Patient).get(idPatient)
                session.commit()
                #Check Password after user email has been verified
                try :
                    userDbPassword =  str(patientInfo.user_password)
                    if(check_password_hash(userDbPassword,password)):
                        return ({
                    'msg':{
                        'first_name':patientInfo.first_name,
                        'middle_name':patientInfo.middle_name,
                        'last_name':patientInfo.last_name,
                        'email':patientInfo.user_email,
                        'date_of_birth':patientInfo.date_of_birth,
                        'phone_number':patientInfo.phone_number,
                        'id_number':patientInfo.id_number,
                        'gender':patientInfo.gender,
                        'guardian_id': patientInfo.idGuardian,
                        'doctor_id': patientInfo.idDoctor

                    },
                    'status':True
                }),200  #StatusCode
                    else:
                        return ({
                            'status': False,
                            'msg': "Incorrect Password. Kindly Try again"
                        }) #Check Status Code for wrong login 
                except Exception as e:
                    return("Connection Error : %s",(e)),400
            else:
                return({
                    'status': False,
                    'msg':"User not registered.Do you want to sign up?"
                }),200 #Check Status Code for wrong login
        except Exception as e:
            print(e)
            return({
                'status':False,
                'msg':"Connection Error: Check your network connection"
            }),400
    else:
        return ({
            'status': False,
            'msg':"Bad Request Error"
        }),400