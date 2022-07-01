import React, { useState, useRef } from 'react';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import './Registration.css';

function Registration() {
   // Handles state of page switch
   const [changePage, changePageHandler] = useState(true);

   // User sign in refs
   const signinUser = useRef();
   const signinPassword = useRef();
   // User sign up refs
   const signupUser = useRef();
   const signupEmail = useRef();
   const signupPassword = useRef();
   const signupPasswordconfirm = useRef();

   // Handles error state of input boxes
   const [loginUserError, setLoginUserError] = useState(null);
   const [loginPasswordError, setLoginPasswordError] = useState(null);

   const [registerUserError, setRegisterUserError] = useState(null);
   const [registerEmailError, setRegisterEmailError] = useState(null);
   const [registerPasswordOneError, setRegisterPasswordOneError] =
      useState(null);
   const [registerPasswordTwoError, setRegisterPasswordTwoError] =
      useState(null);


   const [alert, setAlert] = useState({ show: false, msg: '' })


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

   const showAlert = (show = false, msg = "") => {
      console.log(alert)
      setAlert({ show, msg })
   }

   // Functions below check user credentials in each form input
   function handleLoginUser() {
      let enteredSignInName = signinUser.current.value;

      if (enteredSignInName === '') {
         setLoginUserError(true);
         showAlert(true,'Sign in name cannot be empty');
      } else if (enteredSignInName.match(pattern)) {
         setLoginUserError(false);
      } else {
         setLoginUserError(true);
         showAlert(true,'Sign in name is wrong');
      }
   }
   
   function handleLoginPassword() {
      let enteredSignInPassword = signinPassword.current.value;
      
      if (enteredSignInPassword === '') {
         setLoginPasswordError(true);
         showAlert(true,'Sign in password cannot be empty');
      } else if (enteredSignInPassword.length < 8) {
         setLoginPasswordError(true);
      } else {
         setLoginPasswordError(false);
      }
   }

   function handleRegisterUser() {
      let enteredSignUpName = signupUser.current.value;

      if (enteredSignUpName === '') {
         setRegisterUserError(true);
      } else if (enteredSignUpName.match(pattern)) {
         setRegisterUserError(false);
      } else {
         setRegisterUserError(true);
      }
   }

   function handleRegisterEmail() {
      let enteredSignUpEmail = signupEmail.current.value;

      if (enteredSignUpEmail === '') {
         setRegisterEmailError(true);
      } else if (enteredSignUpEmail.match(emailPattern)) {
         setRegisterEmailError(false);
      } else {
         setRegisterEmailError(true);
      }
   }

   function handleRegisterPassword() {
      let enteredSignUpPassword = signupPassword.current.value;

      if (enteredSignUpPassword === '') {
         setRegisterPasswordOneError(true);
      } else if (enteredSignUpPassword.length < 8) {
         setRegisterPasswordOneError(true);
      } else {
         setRegisterPasswordOneError(false);
      }
   }

   function handleRegisterPasswordConfirm() {
      let enteredSignUpPasswordconfirm = signupPasswordconfirm.current.value;
      let enteredSignUpPassword = signupPassword.current.value;

      if (enteredSignUpPasswordconfirm === '') {
         setRegisterPasswordTwoError(true);
      } else if (enteredSignUpPassword !== enteredSignUpPasswordconfirm) {
         setRegisterPasswordTwoError(true);
      } else {
         setRegisterPasswordTwoError(false);
      }
   }

   // function handles user data
   function submitSigninHandler() {
      let enteredSignInName = signinUser.current.value;
      let enteredSignInPassword = signinPassword.current.value;

      let enteredSignUpName = signupUser.current.value;
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
            name: enteredSignUpName,
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
            {...alert}
            // enableRegisterButton={enableRegisterButton}
            // enableLoginButton={enableLoginButton}
   />*/}
         <Signup />
      </>
   );
}
export default Registration;
