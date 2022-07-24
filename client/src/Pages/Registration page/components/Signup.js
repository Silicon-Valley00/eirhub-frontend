import React, { useState } from 'react';
import styles from './signup.module.css';
import signUp from '../../../images/Patientsignup.svg';
import { FaRegUser, FaTimes } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';
import { IoCalendar, IoWarning, IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';

function Signup(props) {
   // handles button changes
   const [btnValue, setBtnValue] = useState('Create Account');
   const [btnActive, setBtnActive] = useState(false);
   // btnActive is for when button can  be clicked to create account. This would be set to false when an error occurs
   // Handles password visibility
   const [hidePasswordOne, setHidePasswordOne] = useState(true);
   const [hidePasswordTwo, setHidePasswordTwo] = useState(true);
   // Handles server error
   const [isError, setIsError] = useState(true);
   const [errorMessage, setErrorMessage] = useState(
      'Email already in use. Want to login?'
   );
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
                  props.signUpFormRef.current.reset();
                  props.reset();
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
                  <form ref={props.signUpFormRef} className={styles.signupForm}>
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
                        <h3>Confrim Password</h3>

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
                              props.registerPasswordTwoError === null
                           }
                           onClick={() => {
                              setBtnValue('Creating Account');
                              setBtnActive(true);
                              props.submitUserCredentialsHandler();
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
                           onClick={() => props.handleModalLogin()}
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
