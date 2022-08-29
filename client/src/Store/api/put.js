import axios from 'axios';

const put = axios.create({
   baseURL: 'http://127.0.0.1:5000',
   timeout: 1000,
   headers: {
      'Access-Control-Allow-Origin': '*',
      //Helpful in some cases.
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
   },
   application: 'application/json',
});

export default put;
