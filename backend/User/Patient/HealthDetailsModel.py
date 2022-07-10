from enum import auto
from tkinter import CASCADE
from sqlalchemy import Column, Integer, String, Date, ForeignKey, Float
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy.dialects.mysql import ENUM

Base = declarative_base()


class HealthDetails(Base):
    __tablename__ = 'Health_Details'
    health_details_id = Column(Integer, primary_key=True, unique=True, nullable=False, autoincrement=True)
    last_visit = Column(Date, nullable=True)
    heart_rate = Column(String(10), nullable=True)
    blood_group = Column(ENUM('A', 'AB', 'B', 'O', 'Unknown'), nullable=True)
    bmi = Column(Float, nullable=False)
    blood_pressure = Column(Float, nullable=True)
    respiratory_rate = Column(String(10), nullable=True)
    pulse = Column(Float, nullable=True)
    blood_sugar = Column(String(10), nullable=True)
    health_detail = relationship("Patient",back_populates = "health_details")

    def __init__(self,last_visit, heart_rate, blood_group, bmi, blood_pressure, respiratory_rate, pulse, blood_sugar):
        self.last_visit = last_visit
        self.heart_rate = heart_rate
        self.blood_group = blood_group
        self.bmi = bmi
        self.blood_pressure = blood_pressure
        self. respiratory_rate = respiratory_rate
        self. pulse = pulse
        self. blood_sugar = blood_sugar
