import React, { useState, useRef } from 'react';
import styles from './signup.module.css';
import signUp from '../../../assets/images/Patientsignup.svg';
import { GuardianForm } from './GuardianForm';
import { FaRegUser, FaTimes } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';
import { IoCalendar, IoWarning, IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
   setProfileInfo,
   setLoading,
   setMessage,
   setPatientAuth,
   fetchHealthDetails,
} from '../../../Store/Actions.js';
// import { SignUpUser } from '../../../context/authcontext';
import store from '../../../Store/store';
import { persistor } from '../../../Store/store';
import { Button, Dialog, TextField, ThemeProvider } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useStyles } from './dialogStyles';
import { theme } from '../../../utils/theme/theme';
import { MdAccountCircle } from 'react-icons/md';

function PatientSignup({
   show,
   handleClose,
}: {
   show: boolean;
   handleClose: () => void;
}) {
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

   // handles if patient needs a guardian
   const [needGuardian, setNeedGuardian] = useState(false);

   const classes = useStyles();

   const schema = z.object({
      firstname: z.string().min(3),
      lastname: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
      dob: z.string().min(3),
   });

   const { control, handleSubmit, formState } = useForm({
      mode: 'onChange',
      resolver: zodResolver(schema),
   });

   return (
      <Dialog open={show} onClose={handleClose}>
         <form
            className={styles.signupBody}
            onSubmit={(e) => {
               e.preventDefault();
            }}
         >
            <div id={styles.signupContent} className={styles.active}>
               <div className={styles.signupContainer}>
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
                  <div
                     className={
                        needGuardian
                           ? `${styles.rightRegion} ${styles.hideForm}`
                           : `${styles.rightRegion}`
                     }
                  >
                     <div className={isError ? styles.error : styles.noerror}>
                        <p>{errorMessage}</p>
                        <i
                           className={styles.closeIcon}
                           onClick={() => {
                              setIsError(false);
                           }}
                        >
                           <IoCloseOutline />
                        </i>
                     </div>
                     <div className={styles.formSideContainer}>
                        <div className={styles.signupFormTitle}>
                           <h3>Create New Account</h3>
                           <p>Take control of your health today</p>
                        </div>
                        <div className={styles.signupForm}>
                           <div className={styles.signupFormBoxNames}>
                              <div className={styles.signupFormBoxName}>
                                 {/* <label htmlFor="firstname"> Firstname</label> */}
                                 <label htmlFor="firstname">Firstname</label>
                                 <Controller
                                    name="firstname"
                                    control={control}
                                    rules={{
                                       required: {
                                          value: true,
                                          message: 'Firstname is required',
                                       },
                                    }}
                                    render={({ field }) => (
                                       <TextField
                                          {...field}
                                          id="firstname"
                                          placeholder="Enter Firstname"
                                          variant="outlined"
                                          error={Boolean(
                                             formState.errors.firstname
                                          )}
                                          required
                                          fullWidth
                                          autoFocus
                                          size="small"
                                          className={classes.inputField}
                                       />
                                    )}
                                 />
                              </div>
                              <div className={styles.signupFormBoxName}>
                                 {/* <label htmlFor="lastname"> Lastname</label> */}
                                 <label htmlFor="lastname">Lastname</label>
                                 <Controller
                                    name="lastname"
                                    control={control}
                                    rules={{
                                       required: {
                                          value: true,
                                          message: 'Lastname is required',
                                       },
                                    }}
                                    render={({ field }) => (
                                       <TextField
                                          {...field}
                                          id="lastname"
                                          placeholder="Enter Lastname"
                                          variant="outlined"
                                          error={Boolean(
                                             formState.errors.lastname
                                          )}
                                          required
                                          fullWidth
                                          size="small"
                                          className={classes.inputField}
                                       />
                                    )}
                                 />
                              </div>
                           </div>
                           <div className={styles.noErrorMessageBox}>
                              <i>
                                 <IoWarning />
                              </i>
                           </div>
                           <div className={styles.signupFormBox}>
                              {/* <label htmlFor="date"> Date of Birth</label> */}
                              <h3>Date of Birth</h3>

                              <div className={styles.signupFormBoxInputs}>
                                 <i>
                                    <IoCalendar />
                                 </i>
                                 <input
                                    type="text"
                                    name="date"
                                    id="date"
                                    placeholder="DD/MM/YYYY"
                                    onFocus={(event) =>
                                       (event.target.type = 'date')
                                    }
                                    onBlur={(event) => {
                                       if (!event.target.value) {
                                          event.target.type = 'text';
                                       }
                                    }}
                                    onChange={() => {
                                       setIsError(false);
                                    }}
                                    disabled={btnActive}
                                 />
                              </div>
                           </div>
                           <div className={styles.noErrorMessageBox}>
                              <i>
                                 <IoWarning />
                              </i>
                           </div>
                           <div className={styles.signupFormBox}>
                              {/* <label htmlFor="email"> Email</label> */}
                              <h3>Email</h3>

                              <div className={styles.signupFormBoxInputs}>
                                 <i>
                                    <IoIosMail />
                                 </i>
                                 <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="someone@example.com"
                                    onChange={() => {
                                       setIsError(false);
                                    }}
                                    disabled={btnActive}
                                 />
                              </div>
                           </div>
                           <div className={styles.noErrorMessageBox}>
                              <i>
                                 <IoWarning />
                              </i>
                           </div>
                           <div className={styles.signupFormBox}>
                              {/* <label htmlFor="passwordone"> Password</label> */}
                              <h3>Password</h3>

                              <div className={styles.signupFormBoxInputs}>
                                 <i>
                                    <RiLockPasswordFill />
                                 </i>
                                 <input
                                    type={hidePasswordOne ? 'password' : 'text'}
                                    name="password"
                                    id="password1"
                                    placeholder="Enter a password"
                                    onChange={() => {
                                       setIsError(false);
                                    }}
                                    disabled={btnActive}
                                 />
                                 <i
                                    onClick={() =>
                                       setHidePasswordOne(!hidePasswordOne)
                                    }
                                 >
                                    {hidePasswordOne ? (
                                       <AiOutlineEye />
                                    ) : (
                                       <AiOutlineEyeInvisible />
                                    )}
                                 </i>
                              </div>
                           </div>
                           {/* <div
                              className={
                                 props.registerPasswordOneError
                                    ? styles.errorMessageBox
                                    : styles.noErrorMessageBox
                              }
                           >
                              <i>
                                 <IoWarning />
                              </i>
                              <p>{props.registerPasswordOneErrorMessage}</p>
                           </div> */}

                           <div className={styles.signupFormBox}>
                              {/* <label htmlFor="passwordconfirm">
                           Confirm Password
                        </label> */}
                              <h3>Confirm Password</h3>

                              <div className={styles.signupFormBoxInputs}>
                                 <i>
                                    <RiLockPasswordFill />
                                 </i>
                                 <input
                                    name="passwordconfirm"
                                    type={hidePasswordTwo ? 'password' : 'text'}
                                    id="password2"
                                    placeholder="Confirm your password"
                                    onChange={() => {
                                       setIsError(false);
                                    }}
                                    disabled={btnActive}
                                 />
                                 <i
                                    onClick={() =>
                                       setHidePasswordTwo(!hidePasswordTwo)
                                    }
                                 >
                                    {hidePasswordTwo ? (
                                       <AiOutlineEye />
                                    ) : (
                                       <AiOutlineEyeInvisible />
                                    )}
                                 </i>
                              </div>
                           </div>
                           <ThemeProvider theme={theme}>
                              <Button
                                 type="submit"
                                 variant="contained"
                                 // disabled={!formState.isValid}
                                 disabled={false}
                                 startIcon={<MdAccountCircle />}
                              >
                                 Submit
                              </Button>
                           </ThemeProvider>
                           {/* <div
                              className={
                                 props.registerPasswordTwoError
                                    ? styles.errorMessageBox
                                    : styles.noErrorMessageBox
                              }
                           >
                              <i>
                                 <IoWarning />
                              </i>
                              <p>{props.registerPasswordTwoErrorMessage}</p>
                           </div> */}
                           {/* <div className={styles.signupFormButton}>
                              <button
                                 id="submit-btn"
                                 // className={
                                 //    btnActive
                                 //       ? `${styles.signupBtn} ${styles.btnActive}`
                                 //       : styles.signupBtn
                                 // }
                                 className={
                                    props.registerNameError === true ||
                                    props.registerEmailError === true ||
                                    props.registerDateError === true ||
                                    props.registerPasswordOneError === true ||
                                    props.registerPasswordTwoError === true ||
                                    props.registerNameError === null ||
                                    props.registerEmailError === null ||
                                    props.registerDateError === null ||
                                    props.registerPasswordOneError === null ||
                                    props.registerPasswordTwoError === null
                                       ? styles.signupBtnInactive
                                       : btnActive
                                       ? `${styles.signupBtn} ${styles.btnActive}`
                                       : styles.signupBtn
                                 }
                                 disabled={
                                    props.registerNameError === true ||
                                    props.registerEmailError === true ||
                                    props.registerDateError === true ||
                                    props.registerPasswordOneError === true ||
                                    props.registerPasswordTwoError === true ||
                                    props.registerNameError === null ||
                                    props.registerEmailError === null ||
                                    props.registerDateError === null ||
                                    props.registerPasswordOneError === null ||
                                    props.registerPasswordTwoError === null ||
                                    btnActive
                                 }
                                 onClick={() => {
                                    setBtnValue('Creating Account');
                                    setBtnActive(true);
                                    submitHandler();
                                 }}
                              >
                                 <p>{btnValue}</p>
                                 <div
                                    className={
                                       btnActive
                                          ? `${styles.loader} ${styles.btnActive}`
                                          : styles.loader
                                    }
                                 >
                                    <i>
                                       <BiLoaderAlt />
                                    </i>
                                 </div>
                              </button>
                           </div> */}
                           {/* <div className={styles.signupFormMessage}>
                              <p>Already have an account? </p>
                              <p
                                 id={styles.signupFormMessageP}
                                 onClick={() => {
                                    props.handleModalLogin();

                                    signUpFormRef.current.reset();
                                    props.reset();
                                    setIsError(false);
                                    setBtnActive(false);
                                    setBtnValue('Create Account');
                                 }}
                              >
                                 Login
                              </p>
                           </div> */}
                        </div>
                     </div>
                     <div></div>
                  </div>
                  {/* <GuardianForm
                     setNewGuardianId={props.setNewGuardianId}
                     newGuardianId={props.newGuardianId}
                     submitCredentialsFeedback={submitCredentialsFeedback}
                     needGuardian={needGuardian}
                  /> */}
               </div>
            </div>
         </form>
      </Dialog>
   );
}

export default PatientSignup;
