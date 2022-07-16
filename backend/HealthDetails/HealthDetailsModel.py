from sqlalchemy import Column, Integer, String, Date, ForeignKey, Float
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy.dialects.mysql import ENUM
from Patient.PatientModel import Patient,Base
# from app import Base

# Base = declarative_base()

class HealthDetails(Base):
    __tablename__ = 'Health_Details'
    idHealthDetails = Column(Integer, primary_key=True, unique=True, nullable=False, autoincrement=True)
    idPatient = Column(Integer,ForeignKey('Patient.idPatient'))
    last_visit = Column("last_visit",Date)
    blood_group = Column(ENUM('A','AB','B','O','unknown'), nullable = True)
    bmi = Column("bmi",Float)
    blood_pressure = Column("blood_pressure",Float)
    respiratory_rate = Column("respiratory_rate",String(10))
    pulse = Column("pulse",Float)
    blood_sugar = Column("blood_sugar",String(10))
    weight = Column("weight",Float)
    height = Column("height",Float)

    patient = relationship("Patient",back_populates = "health_details")


    def __init__(self, last_visit, blood_group, bmi, blood_pressure, respiratory_rate, pulse, blood_sugar,weight,height):
        self.last_visit = last_visit
        self.blood_group = blood_group
        self.bmi = bmi
        self.blood_pressure = blood_pressure
        self. respiratory_rate = respiratory_rate
        self. pulse = pulse
        self. blood_sugar = blood_sugar
        self.weight = weight
        self.height = height
    
