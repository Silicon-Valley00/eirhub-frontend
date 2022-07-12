from enum import auto
from tkinter import CASCADE
from sqlalchemy import Column, Integer, String, Date, ForeignKey, Float
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class GuardianDetails(Base):
    __tablename__ = 'Guardian_Details'
    Guardian_id = Column(Integer, primary_key=True, unique=True, nullable=False, autoincrement=True)
    # these are Foreign keys to the primary keys of the health details and guardian tables:
    # documentation :  https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html
    guardian_first_name = Column(String(100), nullable=True)
    guardian_last_name = Column(String(100), nullable=True)
    guardian_email = Column(String(100), nullable=True)
    guardian_phone_number = Column(Integer, nullable=True)
    
    

    def __init__(self, guardian_first_name, guardian_last_name, guardian_email, guardian_phone_number):
        self.guardian_first_name = guardian_first_name
        self.guardian_last_name = guardian_last_name
        self.guardian_email = guardian_email
        self.guardian_phone_number = guardian_phone_number