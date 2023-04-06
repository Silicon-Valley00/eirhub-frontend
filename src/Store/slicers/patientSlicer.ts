import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import initialStates from '../initialStore';

interface IinitialState {
   user_email: string;
   first_name: string;
   house_address: string;
   id_patient: string;
   id_doctor: string;
   id_guardian: string;
   id_number: string;
   last_name: string;
   middle_name: string;
   nationality: string;
   phone_number: string;
   person_image: string;
   date_of_birth: string;
   gender: string;
}
const initialState: IinitialState = initialStates.profile;

export const patientSlice = createSlice({
   name: 'patient',
   initialState,
   reducers: {
      Purge: (state) => {
         return initialState;
      },
      SetDoctorRecordPatientId: (state, action: PayloadAction) => {
         return { ...state, doctorRecordPatientId: action.payload };
      },
   },
});

export default patientSlice.reducer;

// case PURGE:
//          return initialState;
//       case SET_DOCTOR_RECORD_PATIENT_ID:
//          return { ...state, doctorRecordPatientId: action.payload };

//       case SET_IS_LOADING:
//          return { ...state, isLoading: action.payload };

//       case SET_OK_TO_ROUTE:
//          return { ...state, okToRoute: action.payload };

//       case SET_RELOAD_MEDICATIONS:
//          return { ...state, reloadMedications: action.payload };

//       case SET_TEMP_MEDICATIONS:
//          var obj = action.payload.map((item) => {
//             if (action.tempData.includes(item) === false) {
//                return item;
//             }
//          });
//          return {
//             ...state,
//             tempMedications: action.tempData.concat(obj),
//          };

//       case SET_MESSAGE:
//          return {
//             ...state,
//             message: {
//                show: action.payload.show,
//                msg: action.payload.msg,
//                state: action.payload.state,
//             },
//          };

//       case SET_PROFILE_INFO:
//          let profile = {
//             user_email: action.payload.user_email,
//             first_name: action.payload.first_name,
//             house_address: action.payload.house_address,
//             id_patient: action.payload.id_patient,
//             id_doctor: action.payload.id_doctor,
//             id_message: action.payload.id_message,
//             id_guardian: action.payload.id_guardian,
//             id_number: action.payload.id_number,
//             last_name: action.payload.last_name,
//             middle_name: action.payload.middle_name,
//             nationality: action.payload.nationality,
//             person_image: action.payload.person_image,
//             phone_number: action.payload.phone_number,
//             gender: action.payload.gender,
//             date_of_birth: action.payload.date_of_birth,
//          };
//          return { ...state, profile: profile };

//       case SET_HEALTH_INFO:
//          let health = {
//             blood_group: action.payload.blood_group,
//             blood_pressure: action.payload.blood_pressure,
//             blood_sugar: action.payload.blood_sugar,
//             height: action.payload.height,
//             last_visit: action.payload.last_visit,
//             pulse: action.payload.pulse,
//             respiratory_rate: action.payload.respiratory_rate,
//             weight: action.payload.weight,
//             temperature: action.payload.temperature,
//          };
//          return { ...state, health: health };

//       case SET_GUARDIAN_INFO:
//          let guardian = {
//             first_name: action.payload.first_name,
//             middle_name: action.payload.middle_name,
//             last_name: action.payload.last_name,
//             user_email: action.payload.user_email,
//             date_of_birth: action.payload.date_of_birth,
//             house_address: action.payload.house_address,
//             phone_number: action.payload.phone_number,
//             id_number: action.payload.id_number,
//             gender: action.payload.gender,
//          };
//          return { ...state, guardian: guardian };
