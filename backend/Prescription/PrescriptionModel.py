from sqlalchemy import Column, Integer, String, Date, ForeignKey, Float
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from Patient.PatientModel import Patient



Base = declarative_base()
class Prescription(Base):
    _tablename_ = "Prescription"
    idPatient = Column(Integer, ForeignKey(Patient.idPatient,nullable=False))
    idPrescription = Column(primary_key= True, unique=True, nullable= False, autoincrement=True)
    drug_name = Column('drug_name', String(100), nullable=False)
    dosage = Column('dosage', String(45))
    time_of_administration = Column('time_of_administration',Time)
    start_date = Column('start_date', Date)
    end_date = Column('end_date', Date)
    last_taken_date = Column('last_taken_date', Date)

    
    def __init__(self,drug_name,dosage,time_of_administration,start_date,end_date,last_taken_date):
        self.drug_name = drug_name
        self.dosage = dosage
        self.time_of_administration = time_of_administration
        self.start_date = start_date
        self.end_date = end_date
        self.last_taken_date = last_taken_date

