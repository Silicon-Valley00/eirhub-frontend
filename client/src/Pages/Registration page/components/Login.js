import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginStyles from './login.module.css';
import loginImage from '../../../images/loginimage.svg';
import { IoWarning } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';

function Login(props) {
   /* Code below handles user inputs, checks and form submissions */
   const [hidePassword, setHidePassword] = useState(true);
   const [hidePasswordOne, setHidePasswordOne] = useState(true);
   const [hidePasswordTwo, setHidePasswordTwo] = useState(true);
   const {
      handleModalsClose,
      handleModalSignup,
      loginEmailErrorMessage,
      loginPasswordErrorMessage,
      handleloginEmail,
      handleLoginPassword,
      loginPassword,
      loginPasswordError,
      loginEmail,
      loginEmailError,
      signupUser,
   } = props;

   return (
      <section id={loginStyles.loginSection}>
         <div
            id={loginStyles.loginContainer}
            className={props.modalLogin ? loginStyles.active : ''}
         >
            <div className={loginStyles.loginBody}>
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
                  className="login-form"
               >
                  <h1 className="title">Welcome Back</h1>
                  <p>Please enter your details</p>
                  <h3>Email</h3>
                  <div
                     className={
                        loginStyles.inputField ||
                        (loginEmailError && loginStyles.error)
                     }
                  >
                     <i>
                        <IoIosMail />
                     </i>
                     <input
                        type="text"
                        id={loginStyles.loginUsername}
                        placeholder="someone@example.com"
                        ref={loginEmail}
                        onChange={() => {
                           handleloginEmail();
                        }}
                     />
                  </div>
                  <div
                     className={
                        loginEmailError
                           ? loginStyles.errorMessageBox
                           : loginStyles.noErrorMessageBox
                     }
                  >
                     <i>
                        <IoWarning />
                     </i>
                     <p>{loginEmailErrorMessage}</p>
                  </div>
                  <h3>Password</h3>
                  <div
                     className={
                        loginStyles.inputField ||
                        (loginPasswordError && loginStyles.error)
                     }
                  >
                     <i>
                        <RiLockPasswordFill />
                     </i>
                     <input
                        type={hidePassword ? 'password' : 'text'}
                        id={loginStyles.loginPassword}
                        placeholder="Enter your password"
                        ref={loginPassword}
                        onChange={() => {
                           handleLoginPassword();
                        }}
                     />
                     <i onClick={() => setHidePassword(!hidePassword)}>
                        {hidePassword ? (
                           <AiOutlineEye />
                        ) : (
                           <AiOutlineEyeInvisible />
                        )}
                     </i>
                  </div>
                  <div
                     className={
                        loginPasswordError
                           ? loginStyles.errorMessageBox
                           : loginStyles.noErrorMessageBox
                     }
                  >
                     <i>
                        <IoWarning />
                     </i>
                     <p>{loginPasswordErrorMessage}</p>
                  </div>
                  <div className={loginStyles.passwordReset}>
                     <a href="">Forgot password?</a>
                  </div>
                  <div className={loginStyles.submit}>
                     <input
                        type="submit"
                        id={loginStyles.loginSubmit}
                        value="login"
                        className={
                           loginEmailError || loginPasswordError
                              ? loginStyles.btn && loginStyles.inactive
                              : loginStyles.btn && loginStyles.solid
                        }
                        disabled={
                           loginEmailError ||
                           loginPasswordError ||
                           loginPasswordError
                        }
                        onClick={() => {
                           props.submitUserCredentialsHandler();
                        }}
                     />
                     <div className={loginStyles.signupToggle}>
                        <p>
                           New Here ?{' '}
                           <a href="" onClick={() => handleModalSignup()}>
                              Sign up
                           </a>
                        </p>
                     </div>
                  </div>
               </form>
            </div>
            <div className={loginStyles.rightSide}>
               <h1
                  onClick={() => {
                     handleModalsClose();
                  }}
               >
                  Eirhub
               </h1>
               <p>Health is an everyday thing</p>
               <img src={loginImage} alt="" />
            </div>
         </div>
      </section>
   );
}

export default Login;
