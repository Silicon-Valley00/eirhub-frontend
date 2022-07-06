import http
import os
import string
from flask import Flask,jsonify,request
from cryptography.fernet import Fernet

from sqlalchemy import create_engine,Table,MetaData,Column,Integer,String
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from User.Person.personmodel import Person
from User.Doctor.doctormodel import Doctor
from User.Hospital.hospitalModel import Hospital


app = Flask(__name__)
load_dotenv()
engine = create_engine( os.getenv('dbconnectionstring'))#establish a connection with the database
Session = sessionmaker(bind=engine)
session = Session()
meta = MetaData()
Base = declarative_base()

#Create a student class that translates into the student table
class Student(Base):
    __tablename__ = "students"
    id = Column(Integer,primary_key = True)
    name = Column('name',String(20))
    course = Column('course',String(50))

    def __init__ (self,name,course):
        self.name = name
        self.course = course

# Database Connection not needed right now. Commented out for now
# try:
#     engine.connect()
#     Base.metadata.create_all(engine)
#     new = Student("Albus severus Potter","Potions") #
#     # session.add(new)
#     session.commit()
#     session.close()
#     print("Database Successfully Connected")
# except Exception as e:
#     print('Database connection failed: %s'%(e))
# Echo for debugging for the moment


# Home route
@app.route("/",methods = ['GET'])
def home():
    return "Welcome to EirHub"

# Test Route
@app.route("/doctore", methods = ['GET'])
def doctor():
    session = Session()
    doctor = session.query(Doctor)
    return f'Hwllo {doctor}'

# Test Route
@app.route("/person",methods = ["GET"]) 
def person():
    for person in session.query(Person).all():
        return person.user_email


# Test Route
@app.route("/person/<int:id>", methods=['GET', 'POST'])
def getPersonById(id):
    for i in doctors:
        for num, info in i.items():
            if id == num:
                return jsonify(info)
    else:
        return "ID not found"

# Test Route
@app.route("/doctor/<int:id>", methods=['GET', 'POST'])
def getDoctorById(id):
    for i in doctors:
        for num, info in i.items():
            if id == num:
                return jsonify(info)
    else:
        return "ID not found"

#Test Route for hospital model
@app.route("/hospital",methods = ['GET']) 
def hospitals():
    lhopital = Hospital("KATH","Kumasi","Pediatrics,Osteopathy,Cardiology",1097) 
    session = Session()
    # session.add(lhopital)
    # session.commit()
    # session.close()
    hospital = session.query(Hospital).all()

    return  (f'{hospital[3].location}')




# Will move signup into a service function later. Currently cleaning
@app.route("/signup",methods = ['POST'])
def signup():
    session = Session()
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
            secretKey = str(os.getenv('SECRET_KEY'))
            cipher_suite = Fernet(secretKey)
            encryptedPassword = cipher_suite.encrypt(bytes(req['password'],'ascii'))
            newPerson = Person(req['first_name'],req['middle_name'],req['last_name'],req['age'],req['person_image'],req['user_email'],encryptedPassword,req['date_of_birth'],req['house_address'],req['type_of_id'],req['id_number'],req['nationality'])
            try: 
                session.add(newPerson)
                session.commit()
            except Exception as e:
                return ("Connection Error: User not recorded : %s",e),400
            personId = session.query(Person.idPerson).filter(Person.user_email == req['user_email'], Person.id_number == req['id_number']).first()
            returnPerson = session.query(Person).get(personId)
            session.commit()
            return str(returnPerson.idPerson),200 #StatusCode
        else:
            return 'Error: Content-Type Error',400



# Testing out session and query commands.
@app.route("/call",methods = ['GET']) 
def getUser():
    session = Session()
    personId = session.query(Person.idPerson).filter(Person.user_email == "leta@gmail.com").first()
    print(personId)
    printable = session.query(Person).get(personId)
    # filter(Person.user_email == "leta@gmail.com").first()
    print(printable.first_name)
    session.commit()
    # session.close()
    # session.expire_on_commit(False)
    return (f'{printable.first_name}')


if __name__ == "__main__":
    app.run(debug=True)


