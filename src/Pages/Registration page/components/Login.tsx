import { useState, useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginStyles from './Login.module.css';
import loginImage from '../../../assets/images/loginimage.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
   fetchProfile,
   setLoading,
   setMessage,
   setPatientAuth,
} from '../../../Store/Actions.js';
// import { LoginUser } from '../../../context/authcontext';
import store from '../../../Store/store';
import { persistor } from '../../../Store/store';
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
   ThemeProvider,
   Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
   MdAccountCircle,
   MdOutlineVisibility,
   MdOutlineVisibilityOff,
} from 'react-icons/md';
import { useStyles } from './dialogStyles';
import { theme } from '../../../utils/theme/theme';

function PatientLogin({
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
               <p>Health is an everyday thing</p>
               <img id={loginStyles.loginImg} src={loginImage} alt="login" />
            </div>
            {/* REVIEW: space between label and input except for password. */}
            <div style={{ padding: '20px', width: '100%' }}>
               <form className={loginStyles.loginForm}>
                  <h1 className={loginStyles.title}>Welcome Back</h1>
                  <p className={loginStyles.info}>Please enter your details</p>
                  <div>
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
                  </div>

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
               </form>
            </div>
         </div>
      </Dialog>
   );
}

export default PatientLogin;
