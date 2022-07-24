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
   const [isError, setIsError] = useState(true);
   const [errorMessage, setErrorMessage] = useState('Login failed. Try again.');

   return (
      <section id={loginStyles.loginSection}>
         <div
            id={loginStyles.loginContainer}
            className={props.modalLogin ? loginStyles.active : ''}
         >
            <div
               className={loginStyles.closeModal}
               onClick={() => {
                  props.handleModalsClose();
                  props.loginFormRef.current.reset();
                  props.reset();
               }}
            >
               <i>
                  <IoCloseOutline />
               </i>
            </div>
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
                  ref={props.loginFormRef}
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
                  className={loginStyles.loginForm}
               >
                  <h1 className={loginStyles.title}>Welcome Back</h1>
                  <p className={loginStyles.info}>Please enter your details</p>
                  <h3>Email</h3>
                  <div
                     className={
                        props.loginEmailError
                           ? `${loginStyles.inputField} ${loginStyles.inputError}`
                           : loginStyles.inputField
                     }
                  >
                     <i>
                        <IoIosMail />
                     </i>
                     <input
                        type="text"
                        id={loginStyles.loginUsername}
                        placeholder="someone@example.com"
                        ref={props.loginEmail}
                        onChange={() => {
                           props.handleLoginEmail();
                        }}
                     />
                  </div>
                  <div
                     className={
                        props.loginEmailError
                           ? loginStyles.errorMessageBox
                           : loginStyles.noErrorMessageBox
                     }
                  >
                     <i>
                        <IoWarning />
                     </i>
                     <p>{props.loginEmailErrorMessage}</p>
                  </div>
                  <h3>Password</h3>
                  <div
                     className={
                        props.loginPasswordError
                           ? `${loginStyles.inputField} ${loginStyles.inputError}`
                           : loginStyles.inputField
                     }
                  >
                     <i>
                        <RiLockPasswordFill />
                     </i>
                     <input
                        type={hidePassword ? 'password' : 'text'}
                        id={loginStyles.loginPassword}
                        placeholder="Enter your password"
                        ref={props.loginPassword}
                        onChange={() => {
                           props.handleLoginPassword();
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
                        props.loginPasswordError
                           ? loginStyles.errorMessageBox
                           : loginStyles.noErrorMessageBox
                     }
                  >
                     <i>
                        <IoWarning />
                     </i>
                     <p>{props.loginPasswordErrorMessage}</p>
                  </div>
                  <div className={loginStyles.passwordReset}>
                     <p className={loginStyles.link}>Forgot password?</p>
                  </div>
                  <div className={loginStyles.submit}>
                     <button
                        id={loginStyles.loginSubmit}
                        className={
                           props.loginEmailError ||
                           props.loginPasswordError ||
                           props.loginEmailError === null ||
                           props.loginPasswordError === null
                              ? `${loginStyles.btn} ${loginStyles.inactive}`
                              : btnActive
                              ? ` ${loginStyles.btn} ${loginStyles.btnActive}`
                              : loginStyles.btn
                        }
                        disabled={
                           props.loginEmailError ||
                           props.loginPasswordError ||
                           props.loginPasswordError ||
                           props.loginEmailError === null ||
                           props.loginPasswordError === null ||
                           props.loginPasswordError === null
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
                           <i>
                              <BiLoaderAlt />
                           </i>
                        </div>
                     </button>
                     <div className={loginStyles.signupToggle}>
                        <div>
                           New Here ?{' '}
                           <p
                              className={loginStyles.link}
                              href=""
                              onClick={() => props.handleModalSignup()}
                           >
                              Sign up
                           </p>
                        </div>
                     </div>
                  </div>
               </form>
               <div></div>
            </div>
            <div className={loginStyles.rightSide}>
               <h1>Eirhub</h1>
               <p>Health is an everyday thing</p>
               <img id={loginStyles.loginImg} src={loginImage} alt="login" />
            </div>
         </div>
      </section>
   );
}

export default Login;
