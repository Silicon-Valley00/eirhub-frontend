import React, { useState, useRef, useEffect } from 'react';
import styles from './signup.module.css';
import { IoCalendar, IoWarning, IoCloseOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';
import { BiLoaderAlt } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { setGuardianInfo } from '../../../Store/Actions';
import {
   namePattern,
   emailPattern,
   idNumberPattern,
} from '../../../utils/FormValidators';

export function GuardianForm(props) {
   const dispatch = useDispatch();

   // handles button changes
   const [btnValue, setBtnValue] = useState('Create Account');
   const [btnActive, setBtnActive] = useState(false);
   const [submitClicked, setSubmitClicked] = useState(false);
   const [enableButton, setEnableButton] = useState(false);
   // btnActive is for when button can  be clicked to create account. This would be set to false when an error occurs

   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);

   // error messages
   const [nameError, setNameError] = useState(null);
   const [dateOfBirthError, setDateOfBirthError] = useState(null);
   const [emailError, setEmailError] = useState(null);
   const [idNumberError, setIdNumberError] = useState(null);

   const guardianFirstName = useRef();
   const guardianLastName = useRef();
   const gurdianDateOfBirth = useRef();
   const guardianEmail = useRef();
   const guardianIdNumber = useRef();
   const guardianFormRef = useRef();

   // if (!props.needGuardian) {
   //     guardianFormRef.current.reset();
   // }

   function handleGuardianNamesChange() {
      if (
         guardianFirstName.current.value.trim().length &&
         guardianLastName.current.value.trim().length
      ) {
         if (
            guardianFirstName.current.value.trim().match(namePattern) &&
            guardianLastName.current.value.trim().match(namePattern)
         ) {
            setNameError(null);
         } else {
            setNameError('Name must contain only letters and hyphens.');
         }
      } else {
         setNameError(null);
      }
      checkEnableButton();
   }

   function handleDateOfBirthChange() {
      const guardianAge =
         new Date().getFullYear() -
         new Date(gurdianDateOfBirth.current.value).getFullYear();
      if (gurdianDateOfBirth.current.value === '') {
         setDateOfBirthError('Date required');
      } else if (guardianAge < 18) {
         setDateOfBirthError('Guardian must be 18 years or older.');
      } else {
         setDateOfBirthError(null);
      }
      checkEnableButton();
   }

   function handleEmailChange() {
      if (
         guardianEmail.current.value &&
         guardianEmail.current.value.trim().match(emailPattern)
      ) {
         setEmailError(null);
      } else if (!guardianEmail.current.value.length) {
         setEmailError(null);
      } else {
         setEmailError('Invalid email address.');
      }
      checkEnableButton();
   }

   function handleIdNumberChange() {
      if (!guardianIdNumber.current.value.length) {
         setIdNumberError(null);
      } else if (
         guardianIdNumber.current.value &&
         guardianIdNumber.current.value.trim().match(idNumberPattern)
      ) {
         setIdNumberError(null);
      } else {
         setIdNumberError('Invalid ID number.');
      }
      checkEnableButton();
   }

   function formValid() {
      const guardianAge =
         new Date().getFullYear() -
         new Date(gurdianDateOfBirth.current.value).getFullYear();
      if (
         guardianFirstName.current.value.length &&
         guardianLastName.current.value.length &&
         gurdianDateOfBirth.current.value.length &&
         guardianEmail.current.value.length &&
         guardianIdNumber.current.value.length
      ) {
         if (
            guardianFirstName.current.value.trim().match(namePattern) &&
            guardianLastName.current.value.trim().match(namePattern) &&
            guardianEmail.current.value.trim().match(emailPattern) &&
            guardianIdNumber.current.value.trim().match(idNumberPattern) &&
            guardianAge >= 18
         ) {
            return true;
         } else {
            return false;
         }
      } else {
         return false;
      }
   }

   function checkEnableButton() {
      if (formValid()) {
         setEnableButton(true);
      } else {
         setEnableButton(false);
      }
   }

   function activateButtonLoading() {
      if (enableButton && submitClicked) {
         return true;
      }
      return false;
   }

   function handleFormSubmission() {
      setSubmitClicked(true);
      const guardianData = {
         first_name: guardianFirstName.current.value,
         middle_name: '',
         last_name: guardianLastName.current.value,
         user_email: guardianEmail.current.value,
         date_of_birth: gurdianDateOfBirth.current.value,
         house_address: '',
         phone_number: '',
         id_number: guardianIdNumber.current.value,
         gender: '',
      };

      axios
         .post('https://eirhub-backend.herokuapp.com/guardians', guardianData, {
            headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
         })
         .then((response) => {
            props.setNewGuardianId(response.data.msg.id_guardian);
            dispatch(setGuardianInfo(response.data.msg));
         })
         .catch((error) => {
            props.setNewGuardianId(null);
            setErrorMessage(
               'Error while adding guardian information. Please try again.'
            );
            setIsError(true);
         });
   }

   useEffect(() => {
      if (submitClicked) {
         props.submitCredentialsFeedback();
      }
   }, [props.newGuardianId]);

   return (
      <div
         className={
            !props.needGuardian
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
               <h3>Guardian Details</h3>
               <p>Enter your guardian information</p>
            </div>
            <form
               // ref={guardianFormRef}
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
                           nameError
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
                           id="guardian-firstname"
                           placeholder="Enter Firstname"
                           ref={guardianFirstName}
                           onChange={() => {
                              handleGuardianNamesChange();
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
                           nameError
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
                           id="guardian-lastname"
                           placeholder="Enter Lastname"
                           ref={guardianLastName}
                           onChange={() => {
                              handleGuardianNamesChange();
                           }}
                           disabled={btnActive}
                        />
                     </div>
                  </div>
               </div>
               <div
                  className={
                     nameError
                        ? styles.errorMessageBox
                        : styles.noErrorMessageBox
                  }
               >
                  <i>
                     <IoWarning />
                  </i>
                  <p>{nameError}</p>
               </div>
               <div className={styles.signupFormBox}>
                  {/* <label htmlFor="date"> Date of Birth</label> */}
                  <h3>Date of Birth</h3>

                  <div
                     className={
                        dateOfBirthError
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
                        id="guardian-date"
                        placeholder="DD/MM/YYYY"
                        ref={gurdianDateOfBirth}
                        onFocus={(event) => (event.target.type = 'date')}
                        onBlur={(event) => {
                           if (!event.target.value) {
                              event.target.type = 'text';
                           }
                        }}
                        onChange={() => {
                           handleDateOfBirthChange();
                        }}
                        disabled={btnActive}
                     />
                  </div>
               </div>
               <div
                  className={
                     dateOfBirthError
                        ? styles.errorMessageBox
                        : styles.noErrorMessageBox
                  }
               >
                  <i>
                     <IoWarning />
                  </i>
                  <p>{dateOfBirthError}</p>
               </div>
               <div className={styles.signupFormBox}>
                  {/* <label htmlFor="email"> Email</label> */}
                  <h3>Email</h3>

                  <div
                     className={
                        emailError
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
                        id="guardian-email"
                        placeholder="someone@example.com"
                        ref={guardianEmail}
                        onChange={() => {
                           handleEmailChange();
                        }}
                        disabled={btnActive}
                     />
                  </div>
               </div>
               <div
                  className={
                     emailError
                        ? styles.errorMessageBox
                        : styles.noErrorMessageBox
                  }
               >
                  <i>
                     <IoWarning />
                  </i>
                  <p>{emailError}</p>
               </div>

               <div className={styles.signupFormBox}>
                  {/* <label htmlFor="email"> Email</label> */}
                  <h3>ID Number</h3>

                  <div
                     className={
                        idNumberError
                           ? styles.signupFormBoxInputsError
                           : styles.signupFormBoxInputs
                     }
                  >
                     <i>
                        <IoIosMail />
                     </i>
                     <input
                        name="id-number"
                        type="text"
                        id="guardian-id-number"
                        placeholder="GHA-123456789-0"
                        ref={guardianIdNumber}
                        onChange={(e) => {
                           handleIdNumberChange();
                        }}
                        disabled={btnActive}
                     />
                  </div>
               </div>
               <div
                  className={
                     idNumberError
                        ? styles.errorMessageBox
                        : styles.noErrorMessageBox
                  }
               >
                  <i>
                     <IoWarning />
                  </i>
                  <p>{idNumberError}</p>
               </div>

               <div className={styles.signupFormButton}>
                  <button
                     id="guardian-submit-btn"
                     className={
                        !enableButton
                           ? styles.signupBtnInactive
                           : activateButtonLoading()
                           ? `${styles.signupBtn} ${styles.btnActive}`
                           : styles.signupBtn
                     }
                     disabled={!enableButton || submitClicked}
                     onClick={() => {
                        setBtnValue('Creating Account');
                        setSubmitClicked(true);
                        handleFormSubmission();
                     }}
                  >
                     <p>{btnValue}</p>
                     <div
                        className={
                           activateButtonLoading()
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
               <div className={styles.signupFormMessage}></div>
            </form>
         </div>
         <div></div>
      </div>
   );
}
