import React, { useState, useRef } from 'react';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import './Registration.css';

function Registration() {
   // Modal change
   const [modal, setModal] = useState(false);
   function handleModal() {
      setModal(!modal);
   }
   // Handles state of page switch
   const [changePage, changePageHandler] = useState(true);

   // User sign in refs
   const signinUser = useRef();
   const signinPassword = useRef();
   // User sign up refs
   const signupFirstname = useRef();
   const signupLastname = useRef();
   const signupEmail = useRef();
   const signupPassword = useRef();
   const signupPasswordconfirm = useRef();
   const signupDate = useRef();

   // Handles error state of input boxes
   const [loginUserError, setLoginUserError] = useState(null);
   const [loginPasswordError, setLoginPasswordError] = useState(null);

   const [registerNameError, setRegisterNameError] = useState(null);
   const [registerDateError, setRegisterDateError] = useState(null);
   const [registerEmailError, setRegisterEmailError] = useState(null);
   const [registerPasswordOneError, setRegisterPasswordOneError] =
      useState(null);
   const [registerPasswordTwoError, setRegisterPasswordTwoError] =
      useState(null);

   // Handles erreo messages of input boxes
   const [registerNameErrorMessage, setRegisterNameErrorMessage] = useState('');
   const [registerDateErrorMessage, setRegisterDateErrorMessage] = useState('');
   const [registerEmailErrorMessage, setRegisterEmailErrorMessage] =
      useState('');
   const [registerPasswordOneErrorMessage, setRegisterPasswordOneErrorMessage] =
      useState('');
   const [registerPasswordTwoErrorMessage, setRegisterPasswordTwoErrorMessage] =
      useState('');

   const pattern = /^[a-zA-Z ]+$/;
   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   //Handles page switch for signin page
   function pageChangeSignin() {
      changePageHandler(true);
   }
   //Handles page switch for signup page
   function pageChangeSignup() {
      changePageHandler(false);
   }

   // Functions below check user credentials in login form
   function handleLoginUser() {
      let enteredSignInName = signinUser.current.value;

      if (enteredSignInName === '') {
         setLoginUserError(true);
      } else if (enteredSignInName.match(pattern)) {
         setLoginUserError(false);
      } else {
         setLoginUserError(true);
      }
   }

   function handleLoginPassword() {
      let enteredSignInPassword = signinPassword.current.value;

      if (enteredSignInPassword === '') {
         setLoginPasswordError(true);
      } else if (enteredSignInPassword.length < 8) {
         setLoginPasswordError(true);
      } else {
         setLoginPasswordError(false);
      }
   }

   // Functions below check user credentials in login form
   function handleRegisterUser() {
      let enteredSignUpFirstname = signupFirstname.current.value;
      let enteredSignUpLastname = signupLastname.current.value;

      if (enteredSignUpFirstname === '' || enteredSignUpLastname === '') {
         setRegisterNameErrorMessage('Full name required');
         setRegisterNameError(true);
      } else if (
         enteredSignUpFirstname.match(pattern) &&
         enteredSignUpLastname.match(pattern)
      ) {
         setRegisterNameError(false);
      } else {
         setRegisterNameErrorMessage('Name must have only letters');

         setRegisterNameError(true);
      }
   }

   function handleRegisterEmail() {
      let enteredSignUpEmail = signupEmail.current.value;

      if (enteredSignUpEmail === '') {
         setRegisterEmailErrorMessage('Email required');
         setRegisterEmailError(true);
      } else if (enteredSignUpEmail.match(emailPattern)) {
         setRegisterEmailError(false);
      } else {
         setRegisterEmailErrorMessage('Email format not valid');
         setRegisterEmailError(true);
      }
   }
   function handleRegisterDate() {
      let enteredSignUpDate = signupDate.current.value;

      if (enteredSignUpDate === '') {
         setRegisterDateErrorMessage('Date required');
         setRegisterDateError(true);
      } else {
         setRegisterDateError(false);
      }
   }

   function handleRegisterPassword() {
      let enteredSignUpPassword = signupPassword.current.value;

      if (enteredSignUpPassword === '') {
         setRegisterPasswordOneErrorMessage('Password required');
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.length < 8) {
         setRegisterPasswordOneErrorMessage(
            'Password must be at least 8 characters long'
         );
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[0-9]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least a number'
         );
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[a-z]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least a lowercase character'
         );
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[A-Z]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least an uppercase character'
         );
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.search(/[,./;%^&*<>?:|]/) === -1) {
         setRegisterPasswordOneErrorMessage(
            'Password must contain at least a special character'
         );
         setRegisterPasswordOneError(true);
      } else {
         setRegisterPasswordOneError(false);
      }
   }

   function handleRegisterPasswordConfirm() {
      let enteredSignUpPasswordconfirm = signupPasswordconfirm.current.value;
      let enteredSignUpPassword = signupPassword.current.value;

      if (enteredSignUpPasswordconfirm === '') {
         setRegisterPasswordTwoErrorMessage('Confirm password required');
         setRegisterPasswordTwoError(true);
      } else if (enteredSignUpPassword !== enteredSignUpPasswordconfirm) {
         setRegisterPasswordTwoErrorMessage('Passwords do not match');
         setRegisterPasswordTwoError(true);
      } else {
         setRegisterPasswordTwoError(false);
      }
   }

   // function handles user data
   function submitSigninHandler() {
      let enteredSignInName = signinUser.current.value;
      let enteredSignInPassword = signinPassword.current.value;

      let enteredSignUpFirstname = signupFirstname.current.value;
      let enteredSignUpLastname = signupLastname.current.value;
      let enteredSignUpDate = signupDate.current.value;
      let enteredSignUpEmail = signupEmail.current.value;
      let enteredSignUpPassword = signupPassword.current.value;
      let enteredSignUpPasswordconfirm = signupPasswordconfirm.current.value;
      if (changePage) {
         //sends user validated credentials

         const signinData = {
            name: enteredSignInName,
            password: enteredSignInPassword,
         };
         console.log(signinData);
      } else {
         //Sends validated sign up user credentials

         const signupData = {
            firstname: enteredSignUpFirstname,
            lastname: enteredSignUpLastname,
            dateOfBirth: enteredSignUpDate,
            email: enteredSignUpEmail,
            password: enteredSignUpPassword,
         };

         console.log(signupData);
      }
   }

   return (
      <>
         {/*<Login
            submitSigninHandler={submitSigninHandler}
            pageChangeSignin={pageChangeSignin}
            pageChangeSignup={pageChangeSignup}
            changePage={changePage}
            signinUser={signinUser}
            signinPassword={signinPassword}
            signupUser={signupUser}
            signupEmail={signupEmail}
            signupPassword={signupPassword}
            signupPasswordconfirm={signupPasswordconfirm}
            loginUserError={loginUserError}
            loginPasswordError={loginPasswordError}
            registerUserError={registerUserError}
            registerEmailError={registerEmailError}
            registerPasswordOneError={registerPasswordOneError}
            registerPasswordTwoError={registerPasswordTwoError}
            handleLoginUser={handleLoginUser}
            handleLoginPassword={handleLoginPassword}
            handleRegisterUser={handleRegisterUser}
            handleRegisterEmail={handleRegisterEmail}
            handleRegisterPassword={handleRegisterPassword}
            handleRegisterPasswordConfirm={handleRegisterPasswordConfirm}
            // enableRegisterButton={enableRegisterButton}
            // enableLoginButton={enableLoginButton}
   />*/}
         <div
            id="blur"
            className={['modal', modal && 'active']
               .filter((e) => !!e)
               .join(' ')}
            // onClick={handleModal}
         >
            <button onClick={handleModal}>Open sign up</button>
         </div>
         <Signup
            modal={modal}
            signupFirstname={signupFirstname}
            signupLastname={signupLastname}
            signupEmail={signupEmail}
            signupPassword={signupPassword}
            signupDate={signupDate}
            signupPasswordconfirm={signupPasswordconfirm}
            registerNameError={registerNameError}
            registerEmailError={registerEmailError}
            registerDateError={registerDateError}
            registerPasswordOneError={registerPasswordOneError}
            registerPasswordTwoError={registerPasswordTwoError}
            registerNameErrorMessage={registerNameErrorMessage}
            registerEmailErrorMessage={registerEmailErrorMessage}
            registerDateErrorMessage={registerDateErrorMessage}
            registerPasswordOneErrorMessage={registerPasswordOneErrorMessage}
            registerPasswordTwoErrorMessage={registerPasswordTwoErrorMessage}
            handleRegisterUser={handleRegisterUser}
            handleRegisterEmail={handleRegisterEmail}
            handleRegisterDate={handleRegisterDate}
            handleRegisterPassword={handleRegisterPassword}
            handleRegisterPasswordConfirm={handleRegisterPasswordConfirm}
         />
         {/* put yours below*/}
      </>
   );
}
export default Registration;
