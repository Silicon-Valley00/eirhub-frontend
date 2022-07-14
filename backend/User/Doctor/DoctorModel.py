from datetime import date
from enum import auto
from pydoc import doc
from sqlalchemy import DATE, Column,Integer,String,Date,Float, null
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import declarative_base
Base = declarative_base()
#created_at and updated_at to be added soon 

class Doctor(Base):
    __tablename__ = "Doctor"
    idDoctor = Column(Integer,primary_key = True,autoincrement = True,nullable = False)
    first_name = Column('first_name',String(60))
    middle_name = Column('middle_name',String(60),nullable = True)
    last_name = Column('last_name',String(60))
    doctor_image = Column('doctor_image',String(2083),nullable = True)
    doctor_email = Column('doctor_email',String(50))
    date_of_birth = Column('date_of_birth',DATE)
    house_address = Column('house_address',String(45))
    license_number = Column('license_number',String(45))
    doctor_ratings = Column('doctor_ratings',Integer)
    doctor_specialities= Column('doctor_specialities',String(100))
    license_number = Column('license_number', String(45),unique = True)
    gender = Column('gender',String(45))
    hospital_code = Column('hospital_code',String(45))
    
#Add the Hospital Code and Doctor Hospital Identifier to do Doctor Login.
#Commenting your code out for now. The relationship has issue
    #doctor = relationship("Person",back_populates = "doctors")#one to many with the person table
    #hospitals = relationship("Hospital", back_populates = "hospital" )#one to many with Hospital



    def __init__ (self,first_name,middle_name,last_name,doctor_email,doctor_image,date_of_birth,house_address,doctor_ratings,doctor_specialities,license_number,gender,hospital_code):
        self.first_name = first_name
        self.middle_name = middle_name
        self.last_name = last_name
        self.doctor_email = doctor_email
        self.doctor_image = doctor_image
        self.date_of_birth = date_of_birth
        self.house_address = house_address
        self.doctor_ratings = doctor_ratings
        self.doctor_specialities = doctor_specialities
        self.license_number = license_number
        self.gender = gender
        self.hospital_code = hospital_code
        