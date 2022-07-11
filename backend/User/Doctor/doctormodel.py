from sqlalchemy import Column, ForeignKey,Integer,String,Date,Float
from sqlalchemy.ext.declarative import declarative_base
from User.Hospital.HospitalModel import Hospital

from User.Person.PersonModel import Person
Base = declarative_base()

class Doctor(Base):
    __tablename__ = "Doctor"
    idDoctor = Column(Integer,primary_key = True)
    idPerson = Column(Integer, ForeignKey(Person.idPerson))
    idHospital = Column(Integer, ForeignKey(Hospital.idHospital))
    doctor_ratings = Column('doctor_ratings',Float(1))
    doctor_specialities= Column('doctor_specialities',String(100))
    license_number = Column('license_number', String(45),unique = True)
   


    def __init__ (self,idDoctor,idHospital,doctor_ratings,doctor_specialities,license_number):
        self.idDoctor = idDoctor
        self.idHospital = idHospital
        self.doctor_ratings = doctor_ratings
        self.doctor_specialities = doctor_specialities
        self.license_number = license_number