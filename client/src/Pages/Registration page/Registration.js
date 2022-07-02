import React, { useState, useRef } from 'react';
import Signup from './components/Signup'
// import './Registration.css';
import Login from './components/Login';

function Registration() {
   // Modal change
   const [modal, setModal] = useState(false);
   function handleModal() {
      setModal(!modal);
   }
   // Handles state of page switch
   const [changePage, changePageHandler] = useState(true);

   // User sign in refs
   const loginEmail = useRef();
   const loginPassword = useRef();
   // User sign up refs
   const signupUser = useRef();
   const signupEmail = useRef();
   const signupPassword = useRef();
   const signupPasswordconfirm = useRef();

   // Handles error state of input boxes
   const [loginEmailError, setloginEmailError] = useState(null);
   const [loginPasswordError, setLoginPasswordError] = useState(null);

   const [registerUserError, setRegisterUserError] = useState(null);
   const [registerEmailError, setRegisterEmailError] = useState(null);
   const [registerPasswordOneError, setRegisterPasswordOneError] =
      useState(null);
   const [registerPasswordTwoError, setRegisterPasswordTwoError] =
      useState(null);


   const [alert, setAlert] = useState({ show: false, msg: '' })

   // Handles error messages of input boxes
   const [registerNameErrorMessage, setRegisterNameErrorMessage] = useState('');
   const [registerDateErrorMessage, setRegisterDateErrorMessage] = useState('');
   const [registerEmailErrorMessage, setRegisterEmailErrorMessage] =
      useState('');
   const [registerPasswordOneErrorMessage, setRegisterPasswordOneErrorMessage] =
      useState('');
   const [registerPasswordTwoErrorMessage, setRegisterPasswordTwoErrorMessage] =
      useState('');
   const [loginEmailErrorMessage,setloginEmailErrorMessage] =  useState('')
   const [loginPasswordErrorMessage,setLoginPasswordErrorMessage]= useState('')

   const pattern = /^[a-zA-Z ]+$/;
   const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   //Handles page switch for login page
   function pageChangelogin() {
      changePageHandler(true);
   }
   //Handles page switch for signup page
   function pageChangeSignup() {
      changePageHandler(false);
   }



   // Functions below check user credentials in each form input
   function handleloginEmail() {
      let enteredloginName = loginEmail.current.value;

      if (enteredloginName === '') {
         setloginEmailError(true);
         setloginEmailErrorMessage('Email required')
      } else if (enteredloginName.match(emailPattern)) {
         setloginEmailError(false);
      } else {
         setloginEmailError(true);
         setloginEmailErrorMessage('Email format not valid')
      }
   }
   
   function handleLoginPassword() {
      let enteredloginPassword = loginPassword.current.value;
      
      if (enteredloginPassword === '') {
         setLoginPasswordError(true);
         setLoginPasswordErrorMessage('Password required')
      } else if (enteredloginPassword.length < 8) {
         setLoginPasswordError(true);
         setLoginPasswordErrorMessage('Password must be at least 8 characters long')
      } else {
         setLoginPasswordError(false);
      }
   }

   function handleRegisterUser() {
      let enteredSignUpName = signupUser.current.value;

      if (enteredSignUpName === '') {
         setRegisterUserError(true);
         showAlert(true, 'Name field cannot be empty');

      } else if (enteredSignUpName.match(pattern)) {
         setRegisterUserError(false);
      } else {
         setRegisterUserError(true);
         showAlert(true, 'Name field is wrong');

      }
   }

   function handleRegisterEmail() {
      let enteredSignUpEmail = signupEmail.current.value;

      if (enteredSignUpEmail === '') {
         setRegisterEmailError(true);
         showAlert(true, 'Email field cannot be empty');

      } else if (enteredSignUpEmail.match(emailPattern)) {
         setRegisterEmailError(false);
      } else {
         setRegisterEmailError(true);
         showAlert(true, 'Email is wrong');

      }
   }

   function handleRegisterPassword() {
      let enteredSignUpPassword = signupPassword.current.value;

      if (enteredSignUpPassword === '') {
         setRegisterPasswordOneError(true);
         showAlert(true, 'Sign up password cannot be empty');

      } else if (enteredSignUpPassword.length < 8) {
         setRegisterPasswordOneError(true);
      } else {
         setRegisterPasswordOneError(false);
         showAlert(true, 'Sign up password is wrong');

      }
   }

   function handleRegisterPasswordConfirm() {
      let enteredSignUpPasswordconfirm = signupPasswordconfirm.current.value;
      let enteredSignUpPassword = signupPassword.current.value;

      if (enteredSignUpPasswordconfirm === '') {
         setRegisterPasswordTwoError(true);
         showAlert(true, 'Password cannot be empty');

      } else if (enteredSignUpPassword !== enteredSignUpPasswordconfirm) {
         setRegisterPasswordTwoError(true);
      } else {
         setRegisterPasswordTwoError(false);
         showAlert(true, 'Password is wrong');

      }
   }

   // function handles user data
   function submitLoginHandler() {
      let enteredloginName = loginEmail.current.value;
      let enteredloginPassword = loginPassword.current.value;

      let enteredSignUpName = signupUser.current.value;
      let enteredSignUpEmail = signupEmail.current.value;
      let enteredSignUpPassword = signupPassword.current.value;
      let enteredSignUpPasswordconfirm = signupPasswordconfirm.current.value;
      if (changePage) {
         //sends user validated credentials

         const loginData = {
            name: enteredloginName,
            password: enteredloginPassword,
         };
         console.log(loginData);
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
            pageChangelogin={pageChangelogin}
            pageChangeSignup={pageChangeSignup}
            changePage={changePage}
            signupEmail={signupEmail}
            signupPassword={signupPassword}
            signupPasswordconfirm={signupPasswordconfirm}
            registerUserError={registerUserError}
            registerEmailError={registerEmailError}
            registerPasswordOneError={registerPasswordOneError}
            registerPasswordTwoError={registerPasswordTwoError}
            handleRegisterUser={handleRegisterUser}
            handleRegisterEmail={handleRegisterEmail}
            handleRegisterPassword={handleRegisterPassword}
            handleRegisterPasswordConfirm={handleRegisterPasswordConfirm}
            // enableRegisterButton={enableRegisterButton}
            // enableLoginButton={enableLoginButton}
         />*/}
         <Login
         submitLoginHandler={submitLoginHandler}
         loginEmail={loginEmail}
         handleloginEmail={handleloginEmail}
         handleLoginPassword={handleLoginPassword}
         loginPassword={loginPassword}
         loginEmailError={loginEmailError}
         loginPasswordError={loginPasswordError}
         loginEmailErrorMessage={loginEmailErrorMessage}
         loginPasswordErrorMessage={loginPasswordErrorMessage}
         />
         {/* <div
            id="blur"
            className={`modal ${modal && 'modal'}`}
            // onClick={handleModal}
         >
            <button onClick={handleModal}>Open sign up</button>
         </div>
<<<<<<< HEAD
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
         /> */}
         {/* put yours below */}
=======
         <Signup modal={modal} />
         {/* put yours below*/}
>>>>>>> parent of ea633a6 (maxwell's changes pulled)
      </> 
   );
}
export default Registration;
