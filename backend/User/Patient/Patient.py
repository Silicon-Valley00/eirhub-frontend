#documentation for foreign keys:  https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html
from enum import auto
from sqlalchemy import Column,Integer,String,Date,ForeignKey,Float
from sqlalchemy.orm import declarative_base,relationship

Base = declarative_base()

class Patient(Base):
    __tablename__ = 'Patient'
    idPatient = Column("idPatient", Integer, primary_key=True, unique = True,nullable = False, autoincrement = True)
    health_details_id = Column("health_details_id", Integer, ForeignKey('Health_Details.health_details_id', ondelete="CASCADE", onupdate="CASCADE"),unique=True,nullable=True)
    #one to many relationships with other tables
    health_details = relationship("Health_Details",back_populates = "health_detail")
    patient = relationship("Person",back_populates = "patients")
    idpatient = relationship("Report",back_populates = "idPatients")
    
    guardian_id = Column("guardian_id", Integer, ForeignKey('Guardian_Details.guardian_id',ondelete = "CASCADE",onupdate = "CASCADE"),unique=False,nullable=True)
    weight = Column("weight",Float, nullable = True)
    height = Column("height",Float, nullable = True)
    location = Column("location",String(100),nullable = True)
    
    
    def __init__(self,weight,height,location):
        self.weight = weight
        self.height = height  
        self.location = location

