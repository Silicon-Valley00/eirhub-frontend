import { useState } from 'react';
import styles from '../styles/signup.module.css';
import signUp from '../../../assets/images/Patientsignup.svg';
import {
   Button,
   Dialog,
   DialogContent,
   TextField,
   ThemeProvider,
} from '@mui/material';

import SignupForms from '../forms/SignupForms';

function PatientSignup({
   show,
   handleClose,
}: {
   show: boolean;
   handleClose: () => void;
}) {
   const [btnActive, setBtnActive] = useState(false);

   // handles if patient needs a guardian
   const [needGuardian, setNeedGuardian] = useState(false);

   return (
      <Dialog
         open={show}
         onClose={handleClose}
         aria-label={'Patient-sign-up-modal'}
         aria-describedby="A modal with forms for patient sign up"
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
         maxWidth="lg"
         // fullWidth={fullWidth}
      >
         <DialogContent className={styles.signupContent}>
            <div className={styles.leftRegion}>
               <h3>Eirhub</h3>
               <div className={styles.leftRegionInfoOne}>
                  <p>Sign up today and get in touch</p>
               </div>

               <div className={styles.leftRegionInfoTwo}>
                  <p> with doctors you can trust</p>
               </div>
               <div className={styles.leftRegionImage}>
                  <img src={signUp} alt="Sign-up" />
               </div>
            </div>

            <div className={styles.rightRegion}>
               <div className={styles.signupFormTitle}>
                  <h3>Create New Account</h3>
                  <p>Take control of your health today</p>
               </div>
               <SignupForms />
            </div>
         </DialogContent>
      </Dialog>
   );
}

export default PatientSignup;
