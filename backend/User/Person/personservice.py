# from cryptography.fernet import Fernet
from personmodel import Person
from sqlalchemy.orm import sessionmaker

# # Sample Key To Use
# def callUser(person : Person,session:sessionmaker):
#     # person = Person("Rowan","Atkinson","Jnr","34","kdfkxjdflm",
#     # "jeagbesi@gmail.com","rowan","22/07/2016","H3tyru","rrt","National ID"
#     # ,"Ghanaian")
#     personId = session.query.filter_by(user_email= person.user_email).first()
#     print(personId)
#     return True

    # key = b'pRmgMa8T0INjEAfksaq2aafzoZXEuwKI7wDe4c1F8AY='
    # cipher_suite = Fernet(key)
    # encryptThis = cipher_suite.encrypt(b'Word')
    # print(encryptThis,person.age)
    # # ciphered_text = b'gAAAAABaHvk3g8IG4cln7g5HCulppy1bAPVuhtskVcgPXRyytx6RkIqjcI0mAMA7Oy_56T6J0dk-yjxI_WlZtjxnUBbR-EvoQa_oqCKoQJFbv_uc2WdXMSI='
    # # unciphered_text = (cipher_suite.decrypt(ciphered_text))
    # # print(unciphered_text)
    # return 200 #return a HTTP code based on try catch.


def signup(session: sessionmaker,person: Person):
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            req = request.json
            secretKey = str(os.getenv('SECRET_KEY'))
            # key = 'gAAAAABaHvk3g8IG4cln7g5HCulppy1bAPVuhtskVcgPXRyytx6RkIqjcI0mAMA7Oy_56T6J0dk-yjxI_WlZtjxnUBbR-EvoQa_oqCKoQJFbv_uc2WdXMSI='
            # print(key)
            cipher_suite = Fernet(secretKey)
            encryptedPassword = cipher_suite.encrypt(bytes(req['password'],'ascii'))
            unciphered_text = (cipher_suite.decrypt(encryptedPassword))
            print((unciphered_text.decode('ascii')))
            newPerson = Person(req['first_name'],req['middle_name'],req['last_name'],req['age'],req['person_image'],req['user_email'],encryptedPassword,req['date_of_birth'],req['house_address'],req['type_of_id'],req['id_number'],req['nationality'])
            try: 
                session.add(newPerson)
                session.commit()
            except Exception as e:
                return ("Connection Error: User not recorded : %s",e),400
            personId = session.query(Person.idPerson).filter(Person.user_email == req['user_email'], Person.id_number == req['id_number']).first()
            print(personId)
            printable = session.query(Person).get(personId)
            print(printable.first_name)
            session.commit()
            return str(printable.idPerson),200 #StatusCode
        else:
            return 'Error: Content-Type Error',400



# signup()




#  Encryption Steps for Auth
# nodemon --exec python3 app.py 
