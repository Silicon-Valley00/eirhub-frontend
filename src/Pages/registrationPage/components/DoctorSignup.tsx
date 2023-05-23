import React, { useState, useRef } from 'react';
import styles from '../styles/signup.module.css';
import signUp from '../../../assets/images/signupimage.svg';
import { FaRegUser, FaRegHospital } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';
import { IoCalendar, IoWarning, IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import hospital from '../../../assets/hospital.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
   fetchDoctorsProfileInfo,
   getAllPendingAppointmentsForADoctor,
   setDoctorAuth,
   setDoctorProfile,
} from '../../../Store/DoctorAction.js';
// import { SignUpUser } from '../../../context/authcontext';
import store from '../../../Store/store';
import { persistor } from '../../../Store/store';
import { setLoading, setMessage, setOkToRoute } from '../../../Store/Actions';
import { Dialog, DialogContent } from '@mui/material';
import SignupForms from '../forms/SignupForms';

function DoctorSignup({
   show,
   handleClose,
}: {
   show: boolean;
   handleClose: () => void;
}) {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const docSignUpFormRef = useRef();

   // handles button changes
   const [btnValue, setBtnValue] = useState('Create Account');
   const [btnActive, setBtnActive] = useState(false);
   // btnActive is for when button can  be clicked to create account. This would be set to false when an error occurs
   // Handles password visibility
   const [hidePasswordOne, setHidePasswordOne] = useState(true);
   const [hidePasswordTwo, setHidePasswordTwo] = useState(true);
   // Handles server error
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState(
      'Email already in use. Want to login?'
   );

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
         maxWidth="xl"
         // fullWidth={fullWidth}
      >
         <DialogContent className={styles.signupContent}>
            <div className={styles.leftRegion}>
               <h3>Eirhub</h3>
               <div className={styles.leftRegionInfoOne}>
                  <p>Sign up and help put smiles on</p>
               </div>

               <div className={styles.leftRegionInfoTwo}>
                  <p> the faces of patients</p>
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

export default DoctorSignup;
