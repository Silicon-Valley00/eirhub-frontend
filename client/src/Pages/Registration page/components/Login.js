import { useState, useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginStyles from './Login.module.css';
import loginImage from '../../../images/loginimage.svg';
import { IoWarning, IoCloseOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BiLoaderAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
   fetchProfile,
   setLoading,
   setMessage,
   setPatientAuth,
} from '../../../Store/Actions.js';
import { LoginUser } from '../../../context/authcontext';
import store from '../../../Store/ReducerStore';
import { persistor } from '../../../Store/ReducerStore';

function Login(props) {
   const loginFormRef = useRef();

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
         //fetches user profile
         dispatch(
            fetchProfile(feedback[1].id_patient, feedback[1].id_guardian)
         );
         dispatch(setLoading(true));
         navigate('/loading', { state: { status: false } });
         dispatch(setPatientAuth(true));

         setTimeout(() => {
            //navigates user to dashboard
            if (store.getState().okToRoute === true) {
               navigate('/userdashboard');
               //logs user into cometchat

               LoginUser(feedback[1].id_message);
               dispatch(setLoading(false));
            } else {
               //when something goes wrong
               setTimeout(() => {
                  persistor.purge();
               }, 200);

               dispatch(setPatientAuth(false));
               navigate('/landing-page');
               setTimeout(() => {
                  dispatch(
                     setMessage({
                        show: true,
                        msg: 'Fetching profile failed, trying again.',
                        state: 0,
                     })
                  );
               }, 1000);
               dispatch(setLoading(false));
            }
         }, 2 * 1000);
      } else {
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
            className={props.modalLogin ? loginStyles.active : ''}
         >
            <div
               className={loginStyles.closeModal}
               onClick={() => {
                  props.handleModalsClose();
                  loginFormRef.current.reset();
                  props.reset();
                  setIsError(false);
                  setBtnActive(false);
                  setBtnValue('Login');
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
                  ref={loginFormRef}
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
                           setIsError(false);
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
                  {/* <div className={loginStyles.passwordReset}>
                     <p className={loginStyles.link}>Forgot password?</p>
                  </div> */}
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
                           props.loginPasswordError === null ||
                           btnActive
                        }
                        onClick={() => {
                           setBtnValue('logging in');
                           setBtnActive(true);
                           submitCredentialsFeedback();
                        }}
                     >
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
                              onClick={() => {
                                 props.handleModalSignup();
                                 loginFormRef.current.reset();
                                 props.reset();
                                 setBtnValue('Login');
                                 setBtnActive(false);
                                 setIsError(false);
                              }}
                           >
                              Sign up
                           </p>
                        </div>
                     </div>
                  </div>
               </form>
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
