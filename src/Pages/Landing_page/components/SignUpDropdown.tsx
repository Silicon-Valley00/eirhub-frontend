import React from 'react';
import styles from './dropdown.module.css';
import { Link } from 'react-router-dom';
import PatientSignup from '../../registrationPage/components/PatientSignup';
import DoctorSignup from '../../registrationPage/components/DoctorSignup';

const SignUpDropdown = () => {
   const [patientOpen, setPatientOpen] = React.useState(false);
   const [doctorOpen, setDoctorOpen] = React.useState(false);

   const handlePatientOpen = () => {
      setPatientOpen(true);
   };

   const handleDoctorOpen = () => {
      setDoctorOpen(true);
   };

   const handleClose = () => {
      setPatientOpen(false);
      setDoctorOpen(false);
   };
   return (
      <>
         <div className={styles.main}>
            <div className={styles.sub_main}>
               <ul className={styles.list}>
                  <li className={styles.list_first}>Sign up as: </li>
                  <div className={styles.list_last} onClick={handlePatientOpen}>
                     Patient
                  </div>
                  <div className={styles.list_last} onClick={handleDoctorOpen}>
                     Doctor
                  </div>
               </ul>
            </div>
         </div>
         <div>
            <PatientSignup show={patientOpen} handleClose={handleClose} />
            <DoctorSignup show={doctorOpen} handleClose={handleClose} />
         </div>
      </>
   );
};

export default SignUpDropdown;
