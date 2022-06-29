import os
from flask import Flask
from sqlalchemy import create_engine
from dotenv import load_dotenv
app = Flask(__name__)
load_dotenv()
engine = create_engine(os.getenv('dbconnectionstring'),echo=True)
try:
    engine.connect()
    print("Done")
except Exception as e:
    print(e)
# Echo for debugging for the moment
@app.route("/home")
def home():
    print(engine.table_names) #The engine connection. Testing per route
    return ('Home: DB Connection Successful')
    # Will abstract into new file.



if __name__ == "__main__":
    app.run(debug=True)