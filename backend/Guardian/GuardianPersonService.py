from flask import Blueprint,request
from Guardian.GuardianPersonModel import GuardianPerson

guardian_route = Blueprint("guardian_route",__name__)


#Create Guardian Person Method 
@guardian_route.route("/guardian/",methods = ['POST'])
def createGuardian():
    from app import session
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        req = request.json
        user_email = req["user_email"]
        id_number = req["id_number"]
        isGuardian = session.query(GuardianPerson).filter(GuardianPerson.user_email == user_email, GuardianPerson.id_number == id_number).first()
        if(isGuardian):
            return ({
                'status': False,
                'msg':"Guardian Person already registered. Do you want to login?"
            }),200
        first_name = req["first_name"]
        middle_name = req["middle_name"]
        last_name = req["last_name"]
        person_image = req["person_image"]
        user_email = req["user_email"]
        date_of_birth = req["date_of_birth"]
        house_address = req["house_address"]
        phone_number = req["phone_number"]
        id_number = req["id_number"]
        gender = req["gender"]
        newGuardian = GuardianPerson(first_name=first_name,middle_name=middle_name,last_name=last_name,user_email=user_email,person_image=person_image,date_of_birth=date_of_birth,house_address=house_address,phone_number=phone_number,id_number=id_number,gender=gender)
        try: 
            session.add(newGuardian)
            session.commit()
            guardianDetail = session.query(GuardianPerson).filter(GuardianPerson.user_email == user_email, GuardianPerson.id_number == id_number).first()
            return ({
                'status': True,
                'msg':{
                    'first_name':guardianDetail.first_name,
                    'middle_name':guardianDetail.middle_name,
                    'last_name':guardianDetail.last_name,
                    'person_image':guardianDetail.person_image,
                    'user_email':guardianDetail.user_email,
                    'date_of_birth':guardianDetail.date_of_birth,
                    'phone_number':guardianDetail.phone_number,
                    'id_number':guardianDetail.id_number,
                    'gender':guardianDetail.gender
                }
            }),200
        except Exception as e:
            return ("Connection Error: User not recorded : %s",e),400




#Get All Guardian Persons Method 
@guardian_route.route("/guardian/",methods = ['GET'])
def getGuardians():
    from app import session
    try: 
        guardians = session.query(GuardianPerson).all()
        returnInfo = []
        for guardian in guardians:
            returnInfo.append((
                {
                'first_name':guardian.first_name,'middle_name':guardian.middle_name,'last_name':guardian.last_name,'person_image':guardian.person_image,
            'user_email':guardian.user_email,'date_of_birth':guardian.date_of_birth,'phone_number':guardian.phone_number,'id_number':guardian.id_number,'gender':guardian.gender
            }
            ))
        return ({
            'status': True,
            'msg': returnInfo
        }),200
    except Exception as e:
        return ("Connection Error: User not recorded : %s",e),400



