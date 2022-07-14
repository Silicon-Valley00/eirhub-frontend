from sqlalchemy import DATE, Column,Integer,String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import declarative_base
Base = declarative_base()


class Doctor(Base):
    __tablename__ = "Doctor"
    idDoctor = Column(Integer,primary_key = True,autoincrement = True)
    first_name = Column('first_name',String(60))
    middle_name = Column('middle_name',String(60))
    last_name = Column('last_name',String(60))
    person_image = Column('person_image',String(2083))
    user_email = Column('user_email',String(50),unique = True)
    date_of_birth = Column('date_of_birth',DATE)
    house_address = Column('house_address',String(45))
    license_number = Column('license_number',String(45),unique = True)
    doctor_ratings = Column('doctor_ratings',Integer)
    doctor_specialities= Column('doctor_specialities',String(200))
    gender = Column('gender',String(45))
    hospital_code = Column('hospital_code',String(45),unique = True)
    
    def __init__ (self,first_name,middle_name,last_name,user_email,person_image,date_of_birth,house_address,doctor_ratings,doctor_specialities,license_number,gender,hospital_code):
        self.first_name = first_name
        self.middle_name = middle_name
        self.last_name = last_name
        self.user_email = user_email
        self.person_image = person_image
        self.date_of_birth = date_of_birth
        self.house_address = house_address
        self.doctor_ratings = doctor_ratings
        self.doctor_specialities = doctor_specialities
        self.license_number = license_number
        self.gender = gender
        self.hospital_code = hospital_code
        