from sqlalchemy import Column,Integer,String,Date,ForeignKey,Float
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Patient(Base):
    __tablename__ = 'Patient'
    idPatient = Column(Integer, primary_key=True, unique = True,nullable = False)
    #these are Foreign keys to the primary keys of the health details and guardian tables:
    #documentation :  https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html
    health_details_id = Column(Integer, ForeignKey('Health_Details.health_details_id'),unique=True,nullable=True)
    guardian_id = Column(Integer, ForeignKey('Guardian_Details.guardian_id'),unique=True,nullable=True)
    weight = Column(Float, nullable = True)
    height = Column(Float, nullable = True)
    location = Column(String(100),nullable = True)
    
    
    def __init__(self,idPatient,weight,health_details_id,guardian_id,height,location):
        self.idPatient = idPatient
        self.weight = weight
        self.height = height  
        self.health_details_id = health_details_id
        self.guardian_id = guardian_id
        self.location = location

