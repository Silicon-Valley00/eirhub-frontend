from sqlalchemy import Column,Integer,String,Date
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
class Person(Base):
    __tablename__ = "person"
    idPerson = Column(Integer,primary_key = True)
    first_name = Column('first_name',String(20))
    middle_name = Column('middle_name',String(50))
    last_name = Column('last_name',String(50))
    age = Column('age',String(50))
    person_image = Column('person_image',String(50))
    user_email = Column('user_email',String(50))
    # user_name = Column('password',String(50))
    user_password = Column('user_password',String(50))
    date_of_birth = Column('date_of_birth',Date)
    house_address = Column('house_address',String(50))
    type_of_id = Column('type_of_id',String(50))
    id_number = Column('id_number',String(50))
    nationality = Column('nationality',String(50))
    created_at = Column('created_at',String(50))
    updated_at = Column('updated_at',String(50))



    def __init__ (self,first_name,middle_name,last_name,age,person_image,user_email,user_password,date_of_birth,house_address,type_of_id,id_number,nationality,created_at,updated_at):
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
        self.created_at = created_at
        self.updated_at = updated_at