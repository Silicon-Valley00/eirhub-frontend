from enum import unique
from sqlalchemy import Column,Integer,String,Text
from sqlalchemy.orm import declarative_base,relationship
Base = declarative_base()

class Hospital(Base):
    __tablename__ = "Hospital"
    idHospital = Column(Integer,primary_key = True)
    hospital_name = Column("hospital_name",String(200))
    location = Column("location",String(200))
    hospital_specialities = Column("hospital_specialities",Text(200))
    number_of_doctors = Column("number_of_doctors",Integer)
    hospital_code = Column('hospital_code',String(45),unique = True)
    phone_number = Column('phone_number',String(45))

    # hospital = relationship("Doctor", back_populates = "hospitals" )#one to many with Doctor
    
    def __init__(self,hospital_name,location,hospital_specialities,number_of_doctors,hospital_code,phone_number):
        self.hospital_name = hospital_name
        self.location = location
        self.hospital_specialities = hospital_specialities
        self.number_of_doctors = number_of_doctors
        self.hospital_code = hospital_code
        self.phone_number = phone_number