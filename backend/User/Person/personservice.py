#
from User.Person.PersonModel import Person
from User.Doctor.DoctorModel import Doctor
from backend.User.Hospital.HospitalModel import Hospital
# #Write function for checking Person Email.
def checkUserEmail(session , email):
    try:
        idPerson = session.query(Person.idPerson).filter(Person.user_email == email).first()
        return str(idPerson),200
    except Exception as e:
        return ("Connection Error!: %s",e)

#New Doctor Login Method
def doctorLogin(session,hospitalCode,doctorId,):
            try:
                idPerson = session.query(Person.idPerson).join(Doctor,Hospital).filter(Doctor.doctor_id == doctorId,Hospital.hospital_code == hospitalCode).first()
                if(idPerson):
                    idPerson = idPerson[0]
                    personDetail = None
                    userObject = {}
                    personDetail = session.query(Person,Doctor).join(Person).filter(Person.idPerson == idPerson, Doctor.idPerson ==idPerson).first()
                    #Testing With Print
                    print(personDetail[0].first_name) 
                    print(personDetail[1].idDoctor)
                    # userObject for Doctor
                    userObject["doctor_ratings"] = personDetail[1].doctor_ratings
                    userObject["doctor_specialities"] = personDetail[1].doctor_specialities
                    userObject["license_number"] = personDetail[1].license_number
                    session.commit()
                    #General Info from Person Table
                    userObject["first_name"] = personDetail[0].first_name
                    userObject["middle_name"] = personDetail[0].middle_name
                    userObject["last_name"] = personDetail[0].last_name
                    userObject["age"] = personDetail[0].age
                    userObject["person_image"] = personDetail[0].person_image
                    userObject["user_email"] = personDetail[0].user_email
                    userObject["date_of_birth"] = personDetail[0].date_of_birth
                    userObject["house_address"] = personDetail[0].house_address
                    #Check Password after user email has been verified
                    try :
                        userPasswordHash =  str(personDetail[0].user_password)
                        if(check_password_hash(str(userPasswordHash),password)):
                            return ({
                                'status': True,
                                'user': userObject
                            }),200  #StatusCode  #Also make this entire response a json object.
                        else:
                            return({
                                'status': False,
                                'msg':"Incorrect Password. Kindly Try again"
                            }),200 #Check Status Code for wrong login 
                    except Exception as e:
                        return("Connection Error : %s",(e)),400
                else:
                    return(
                        {
                        'status': False,
                        'msg':"User not registered.Do you want to sign up?"
                        }
                    ),200 #Check Status Code for wrong login
            except Exception as e:
                print(e)
                return("Connection Error: Check your network connection"),400




# # signup()




# #  Encryption Steps for Auth
# # # nodemon --exec python3 app.py 
