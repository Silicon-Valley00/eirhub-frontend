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
      loginEmailErrorMessageDoctor,
      loginPasswordErrorMessageDoctor,
      handleloginEmailDoctor,
      handleLoginPasswordDoctor,
      loginPasswordDoctor,
      loginPasswordErrorDoctor,
      loginEmailDoctor,
      loginEmailErrorDoctor,
   } = props;

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
               onClick={() => props.handleModalsClose()}
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
                        loginEmailErrorDoctor
                           ? `${loginStyles.inputField} ${loginStyles.inputError}`
                           : loginStyles.inputField
                     }
                  >
                     <i>
                        <IoIosMail />
                     </i>
                     <input
                        type="text"
                        id={loginStyles.loginUsernamePatient}
                        placeholder="someone@example.com"
                        ref={loginEmailDoctor}
                        onChange={() => {
                           handleloginEmailDoctor();
                        }}
                     />
                  </div>
                  <div
                     className={
                        loginEmailErrorDoctor
                           ? loginStyles.errorMessageBox
                           : loginStyles.noErrorMessageBox
                     }
                  >
                     <i>
                        <IoWarning />
                     </i>
                     <p>{loginEmailErrorMessageDoctor}</p>
                  </div>
                  <h3>Password</h3>
                  <div
                     className={
                        loginPasswordErrorDoctor
                           ? `${loginStyles.inputField} ${loginStyles.inputError}`
                           : loginStyles.inputField
                     }
                  >
                     <i>
                        <RiLockPasswordFill />
                     </i>
                     <input
                        type={hidePassword ? 'password' : 'text'}
                        id={loginStyles.loginPasswordPatient}
                        placeholder="Enter your password"
                        ref={loginPasswordDoctor}
                        onChange={() => {
                           handleLoginPasswordDoctor();
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
                        loginPasswordErrorDoctor
                           ? loginStyles.errorMessageBox
                           : loginStyles.noErrorMessageBox
                     }
                  >
                     <i>
                        <IoWarning />
                     </i>
                     <p>{loginPasswordErrorMessageDoctor}</p>
                  </div>
                  <div className={loginStyles.passwordReset}>
                     <p className={loginStyles.link}>Forgot password?</p>
                  </div>
                  <div className={loginStyles.submit}>
                     <button
                        id={loginStyles.loginSubmit}
                        className={
                           loginEmailErrorDoctor === true ||
                           loginPasswordErrorDoctor === true ||
                           loginEmailErrorDoctor === null ||
                           loginPasswordErrorDoctor === null
                              ? ` ${loginStyles.btn} ${loginStyles.inactive}`
                              : btnActive
                              ? ` ${loginStyles.btn} ${loginStyles.btnActive}`
                              : loginStyles.btn
                        }
                        disabled={
                           loginEmailErrorDoctor === true ||
                           loginPasswordErrorDoctor === true ||
                           loginEmailErrorDoctor === null ||
                           loginPasswordErrorDoctor === null
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
                        <p>
                           New Here ?{' '}
                           <p
                              className={loginStyles.link}
                              href=""
                              onClick={() => handleModalSignup()}
                           >
                              Sign up
                           </p>
                        </p>
                     </div>
                  </div>
               </form>
               <div></div>
            </div>
            <div className={loginStyles.rightSide}>
               <h1>Eirhub</h1>
               <p>Health is an everyday thing</p>
               <img id={loginStyles.loginImg} src={loginImage} alt="" />
            </div>
         </div>
      </section>
   );
}

export default Login;
