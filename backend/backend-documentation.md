Create a virtual environment with:  
Enter your virtual environment
Install all packages in requirements.txt with pip install -r requirements.txt


Password Hash: 
from werkzeug.security import generate_password_hash, check_password_hash
a = generate_password_hash('1234')
print(a)
check_password_hash(a,'1234')


API EndPoint Routes:
- User Login : /login 
- User Registration : /signup

