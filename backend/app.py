import os
from flask import Flask,jsonify
from sqlalchemy import create_engine,Table,MetaData,Column,Integer,String
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

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
    new2 = Student('Leta Lestrange','DADA')
    session.add(new)
    session.add(new2)
    session.commit()
    session.close()
    print("Done")
except Exception as e:
    print(e)
# Echo for debugging for the moment

@app.route("/home",methods = ['GET'])
def home():
    session = Session()
    print('Home: DB Connection Successful')
    students = session.query(Student).all() 
    for student in students:
     return  student.name
   



if __name__ == "__main__":
    app.run(debug=True)
