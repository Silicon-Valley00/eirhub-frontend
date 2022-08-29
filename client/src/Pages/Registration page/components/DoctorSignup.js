import React, { useState, useRef } from 'react';
import styles from './signup.module.css';
import signUp from '../../../images/signupimage.svg';
import { FaRegUser, FaRegHospital } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';
import { IoCalendar, IoWarning, IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import hospital from '../../../assets/hospital.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDoctorsProfileInfo } from '../../../Store/DoctorAction.js';
import { SignUpUser } from '../../../context/authcontext';

function DoctorSignup(props) {
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
            }
      }`,
            `${feedback[1].first_name.toLowerCase()}${feedback[1].last_name.toLowerCase()}${
               feedback[1].id_doctor
            }`
         );
         dispatch(fetchDoctorsProfileInfo(feedback[1].id_doctor));
         setTimeout(() => {
            navigate('/doctordashboard');
         }, 1500);
      } else {
         // when signup was unsuccessful
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
            className={props.modalSignupDoctor ? styles.active : ''}
         >
            <div
               className={styles.closeModal}
               onClick={() => {
                  props.handleModalsClose();
                  docSignUpFormRef.current.reset();
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
                  <form ref={docSignUpFormRef} className={styles.signupForm}>
                     <div className={styles.signupFormBoxNames}>
                        <div className={styles.signupFormBoxName}>
                           <h3> Firstname</h3>
                           <div
                              className={
                                 props.registerDoctorNameError
                                    ? styles.signupFormBoxNameInputsError
                                    : styles.signupFormBoxNameInputs
                              }
                           >
                              <i>
                                 <FaRegUser />
                              </i>
                              <input
                                 name="firstName"
                                 type="text"
                                 id="docfirstname"
                                 placeholder="Enter Firstname"
                                 ref={props.doctorSignupFirstname}
                                 onChange={() => {
                                    props.handleRegisterDoctor();
                                    setIsError(false);
                                 }}
                                 disabled={btnActive}
                              />
                           </div>
                        </div>
                        <div className={styles.signupFormBoxName}>
                           <h3> Lastname</h3>
                           <div
                              className={
                                 props.registerDoctorNameError
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
                                 id="doclastname"
                                 placeholder="Enter Lastname"
                                 ref={props.doctorSignupLastname}
                                 onChange={() => {
                                    props.handleRegisterDoctor();
                                    setIsError(false);
                                 }}
                                 disabled={btnActive}
                              />
                           </div>
                        </div>
                     </div>
                     <div
                        className={
                           props.registerDoctorNameError
                              ? styles.errorMessageBox
                              : styles.noErrorMessageBox
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerDoctorNameErrorMessage}</p>
                     </div>

                     <div className={styles.signupFormBox}>
                        <h3> Email</h3>
                        <div
                           className={
                              props.registerDoctorEmailError
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
                              id="docemail"
                              placeholder="someone@example.com"
                              ref={props.doctorSignupEmail}
                              onChange={() => {
                                 props.handleRegisterDoctorEmail();
                                 setIsError(false);
                              }}
                              disabled={btnActive}
                           />
                        </div>
                     </div>
                     <div
                        className={
                           props.registerDoctorEmailError
                              ? styles.errorMessageBox
                              : styles.noErrorMessageBox
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerDoctorEmailErrorMessage}</p>
                     </div>
                     <div className={styles.signupFormBox}>
                        <h3> Hospital code</h3>
                        <div
                           className={
                              props.registerHospitalCodeError
                                 ? styles.signupFormBoxInputsError
                                 : styles.signupFormBoxInputs
                           }
                        >
                           <i>
                              <FaRegHospital />
                           </i>
                           <input
                              type="text"
                              name="signupHospitalCode"
                              id="docSignupHospitalCode"
                              placeholder="Enter hospital code"
                              ref={props.signupHospitalCode}
                              onFocus={(event) => (event.target.type = 'text')}
                              // onBlur={(event) => {
                              //     if (!event.target.value) {
                              //         event.target.type = 'text';
                              //     }
                              // }}
                              onChange={() => {
                                 props.handleRegisterHospitalCode();
                                 setIsError(false);
                              }}
                              disabled={btnActive}
                           />
                        </div>
                     </div>
                     <div
                        className={
                           props.registerHospitalCodeError
                              ? styles.errorMessageBox
                              : styles.noErrorMessageBox
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerHospitalCodeErrorMessage}</p>
                     </div>
                     <div className={styles.signupFormBox}>
                        <h3> Password</h3>
                        <div
                           className={
                              props.registerDoctorPasswordOneError
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
                              id="docpassword1"
                              placeholder="Enter a password"
                              ref={props.doctorSignupPassword}
                              onChange={() => {
                                 props.handleRegisterDoctorPassword();
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
                           props.registerDoctorPasswordOneError
                              ? styles.errorMessageBox
                              : styles.noErrorMessageBox
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerDoctorPasswordOneErrorMessage}</p>
                     </div>

                     <div className={styles.signupFormBox}>
                        <h3>Confirm Password</h3>
                        <div
                           className={
                              props.registerDoctorPasswordTwoError
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
                              id="docpassword2"
                              placeholder="Confirm your password"
                              ref={props.doctorSignupPasswordconfirm}
                              onChange={() => {
                                 props.handleRegisterDoctorPasswordConfirm();
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
                           props.registerDoctorPasswordTwoError
                              ? styles.errorMessageBox
                              : styles.noErrorMessageBox
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerDoctorPasswordTwoErrorMessage}</p>
                     </div>
                     <div className={styles.signupFormButton}>
                        <button
                           id="docsubmit-btn"
                           // className={
                           //    btnActive
                           //       ? `${styles.signupBtn} ${styles.btnActive}`
                           //       : styles.signupBtn
                           // }
                           className={
                              props.registerDoctorNameError === true ||
                              props.registerDoctorEmailError === true ||
                              props.registerHospitalCodeError === true ||
                              props.registerDoctorPasswordOneError === true ||
                              props.registerDoctorPasswordTwoError === true ||
                              props.registerDoctorNameError === null ||
                              props.registerDoctorEmailError === null ||
                              props.registerHospitalCodeError === null ||
                              props.registerDoctorPasswordOneError === null ||
                              props.registerDoctorPasswordTwoError === null
                                 ? styles.signupBtnInactive
                                 : btnActive
                                 ? `${styles.signupBtn} ${styles.btnActive}`
                                 : styles.signupBtn
                           }
                           disabled={
                              props.registerDoctorNameError === true ||
                              props.registerDoctorEmailError === true ||
                              props.registerHospitalCodeError === true ||
                              props.registerDoctorPasswordOneError === true ||
                              props.registerDoctorPasswordTwoError === true ||
                              props.registerDoctorNameError === null ||
                              props.registerDoctorEmailError === null ||
                              props.registerHospitalCodeError === null ||
                              props.registerDoctorPasswordOneError === null ||
                              props.registerDoctorPasswordTwoError === null ||
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
                              props.handleModalLoginDoctor();
                              docSignUpFormRef.current.reset();
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

export default DoctorSignup;
