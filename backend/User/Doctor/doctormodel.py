from sqlalchemy import Column, ForeignKey,Integer,String,Date,Float, null
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import declarative_base,relationship
Base = declarative_base()

class Doctor(Base):
    __tablename__ = "Doctor"
    idDoctor = Column(Integer,primary_key = True)
    idHospital = Column(Integer, ForeignKey('Person.idPerson', ondelete="RESTRICT", onupdate="RESTRICT"),nullable=False)
    doctor_ratings = Column('doctor_ratings',Float)
    doctor_specialities= Column('doctor_specialities',String(100))
    license_number = Column('license_number', String(45),unique = True)
    doctor = relationship("Person",back_populates = "doctors")#one to many with the person table
    hospitals = relationship("Hospital", back_populates = "hospital" )#one to many with Hospital



    def __init__ (self,idHospital,doctor_ratings,doctor_specialities,license_number):
        self.idHospital = idHospital
        self.doctor_ratings = doctor_ratings
        self.doctor_specialities = doctor_specialities
        self.license_number = license_number