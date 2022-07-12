from sqlalchemy import Column, ForeignKey,Integer,String,Date,Float, null
from sqlalchemy.ext.declarative import declarative_base
from User.Hospital.HospitalModel import Hospital
from User.Person.PersonModel import Person
from sqlalchemy.orm import declarative_base,relationship
Base = declarative_base()

class Doctor(Base):
    __tablename__ = "Doctor"
    idDoctor = Column(Integer,primary_key = True)
    idPerson = Column(Integer, ForeignKey(Person.idPerson))
    idHospital = Column(Integer, ForeignKey(Hospital.idHospital))
    doctor_ratings = Column('doctor_ratings',Float(1))
    doctor_specialities= Column('doctor_specialities',String(100))
    license_number = Column('license_number', String(45),unique = True)
   
#Add the Hospital Code and Doctor Hospital Identifier to do Doctor Login.
#Commenting your code out for now. The relationship has issue
    #doctor = relationship("Person",back_populates = "doctors")#one to many with the person table
    #hospitals = relationship("Hospital", back_populates = "hospital" )#one to many with Hospital



    def __init__ (self,idHospital,doctor_ratings,doctor_specialities,license_number):
        self.idHospital = idHospital
        self.doctor_ratings = doctor_ratings
        self.doctor_specialities = doctor_specialities
        self.license_number = license_number