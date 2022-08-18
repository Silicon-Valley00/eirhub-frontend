import axios from 'axios';

export default axios.create({
   baseUrl: 'http://localhost:5000/',
   timeout: 1000,
   headers: {
      'Access-Control-Allow-Origin': '*',
      //Helpful in some cases.
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
   },
});
