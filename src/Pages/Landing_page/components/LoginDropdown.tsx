import React from 'react';
import styles from './dropdown.module.css';
import { Box, Modal, Typography } from '@mui/material';
import PatientLogin from '../../Registration page/components/Login';
import DoctorLogin from '../../Registration page/components/DoctorLogin';

const LoginDropdown = () => {
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
                  <li className={styles.list_first}>Login as: </li>
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
            <PatientLogin show={patientOpen} handleClose={handleClose} />
            <DoctorLogin show={doctorOpen} handleClose={handleClose} />
         </div>
      </>
   );
};

export default LoginDropdown;
