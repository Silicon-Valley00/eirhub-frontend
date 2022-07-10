from enum import auto
from tkinter import CASCADE
from sqlalchemy import Column,Integer,String,Date,ForeignKey,Float
from sqlalchemy.orm import declarative_base,relationship
# from User.Guardian.GuardianDetails import GuardianDetails
# from User.Patient.HealthDetailsModel import HealthDetails

Base = declarative_base()

class Patient(Base):
    __tablename__ = 'Patient'
    idPatient = Column(Integer, primary_key=True, unique = True,nullable = False, autoincrement = True)
    #these are Foreign keys to the primary keys of the health details and guardian tables:
    #documentation :  https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html
    health_details_id = Column(Integer, ForeignKey('Health_Details.health_details_id',ondelete=CASCADE),unique=True,nullable=True)
    guardian_id = Column(Integer, ForeignKey('Guardian_Details.guardian_id',ondelete=CASCADE),unique=True,nullable=True)
     #What happens to a uniqu Guardian id when i am a single parent of two children who are patients?
    weight = Column(Float, nullable = True)
    height = Column(Float, nullable = True)
    location = Column(String(100),nullable = True)
    
    
    def __init__(self,weight,height,location):
        self.weight = weight
        self.height = height  
        self.location = location
