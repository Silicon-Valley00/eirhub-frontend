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
   const loginUser = useRef();
   const loginPassword = useRef();
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

   //Handles page switch for login page
   function pageChangelogin() {
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
      let enteredloginName = loginUser.current.value;

      if (enteredloginName === '') {
         setLoginUserError(true);
         showAlert(true,'Login name cannot be empty');
      } else if (enteredloginName.match(pattern)) {
         setLoginUserError(false);
      } else {
         setLoginUserError(true);
         showAlert(true,'Login name is wrong');
      }
   }
   
   function handleLoginPassword() {
      let enteredloginPassword = loginPassword.current.value;
      
      if (enteredloginPassword === '') {
         setLoginPasswordError(true);
         showAlert(true,'Login password cannot be empty');
      } else if (enteredloginPassword.length < 8) {
         setLoginPasswordError(true);
      } else {
         setLoginPasswordError(false);
         showAlert(true,'Login password is wrong');
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
      let enteredloginName = loginUser.current.value;
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
         {/* <Signup/> */}
         <Login
         submitLoginHandler={submitLoginHandler}
         loginUser={loginUser}
         handleLoginUser={handleLoginUser}
         handleLoginPassword={handleLoginPassword}
         loginPassword={loginPassword}
         signupUser={signupUser}
         loginUserError={loginUserError}
         loginPasswordError={loginPasswordError}
         {...alert}
         />
         {/* <div
            id="blur"
            className={['modal', modal && 'active']
               .filter((e) => !!e)
               .join(' ')}
            // onClick={handleModal}
         >
            <button onClick={handleModal}>Open sign up</button>
         </div>
         <Signup modal={modal} />
         {/* put yours below*/}
      </> 
   );
}
export default Registration;
