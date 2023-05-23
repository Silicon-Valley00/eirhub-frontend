import { Controller, useForm } from 'react-hook-form';
import loginStyles from '../styles/Login.module.css';
import {
   Button,
   IconButton,
   InputAdornment,
   OutlinedInput,
   TextField,
   ThemeProvider,
} from '@mui/material';
import { z } from 'zod';
import { useStyles } from '../dialogStyles';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
   MdAccountCircle,
   MdOutlineVisibility,
   MdOutlineVisibilityOff,
} from 'react-icons/md';
import { theme } from '../../../utils/theme/theme';

const LoginForms = () => {
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
      <div>
         <form className={loginStyles.loginForm}>
            <h1 className={loginStyles.title}>Welcome Back</h1>
            <p className={loginStyles.info}>Please enter your details</p>
            {/* REVIEW: Don't really understand why username is used in login */}
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

            {/* REVIEW:Edge browser seem to show the eye icon when password is being entered */}
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

            {/* FIXME: disabled prop not working */}
            <ThemeProvider theme={theme}>
               <Button
                  type="submit"
                  variant="contained"
                  // disabled={!formState.isValid}
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
   );
};

export default LoginForms;
