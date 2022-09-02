import {
   SET_DOCTOR_PROFILE_INFO,
   SET_PATIENT_TO_CHAT_WITH,
   SET_DOCTOR_AUTH,
} from './ActionTypes';
import axios from 'axios';

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

// Action creator: Fetch doctor profile info
export const fetchDoctorsProfileInfo = (idDoctor) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'GET',
            url: `http://127.0.0.1:5000/doctor/${idDoctor}`,
            headers: {
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
         });
         if (response.status === 200) {
            //checks details of response
            if (response.data.status === true) {
               //returns response
               //alert('doctor profile fetched');
               dispatch(setDoctorProfile(response.data.msg));
            }
         } else {
            //takes all statuses aside 200
            //alert('Something went wrong. Try again');
         }
      } catch (error) {
         //alert('caughterror', error);
         console.log(error);
      }
   };
};

//Fectches patients by doctor id
export async function fetchPatientsByDoctorId(idDoctor) {
   try {
      const response = await axios({
         method: 'GET',
         url: `http://127.0.0.1:5000/doctors/?id_doctor=${idDoctor}`,
         headers: {
            'Access-Control-Allow-Origin': '*',
            //Helpful in some cases.
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
         },
      });
      if (response.status === 200) {
         //checks details of response
         if (response.data.status === true) {
            //returns response
            //alert('patients by doctor id worked fetch worked');
            return response.data.msg;
         }
      } else {
         //takes all statuses aside 200
         //alert('Something went wrong. Try again, doctor 1');
      }
   } catch (error) {
      //alert(error, 'doctors 2');
   }
}

// Update Doctor profile
