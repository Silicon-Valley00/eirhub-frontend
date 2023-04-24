import { useState, useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginStyles from './Login.module.css';
import docLoginImage from '../../../assets/images/doctor login.svg';
import { IoWarning, IoCloseOutline } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BiLoaderAlt } from 'react-icons/bi';
// import { LoginUser } from '../../../context/authcontext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
   Button,
   Dialog,
   IconButton,
   InputAdornment,
   OutlinedInput,
   TextField,
   ThemeProvider,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useStyles } from './dialogStyles';
import {
   MdAccountCircle,
   MdOutlineVisibility,
   MdOutlineVisibilityOff,
} from 'react-icons/md';
import { theme } from '../../../utils/theme/theme';

function DoctorLogin({
   show,
   handleClose,
}: {
   show: boolean;
   handleClose: () => void;
}) {
   const classes = useStyles();

   const [showPassword, setShowPassword] = useState(false);
   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.preventDefault();
   };

   const DoctorSchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
   });

   const { control, handleSubmit, formState } = useForm({
      mode: 'onChange',
      resolver: zodResolver(DoctorSchema),
   });
   return (
      <Dialog
         open={show}
         onClose={handleClose}
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
               <p>Let's save lives.</p>
               <img id={loginStyles.loginImg} src={docLoginImage} alt="login" />
            </div>
            <div style={{ padding: '20px', width: '100%' }}>
               <form className={loginStyles.loginForm}>
                  <h1 className={loginStyles.title}>Welcome Back Doc</h1>
                  <p className={loginStyles.info}>Please enter your details</p>
                  <div className={loginStyles.inputField}>
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
                  </div>

                  <div className={loginStyles.inputField}>
                     <label htmlFor="password">Password</label>
                     <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                           <OutlinedInput
                              {...field}
                              label="Password"
                              name="password"
                              size="small"
                              className={classes.inputField}
                              required
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
                           />
                        )}
                     />
                  </div>

                  <ThemeProvider theme={theme}>
                     <Button
                        type="submit"
                        variant="contained"
                        // disabled={!formState.isValid}
                        disabled={false}
                        startIcon={<MdAccountCircle />}
                     >
                        Submit
                     </Button>
                  </ThemeProvider>
                  <div className={loginStyles.signupToggle}>
                     <div>
                        New Here ?{' '}
                        <p className={loginStyles.link} onClick={() => {}}>
                           Sign up
                        </p>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </Dialog>
      // <section id={loginStyles.loginSection}>
      //    <div
      //       id={loginStyles.loginContainer}
      //       className={props.modalLoginDoctor ? loginStyles.active : ''}
      //    >
      //       <div
      //          className={loginStyles.closeModal}
      //          onClick={() => {
      //             props.handleModalsClose();
      //             docLoginFormRef.current.reset();
      //             props.reset();
      //             setIsError(false);
      //             setBtnActive(false);
      //             setBtnValue('Login');
      //          }}
      //       >
      //          <i>
      //             <IoCloseOutline />
      //          </i>
      //       </div>
      //       <div className={loginStyles.loginBody}>
      //          <div
      //             className={isError ? loginStyles.error : loginStyles.noerror}
      //          >
      //             <p>{errorMessage}</p>
      //             <i
      //                className={loginStyles.closeIcon}
      //                onClick={() => {
      //                   setIsError(false);
      //                }}
      //             >
      //                <IoCloseOutline />
      //             </i>
      //          </div>

      //          <form
      //             ref={docLoginFormRef}
      //             onSubmit={(e) => {
      //                e.preventDefault();
      //             }}
      //             className={loginStyles.loginForm}
      //          >
      //             <h1 className={loginStyles.title}>Welcome Back Doc</h1>
      //             <p className={loginStyles.info}>Please enter your details</p>
      //             <h3>Email</h3>
      //             <div
      //                className={
      //                   props.doctorLoginEmailError
      //                      ? `${loginStyles.inputField} ${loginStyles.inputError}`
      //                      : loginStyles.inputField
      //                }
      //             >
      //                <i>
      //                   <IoIosMail />
      //                </i>
      //                <input
      //                   type="text"
      //                   id={loginStyles.loginUsername}
      //                   placeholder="someone@example.com"
      //                   ref={props.doctorLoginEmail}
      //                   onChange={() => {
      //                      props.handleDoctorLoginEmail();
      //                      setIsError(false);
      //                   }}
      //                />
      //             </div>
      //             <div
      //                className={
      //                   props.doctorLoginEmailError
      //                      ? loginStyles.errorMessageBox
      //                      : loginStyles.noErrorMessageBox
      //                }
      //             >
      //                <i>
      //                   <IoWarning />
      //                </i>
      //                <p>{props.doctorLoginEmailErrorMessage}</p>
      //             </div>
      //             <h3>Password</h3>
      //             <div
      //                className={
      //                   props.doctorLoginPasswordError
      //                      ? `${loginStyles.inputField} ${loginStyles.inputError}`
      //                      : loginStyles.inputField
      //                }
      //             >
      //                <i>
      //                   <RiLockPasswordFill />
      //                </i>
      //                <input
      //                   type={hidePassword ? 'password' : 'text'}
      //                   id={loginStyles.loginPassword}
      //                   placeholder="Enter your password"
      //                   ref={props.doctorLoginPassword}
      //                   onChange={() => {
      //                      props.handleDoctorLoginPassword();
      //                      setIsError(false);
      //                   }}
      //                />
      //                <i onClick={() => setHidePassword(!hidePassword)}>
      //                   {hidePassword ? (
      //                      <AiOutlineEye />
      //                   ) : (
      //                      <AiOutlineEyeInvisible />
      //                   )}
      //                </i>
      //             </div>
      //             <div
      //                className={
      //                   props.doctorLoginPasswordError
      //                      ? loginStyles.errorMessageBox
      //                      : loginStyles.noErrorMessageBox
      //                }
      //             >
      //                <i>
      //                   <IoWarning />
      //                </i>
      //                <p>{props.doctorLoginPasswordErrorMessage}</p>
      //             </div>
      //             {/* <div className={loginStyles.passwordReset}>
      //                <p className={loginStyles.link}>Forgot password?</p>
      //             </div> */}
      //             <div className={loginStyles.submit}>
      //                <button
      //                   id={loginStyles.loginSubmit}
      //                   className={
      //                      props.doctorLoginEmailError ||
      //                      props.doctorLoginPasswordError ||
      //                      props.doctorLoginEmailError === null ||
      //                      props.doctorLoginPasswordError === null
      //                         ? `${loginStyles.btn} ${loginStyles.inactive}`
      //                         : btnActive
      //                         ? ` ${loginStyles.btn} ${loginStyles.btnActive}`
      //                         : loginStyles.btn
      //                   }
      //                   disabled={
      //                      props.doctorLoginEmailError ||
      //                      props.doctorLoginPasswordError ||
      //                      props.doctorLoginPasswordError ||
      //                      props.doctorLoginEmailError === null ||
      //                      props.doctorLoginPasswordError === null ||
      //                      props.doctorLoginPasswordError === null ||
      //                      btnActive
      //                   }
      //                   onClick={() => {
      //                      setBtnValue('logging in');
      //                      setBtnActive(true);
      //                      submitCredentialsFeedback();
      //                   }}
      //                >
      //                   {' '}
      //                   <p>{btnValue}</p>
      //                   <div
      //                      className={
      //                         btnActive
      //                            ? `${loginStyles.loader} ${loginStyles.btnActive}`
      //                            : loginStyles.loader
      //                      }
      //                   >
      //                      <i>
      //                         <BiLoaderAlt />
      //                      </i>
      //                   </div>
      //                </button>
      //                <div className={loginStyles.signupToggle}>
      //                   <div>
      //                      New Here ?{' '}
      //                      <p
      //                         className={loginStyles.link}
      //                         onClick={() => {
      //                            props.handleModalSignupDoctor();
      //                            docLoginFormRef.current.reset();
      //                            props.reset();
      //                            setIsError(false);
      //                            setBtnActive(false);
      //                            setBtnValue('Login');
      //                         }}
      //                      >
      //                         Sign up
      //                      </p>
      //                   </div>
      //                </div>
      //             </div>
      //          </form>
      //          <div></div>
      //       </div>
      //       <div className={loginStyles.rightSide}>
      //          <h1>Eirhub</h1>
      //          <p>Let's save lives.</p>
      //          <img id={loginStyles.loginImg} src={docLoginImage} alt="login" />
      //       </div>
      //    </div>
      // </section>
   );
}

export default DoctorLogin;
