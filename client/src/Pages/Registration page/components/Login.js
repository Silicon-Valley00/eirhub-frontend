import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginStyles from './Login.module.css';
import loginImage from '../../../images/loginimage.svg';
import { IoWarning, IoCloseOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BiLoaderAlt } from 'react-icons/bi';

function Login(props) {
   // handles button changes
   const [btnValue, setBtnValue] = useState('login');
   const [btnActive, setBtnActive] = useState(false);

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

   const [isError, setIsError] = useState(true);
   const [errorMessage, setErrorMessage] = useState(
      'Sign up failed. Try again.'
   );

   return (
      <section id={loginStyles.loginSection}>
         <div
            id={loginStyles.loginContainer}
            className={props.modalLogin ? loginStyles.active : ''}
         >
            <div className={loginStyles.loginBody}>
               <div
                  className={isError ? loginStyles.error : loginStyles.noerror}
               >
                  <p>{errorMessage}</p>
                  <i
                     className={loginStyles.closeIcon}
                     onClick={() => {
                        setIsError(false);
                     }}
                  >
                     <IoCloseOutline />
                  </i>
               </div>

               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
                  className="login-form"
               >
                  <h1 className="title">Welcome Back</h1>uh
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
                     <i className={loginStyles.closeIcon}>
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
                     <i className={loginStyles.closeIcon}>
                        <IoWarning />
                     </i>
                     <p>{loginPasswordErrorMessage}</p>
                  </div>
                  <div className={loginStyles.passwordReset}>
                     <a href="">Forgot password?</a>
                  </div>
                  <div className={loginStyles.submit}>
                     <button
                        id={loginStyles.loginSubmit}
                        className={
                           loginEmailError ||
                           loginPasswordError ||
                           loginEmailError === null ||
                           loginPasswordError === null
                              ? `${loginStyles.btn} ${loginStyles.inactive}`
                              : btnActive
                              ? ` ${loginStyles.btn} ${loginStyles.btnActive}`
                              : loginStyles.btn
                        }
                        disabled={
                           loginEmailError ||
                           loginPasswordError ||
                           loginPasswordError ||
                           loginEmailError === null ||
                           loginPasswordError === null ||
                           loginPasswordError === null
                        }
                        onClick={() => {
                           setBtnValue('loging in');
                           setBtnActive(true);
                           props.submitUserCredentialsHandler();
                        }}
                     >
                        {' '}
                        <p>{btnValue}</p>
                        <div
                           className={
                              btnActive
                                 ? `${loginStyles.loader} ${loginStyles.btnActive}`
                                 : loginStyles.loader
                           }
                        >
                           <BiLoaderAlt />
                        </div>
                     </button>
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
               <img id={loginStyles.loginImg} src={loginImage} alt="" />
            </div>
         </div>
      </section>
   );
}

export default Login;
