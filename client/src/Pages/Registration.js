import React, { useState, useRef } from 'react';
import Login from '../Components/Login.js';

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

   // Handles state of buttons
   const [login, setLogin] = useState(true);
   const [register, setRegister] = useState(true);

   // Handles error state of input boxes
   const [loginUserError, setLoginUserError] = useState(null);
   const [loginPasswordError, setLoginPasswordError] = useState(null);

   const [registerUserError, setRegisterUserError] = useState(null);
   const [registerEmailError, setRegisterEmailError] = useState(null);
   const [registerPasswordOneError, setRegisterPasswordOneError] =
      useState(null);
   const [registerPasswordTwoError, setRegisterPasswordTwoError] =
      useState(null);

   var pattern = /^[a-zA-Z ]+$/;
   var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   //Handles page switch for signin page
   function pageChangeSignin() {
      changePageHandler(true);
   }
   //Handles page switch for signup page
   function pageChangeSignup() {
      changePageHandler(false);
   }

   function handleLoginUser() {
      let enteredSignInName = signinUser.current.value;

      if (enteredSignInName === '') {
         setLoginUserError(true);
         enableLoginButton();
      } else if (enteredSignInName.match(pattern)) {
         setLoginUserError(false);
         enableLoginButton();
      } else {
         setLoginUserError(true);
         enableLoginButton();
      }
   }

   function handleLoginPassword() {
      let enteredSignInPassword = signinPassword.current.value;

      if (enteredSignInPassword === '') {
         setLoginPasswordError(true);
         enableLoginButton();
      } else if (enteredSignInPassword.length < 8) {
         setLoginPasswordError(true);
         enableLoginButton();
      } else {
         setLoginPasswordError(false);
         enableLoginButton();
      }
   }

   function handleRegisterUser() {
      let enteredSignUpName = signupUser.current.value;

      if (enteredSignUpName === '') {
         setRegisterUserError(true);
         enableRegisterButton();
      } else if (enteredSignUpName.match(pattern)) {
         setRegisterUserError(false);
         enableRegisterButton();
      } else {
         setRegisterUserError(true);
         enableRegisterButton();
      }
   }

   function handleRegisterEmail() {
      let enteredSignUpEmail = signupEmail.current.value;

      if (enteredSignUpEmail === '') {
         setRegisterEmailError(true);
         enableRegisterButton();
      } else if (enteredSignUpEmail.match(emailPattern)) {
         setRegisterEmailError(false);
         enableRegisterButton();
      } else {
         setRegisterEmailError(true);
         enableRegisterButton();
      }
   }

   function handleRegisterPassword() {
      let enteredSignUpPassword = signupPassword.current.value;

      if (enteredSignUpPassword === '') {
         setRegisterPasswordOneError(true);
         enableRegisterButton();
      } else if (enteredSignUpPassword.length < 8) {
         setRegisterPasswordOneError(true);
         enableRegisterButton();
      } else {
         setRegisterPasswordOneError(false);
         enableRegisterButton();
      }
   }

   function handleRegisterPasswordConfirm() {
      let enteredSignUpPasswordconfirm = signupPasswordconfirm.current.value;
      let enteredSignUpPassword = signupPassword.current.value;

      if (enteredSignUpPasswordconfirm === '') {
         setRegisterPasswordTwoError(true);
         enableRegisterButton();
      } else if (enteredSignUpPassword !== enteredSignUpPasswordconfirm) {
         setRegisterPasswordTwoError(true);
         enableRegisterButton();
      } else {
         setRegisterPasswordTwoError(false);
         enableRegisterButton();
      }
   }

   function enableRegisterButton() {
      if (
         ((registerUserError === registerEmailError) ===
            registerPasswordOneError) ===
            registerPasswordTwoError &&
         registerUserError !== true &&
         registerEmailError !== true &&
         registerPasswordOneError !== true &&
         registerPasswordTwoError !== true
      ) {
         setRegister(false); //Enable button
      } else {
         setRegister(true);
      }
   }

   function enableLoginButton() {
      if (
         loginUserError === loginPasswordError &&
         loginUserError !== true &&
         loginPasswordError !== true
      ) {
         setLogin(false); //Enable button
      } else {
         setLogin(true);
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
         <Login
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
            login={login}
            register={register}
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
         />
      </>
   );
}
export default Registration;
