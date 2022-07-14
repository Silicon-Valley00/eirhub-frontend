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
- **User Login**:			

	POST : /login		

	BODY PARAMS: 	

	```
	{
    "email":"niiodartey10@gmail.com",
    "password":"WhatTheFuckTHough5757?",
    "isDoctor": true
	}
	```

	RESPONSE:
	```
	{
    "status": true,
    "user": {
        "age": 50,
        "date_of_birth": "Tue, 01 Dec 2020 00:00:00 GMT",
        "doctor_ratings": 2.0,
        "doctor_specialities": "Gynaecology",
        "first_name": "Nii",
        "house_address": "House-4",
        "last_name": "Lamptey",
        "license_number": null,
        "middle_name": "Odartey",
        "person_image": "https://img.com/23495",
        "user_email": "niiodartey10@gmail.com"
    	}
	}
	```
- **User Registration**		

	POST : /signup