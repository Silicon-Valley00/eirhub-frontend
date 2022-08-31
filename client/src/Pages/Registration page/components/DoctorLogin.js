import { useState, useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginStyles from './Login.module.css';
import loginImage from '../../../images/loginimage.svg';
import { IoWarning, IoCloseOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BiLoaderAlt } from 'react-icons/bi';
import { LoginUser } from '../../../context/authcontext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
   fetchDoctorsProfileInfo,
   setDoctorAuth,
} from '../../../Store/DoctorAction.js';
import store from '../../../Store/ReducerStore';
function DoctorLogin(props) {
   const docLoginFormRef = useRef();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   // handles button changes
   const [btnValue, setBtnValue] = useState('login');
   const [btnActive, setBtnActive] = useState(false);

   /* Code below handles user inputs, checks and form submissions */
   const [hidePassword, setHidePassword] = useState(true);
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('Login failed. Try again.');

   // handles registeration flow based on feedback from database
   async function submitCredentialsFeedback() {
      const feedback = await props.submitUserCredentialsHandler();

      // checks if account is to be logged in
      if (feedback[0] === true) {
         setBtnActive(feedback[0]);
         setBtnValue(feedback[2]);
         dispatch(fetchDoctorsProfileInfo(feedback[1].id_doctor));
         navigate('/loading');

         dispatch(setDoctorAuth(true));
         setTimeout(() => {
            navigate('/doctordashboard');
         }, 1500);
         console.log(store.getState());
      } else {
         // when account fails to login
         setBtnActive(feedback[0]);
         setBtnValue('Login');
         setErrorMessage(feedback[1]);
         setIsError(true);
      }
   }
   return (
      <section id={loginStyles.loginSection}>
         <div
            id={loginStyles.loginContainer}
            className={props.modalLoginDoctor ? loginStyles.active : ''}
         >
            <div
               className={loginStyles.closeModal}
               onClick={() => {
                  props.handleModalsClose();
                  docLoginFormRef.current.reset();
                  props.reset();
                  setIsError(false);
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
                  ref={docLoginFormRef}
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
                        props.doctorLoginEmailError
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
                        ref={props.doctorLoginEmail}
                        onChange={() => {
                           props.handleDoctorLoginEmail();
                           setIsError(false);
                        }}
                     />
                  </div>
                  <div
                     className={
                        props.doctorLoginEmailError
                           ? loginStyles.errorMessageBox
                           : loginStyles.noErrorMessageBox
                     }
                  >
                     <i>
                        <IoWarning />
                     </i>
                     <p>{props.doctorLoginEmailErrorMessage}</p>
                  </div>
                  <h3>Password</h3>
                  <div
                     className={
                        props.doctorLoginPasswordError
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
                        ref={props.doctorLoginPassword}
                        onChange={() => {
                           props.handleDoctorLoginPassword();
                           setIsError(false);
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
                        props.doctorLoginPasswordError
                           ? loginStyles.errorMessageBox
                           : loginStyles.noErrorMessageBox
                     }
                  >
                     <i>
                        <IoWarning />
                     </i>
                     <p>{props.doctorLoginPasswordErrorMessage}</p>
                  </div>
                  <div className={loginStyles.passwordReset}>
                     <p className={loginStyles.link}>Forgot password?</p>
                  </div>
                  <div className={loginStyles.submit}>
                     <button
                        id={loginStyles.loginSubmit}
                        className={
                           props.doctorLoginEmailError ||
                           props.doctorLoginPasswordError ||
                           props.doctorLoginEmailError === null ||
                           props.doctorLoginPasswordError === null
                              ? `${loginStyles.btn} ${loginStyles.inactive}`
                              : btnActive
                              ? ` ${loginStyles.btn} ${loginStyles.btnActive}`
                              : loginStyles.btn
                        }
                        disabled={
                           props.doctorLoginEmailError ||
                           props.doctorLoginPasswordError ||
                           props.doctorLoginPasswordError ||
                           props.doctorLoginEmailError === null ||
                           props.doctorLoginPasswordError === null ||
                           props.doctorLoginPasswordError === null ||
                           btnActive
                        }
                        onClick={() => {
                           setBtnValue('logging in');
                           setBtnActive(true);
                           submitCredentialsFeedback();
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
                              onClick={() => {
                                 props.handleModalSignupDoctor();
                                 docLoginFormRef.current.reset();
                                 props.reset();
                                 setIsError(false);
                              }}
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

export default DoctorLogin;
