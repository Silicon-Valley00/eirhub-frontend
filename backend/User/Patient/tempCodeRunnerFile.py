
    idPatient = Column(Integer, primary_key=True, unique = True,nullable = False, autoincrement = True)
    #these are Foreign keys to the primary keys of the health details and guardian tables:
    #documentation :  https://docs.sqlalchemy.org/en/14/orm/basic_relationships.html
    health_details_id = Column(Integer, ForeignKey('Health_Details.health_details_id'),unique=True,nullable=True,ondelete = CASCADE)
    guardian_id = Column(Integer, ForeignKey('Guardian_Details.guardian_id'),unique=False,nullable=True,ondelete = CASCADE)
    weight = Column(Float, nullable = True)
    height = Column(Float, nullable = T