from enum import Enum
from sqlalchemy import Column, ForeignKey,Integer,String,Date
from sqlalchemy.orm import declarative_base,relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.mysql import ENUM

Base = declarative_base()
class Person(Base):
    __tablename__ = "Person"
    idPerson = Column("idPerson",Integer, primary_key=True, unique = True,nullable = False, autoincrement = True)
    patient_id = Column("Patient_idPatient",Integer, ForeignKey("Patient.idPatient", ondelete="CASCADE", onupdate="CASCADE"),nullable = True)
    patients = relationship("Patient",back_populates = "patient")
    doctor_id = Column("Doctor_idDoctor",Integer, ForeignKey("Doctor.idDoctor", ondelete="CASCADE",onupdate="CASCADE"),nullable = True)
    doctors = relationship("Doctor",back_populates = "doctor")
    first_name = Column('first_name',String(20))
    middle_name = Column('middle_name',String(50))
    last_name = Column('last_name',String(50))
    age = Column('age',String(50))
    person_image = Column('person_image',String(50))
    user_email = Column('user_email',String(50),unique = True)
    user_name = Column('password',String(45))
    user_password = Column('user_password',String(200)) #Changed Password Length because it was short for hashing.
    date_of_birth = Column('date_of_birth',Date())
    house_address = Column('house_address',String(50))
    type_of_id = Column('type_of_id',ENUM('Voters ID', 'Passport', 'National Health Insurance', 'Ghana Card'))
    id_number = Column('id_number',String(50))
    nationality = Column('nationality',String(50))
    # Removed here because it is auto generated in Database.
    # created_at = Column('created_at',String(50))
    # updated_at = Column('updated_at',String(50))


#can method overload with method with the username instead of email address

    def __init__ (self,first_name,middle_name,last_name,age,person_image,user_email,user_password,date_of_birth,house_address,type_of_id,id_number,nationality):
        self.first_name = first_name
        self.middle_name = middle_name
        self.last_name = last_name
        self.age = age
        self.person_image = person_image
        self.user_email = user_email
        self.user_password = user_password
        self.date_of_birth = date_of_birth
        self.house_address  = house_address
        self.type_of_id = type_of_id
        self.id_number = id_number
        self.nationality = nationality