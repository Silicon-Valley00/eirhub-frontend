import { useState, useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginStyles from './Login.module.css';
import loginImage from '../../../assets/images/loginimage.svg';
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
// import { LoginUser } from '../../../context/authcontext';
import store from '../../../Store/ReducerStore';
import { persistor } from '../../../Store/ReducerStore';
import {
   Box,
   Button,
   Container,
   Dialog,
   IconButton,
   Input,
   InputAdornment,
   Modal,
   OutlinedInput,
   TextField,
   Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { makeStyles } from '@material-ui/styles';
import {
   MdAccountCircle,
   MdOutlineVisibility,
   MdOutlineVisibilityOff,
} from 'react-icons/md';

const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '400',
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: '24px',
   pt: 2,
   px: 4,
   pb: 3,
};

const useStyles = makeStyles({
   dialog: {
      '& .MuiDialog-root': {
         '& fieldset': {
            height: '40rem',
            backgroud: 'red',
         },
      },
   },
   inputField: {
      '& .MuiOutlinedInput-root': {
         '& fieldset': {
            borderRadius: '8px',
         },
         '&:hover fieldset': {
            borderColor: 'blue', // Change border color on hover
         },
         '&.Mui-focused fieldset': {
            borderColor: 'green', // Change border color on focus
         },
      },
   },

   button: {
      '& .MuiButton-root': {
         backgroundColor: 'red',
         color: 'var(--white)',
         borderRadius: '8px',
         '&:hover': {
            backgroundColor: 'var(--primary)',
            color: 'var(--white)',
         },
      },
   },
});

function Login(props) {
   const loginFormRef = useRef();
   const classes = useStyles();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [btnValue, setBtnValue] = useState('login');
   const [btnActive, setBtnActive] = useState(false);
   const [hidePassword, setHidePassword] = useState(true);
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState('Login failed. Try again.');
   const [showPassword, setShowPassword] = useState(false);

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.preventDefault();
   };

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
   const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
   });
   const { control, handleSubmit, formState } = useForm({
      resolver: zodResolver(schema),
      mode: 'onChange',
   });
   return (
      <Dialog
         open={props.show}
         onClose={props.handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
         maxWidth="lg"
      >
         <div className={loginStyles.loginSection}>
            <div className={loginStyles.rightSide}>
               <h1>Eirhub</h1>
               <p>Health is an everyday thing</p>
               <img id={loginStyles.loginImg} src={loginImage} alt="login" />
            </div>
            <div style={{ padding: '3rem', width: '50%' }}>
               <form className={loginStyles.loginForm}>
                  <h1 className={loginStyles.title}>Welcome Back</h1>
                  <p className={loginStyles.info}>Please enter your details</p>
                  <label>Username</label>
                  <Controller
                     name="username"
                     control={control}
                     defaultValue=""
                     render={({ field }) => (
                        <TextField
                           {...field}
                           label="Username"
                           variant="outlined"
                           margin="normal"
                           fullWidth
                           autoFocus
                           required
                           error={!!formState.errors.username}
                           size="small"
                           // helperText={formState.errors.username?.message}
                           className={classes.inputField}
                        />
                     )}
                  />
                  <label htmlFor="email">Email</label>
                  <Controller
                     name="email"
                     control={control}
                     defaultValue=""
                     render={({ field }) => (
                        <TextField
                           {...field}
                           label="Email"
                           variant="outlined"
                           margin="normal"
                           fullWidth
                           autoFocus
                           required
                           error={!!formState.errors.email}
                           size="small"
                           // helperText={formState.errors.email?.message}
                           className={classes.inputField}
                        />
                     )}
                  />
                  <label htmlFor="password">Password</label>
                  <Controller
                     name="password"
                     control={control}
                     defaultValue=""
                     render={({ field }) => (
                        <OutlinedInput
                           id="outlined-adornment-password"
                           type={showPassword ? 'text' : 'password'}
                           endAdornment={
                              <InputAdornment position="end">
                                 <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                 >
                                    {showPassword ? (
                                       <MdOutlineVisibilityOff />
                                    ) : (
                                       <MdOutlineVisibility />
                                    )}
                                 </IconButton>
                              </InputAdornment>
                           }
                           label="Password"
                           size="small"
                           className={classes.inputField}
                        />
                     )}
                  />

                  <Button
                     type="submit"
                     variant="contained"
                     className={classes.button}
                     // disabled={!formState.isValid}
                     disabled={false}
                     startIcon={<MdAccountCircle />}
                  >
                     Submit
                  </Button>
               </form>
            </div>
         </div>

         {/* <section id={loginStyles.loginSection} style={style}>
            <div id={loginStyles.loginContainer} className={loginStyles.active}>
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
         {/* <div className={loginStyles.submit}>
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
                  </div> */}
         {/* </form>
            </div>
            <div className={loginStyles.rightSide}>
               <h1>Eirhub</h1>
               <p>Health is an everyday thing</p>
               <img id={loginStyles.loginImg} src={loginImage} alt="login" />
            </div>
         </section> */}
      </Dialog>
   );
}

export default Login;
