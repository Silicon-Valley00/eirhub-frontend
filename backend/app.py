import os
from flask import Flask,jsonify
from sqlalchemy import create_engine,Table,MetaData,Column,Integer,String
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from User.Person.personmodel import Person

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


try:
    engine.connect()
    Base.metadata.create_all(engine)
    new = Student("Albus severus Potter","Potions") #
    session.add(new)
    session.commit()
    session.close()
    print("Database Successfully Connected")
except Exception as e:
    print('Database connection failed: %s'%(e))
# Echo for debugging for the moment

@app.route("/home",methods = ['GET'])
def home():
    session = Session()
    print('Home: DB Connection Successful')
    newPerson = Person("Rowan","Atkinson","Jnr","34","kdfkxjdflm",
    "Rowan@gmail.com","rowan","22/07/2016","H3tyru","rrt","National ID"
    ,"Ghanaian")
    session.add(newPerson)
    session.commit()
    session.close()
    people = session.query(Person).all()

    
    return (f'{people[-1].first_name}')
   
@app.route("/person",methods = ["GET"]) 
def person():
    for person in session.query(Person).all():
        return person.user_email

@app.route("/doctor/<int:id>", methods=['GET', 'POST'])
def doctor(id):
    for i in doctors:
        for num, info in i.items():
            if id == num:
                return jsonify(info)
    else:
        return "ID not found"

if __name__ == "__main__":
    app.run(debug=True)
