@app.route("/signup",methods = ['POST'])
def userSignup():
    session = Session()
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
            hospital_code = req["hospital_code"]
            doctor_id = req["doctor_id"]
            isDoctor = session.query(DoctorModel.Doctor).filter(DoctorModel.Doctor.hospital_code == hospital_code, DoctorModel.Doctor.license_number == doctor_id).first()
            if(isDoctor):
                return ({
                    'status': False,
                    'msg':"Doctor already registered. Do you want to login?"
                }),200
            newDoctor = DoctorModel.Doctor(req['first_name'],req['middle_name'],req['house_address'],req['type_of_id'],req['id_number'],req['nationality'],req["doctor_specialties"])
            try: 
                session.add(newDoctor)
                session.commit()
            except Exception as e:
                return ("Connection Error: User not recorded : %s",e),400
            idDoctor = session.query(Doctor.idPerson).filter(Doctor.license_number == req['doctor_id'], Doctor.hospital_code == req['hospital_code']).first()
            returnDoctor = session.query(Doctor).get(idDoctor)
            session.commit()
            return ({
                'msg':{
                    'first_name':returnDoctor.first_name,
                    'middle_name':returnDoctor.middle_name
                },
                'status':True
            }),200  #StatusCode
        else:
            return 'Error: Content-Type Error',400
