from enum import unique
from tkinter import CASCADE
from sqlalchemy import Column,Integer,String,Date,ForeignKey,Float
from sqlalchemy.orm import declarative_base,relationship
# from app import Base,session
# from HealthDetails.HealthDetailsModel import HealthDetails


Base = declarative_base()

# class_associations = Table('patients_doctors',Base.metadata,Column("patient_id",ForeignKey = ))

class Patient(Base):
    __tablename__ = 'Patient'
    idPatient = Column(Integer,primary_key= True,unique = True,autoincrement=True,nullable = False)
    idGuardianPerson = Column(Integer,ForeignKey("GuardianPerson.idGuardian"))
    idDoctor = Column(Integer,)
    first_name = Column("first_name",String(60))
    middle_name = Column("middle_name",String(60))
    last_name = Column("last_name",String(60))
    person_image = Column("person_image",String(2083))
    user_email = Column("user_email",String(50),unique = True)
    user_password = Column("user_password",String(200))
    date_of_birth = Column("date_of_birth",Date)
    house_address = Column("house_address",String(45))
    phone_number = Column("phone_number",String(45))
    id_number = Column("id_number",String(45),unique = True)
    nationality = Column("nationality",String(50))
    gender = Column("gender",String(45))

    health_details = relationship("HealthDetails",uselist=False,back_populates = "patient")
   
   
    
    def __init__(self,first_name,middle_name,last_name,person_image,user_email,user_password,date_of_birth,house_address,phone_number,id_number,nationality):
        self.first_name = first_name
        self.middle_name = middle_name
        self.last_name = last_name
        self.person_image = person_image
        self.user_email = user_email
        self.user_password = user_password
        self.date_of_birth = date_of_birth
        self.house_address = house_address
        self.phone_number = phone_number
        self.id_number = id_number
        self.nationality = nationality

 