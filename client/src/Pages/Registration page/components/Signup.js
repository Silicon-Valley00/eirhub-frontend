import React, { useState, useRef } from 'react';
import styles from './signup.module.css';
import signUp from '../../../images/Patientsignup.svg';
import { FaRegUser, FaTimes } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';
import { IoCalendar, IoWarning, IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
   fetchProfile,
   fetchProfileOnSignup,
   setPatientAuth,
   setUserInfo,
} from '../../../Store/Actions.js';
import { SignUpUser } from '../../../context/authcontext';

function Signup(props) {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const signUpFormRef = useRef();

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

   // handles registeration flow based on feedback from database
   async function submitCredentialsFeedback() {
      const feedback = await props.submitUserCredentialsHandler();

      // checks if user signup was successful
      if (feedback[0] === true) {
         setBtnActive(feedback[0]);
         setBtnValue(feedback[2]);
         //registers user into cometchat
         SignUpUser(
            `${
               feedback[1].first_name.charAt(0).toUpperCase() +
               feedback[1].first_name.slice(1)
            } ${
               feedback[1].last_name.charAt(0).toUpperCase() +
               feedback[1].last_name.slice(1)
            }`,
            `${feedback[1].first_name.toLowerCase()}${feedback[1].last_name.toLowerCase()}${
               feedback[1].id_patient
            }`
         );
         dispatch(
            setUserInfo({
               name: `${
                  feedback[1].first_name.charAt(0).toUpperCase() +
                  feedback[1].first_name.slice(1)
               }`,
               id_patient: feedback[1].id_patient,
               id_guardian: '',
            })
         );
         dispatch(fetchProfileOnSignup(feedback[1].id_patient));
         navigate('/loading');

         dispatch(setPatientAuth(true));

         setTimeout(() => {
            navigate('/userdashboard');
         }, 1500);
      } else {
         setBtnActive(feedback[0]);
         setBtnValue('Create Account');
         setErrorMessage(feedback[1]);
         setIsError(true);
      }
   }
   return (
      <div className={styles.signupBody}>
         <div
            id={styles.signupContent}
            className={props.modalSignup ? styles.active : ''}
         >
            <div
               className={styles.closeModal}
               onClick={() => {
                  props.handleModalsClose();
                  signUpFormRef.current.reset();
                  props.reset();
                  setIsError(false);
               }}
            >
               <i>
                  <IoCloseOutline />
               </i>
            </div>
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
               <div className={styles.rightRegion}>
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
                  <div className={styles.signupFormTitle}>
                     <h3>Create New Account</h3>
                     <p>Take control of your health today</p>
                  </div>
                  <form
                     ref={signUpFormRef}
                     className={styles.signupForm}
                     onSubmit={(e) => {
                        e.preventDefault();
                     }}
                  >
                     <div className={styles.signupFormBoxNames}>
                        <div className={styles.signupFormBoxName}>
                           {/* <label htmlFor="firstname"> Firstname</label> */}
                           <h3>Firstname</h3>

                           <div
                              className={
                                 props.registerNameError
                                    ? styles.signupFormBoxNameInputsError
                                    : styles.signupFormBoxNameInputs
                              }
                           >
                              <i>
                                 <FaRegUser />
                              </i>
                              <input
                                 name="firstname"
                                 type="text"
                                 id="firstname"
                                 placeholder="Enter Firstname"
                                 ref={props.signupFirstname}
                                 onChange={() => {
                                    props.handleRegisterUser();
                                    setIsError(false);

                                    setIsError(false);
                                 }}
                                 disabled={btnActive}
                              />
                           </div>
                        </div>
                        <div className={styles.signupFormBoxName}>
                           {/* <label htmlFor="lastname"> Lastname</label> */}
                           <h3>Lastname</h3>
                           <div
                              className={
                                 props.registerNameError
                                    ? styles.signupFormBoxNameInputsError
                                    : styles.signupFormBoxNameInputs
                              }
                           >
                              <i>
                                 <FaRegUser />
                              </i>
                              <input
                                 name="lastname"
                                 type="text"
                                 id="lastname"
                                 placeholder="Enter Lastname"
                                 ref={props.signupLastname}
                                 onChange={() => {
                                    props.handleRegisterUser();
                                 }}
                                 disabled={btnActive}
                              />
                           </div>
                        </div>
                     </div>
                     <div
                        className={
                           props.registerNameError
                              ? styles.errorMessageBox
                              : styles.noErrorMessageBox
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerNameErrorMessage}</p>
                     </div>
                     <div className={styles.signupFormBox}>
                        {/* <label htmlFor="date"> Date of Birth</label> */}
                        <h3>Date of Birth</h3>

                        <div
                           className={
                              props.registerDateError
                                 ? styles.signupFormBoxInputsError
                                 : styles.signupFormBoxInputs
                           }
                        >
                           <i>
                              <IoCalendar />
                           </i>
                           <input
                              type="text"
                              name="date"
                              id="date"
                              placeholder="DD/MM/YYYY"
                              ref={props.signupDate}
                              onFocus={(event) => (event.target.type = 'date')}
                              onBlur={(event) => {
                                 if (!event.target.value) {
                                    event.target.type = 'text';
                                 }
                              }}
                              onChange={() => {
                                 props.handleRegisterDate();
                                 setIsError(false);

                                 setIsError(false);
                              }}
                              disabled={btnActive}
                           />
                        </div>
                     </div>
                     <div
                        className={
                           props.registerDateError
                              ? styles.errorMessageBox
                              : styles.noErrorMessageBox
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerDateErrorMessage}</p>
                     </div>
                     <div className={styles.signupFormBox}>
                        {/* <label htmlFor="email"> Email</label> */}
                        <h3>Email</h3>

                        <div
                           className={
                              props.registerEmailError
                                 ? styles.signupFormBoxInputsError
                                 : styles.signupFormBoxInputs
                           }
                        >
                           <i>
                              <IoIosMail />
                           </i>
                           <input
                              name="email"
                              type="email"
                              id="email"
                              placeholder="someone@example.com"
                              ref={props.signupEmail}
                              onChange={() => {
                                 props.handleRegisterEmail();
                                 setIsError(false);
                              }}
                              disabled={btnActive}
                           />
                        </div>
                     </div>
                     <div
                        className={
                           props.registerEmailError
                              ? styles.errorMessageBox
                              : styles.noErrorMessageBox
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerEmailErrorMessage}</p>
                     </div>
                     <div className={styles.signupFormBox}>
                        {/* <label htmlFor="passwordone"> Password</label> */}
                        <h3>Password</h3>

                        <div
                           className={
                              props.registerPasswordOneError
                                 ? styles.signupFormBoxInputsError
                                 : styles.signupFormBoxInputs
                           }
                        >
                           <i>
                              <RiLockPasswordFill />
                           </i>
                           <input
                              type={hidePasswordOne ? 'password' : 'text'}
                              name="password"
                              id="password1"
                              placeholder="Enter a password"
                              ref={props.signupPassword}
                              onChange={() => {
                                 props.handleRegisterPassword();
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
                     <div
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
                     </div>

                     <div className={styles.signupFormBox}>
                        {/* <label htmlFor="passwordconfirm">
                           Confirm Password
                        </label> */}
                        <h3>Confirm Password</h3>

                        <div
                           className={
                              props.registerPasswordTwoError
                                 ? styles.signupFormBoxInputsError
                                 : styles.signupFormBoxInputs
                           }
                        >
                           <i>
                              <RiLockPasswordFill />
                           </i>
                           <input
                              name="passwordconfirm"
                              type={hidePasswordTwo ? 'password' : 'text'}
                              id="password2"
                              placeholder="Confirm your password"
                              ref={props.signupPasswordconfirm}
                              onChange={() => {
                                 props.handleRegisterPasswordConfirm();
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
                     <div
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
                     </div>
                     <div className={styles.signupFormButton}>
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
                              submitCredentialsFeedback();
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
                     </div>
                     <div className={styles.signupFormMessage}>
                        <p>Already have an account?</p>
                        <p
                           id={styles.signupFormMessageP}
                           onClick={() => {
                              props.handleModalLogin();

                              signUpFormRef.current.reset();
                              props.reset();
                              setIsError(false);
                           }}
                        >
                           Login
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Signup;
