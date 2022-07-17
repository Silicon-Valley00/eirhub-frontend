Create a virtual environment with: virtualenv your_environment_name  
Enter your virtual environment
Install all packages in requirements.txt with pip install -r requirements.txt


Password Hashing Algorithm: 
from werkzeug.security import generate_password_hash, check_password_hash		

a = generate_password_hash('1234') //generates a password hash from word		

print(a)		

check_password_hash(a,'1234') #confirms if the hash and the word are equal and returns Bool True or False		


### Naming Patterns:        
		-	API:  Use verbs to name API functions  in camelCase. Eg: createPerson, getPerson, getPersonById, deletePerson, updatePersonById.     

		- 	Models: 	UsePascalCase to name Models ending with Model for all DB ORM Models.       
         
		- 




API EndPoint Routes:

# Doctor 
- **Doctor Login**:			

	POST : /login		

	BODY PARAMS: 	

	```
	{
    "hospital_code":"OAa3456",
    "license_number":"80034903"
    }
	```

	RESPONSE:
	```
	{
    "msg": {
        "first_name": "Rexford",
        "last_name": "Machu",
        "license_number": "80034903",
        "middle_name": "G.O.A.T"
        },
    "status": true
    }
	```
- **Doctor Registration**		

	POST : /signup      

    BODY PARAMS: 	

	```
	{
    "first_name": "Rexford",
    "middle_name":"G.O.A.T",
    "last_name": "Machu",
    "person_image":"https://img.com/G.O.A.T",
    "user_email":"baddest69@st.knust.edu.gh",
    "date_of_birth":"2009-12-01",
    "house_address": "House-4",
    "doctor_ratings":3,
    "hospital_code":"OAa3456",
    "license_number":"80034903",
    "doctor_specialties":"Gynaecology, Paediatric",
    "gender":"Male"
    }
	```

	RESPONSE:
	```
	{
    "msg": {
        "first_name": "Rexford",
        "last_name": "Machu",
        "license_number": "80034903",
        "middle_name": "G.O.A.T"
    },
    "status": true
    }
	```         

#  Guardian Person     

**Create Guardian Person**		

POST : /guardian      

BODY PARAMS: 	
```
{
"first_name" : "Rexford ",
"middle_name": "Guardian",
"last_name" : "Machu",
"person_image" : "https://img.com/7879",
"user_email" : "guardianofgalaxy@gmail.com",
"date_of_birth" : "2000-12-21",
"house_address" : "House - 4",
"phone_number" : "0206436575",
"id_number" : "GHA-009494-233",
"gender" : "Male"
}
```

RESPONSE:
```
{
    'status': true,
    'msg':{
        "date_of_birth": "Thu, 21 Dec 2000 00:00:00 GMT",
        "first_name": "Rexford ",
        "gender": "Male",
        "id_number": "GHA-009494-233",
        "last_name": "Machu",
        "middle_name": "Guardian",
        "person_image": "https://img.com/7879",
        "phone_number": "0206436575",
        "user_email": "guardianofgalaxy@gmail.com"
    }
}
```     


**Get All Guardian Persons**	        	

GET : /guardian      

BODY PARAMS: None       

RESPONSE:
```
{
"msg": [
    {
        "date_of_birth": "Thu, 21 Dec 2000 00:00:00 GMT",
        "first_name": "Rexford ",
        "gender": "Male",
        "id_number": "GHA-009494-233",
        "last_name": "Machu",
        "middle_name": "Guardian",
        "person_image": "https://img.com/7879",
        "phone_number": "0206436575",
        "user_email": "guardianofgalaxy@gmail.com"
    }
],
"status": true
}
```

