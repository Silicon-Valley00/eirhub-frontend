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


[Doctor](#Doctor )           
[Guardian](#Guardian-Person )             
[Patient](#Patient )





API EndPoint Routes:

# Doctor 
- **Doctor Login**			

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
        "date_of_birth": "https://img.com/G.O.A.T",
        "doctor_id": 20,
        "doctor_ratings": 3,
        "doctor_specialties": "Gynaecology, Paediatric",
        "first_name": "Rexford",
        "gender": "Male",
        "hospital_code": "OAa3456",
        "house_address": "House-4",
        "last_name": "Machu",
        "license_number": "80034903",
        "middle_name": "G.O.A.T",
        "person_image": "https://img.com/G.O.A.T",
        "user_email": "baddest69@st.knust.edu.gh"
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



- **Get All Doctors**		

	GET : /doctors      

    BODY PARAMS: None

	RESPONSE:
	```
	{
    "msg": [
        {
            "date_of_birth": "https://img.com/G.O.A.T",
            "doctor_id": 20,
            "doctor_ratings": 3,
            "doctor_specialties": "Gynaecology, Paediatric",
            "first_name": "Rexford",
            "gender": "Male",
            "hospital_code": "OAa3456",
            "house_address": "House-4",
            "last_name": "Machu",
            "license_number": "80034903",
            "middle_name": "G.O.A.T",
            "person_image": "https://img.com/G.O.A.T",
            "user_email": "baddest69@st.knust.edu.gh"
        }
    ],
    "status": true
    }
	```    



- **Get Doctor By Id**		

	GET : /doctor/doctorId        

    BODY PARAMS: None

	RESPONSE:
	```
	{
    "msg": {
        "date_of_birth": "https://img.com/G.O.A.T",
        "doctor_ratings": 3,
        "doctor_specialties": "Gynaecology, Paediatric",
        "first_name": "Rexford",
        "gender": "Male",
        "hospital_code": "OAa3456",
        "house_address": "House-4",
        "last_name": "Machu",
        "license_number": "80034903",
        "middle_name": "G.O.A.T",
        "person_image": "https://img.com/G.O.A.T",
        "user_email": "baddest69@st.knust.edu.gh"
    },
    "status": true
    }
	```    

# Guardian-Person     

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


**Update Guardian Person By Id**		

PUT : /guardian/`guardianId`        

BODY PARAMS: 	
```
{
    "first_name" : "Rexford ",
    "middle_name": "Guardian",
    "last_name" : "Machu",
    "person_image" : "https://img.com/7879",
    "user_email" : "guardianofthegalaxy@gmail.com",
    "date_of_birth" : "2000-12-21",
    "house_address" : "House - 6",
    "phone_number" : "0206436575",
    "id_number" : "GHA-009494-233",
    "gender" : "Male"
}
```

RESPONSE:
```
{
    "msg": {
        "date_of_birth": "Thu, 21 Dec 2000 00:00:00 GMT",
        "first_name": "Rexford ",
        "gender": "Male",
        "house_address": "House - 6",
        "id_number": "GHA-009494-233",
        "last_name": "Machu",
        "middle_name": "Guardian",
        "person_image": "https://img.com/7879",
        "phone_number": "0206436575",
        "user_email": "guardianofthegalaxy@gmail.com"
    },
    "status": true
}
```    



# Patient 
- **Patient Login**:			

	POST : /patientlogin		

	BODY PARAMS: 	

	```
	{
    "email":"baddest69@st.knust.edu.gh",
    "password": "baddestGO@8"
    }
	```

	RESPONSE:
	```
	{
    "msg": {
        "date_of_birth": "Tue, 01 Dec 2009 00:00:00 GMT",
        "doctor_id": 20,
        "email": "baddest69@st.knust.edu.gh",
        "first_name": "Rexford",
        "gender": "Male",
        "guardian_id": 20,
        "id_number": "GHA-08008238HJJ",
        "last_name": "Machu",
        "middle_name": "Patient",
        "phone_number": "+233206436575"
    },
    "status": true
    }
	```
- **Patient Registration**		

	POST : /patientsignup      

    BODY PARAMS: 	

	```
	{
    "first_name": "Rexford",
    "middle_name":"Patient",
    "last_name": "Machu",
    "person_image":"https://img.com/G.O.A.T",
    "email":"baddest69@st.knust.edu.gh",
    "password": "baddestGO@8",
    "date_of_birth":"2009-12-01",
    "house_address": "House-4",
    "gender":"Male",
    "phone_number" : "+233206436575",
    "id_number": "GHA-08008238HJJ",
    "nationality":"Ghanaian",
    "doctor_id": 20,
    "guardian_id": 20
    }
	```

	RESPONSE:
	```
	{
    "msg": {
        "date_of_birth": "Tue, 01 Dec 2009 00:00:00 GMT",
        "doctor_id": 20,
        "email": "baddest69@st.knust.edu.gh",
        "first_name": "Rexford",
        "gender": "Male",
        "guardian_id": 20,
        "id_number": "GHA-08008238HJJ",
        "last_name": "Machu",
        "middle_name": "Patient",
        "phone_number": "+233206436575"
    },
    "status": true
    }
	```          
- **Get All Patients**

GET : /patient

BODY PARAMS: None

RESPONSE:
```
{
    "msg": {
        "email": "Lackman@gmail.com",
        "first_name": "Terry",
        "house_address": "12 molly street",
        "id": 27,
        "idDoctor": null,
        "idGuardian": null,
        "id_number": "57849003",
        "last_name": "Lackman",
        "middle_name": "Meo",
        "nationality": "Ghanaian",
        "person_image": "https:/myImage.com"
    },
    "status": true
}
```    
**Get Patient by ID**

GET : /patient/<id>

BODY PARAMS: None

RESPONSE:
```
{
    "msg": {
        "email": "baddest69@st.knust.edu.gh",
        "first_name": "Rexford",
        "house_address": "House-4",
        "id": 28,
        "idDoctor": 20,
        "idGuardian": 20,
        "id_number": "GHA-08008238HJJ",
        "last_name": "Machu",
        "middle_name": "Patient",
        "nationality": "Ghanaian",
        "person_image": "https://img.com/G.O.A.T"
    },
    "status": true
}

```
**Delete patient**

DELETE: /patient/<id>

BODY PARAMS: None

RESPONSE:

```
{
    "msg": {
        "email": "Jackman@gmail.com",
        "first_name": "Jerry",
        "house_address": "12 molly street",
        "id": 24,
        "idDoctor": null,
        "idGuardian": null,
        "id_number": "57849003",
        "last_name": "Jackman",
        "middle_name": "Leo",
        "nationality": "Ghanaian",
        "person_image": "https:/myImage.com"
    },
    "status": true
}
```
