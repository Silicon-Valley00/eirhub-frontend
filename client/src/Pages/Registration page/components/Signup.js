import React, { useState } from 'react';
import styles from './signup.module.css';
import signUp from '../../../images/signupimage.svg';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';
import { IoCalendar } from 'react-icons/io5';
import { IoWarning } from 'react-icons/io5';

function Signup(props) {
   // Handles password visibilty
   const [hidePasswordOne, setHidePasswordOne] = useState(true);
   const [hidePasswordTwo, setHidePasswordTwo] = useState(true);
   return (
      <section className={styles.signupBody}>
         <div
            id={styles.signupContent}
            className={props.modalSignup ? styles.active : ''}
         >
            <div className={styles.signupContainer}>
               <div className={styles.leftRegion}>
                  <h3 onClick={() => props.handleModalsClose()}>Eirhub</h3>
                  <div className={styles.leftRegionInfoOne}>
                     <p>Sign up today and get in touch</p>
                  </div>

                  <div className={styles.leftRegionInfoTwo}>
                     <p> with doctors you can trust</p>
                  </div>
                  <div className={styles.leftRegionImage}>
                     <img src={signUp} alt="Sign-up image" />
                  </div>
               </div>
               <div className={styles.rightRegion}>
                  <div className={styles.signupFormTitle}>
                     <h3>Create New Account</h3>
                     <p>Take control of your health today</p>
                  </div>
                  <div className={styles.signupForm}>
                     <div className={styles.signupFormBoxNames}>
                        <div className={styles.signupFormBoxName}>
                           <label htmlFor="firstname"> Firstname</label>
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
                              />
                           </div>
                        </div>
                        <div className={styles.signupFormBoxName}>
                           <label htmlFor="lastname"> Lastname</label>
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
                        <label htmlFor="date"> Date of Birth</label>
                        <div
                           className={
                              props.registerDateError
                                 ? styles.signupFormBoxNameInputsError
                                 : styles.signupFormBoxNameInputs
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
                        <label htmlFor="email"> Email</label>
                        <div
                           className={
                              props.registerEmailError
                                 ? styles.signupFormBoxNameInputsError
                                 : styles.signupFormBoxNameInputs
                           }
                        >
                           <i>
                              <IoIosMail />
                           </i>
                           <input
                              name="email"
                              type="email"
                              id="email"
                              placeholder="Enter mail"
                              ref={props.signupEmail}
                              onChange={() => {
                                 props.handleRegisterEmail();
                              }}
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
                        <label htmlFor="passwordone"> Password</label>
                        <div
                           className={
                              props.registerPasswordOneError
                                 ? styles.signupFormBoxNameInputsError
                                 : styles.signupFormBoxNameInputs
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
                        <label htmlFor="passwordconfirm">
                           Confirm Password
                        </label>
                        <div
                           className={
                              props.registerPasswordTwoError
                                 ? styles.signupFormBoxNameInputsError
                                 : styles.signupFormBoxNameInputs
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
                        <input
                           type="submit"
                           id="submit-btn"
                           value="Create Account"
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
                              props.submitUserCredentialsHandler();
                           }}
                        />
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
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Signup;
