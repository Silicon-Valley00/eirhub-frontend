from sqlalchemy import Column,Integer,String,ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
class Report(Base):
    __tablename__ = "Report"
    report_id = Column(Integer, primary_key=True, unique = True,nullable = False, autoincrement = True)
    idPatient = Column(Integer,ForeignKey('Patient.idPatient', ondelete='RESTRICT',onupdate = 'RESTRICT'))
    idPatients = relationship('Patient', back_populates='idpatient')
    report_type = Column('report_type',String(50))
    description = Column('description',String(200))
    medicine_and_dosage = Column('medicine_and_dosage',String(200))

    def __init__ (self,report_type,description,medicine_and_dosage):
        self.report_type = report_type
        self.description = description
        self.medicine_and_dosage = medicine_and_dosage