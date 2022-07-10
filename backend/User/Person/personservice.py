# from cryptography.fernet import Fernet
# import string,os
# from sqlalchemy import Column,Integer,String,Date
# # from personmodel import Person
# from sqlalchemy.orm import sessionmaker



# #Sample User Object 
# testPerson = Person("Jephtah","Yaw","Yankey",20,"https://img.com/340","testperson@gmail.com","TestBrainFack123","2020-12-13","House Test","Passport","000000001111","Test Nation")

# # # Sample Key To Use
# # def callUser(person : Person,session:sessionmaker):
# #     # person = Person("Rowan","Atkinson","Jnr","34","kdfkxjdflm",
# #     # "jeagbesi@gmail.com","rowan","22/07/2016","H3tyru","rrt","National ID"
# #     # ,"Ghanaian")
# #     personId = session.query.filter_by(user_email= person.user_email).first()
# #     print(personId)
# #     return True

#     # key = b'pRmgMa8T0INjEAfksaq2aafzoZXEuwKI7wDe4c1F8AY='
#     # cipher_suite = Fernet(key)
#     # encryptThis = cipher_suite.encrypt(b'Word')
#     # print(encryptThis,person.age)
#     # # ciphered_text = b'gAAAAABaHvk3g8IG4cln7g5HCulppy1bAPVuhtskVcgPXRyytx6RkIqjcI0mAMA7Oy_56T6J0dk-yjxI_WlZtjxnUBbR-EvoQa_oqCKoQJFbv_uc2WdXMSI='
#     # # unciphered_text = (cipher_suite.decrypt(ciphered_text))
#     # # print(unciphered_text)
#     # return 200 #return a HTTP code based on try catch.



# #Write function for checking Person Email.
# def checkUserEmail(session: sessionmaker, email: String):
#     try:
#        msg = session.query(testPerson).filter(testPerson.user_email == email)
#        return str(msg),200
#     except Exception as e:
#         return ("Connection Error!: %s",e)

# print(checkUserEmail("testperson@gmail.com"))



# # def userSignUp(session: sessionmaker,person: Person):
# #     if request.method == 'POST':
# #         content_type = request.headers.get('Content-Type')
# #         if (content_type == 'application/json'):
# #             req = request.json


# #             #Check for user email whether it has been used already.
# #             secretKey = str(os.getenv('SECRET_KEY'))
# #             # key = 'gAAAAABaHvk3g8IG4cln7g5HCulppy1bAPVuhtskVcgPXRyytx6RkIqjcI0mAMA7Oy_56T6J0dk-yjxI_WlZtjxnUBbR-EvoQa_oqCKoQJFbv_uc2WdXMSI='
# #             # print(key)
# #             cipher_suite = Fernet(secretKey)
# #             encryptedPassword = cipher_suite.encrypt(bytes(req['password'],'ascii'))
# #             unciphered_text = (cipher_suite.decrypt(encryptedPassword))
# #             print((unciphered_text.decode('ascii')))
# #             newPerson = Person(req['first_name'],req['middle_name'],req['last_name'],req['age'],req['person_image'],req['user_email'],encryptedPassword,req['date_of_birth'],req['house_address'],req['type_of_id'],req['id_number'],req['nationality'])
# #             try: 
# #                 session.add(newPerson)
# #                 session.commit()
# #             except Exception as e:
# #                 return ("Connection Error: User not recorded : %s",e),400
# #             personId = session.query(Person.idPerson).filter(Person.user_email == req['user_email'], Person.id_number == req['id_number']).first()
# #             print(personId)
# #             printable = session.query(Person).get(personId)
# #             print(printable.first_name)
# #             session.commit()
# #             return str(printable.idPerson),200 #StatusCode
# #         else:
# #             return 'Error: Content-Type Error',400



# # signup()




# #  Encryption Steps for Auth
# # # nodemon --exec python3 app.py 

# def userLogin(session: sessionmaker,email: string, password: string):
#     secretKey = str(os.getenv('SECRET_KEY'))
#     cipher_suite = Fernet(secretKey)
#     # To encrypt or to decrypt and compare to db data
#     (cipher_suite.decrypt(ciphered_text))#Hold on. Check decision process first

#     #Check Email 
#     try:
#         person = session.query(Person).filter(Person.user_email == email)
#         if(person):
#             #Check Password after user email has been verified
#             try :
#                 encryptedPassword = cipher_suite.encrypt(bytes(password,"ascii"))
#                 personId = session.query(Person).filter(Person.user_email == email,Person.user_password == encryptedPassword)
#                 session.commit()
#                 if(personId):
#                     return str(Person),200  #StatusCode  #Also make this entire response a json object.
#                 else:
#                     return("Incorrect Password. Kindly Try again") #Check Status Code for wrong login
#             except:
#                 return("Connection Error"),400
#         else:
#             return("User not registered.Do you want to sign up?") #Check Status Code for wrong login
#     except Exception as e:
#         return("Connection Error: Check your network connection"),400








#             #Collect User Details for Frontend
