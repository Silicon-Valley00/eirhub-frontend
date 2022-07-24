import React, { useState } from 'react';
import styles from './signup.module.css';
import signUp from '../../../images/signupimage.svg';
import { FaRegUser, FaRegHospital } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';
import { IoCalendar, IoWarning, IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import hospital from '../../../assets/hospital.svg';

function DoctorSignup(props) {
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
            className={props.modalSignupDoctor ? styles.active : ''}
         >
            <div
               className={styles.closeModal}
               onClick={() => {
                  props.handleModalsClose();
                  props.docSignUpFormRef.current.reset();
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
                  <form
                     ref={props.docSignUpFormRef}
                     className={styles.signupForm}
                  >
                     <div className={styles.signupFormBoxNames}>
                        <div className={styles.signupFormBoxName}>
                           <label htmlFor="firstname"> Firstname</label>
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
                                 name="firstname"
                                 type="text"
                                 id="docfirstname"
                                 placeholder="Enter Firstname"
                                 ref={props.doctorSignupFirstname}
                                 onChange={() => {
                                    props.handleRegisterDoctor();
                                 }}
                                 disabled={btnActive}
                              />
                           </div>
                        </div>
                        <div className={styles.signupFormBoxName}>
                           <label htmlFor="lastname"> Lastname</label>
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
                        <label htmlFor="email"> Email</label>
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
                        <label htmlFor="signupHospitalCode">
                           {' '}
                           Hospital code
                        </label>
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
                        <label htmlFor="passwordone"> Password</label>
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
                        <label htmlFor="passwordconfirm">
                           Confirm Password
                        </label>
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
                              props.registerDoctorPasswordTwoError === null
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
                           onClick={() => props.handleModalLoginDoctor()}
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

//                             <div className={styles.signupFormBox}>
//         <h3>Confirm Password</h3>
//                                 <div
//                                     className={
//                                         props.registerPasswordTwoError
//                                             ? styles.signupFormBoxInputsError
//                                             : styles.signupFormBoxInputs
//                                     }
//                                 >
//                                     <i>
//                                         <RiLockPasswordFill />
//                                     </i>
//                                     <input
//                                         name="passwordconfirm"
//                                         type={hidePasswordTwo ? 'password' : 'text'}
//                                         id="password2"
//                                         placeholder="Confirm your password"
//                                         ref={props.signupPasswordconfirm}
//                                         onChange={() => {
//                                             props.handleRegisterPasswordConfirm();
//                                         }}
//                                         disabled={btnActive}
//                                     />
//                                     <i
//                                         onClick={() =>
//                                             setHidePasswordTwo(!hidePasswordTwo)
//                                         }
//                                     >
//                                         {hidePasswordTwo ? (
//                                             <AiOutlineEye />
//                                         ) : (
//                                                 <AiOutlineEyeInvisible />
//                                             )}
//                                     </i>
//                                 </div>
//                             </div>
//                             <div
//                                 className={
//                                     props.registerPasswordTwoError
//                                         ? styles.errorMessageBox
//                                         : styles.noErrorMessageBox
//                                 }
//                             >
//                                 <i>
//                                     <IoWarning />
//                                 </i>
//                                 <p>{props.registerPasswordTwoErrorMessage}</p>
//                             </div>
//                             <div className={styles.signupFormButton}>
//                                 <button
//                                     id="submit-btn"
//                                     // className={
//                                     //    btnActive
//                                     //       ? `${styles.signupBtn} ${styles.btnActive}`
//                                     //       : styles.signupBtn
//                                     // }
//                                     className={
//                                         props.registerNameError === true ||
//                                             props.registerEmailError === true ||
//                                             props.registerDateError === true ||
//                                             props.registerPasswordOneError === true ||
//                                             props.registerPasswordTwoError === true ||
//                                             props.registerNameError === null ||
//                                             props.registerEmailError === null ||
//                                             props.registerDateError === null ||
//                                             props.registerPasswordOneError === null ||
//                                             props.registerPasswordTwoError === null
//                                             ? styles.signupBtnInactive
//                                             : btnActive
//                                                 ? `${styles.signupBtn} ${styles.btnActive}`
//                                                 : styles.signupBtn
//                                     }
//                                     disabled={
//                                         props.registerNameError === true ||
//                                         props.registerEmailError === true ||
//                                         props.registerDateError === true ||
//                                         props.registerPasswordOneError === true ||
//                                         props.registerPasswordTwoError === true ||
//                                         props.registerNameError === null ||
//                                         props.registerEmailError === null ||
//                                         props.registerDateError === null ||
//                                         props.registerPasswordOneError === null ||
//                                         props.registerPasswordTwoError === null
//                                     }
//                                     onClick={() => {
//                                         setBtnValue('Creating Account');
//                                         setBtnActive(true);
//                                         props.submitUserCredentialsHandler();
//                                     }}
//                                 >
//                                     <p>{btnValue}</p>
//                                     <div
//                                         className={
//                                             btnActive
//                                                 ? `${styles.loader} ${styles.btnActive}`
//                                                 : styles.loader
//                                         }
//                                     >
//                                         <i>
//                                             <BiLoaderAlt />
//                                         </i>
//                                     </div>
//                                 </button>
//                             </div>
//                             <div className={styles.signupFormMessage}>
//                                 <p>Already have an account?</p>
//                                 <p
//                                     id={styles.signupFormMessageP}
//                                     onClick={() => props.handleModalLoginDoctor()}
//                                 >
//                                     Login
//                         </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
export default DoctorSignup;
