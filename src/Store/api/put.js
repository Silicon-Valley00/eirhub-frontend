import axios from 'axios';

const put = axios.create({
   baseURL: 'https://eirhub-backend.herokuapp.com',
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
