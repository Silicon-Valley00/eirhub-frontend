import React, { useState, useRef } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import axios from 'axios';

// Database configuration
const api = axios.create({
   baseURL: 'http://127.0.0.1:5000/',
});

function Registration(props) {
   // User sign in refs
   const loginEmail = useRef();
   const loginPassword = useRef();
   // User sign up refs
   const signupFirstname = useRef();
   const signupLastname = useRef();
   const signupEmail = useRef();
   const signupPassword = useRef();
   const signupPasswordconfirm = useRef();
   const signupDate = useRef();

   // Handles error state of input boxes
   const [loginEmailError, setloginEmailError] = useState(null);
   const [loginPasswordError, setLoginPasswordError] = useState(null);

   const [registerNameError, setRegisterNameError] = useState(null);
   const [registerDateError, setRegisterDateError] = useState(null);
   const [registerEmailError, setRegisterEmailError] = useState(null);
   const [registerPasswordOneError, setRegisterPasswordOneError] =
      useState(null);
   const [registerPasswordTwoError, setRegisterPasswordTwoError] =
      useState(null);

   // Handles error messages of input boxes
   const [registerNameErrorMessage, setRegisterNameErrorMessage] = useState('');
   const [registerDateErrorMessage, setRegisterDateErrorMessage] = useState('');
   const [registerEmailErrorMessage, setRegisterEmailErrorMessage] =
      useState('');
   const [registerPasswordOneErrorMessage, setRegisterPasswordOneErrorMessage] =
      useState('');
   const [registerPasswordTwoErrorMessage, setRegisterPasswordTwoErrorMessage] =
      useState('');
   const [loginEmailErrorMessage, setloginEmailErrorMessage] = useState('');
   const [loginPasswordErrorMessage, setLoginPasswordErrorMessage] =
      useState('');

   const pattern = /^[a-zA-Z ]+$/;
   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   // Functions below check user credentials in each form input
   function handleloginEmail() {
      let enteredloginName = loginEmail.current.value;

      if (enteredloginName === '') {
         setloginEmailError(true);
         setloginEmailErrorMessage('Email required');
      } else if (enteredloginName.match(emailPattern)) {
         setloginEmailError(false);
      } else {
         setloginEmailError(true);
         setloginEmailErrorMessage('Email format not valid');
      }
   }

   function handleLoginPassword() {
      let enteredloginPassword = loginPassword.current.value;

      if (enteredloginPassword === '') {
         setLoginPasswordErrorMessage('Password required');
         setLoginPasswordError(true);
      } else if (enteredloginPassword.length < 8) {
         setLoginPasswordErrorMessage(
            'Password must be at least 8 characters long'
         );

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
   function submitUserCredentialsHandler() {
      let enteredloginName = loginEmail.current.value;
      let enteredloginPassword = loginPassword.current.value;

      let enteredSignUpFirstname = signupFirstname.current.value;
      let enteredSignUpLastname = signupLastname.current.value;
      let enteredSignUpDate = signupDate.current.value;
      let enteredSignUpEmail = signupEmail.current.value;
      let enteredSignUpPassword = signupPassword.current.value;
      let enteredSignUpPasswordconfirm = signupPasswordconfirm.current.value;
      if (props.modalLogin) {
         //sends user validated credentials

         const loginData = {
            name: enteredloginName,
            password: enteredloginPassword,
         };
         console.log(loginData);
         submitCredentials('login', loginData);
      } else if (props.modalSignup) {
         //Sends validated sign up user credentials

         const signupData = {
            firstname: enteredSignUpFirstname,
            lastname: enteredSignUpLastname,
            dateOfBirth: enteredSignUpDate,
            user_email: enteredSignUpEmail,
            password: enteredSignUpPassword,
         };

         console.log(signupData);
         console.log('start');
         submitCredentials('signup', signupData);
         console.log('end');
      }
   }

   function submitCredentials(path, data) {
      axios({
         method: 'post',
         url: `http://127.0.0.1:5000/${path}`,
         headers: {
            'Access-Control-Allow-Origin': '*',
         },
         data: { data },
      })
         .then((response) => {
            if (response.status === 200) {
               console.log('good', response);
            }
         })
         .catch((error) => {
            if (error.response) {
               console.log('data', error.response.data);
            } else if (error.request) {
               console.log('request', error.request);
            } else {
               console.log(error);
               console.log('message', error.message);
            }
         });
   }

   return (
      <>
         <Login
            modalLogin={props.modalLogin}
            handleModalSignup={props.handleModalSignup}
            handleModalsClose={props.handleModalsClose}
            submitUserCredentialsHandler={submitUserCredentialsHandler}
            loginEmail={loginEmail}
            handleloginEmail={handleloginEmail}
            handleLoginPassword={handleLoginPassword}
            loginPassword={loginPassword}
            loginEmailError={loginEmailError}
            loginPasswordError={loginPasswordError}
            loginEmailErrorMessage={loginEmailErrorMessage}
            loginPasswordErrorMessage={loginPasswordErrorMessage}
         />

         <Signup
            modalSignup={props.modalSignup}
            handleModalLogin={props.handleModalLogin}
            handleModalsClose={props.handleModalsClose}
            submitUserCredentialsHandler={submitUserCredentialsHandler}
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
      </>
   );
}
export default Registration;
