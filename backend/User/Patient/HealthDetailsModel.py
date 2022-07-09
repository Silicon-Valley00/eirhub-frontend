from enum import auto
from tkinter import CASCADE
from sqlalchemy import Column, Integer, String, Date, ForeignKey, Float
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class HealthDetails(Base):
    __tablename__ = 'Health_Details'
    health_details_id = Column(Integer, primary_key=True, unique=True, nullable=False, autoincrement=True)
    # these are Foreign keys to the primary keys of the health details and guardian tables:
    # documentation :  https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html
    report_id = Column(Integer, ForeignKey('Health_Details.report_id'), unique=True, nullable=True,
                               ondelete=CASCADE)
    last_visit = Column(Date, nullable=True)
    heart_rate = Column(String(100), nullable=True)
    blood_group = Column(String(100), nullable=True)
    bmi = Column(Float, nullable=True)
    blood_pressure = Column(Float, nullable=True)
    respiratory_rate = Column(String(100), nullable=True)
    pulse = Column(Float, nullable=True)
    blood_sugar = Column(String(100), nullable=True)

    def __init__(self, report_id, last_visit, heart_rate, blood_group, bmi, blood_pressure, respiratory_rate, pulse, blood_sugar):
        self.report_id = report_id
        self.last_visit = last_visit
        self.heart_rate = heart_rate
        self.blood_group = blood_group
        self.bmi = bmi
        self.blood_pressure = blood_pressure
        self. respiratory_rate = respiratory_rate
        self. pulse = pulse
        self. blood_sugar = blood_sugar
