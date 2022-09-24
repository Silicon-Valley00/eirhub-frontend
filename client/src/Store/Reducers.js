import { PURGE } from 'redux-persist';
import {
   SET_PROFILE_INFO,
   SET_HEALTH_INFO,
   SET_GUARDIAN_INFO,
   SET_DOCTOR_PROFILE_INFO,
   SET_APPOINTMENT_DOCTOR,
   CLEAR_APPOINTMENT_DOCTOR,
   SET_CHAT_WITH_DOCTOR,
   SET_PATIENT_TO_CHAT_WITH,
   SET_APPOINTMENTS_DATES,
   SET_DOCTOR_AUTH,
   SET_PATIENT_AUTH,
   SET_OK_TO_ROUTE,
   SET_RELOAD_MEDICATIONS,
   SET_MESSAGE,
   SET_TEMP_MEDICATIONS,
   SET_IS_LOADING,
   SET_DOCTOR_AND_PATIENT,
   SET_PATIENTS,
   SET_DOCTOR_RECORD_PATIENT_ID,
   SET_IS_NEW_USER,
} from './ActionTypes';

const initialState = {
   doctorRecordPatientId: null,
   isLoading: false,
   isNewUser: false,
   //Patient Dashboard
   tempMedications: [],
   reloadMedications: false,
   message: {
      show: false,
      msg: 'Error me',
      state: 0,
   },
   okToRoute: false,
   user: {
      name: '',
      id_patient: '',
      id_guardian: '',
   },
   profile: {
      user_email: '',
      first_name: '',
      house_address: '',
      id_patient: '',
      id_doctor: '',
      id_guardian: '',
      id_number: '',
      last_name: '',
      middle_name: '',
      nationality: '',
      phone_number: '',
      person_image: '',
      date_of_birth: '',
      gender: '',
   },
   health: {
      blood_group: '',
      blood_pressure: '',
      blood_sugar: '',
      height: '',
      last_visit: '',
      pulse: '',
      respiratory_rate: '',
      weight: '',
   },
   guardian: {
      first_name: '',
      middle_name: '',
      last_name: '',
      user_email: '',
      date_of_birth: '',
      house_address: '',
      phone_number: '',
      id_number: '',
      gender: '',
   },
   doctorAppointment: {},
   doctorToChatWith: '',
   appointmentDates: [],
   isPatientAuth: false,

   // Doctor Dashboard
   isDoctorAuth: false,
   doctorProfile: {
      first_name: '',
      middle_name: '',
      last_name: '',
      user_email: '',
      date_of_birth: '',
      gender: '',
      house_number: '',
      license_number: '',
      doctor_specialties: '',
      hospital_code: '',
      doctor_ratings: '',
      person_image: '',
      id_doctor: '',
   },
   patientToChatWith: '',
   allPendingAppointments: [],
};

const Reducers = (state = initialState, action) => {
   switch (action.type) {
      case PURGE:
         return initialState;
      case SET_DOCTOR_RECORD_PATIENT_ID:
         return { ...state, doctorRecordPatientId: action.payload};

      case SET_IS_LOADING:
         return { ...state, isLoading: action.payload };

      case SET_IS_NEW_USER:
         return { ...state, isNewUser: action.payload };

      case SET_OK_TO_ROUTE:
         return { ...state, okToRoute: action.payload };

      case SET_RELOAD_MEDICATIONS:
         return { ...state, reloadMedications: action.payload };

      case SET_TEMP_MEDICATIONS:
         var obj = action.payload.map((item) => {
            if (action.tempData.includes(item) === false) {
               return item;
            }
         });
         return {
            ...state,
            tempMedications: action.tempData.concat(obj),
         };

      case SET_MESSAGE:
         return {
            ...state,
            message: {
               show: action.payload.show,
               msg: action.payload.msg,
               state: action.payload.state,
            },
         };

      case SET_PROFILE_INFO:
         let profile = {
            user_email: action.payload.user_email,
            first_name: action.payload.first_name,
            house_address: action.payload.house_address,
            id_patient: action.payload.id_patient,
            id_doctor: action.payload.id_doctor,
            id_message: action.payload.id_message,
            id_guardian: action.payload.id_guardian,
            id_number: action.payload.id_number,
            last_name: action.payload.last_name,
            middle_name: action.payload.middle_name,
            nationality: action.payload.nationality,
            person_image: action.payload.person_image,
            phone_number: action.payload.phone_number,
            gender: action.payload.gender,
            date_of_birth: action.payload.date_of_birth,
         };
         return { ...state, profile: profile };

      case SET_HEALTH_INFO:
         let health = {
            blood_group: action.payload.blood_group,
            blood_pressure: action.payload.blood_pressure,
            blood_sugar: action.payload.blood_sugar,
            height: action.payload.height,
            last_visit: action.payload.last_visit,
            pulse: action.payload.pulse,
            respiratory_rate: action.payload.respiratory_rate,
            weight: action.payload.weight,
            temperature: action.payload.temperature,
         };
         return { ...state, health: health };

      case SET_GUARDIAN_INFO:
         let guardian = {
            first_name: action.payload.first_name,
            middle_name: action.payload.middle_name,
            last_name: action.payload.last_name,
            user_email: action.payload.user_email,
            date_of_birth: action.payload.date_of_birth,
            house_address: action.payload.house_address,
            phone_number: action.payload.phone_number,
            id_number: action.payload.id_number,
            gender: action.payload.gender,
         };
         return { ...state, guardian: guardian };

      case SET_APPOINTMENT_DOCTOR:
         return { ...state, doctorAppointment: action.payload };

      case CLEAR_APPOINTMENT_DOCTOR:
         return { ...state, doctorAppointment: {} };

      // case CLEAR_DOCTOR_APPOINTMENT_INPUT_FIELDS:
      //    return { ...state };

      case SET_CHAT_WITH_DOCTOR:
         return { ...state, doctorToChatWith: action.payload };

      case SET_APPOINTMENTS_DATES:
         return { ...state, appointmentDates: action.payload };

      case SET_PATIENT_AUTH:
         return { ...state, isPatientAuth: action.payload };

      // Doctor dashboard
      case SET_DOCTOR_AUTH:
         return { ...state, isDoctorAuth: action.payload };

      case SET_DOCTOR_PROFILE_INFO:
         let doctor_profile_info = {
            first_name: action.payload.first_name,
            middle_name: action.payload.middle_name,
            last_name: action.payload.last_name,
            user_email: action.payload.user_email,
            date_of_birth: action.payload.date_of_birth,
            gender: action.payload.gender,
            house_address: action.payload.house_address,
            license_number: action.payload.license_number,
            doctor_specialties: action.payload.doctor_specialties,
            hospital_code: action.payload.hospital_code,
            doctor_ratings: action.payload.doctor_ratings,
            person_image: action.payload.person_image,
            id_doctor: action.payload.id_doctor,
            id_message: action.payload.id_message,
         };
         return { ...state, doctorProfile: doctor_profile_info };

      case SET_DOCTOR_AND_PATIENT:
         return {
            ...state,
            allPendingAppointments: action.allPendingAppointments,
         };

      case SET_PATIENT_TO_CHAT_WITH:
         return { ...state, patientToChatWith: action.payload };

      default:
         return state;
   }
};

export default Reducers;
