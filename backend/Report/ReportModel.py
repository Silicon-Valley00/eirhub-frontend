from sqlalchemy import Column, ForeignKey,Integer,String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import declarative_base

from Patient.PatientModel import Patient

Base = declarative_base()

class Report(Base):
    __tablename__ = 'Report'
    idReport = Column(Integer, primary_key=True,autoincrement=True)
    report_type = Column('report_type',String(45))
    description = Column('description',Text)
    idPatient = Column(Integer,ForeignKey(Patient.idPatient, ondelete='CASCADE'), nullable=True,)
    #to be added when the merge is done
    
    def __init__(self,report_type,description,idPatient):
        self.report_type = report_type
        self.description = description
        self.idPatient = idPatient
    