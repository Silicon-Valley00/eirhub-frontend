import { SET_NAME } from './ActionTypes';
import { SET_PROFILE_INFO } from './ActionTypes';
import { SET_HEALTH_INFO } from './ActionTypes';
import { SET_GUARDIAN_INFO } from './ActionTypes';
import { SET_REPORTS } from './ActionTypes';
import { SET_DOCTOR_PROFILE_INFO } from './ActionTypes';

import axios from 'axios';

//Sets User name
export const setName = (data) => {
   return {
      type: SET_NAME,
      payload: data,
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
//Sets reports of user
export const setReports = (reportData) => {
   return {
      type: SET_REPORTS,
      payload: reportData,
   };
};

// Sets the profile details for doctors
export const setDoctorProfile = (doctorProfile) => {
   return {
      type: SET_DOCTOR_PROFILE_INFO,
      payload: doctorProfile,
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

// Fetch doctor profile info
export const fetchDoctorsProfileInfo = (doctorID) => {
   return async function (dispatch) {
      try {
         const response = await axios({
            method: 'GET',
            url: `http://127.0.0.1:5000/doctor/${doctorID}`,
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
               dispatch(setDoctorProfile(response.data.msg));
            }
         } else {
            //takes all statuses aside 200
            alert('Something went wrong. Try again');
         }
      } catch (error) {}
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
export const fetchReports = (userID) => {
   return async function (dispatch) {
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
               dispatch(setProfileInfo(response.data.msg));
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

//Fetches user report details
export async function fetchMedications(userID) {
   try {
      const response = await axios({
         method: 'GET',
         url: `http://127.0.0.1:5000/prescription/30`,
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
         alert('Something went wrong. Try again med1');
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
         url: `http://127.0.0.1:5000/doctors/`,
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
