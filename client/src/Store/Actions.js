import {
   SET_PROFILE_INFO,
   SET_HEALTH_INFO,
   SET_GUARDIAN_INFO,
   SET_DOCTOR_PROFILE_INFO,
   SET_APPOINTMENT_DOCTOR,
   CLEAR_APPOINTMENT_DOCTOR,
   SET_CHAT_WITH_DOCTOR,
   SET_APPOINTMENTS_DATES,
} from './ActionTypes';

import axios from 'axios';

// Sets profile details
export const setProfileInfo = (profileData) => {
   return {
      type: SET_PROFILE_INFO,
      payload: profileData,
   };
};

// Sets health details
export const setHealthInfo = (healthData) => {
   return {
      type: SET_HEALTH_INFO,
      payload: healthData,
   };
};
// Sets guardian details
export const setGuardianInfo = (guardianData) => {
   return {
      type: SET_GUARDIAN_INFO,
      payload: guardianData,
   };
};

// Sets the profile details for doctors
export const setDoctorProfile = (doctorProfile) => {
   return {
      type: SET_DOCTOR_PROFILE_INFO,
      payload: doctorProfile,
   };
};

//Sets doctor profile details for appointment booking
export const setDoctorForAppointment = (doctorProfile) => {
   return {
      type: SET_APPOINTMENT_DOCTOR,
      payload: doctorProfile,
   };
};

//clears doctor profile details for appointment booking
export const clearDoctorForAppointment = () => {
   return {
      type: CLEAR_APPOINTMENT_DOCTOR,
   };
};
// sets uid of doctor to chat with
export const setDoctorToChatWith = (doctorUID) => {
   return {
      type: SET_CHAT_WITH_DOCTOR,
      payload: doctorUID,
   };
};
// sets appointment dates
export const setAppointmentDates = (dates) => {
   return {
      type: SET_APPOINTMENTS_DATES,
      payload: dates,
   };
};
//Fetches user profile details
export const fetchProfile = (userID, guardianID) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'GET',
            url: `http://127.0.0.1:5000/patients/${userID}`,
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
               dispatch(setProfileInfo(response.data.msg));
               dispatch(fetchGuardianInfo(userID, guardianID));
            }
         } else {
            //takes all statuses aside 200
            alert('Something went wrong. Try again');
         }
      } catch (error) {
         alert(error, 'pro');
      }
   };
};

//Fetches user health details
export const fetchHealthDetails = (userID) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'GET',
            url: `http://127.0.0.1:5000/healthdetails/${userID}`,
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
               dispatch(setHealthInfo(response.data.msg));
            }
         } else {
            //takes all statuses aside 200
            alert('Something went wrong. Try again');
         }
      } catch (error) {
         alert(error, 'hel');
      }
   };
};

//Fetches user guardian details
export const fetchGuardianInfo = (userID, guardianID) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'GET',
            url: `http://127.0.0.1:5000/guardian/${guardianID}`,
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
               dispatch(setGuardianInfo(response.data.msg));
               dispatch(fetchHealthDetails(userID));
            }
         } else {
            //takes all statuses aside 200
            alert('Something went wrong. Try again');
         }
      } catch (error) {
         alert(error, 'gur');
      }
   };
};
//updates user profile details
export const updateProfile = (
   userID,
   userData,
   guardianID,
   guardianData,
   healthData
) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'PUT',
            url: `http://127.0.0.1:5000/patients/${userID}`,
            headers: {
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
            data: userData,
         });
         if (response.status === 200) {
            //checks details of response
            if (response.data.status === true) {
               //returns response
               dispatch(setProfileInfo(response.data.msg));
               dispatch(
                  updateGuardianInfo(
                     guardianID,
                     guardianData,
                     userID,
                     healthData
                  )
               );
            }
         } else {
            //takes all statuses aside 200
            alert('Could not make update, try again up1');
         }
      } catch (error) {
         alert('Could not make update, try again up2');
      }
   };
};

//updates user health  details
export const updateHealthDetails = (userID, data) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'PUT',
            url: `http://127.0.0.1:5000/healthdetails/${userID}`,
            headers: {
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
            data: data,
         });
         if (response.status === 200) {
            //checks details of response
            if (response.data.status === true) {
               //returns response
               dispatch(setHealthInfo(response.data.msg));
            }
         } else {
            //takes all statuses aside 200
            alert('Could not make update, try again uh1');
         }
      } catch (error) {
         alert('Could not make update, try again uh2');
      }
   };
};

//updates user guardian details
export const updateGuardianInfo = (
   guardianId,
   guardiandata,
   userId,
   healthdata
) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'PUT',
            url: `http://127.0.0.1:5000/guardian/${guardianId}`,
            headers: {
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
            data: guardiandata,
         });
         if (response.status === 200) {
            //checks details of response
            if (response.data.status === true) {
               //returns response
               dispatch(setGuardianInfo(response.data.msg));
               dispatch(updateHealthDetails(userId, healthdata));
            }
         } else {
            //takes all statuses aside 200
            alert('Could not make update, try again ug1');
         }
      } catch (error) {
         alert('Could not make update, try again ug2');
      }
   };
};

//Fetches user report details
export async function fetchReports(userID) {
   try {
      const response = await axios({
         method: 'GET',
         url: `http://127.0.0.1:5000/report/${userID}`,
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
            alert('report fetched worked');
            return response.data.msg;
         }
      } else {
         //takes all statuses aside 200
         alert('Something went wrong. Try again');
      }
   } catch (error) {
      alert(error, 'pro');
   }
}

//Fetches user report details
export async function fetchMedications(userID) {
   try {
      const response = await axios({
         method: 'GET',
         url: `http://127.0.0.1:5000/prescription/${userID}`,
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
            alert('fetch med worked');
            return response.data.msg;
         }
      } else {
         //takes all statuses aside 200
         alert('Something went wrong. Try again');
         return [];
      }
   } catch (error) {
      alert(error, 'med2');
   }
}

//updates user prescriptions details
export const updatePrescriptions = (Id, data) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'PUT',
            url: `http://127.0.0.1:5000/prescription/${Id}`,
            headers: {
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
            data: data,
         });
         if (response.status === 200) {
            //checks details of response
            if (response.data.status === true) {
               //returns response
               alert('med update worked');
            }
         } else {
            //takes all statuses aside 200
            alert('Could not make update, try again med update 1');
         }
      } catch (error) {
         alert('Could not make update, try again med update 2');
      }
   };
};

//creates user prescriptions details
export const addPrescriptions = (data) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/prescription`,
            headers: {
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
            data: data,
         });
         if (response.status === 200) {
            //checks details of response
            if (response.data.status === true) {
               //returns response
               alert('med creation worked');
            }
         } else {
            //takes all statuses aside 200
            alert('Could not make update, try again med create 1');
         }
      } catch (error) {
         alert('Could not make update, try again med create 2');
      }
   };
};

//deletes user prescriptions details
export const deletePrescriptions = (id) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'DELETE',
            url: `http://127.0.0.1:5000/prescription/${id}`,
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
               alert('med delete worked');
            }
         } else {
            //takes all statuses aside 200
            alert('Could not make update, try again med delete 1');
         }
      } catch (error) {
         alert('Could not make update, try again med delete 2');
      }
   };
};

//Fetches user report details
export async function fetchDoctors() {
   try {
      const response = await axios({
         method: 'GET',
         url: `http://127.0.0.1:5000/doctors`,
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
            alert('doctors fetch worked');
            return response.data.msg;
         }
      } else {
         //takes all statuses aside 200
         alert('Something went wrong. Try again, doctor 1');
      }
   } catch (error) {
      alert(error, 'doctors 2');
   }
}

//Fectches doctors by patient id
export async function fetchDoctorsByPatient(userID) {
   try {
      const response = await axios({
         method: 'GET',
         url: `http://127.0.0.1:5000/patients/?id_patient=${userID}`,
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
            alert('doctors by patient id worked fetch worked');
            return response.data.msg;
         }
      } else {
         //takes all statuses aside 200
         alert('Something went wrong. Try again, doctor 1');
      }
   } catch (error) {
      alert(error, 'doctors 2');
   }
}

//Fetches user accepted appointments
export async function fetchAppointments(userID, status) {
   try {
      const response = await axios({
         method: 'GET',
         url: `http://127.0.0.1:5000/appointments/?patient_id=${userID}&accepted=${status}`,
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
            alert('appointments fetch worked');
            return response.data.msg;
         }
      } else {
         //takes all statuses aside 200
         alert('Something went wrong. Try again, accepted appments 1');
      }
   } catch (error) {
      alert(error, 'accepted appments 2');
   }
}

//Fetches user accepted appointments
export const addAppointments = (data) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/appointments/`,
            headers: {
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
            data: data,
         });
         if (response.status === 200) {
            //checks details of response
            if (response.data.status === true) {
               //returns response
               alert('appointments post worked');
            }
         } else {
            //takes all statuses aside 200
            alert('Something went wrong. Try again, post appments 1');
         }
      } catch (error) {
         alert(error, 'post appments 2');
      }
   };
};
