
from tkinter import CASCADE
from sqlalchemy import Column, Integer, String, Date, ForeignKey, Float
from sqlalchemy.orm import declarative_base, relationship
import enum

Base = declarative_base()

class BloodType(enum.Enum):

   def __str__(self):
    return self.value


class HealthDetails(Base):
    __tablename__ = 'Health_Details'
    idHealthDetails = Column(Integer, primary_key=True, unique=True, nullable=False, autoincrement=True)
    idPatient = Column(Integer,ForeignKey('Patient.idPatient'))
    last_visit = Column("last_visit",Date)
    blood_group = Column("blood_group",enum.Enum(BloodType))
    bmi = Column("bmi",Float)
    blood_pressure = Column("blood_pressure",Float)
    respiratory_rate = Column("respiratory_rate",String(10))
    pulse = Column("pulse",Float)
    blood_sugar = Column("blood_sugar",String(10))
    weight = Column("weight",Float)
    height = Column("height",Float)

    patient = relationship("Patient",back_populates = "health_details")
   

  

    def __init__(self, last_visit, heart_rate, blood_group, bmi, blood_pressure, respiratory_rate, pulse, blood_sugar,weight,height):
        self.last_visit = last_visit
        self.blood_group = blood_group
        self.bmi = bmi
        self.blood_pressure = blood_pressure
        self. respiratory_rate = respiratory_rate
        self. pulse = pulse
        self. blood_sugar = blood_sugar
        self.weight = weight
        self.height = height
