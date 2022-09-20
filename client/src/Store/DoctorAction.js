import {
   SET_DOCTOR_PROFILE_INFO,
   SET_PATIENT_TO_CHAT_WITH,
   SET_DOCTOR_AUTH,
} from './ActionTypes';
import axios from 'axios';

import { setOkToRoute } from './Actions';

// Action: Sets the profile details for doctors
export const setDoctorProfile = (doctorProfile) => {
   return {
      type: SET_DOCTOR_PROFILE_INFO,
      payload: doctorProfile,
   };
};

// Action: Sets the profile details for doctors
export const setPatientToChatWith = (patient) => {
   return {
      type: SET_PATIENT_TO_CHAT_WITH,
      payload: patient,
   };
};

//Authorise patients for patient pages view
export const setDoctorAuth = (auth) => {
   return {
      type: SET_DOCTOR_AUTH,
      payload: auth,
   };
};

//Headers for API Call.
const headers = {
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Headers': '*',
   'Access-Control-Allow-Methods': '*',
}
const baseURL = 'http://127.0.0.1:5000'
// Action creator: Fetch doctor profile info
export const fetchDoctorsProfileInfo = (idDoctor) => {
   return async function (dispatch) {
      await axios.get(
         `${baseURL}/doctor/${idDoctor}`,
         {
            headers
         }
      )
      .then((response)=>{
         if (response.data.status === true) {
            //returns response
            // alert('doctor profile fetched');
            dispatch(setDoctorProfile(response.data.msg));
            dispatch(setOkToRoute(true));
         }
         else{

         }
      })
      .catch((error)=>{
         console.log(error);
      })

      //       try {
      //    const response = await axios({
      //       method: 'GET',
      //       url:,
      //       headers: headers,
      //    });
      //    if (response.status === 200) {
      //       //checks details of response
      //       if (response.data.status === true) {
      //          //returns response
      //          // alert('doctor profile fetched');
      //          dispatch(setDoctorProfile(response.data.msg));
      //          dispatch(setOkToRoute(true));
      //       }
      //    } else {
      //       //takes all statuses aside 200
      //       // alert('Something went wrong. Try again');
      //    }
      // } catch (error) {
      //    // alert('caughterror', error);
      //    console.log(error);
      // }
   };
};

//Fectches patients by doctor id
export async function fetchPatientsByDoctorId(id_doctor) {
   await axios.get(
      `${baseURL}/doctors/?id_doctor=${id_doctor}`,
      {
         headers
      }
   )
   .then((response)=> {
      if (response.data) {
         //returns response
         // alert('patients by doctor id worked fetch worked');            
         return response.data.msg;
      }
   })
   .catch((error)=>{
      console.log(error);
   })
   // try {
   //    const response = await axios({
   //       method: 'GET',
   //       url: `http://127.0.0.1:5000/doctors/?id_doctor=${id_doctor}`,
   //       headers: headers,
   //    });
   //    if (response.status === 200) {
   //       //checks details of response

   //       if (response.data) {
   //          //returns response
   //          // alert('patients by doctor id worked fetch worked');            
   //          return response.data.msg;
   //       }
   //    } 
   //    else {
   //       //takes all statuses aside 200
   //       alert('Something went wrong. Try again, doctor 1');
   //    }
   // } catch (error) {
   //    // alert(error, 'doctors 2');
   // }
}

// Update Doctor profile
