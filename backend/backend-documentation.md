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

[HealthDetails](#HealthDetails )  
[Doctor](#Doctor )           
[Guardian](#Guardian-Person )               
[Patient](#Patient )           
[Prescription](#Prescription )      
  





API EndPoint Routes:

# Prescription
- **Get Prescription By ID**
    GET: /prescription/`idPrescription`

    BODY PARAMS: None

    RESPONSE:
    ```
    "msg": {
        "dosage": "1/day",
        "drug_name": "lepromax",
        "end_date": "2023-01-31",
        "id": 2,
        "last_taken_date": "2023-01-12",
        "start_date": "2022-12-31",
        "time_of_administration": "23:59:40"
    },
    "status": true
    ```
- **Get All Prescriptions**
     GET: /prescription 

     BODY PARAMS: None

     RESPONSE:
     ```
    {
    "msg": [
        {
            "dosage": "1/day",
            "drug_name": "lepromax",
            "end_date": "2023-01-31",
            "id": 2,
            "last_taken_date": "2023-01-12",
            "start_date": "2022-12-31",
            "time_of_administration": "23:59:40"
        },
        {
            "dosage": "2/day",
            "drug_name": "ziprofin ",
            "end_date": "2023-01-31",
            "id": 3,
            "last_taken_date": "2023-01-12",
            "start_date": "2022-12-31",
            "time_of_administration": "23:59:40"
        },
        {
            "dosage": "1/day",
            "drug_name": "zipodex",
            "end_date": "2023-01-31",
            "id": 4,
            "last_taken_date": "0000-00-00",
            "start_date": "2022-12-31",
            "time_of_administration": "23:59:40"
        },
        {
            "dosage": "2/day",
            "drug_name": "laravel",
            "end_date": "2022-12-31",
            "id": 6,
            "last_taken_date": "2022-12-31",
            "start_date": "2022-12-31",
            "time_of_administration": "23:59:40"
        },
        {
            "dosage": "2/day",
            "drug_name": "laravelproxin",
            "end_date": "2022-12-31",
            "id": 7,
            "last_taken_date": "2022-12-31",
            "start_date": "2022-12-31",
            "time_of_administration": "23:59:40"
        }
    ],
    "status": true
    }
     ```

- **Create A Prescription For A Patient**
    POST : /prescription

    BODY PARAMS: 
    ```
        {
        "drug_name":"laravelS",
        "dosage":"2/day",
        "time_of_administration":"23:59:40",
        "start_date":"2022-12-31",
        "end_date":"2022-12-31",
        "last_taken_date":"2022-12-31",
        "idPatient":28
    }
    ```
    RESPONSE:
    ```
    {
    "msg": {
        "dosage": "2/day",
        "drug_name": "laravelS",
        "end_date": "2022-12-31",
        "id": 8,
        "idPatient": 28,
        "last_taken_date": "2022-12-31",
        "start_date": "2022-12-31",
        "time_of_administration": "23:59:40"
    },
    "status": true
    ```
- **Update Prescription By Prescription ID**
    PUT: /prescription/`idPrescription`

    BODY PARAMS:
    ```
	{
    "drug_name":"laravelS",
    "dosage":"3/day",
    "time_of_administration":"23:59:40",
    "start_date":"2022-12-31",
    "end_date":"2022-12-31",
    "last_taken_date":"2022-12-31",
    "idPatient":28
    }
	```
    RESPONSE:
    ```
    {
    "msg": {
        "dosage": "3/day",
        "drug_name": "laravelS",
        "end_date": "2022-12-31",
        "id": 8,
        "idPatient": 28,
        "last_taken_date": "2022-12-31",
        "start_date": "2022-12-31",
        "time_of_administration": "23:59:40"
    },
    "status": true
    ```
- **Delete Prescription by Prescription ID**
    
    DELETE: /prescription/`idPrescription`

    BODY PARAMS: None

    RESPONSE:
    ```
    "msg": {
        "dosage": "2/day",
        "drug_name": "laravel",
        "end_date": "2022-12-31",
        "id": 6,
        "idPatient": 28,
        "last_taken_date": "2022-12-31",
        "start_date": "2022-12-31",
        "time_of_administration": "23:59:40"
    },
    "status": true
    ```


    

# Doctor 
- **Doctor Login**			

	POST : doctor/login		

	BODY PARAMS: 	

	```
	{
    "user_email":"baddest70@st.knust.edu.gh",
    "user_password":"WhatTheF@ckThough54321"
    }
	```

	RESPONSE:
	```
	{
    "msg": {
        "date_of_birth": "Tue, 01 Dec 2009 00:00:00 GMT",
        "email": "baddest70@st.knust.edu.gh",
        "first_name": "Rexford",
        "gender": "Male",
        "last_name": "Machu",
        "license_number": "8003490390",
        "middle_name": "G.O.A.T.II"
    },
    "status": true
    }
	```
- **Doctor Registration**		

	POST : doctor/signup      

    BODY PARAMS: 	

	```
	{
    "first_name": "Rexford",
    "middle_name":"G.O.A.T.II",
    "last_name": "Machu",
    "person_image":"https://img.com/G.O.A.T.II",
    "user_email":"baddest70@st.knust.edu.gh",
    "user_password":"WhatTheF@ckThough54321",
    "date_of_birth":"2009-12-01",
    "house_address": "House-4",
    "doctor_ratings":3,
    "hospital_code":"OAa345609",
    "license_number":"8003490390",
    "doctor_specialties":"Gynaecology, Paediatric, General",
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

- **Update Doctor By Id Method**

    PUT : /updoctor/doctorId

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

	POST : /patient/login		

	BODY PARAMS: 	

	```
	{
    "user_email":"baddest69@st.knust.edu.gh",
    "user_password": "baddestGO@8"
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

	POST : /patient/signup      

    BODY PARAMS: 	

	```
	{
    "first_name": "Rexford",
    "middle_name":"Patient",
    "last_name": "Machu",
    "person_image":"https://img.com/G.O.A.T",
    "user_email":"baddest69@st.knust.edu.gh",
    "user_password": "baddestGO@8",
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
- **Get Patient by ID**

    GET : /patient/`patientID`

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
- **Delete patient**

    DELETE: /patient/`patientID`

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

- **Update patient details by ID**

    PUT: /patient/`patientID`

    BODY PARAMS:

    ```
    {
        "first_name": "Janine",
        "middle_name":"Leta",
        "last_name": "Mucha",
        "person_image":"https://img.com/F.G.O.A.T",
        "email":"Leta@st.knust.edu.gh",
        "date_of_birth":"2007-12-03",
        "house_address": "8 health street",
        "gender":"female",
        "phone_number" : "+233208936575",
        "id_number": "GHA-08006328HJJ",
        "nationality":"Ghanaian",
        "doctor_id": 20,
        "guardian_id": 20
    }
    ```

    RESPONSE:
    ```
    {
        "msg": {
            "email": "Leta@st.knust.edu.gh",
            "first_name": "Janine",
            "house_address": "8 health street",
            "id": 27,
            "idDoctor": 20,
            "idGuardian": 20,
            "id_number": "GHA-08006328HJJ",
            "last_name": "Mucha",
            "middle_name": "Leta",
            "nationality": "Ghanaian",
            "person_image": "https://img.com/F.G.O.A.T"
        },
        "status": true
    }
    ```

# HealthDetails

- **Get health details by patient ID**

    GET: /healthdetails/`patientID`

    BODY PARAMS: None

    RESPONSE:
    ```
    {
        "msg": {
            "blood_group": "A",
            "blood_pressure": 56.0,
            "blood_sugar": "23",
            "bmi": 45.0,
            "height": 1.79,
            "last_visit": "Sat, 09 Jul 2022 00:00:00 GMT",
            "patient_id": 28,
            "pulse": 79.0,
            "respiratory_rate": "75",
            "weight": 25.0
        },
        "status": true
    }
    ```
