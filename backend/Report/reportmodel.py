from sqlalchemy import Column,Integer,String,ForeignKey
from sqlalchemy.orm import relationship
# Not complete. Defining Foreign Key relationship for Patient.
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
class Report(Base):
    __tablename__ = "Report"
    report_id = Column(Integer, primary_key=True, unique = True,nullable = False, autoincrement = True)
    idPatient = Column(Integer,ForeignKey('Patient.idPatient', ondelete='CASCADE'))
    idPatient = relationship('idPatient', backref='Patient')
    report_type = Column('report_type',String(50))
    description = Column('description',String(200))
    medicine_and_dosage = Column('medicine_and_dosage',String(200))

    def __init__ (self,report_id,idPatient,report_type,description,medicine_and_dosage):
        self.report_id = report_id
        self.idPatient = idPatient
        self.report_type = report_type
        self.description = description
        self.medicine_and_dosage = medicine_and_dosage