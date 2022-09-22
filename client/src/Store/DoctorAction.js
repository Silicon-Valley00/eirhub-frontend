import {
   SET_DOCTOR_PROFILE_INFO,
   SET_PATIENT_TO_CHAT_WITH,
   SET_DOCTOR_AUTH,
   SET_DOCTOR_AND_PATIENT,
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

export const setDoctorandPatient = (allPendingAppointments) => {
   return {
      type: SET_DOCTOR_AND_PATIENT,
      allPendingAppointments,
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
};
const baseURL = 'http://127.0.0.1:5000';
// Action creator: Fetch doctor profile info
export const fetchDoctorsProfileInfo = (idDoctor) => {
   return async function (dispatch) {
      await axios
         .get(`${baseURL}/doctor/${idDoctor}`, {
            headers,
         })
         .then((response) => {
            if (response.data.status === true) {
               //returns response
               // alert('doctor profile fetched');
               dispatch(setDoctorProfile(response.data.msg));
               dispatch(setOkToRoute(true));
            } else {
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };
};

//Fectches patients by doctor id
export async function fetchPatientsByDoctorId(id_doctor) {
   await axios
      .get(`${baseURL}/appointmentcometd/${id_doctor}`, {
         headers,
      })
      .then((response) => {
         //returns response
         // alert('patients by doctor id worked fetch worked');
         console.log('res', response.data.msg);
         return response.data.msg;
      })
      .catch((error) => {
         console.log(error);
      });
}

// Action creator to get all
export const getAllPendingAppointmentsForADoctor = (id_doctor) => {
   return async function (dispatch) {
      await axios
         .get(
            `${baseURL}/appointments/?id_doctor=${id_doctor}&status=Pending`,
            {
               headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Methods': '*',
               },
            }
         )
         .then((res) => {
            dispatch(setDoctorandPatient(res.data.msg));
            return res.data.msg;
         })
         .catch((err) => {
            console.log(err.message);
         });
   };
};
