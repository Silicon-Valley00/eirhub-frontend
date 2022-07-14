from sqlalchemy import Column,Integer,String,Foreignkey,Date, Time
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from User.Patient.PatientModel import Patient



Base = declarative_base()
class Prescription(Base):
    _tablename_ = "Prescription"
    idPatient = Column(Integer, Foreignkey(Patient.idPatient,nullable=False))
    idPescription = Column(primary_key= True, unique=True, nullable= False, autoincrement=True)
    drug_name = Column('drug_name', String(100), nullable=False)
    dosage = Column('dosage', String(45))
    time_of_administration = Column('time_of_administration', Time)
    start_date = Column('start_date', Date)
    end_date = Column('end_date', Date)
    last_taken_date = Column('last_taken_date', Date)
