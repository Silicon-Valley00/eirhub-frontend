import store from './ReducerStore';

import {
   SET_PROFILE_INFO,
   SET_HEALTH_INFO,
   SET_GUARDIAN_INFO,
   SET_DOCTOR_PROFILE_INFO,
   SET_APPOINTMENT_DOCTOR,
   CLEAR_APPOINTMENT_DOCTOR,
   SET_CHAT_WITH_DOCTOR,
   SET_APPOINTMENTS_DATES,
   SET_PATIENT_AUTH,
   SET_OK_TO_ROUTE,
   SET_RELOAD_MEDICATIONS,
   SET_MESSAGE,
   SET_TEMP_MEDICATIONS,
   SET_IS_LOADING,
   SET_IS_NEW_USER,
   SET_DOCTOR_RECORD_PATIENT_ID,
} from './ActionTypes';

import axios from 'axios';

// Sets doctors selected patient's records
export const setDoctorRecordPatientId = (doctorRecordPatientId) => {
   return {
      type: SET_DOCTOR_RECORD_PATIENT_ID,
      payload: doctorRecordPatientId,
   };
};

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
//sets ok to route after an registration action
export const setOkToRoute = (state) => {
   return {
      type: SET_OK_TO_ROUTE,
      payload: state,
   };
};
//sets ok to route after an registration action
export const setReloadMedications = (state) => {
   return {
      type: SET_RELOAD_MEDICATIONS,
      payload: state,
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

//Authorise patients for patient pages view
export const setPatientAuth = (auth) => {
   return {
      type: SET_PATIENT_AUTH,
      payload: auth,
   };
};

//Sets messages to be displayed to users
export const setMessage = (msgObj) => {
   return {
      type: SET_MESSAGE,
      payload: msgObj,
   };
};

//Holds prescriptions for last taken date uncheck
export const setMedicationsTemp = (medicationsObj) => {
   return {
      type: SET_TEMP_MEDICATIONS,
      payload: medicationsObj,
      tempData: store.getState().tempMedications,
   };
};

//Asserts whether a loading page route should happen
export const setLoading = (state) => {
   return {
      type: SET_IS_LOADING,
      payload: state,
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
               if (guardianID) {
                  dispatch(fetchGuardianInfo(userID, guardianID));
               } else {
                  dispatch(fetchHealthDetails(userID));
               }
            }
         } else {
            //takes all statuses aside 200
            // alert('Something went wrong. Try again');
         }
      } catch (error) {
         // alert(error, 'pro');
      }
   };
};

//Fetches user profile details
export const fetchProfileOnSignup = (userID) => {
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
               dispatch(fetchHealthDetails(userID));
            }
         } else {
            //takes all statuses aside 200
            // alert('Something went wrong. Try again');
         }
      } catch (error) {
         // alert(error, 'pro');
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
               dispatch(setOkToRoute(true));
            }
         } else {
            //takes all statuses aside 200
            // alert('Something went wrong. Try again');
         }
      } catch (error) {
         // alert(error, 'hel');
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
            // alert('Something went wrong. Try again');
         }
      } catch (error) {
         // alert(error, 'gur');
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
               if (guardianID) {
                  dispatch(
                     updateGuardianInfo(
                        guardianID,
                        guardianData,
                        userID,
                        healthData
                     )
                  );
               } else {
                  dispatch(updateHealthDetails(userID, healthData));
               }
            }
         } else {
            //takes all statuses aside 200
            // alert('Could not make update, try again up1');
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Update unsuccessful.',
                  state: 0,
               })
            );
         }
      } catch (error) {
         // alert('Could not make update, try again up2');
         dispatch(
            setMessage({
               show: true,
               msg: 'Update unsuccessful.',
               state: 0,
            })
         );
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
               dispatch(
                  setMessage({
                     show: true,
                     msg: 'Profile updated.',
                     state: 1,
                  })
               );
            }
         } else {
            //takes all statuses aside 200
            // alert('Could not make update, try again uh1');
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Update unsuccessful.',
                  state: 0,
               })
            );
         }
      } catch (error) {
         // alert('Could not make update, try again uh2');
         dispatch(
            setMessage({
               show: true,
               msg: 'Update unsuccessful.',
               state: 0,
            })
         );
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
            // alert('Could not make update, try again ug1');
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Update unsuccessful.',
                  state: 0,
               })
            );
         }
      } catch (error) {
         // alert('Could not make update, try again ug2');
         dispatch(
            setMessage({
               show: true,
               msg: 'Update unsuccessful.',
               state: 0,
            })
         );
      }
   };
};

//Creates guardian details
export const addNewGuardianInfo = (guardianData, profileData) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'POST',
            url: `http://127.0.0.1:5000/guardians`,
            headers: {
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
            data: guardianData,
         });

         if (response.status === 200) {
            //checks details of response
            if (response.data.status === true) {
               //returns response
               dispatch(setGuardianInfo(response.data.msg));

               const profile = {
                  user_email: profileData.user_email,
                  first_name: profileData.first_name,
                  house_address: profileData.house_address,
                  id_patient: profileData.id_patient,
                  id_doctor: profileData.id_doctor,
                  id_guardian: response.data.msg.id_guardian,
                  id_number: profileData.id_number,
                  last_name: profileData.last_name,
                  middle_name: profileData.middle_name,
                  nationality: profileData.nationality,
                  phone_number: profileData.phone_number,
                  person_image: profileData.person_image,
                  date_of_birth: profileData.date_of_birth,
                  gender: profileData.gender,
               };
               dispatch(setProfileInfo(profile));
               dispatch(setOkToRoute(true));
            }
         } else {
            //takes all statuses aside 200
            // alert('Could not create guardian, try again ug1');
         }
      } catch (error) {
         // alert('Could not create guardian, try again ug2');
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
         if (response.data) {
            //returns response
            // alert('report fetched worked');
            return response.data.msg;
         }
      } else {
         //takes all statuses aside 200
         // alert('Something went wrong. Try again');
      }
   } catch (error) {
      // alert(error, 'pro');
   }
}
//Fetches user medications
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
            // alert('fetch med worked');
            return response.data.msg;
         }
      } else {
         //takes all statuses aside 200
         // alert('Something went wrong. Try again');
         return [];
      }
   } catch (error) {
      // alert(error, 'med2');
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
               // alert('med update worked');
               dispatch(setReloadMedications(true));
               dispatch(
                  setMessage({
                     show: true,
                     msg: 'Prescription updated.',
                     state: 1,
                  })
               );
            }
         } else {
            //takes all statuses aside 200
            // alert('Could not make update, try again med update 1');
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Update unsuccessful.',
                  state: 0,
               })
            );
         }
      } catch (error) {
         // alert('Could not make update, try again med update 2');
         dispatch(
            setMessage({
               show: true,
               msg: 'Update unsuccessful.',
               state: 0,
            })
         );
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
               const medicationBody = {
                  drug_name: data.drug_name,
                  dosage: data.dosage,
                  time_of_administration: data.time_of_administration,
                  start_date: data.start_date,
                  end_date: data.end_date,
                  last_taken_date: data.last_taken_date,
                  id_patient: data.id_patient,
                  id_prescription: response.data.msg.id_prescription,
               };

               //returns response
               // alert('med creation worked');
               // sets variable to use to reload medications
               dispatch(setReloadMedications(true));
               dispatch(
                  setMessage({
                     show: true,
                     msg: 'Prescription added.',
                     state: 1,
                  })
               );
               dispatch(setMedicationsTemp([medicationBody]));
            }
         } else {
            //takes all statuses aside 200
            // alert('Could not make update, try again med create 1');
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Creation unsuccessful.',
                  state: 0,
               })
            );
         }
      } catch (error) {
         // alert('Could not make update, try again med create 2');
         dispatch(
            setMessage({
               show: true,
               msg: 'Creation unsuccessful.',
               state: 0,
            })
         );
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
               // alert('med delete worked');
               dispatch(setReloadMedications(true));
               dispatch(
                  setMessage({
                     show: true,
                     msg: 'Prescription deleted.',
                     state: 1,
                  })
               );
            }
         } else {
            //takes all statuses aside 200
            // alert('Could not make update, try again med delete 1');
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Delete unsuccessful.',
                  state: 1,
               })
            );
         }
      } catch (error) {
         // alert('Could not make update, try again med delete 2');
         dispatch(
            setMessage({
               show: true,
               msg: 'Delete unsuccessful.',
               state: 1,
            })
         );
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
            // alert('doctors fetch worked');
            return response.data.msg;
         }
      } else {
         //takes all statuses aside 200
         // alert('Something went wrong. Try again, doctor 1');
      }
   } catch (error) {
      // alert(error, 'doctors 2');
   }
}

//Fetches doctors by patient id
export async function fetchDoctorsByPatient(userID) {
   try {
      const response = await axios({
         method: 'GET',
         url: `http://127.0.0.1:5000/appointments/?id_patient = ${userID}`,
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
            // alert('doctors by patient id worked fetch worked');
            return response.data.msg;
         }
      } else {
         //takes all statuses aside 200
         // alert('Something went wrong. Try again, doctor 1');
      }
   } catch (error) {
      // alert(error, 'doctors 2');
   }
}

//Fetches user accepted appointments
export async function fetchAppointments(userID, status) {
   if (userID) {
      try {
         const response = await axios({
            method: 'GET',
            url: `http://127.0.0.1:5000/appointments/?id_patient=${userID}&accepted=${status}`,
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
               // alert('appointments fetch worked');

               return response.data.msg;
            }
         } else {
            //takes all statuses aside 200
            // alert('Something went wrong. Try again, accepted appments 1');
         }
      } catch (error) {
         // alert(error, 'accepted appments 2');
      }
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
               dispatch(
                  setMessage({
                     show: true,
                     msg: 'Appointment booked.',
                     state: 1,
                  })
               );
               //returns response
               // alert('appointments post worked');
            }
         } else {
            //takes all statuses aside 200
            // alert('Something went wrong. Try again, post appments 1');
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Booking unsuccessful.',
                  state: 0,
               })
            );
         }
      } catch (error) {
         // alert(error, 'post appments 2');
         dispatch(
            setMessage({
               show: true,
               msg: 'Booking unsuccessful.',
               state: 0,
            })
         );
      }
   };
};
