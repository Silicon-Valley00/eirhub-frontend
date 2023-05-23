import React, { useState } from 'react';
import styles from '../styles/forms.module.css';
import { Controller, useForm } from 'react-hook-form';
import { useStyles } from '../dialogStyles';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
   Button,
   IconButton,
   Input,
   InputAdornment,
   OutlinedInput,
   TextField,
} from '@mui/material';
import { BsLock, BsPersonCircle } from 'react-icons/bs';
import { BiEnvelope } from 'react-icons/bi';
import { DatePicker } from '@mui/x-date-pickers';
import {
   MdAccountCircle,
   MdOutlineVisibility,
   MdOutlineVisibilityOff,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const SignupForms = () => {
   const [showPassword, setShowPassword] = useState(false);
   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.preventDefault();
   };

   const classes = useStyles();

   const schema = z.object({
      firstname: z.string().min(3),
      lastname: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
      dob: z.string().min(3),
   });

   const { control, handleSubmit, formState } = useForm({
      mode: 'onChange',
      resolver: zodResolver(schema),
   });

   return (
      <form
         className={styles.signupBody}
         onSubmit={(e) => {
            e.preventDefault();
         }}
      >
         <div className={styles.firstAndLastname}>
            <div className={styles.signupFormBoxInputs}>
               <label htmlFor="firstname">Firstname</label>
               <Controller
                  name="firstname"
                  control={control}
                  rules={{
                     required: {
                        value: true,
                        message: 'Firstname is required',
                     },
                  }}
                  render={({ field }) => (
                     <TextField
                        {...field}
                        id="firstname"
                        placeholder="Enter Firstname"
                        variant="outlined"
                        error={Boolean(formState.errors.firstname)}
                        required
                        fullWidth
                        autoFocus
                        size="small"
                        className={classes.inputField}
                        InputProps={{
                           startAdornment: (
                              <InputAdornment position="start">
                                 <BsPersonCircle />
                              </InputAdornment>
                           ),
                        }}
                     />
                  )}
               />
            </div>

            <div>
               <label htmlFor="lastname">Lastname</label>
               <Controller
                  name="lastname"
                  control={control}
                  rules={{
                     required: {
                        value: true,
                        message: 'Lastname is required',
                     },
                  }}
                  render={({ field }) => (
                     <TextField
                        {...field}
                        id="lastname"
                        placeholder="Enter Lastname"
                        variant="outlined"
                        error={Boolean(formState.errors.lastname)}
                        required
                        fullWidth
                        size="small"
                        className={classes.inputField}
                        InputProps={{
                           startAdornment: (
                              <InputAdornment position="start">
                                 <BsPersonCircle />
                              </InputAdornment>
                           ),
                        }}
                     />
                  )}
               />
            </div>
         </div>

         <div className={styles.names}>
            <label htmlFor="email">Email</label>
            <Controller
               name="email"
               control={control}
               render={({ field }) => (
                  <TextField
                     {...field}
                     id="email"
                     placeholder="Someone@gmail.com"
                     variant="outlined"
                     error={Boolean(formState.errors.email)}
                     required
                     fullWidth
                     size="small"
                     className={classes.inputField}
                     InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                              <BiEnvelope />
                           </InputAdornment>
                        ),
                     }}
                  />
               )}
            />
         </div>

         <div className={styles.names}>
            <label htmlFor="dob">Date of Birth</label>
            <DatePicker
               sx={{
                  '& .MuiInputBase-root': {
                     height: '42px', // <-- This sets the height
                  },
                  width: '100%',
                  '& .MuiInputAdornment-root': {
                     order: -1, // Move the icon to the left side
                  },
               }}
            />
         </div>

         <div className={styles.names}>
            <label htmlFor="password">Password</label>
            <Controller
               name="password"
               control={control}
               defaultValue=""
               render={({ field }) => (
                  <TextField
                     {...field}
                     placeholder="Enter Password"
                     id="outlined-adornment-password"
                     type={showPassword ? 'text' : 'password'}
                     InputProps={{
                        endAdornment: (
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
                        ),
                        startAdornment: (
                           <InputAdornment position="start">
                              <BsLock />
                           </InputAdornment>
                        ),
                     }}
                     size="small"
                     className={classes.inputField}
                  />
               )}
            />
         </div>

         <div className={styles.names}>
            <label htmlFor="confirm_password">Confirm Password</label>
            <Controller
               name="password"
               control={control}
               defaultValue=""
               render={({ field }) => (
                  <TextField
                     {...field}
                     placeholder="Confirm your password"
                     id="outlined-adornment-password"
                     type={showPassword ? 'text' : 'password'}
                     InputProps={{
                        endAdornment: (
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
                        ),
                        startAdornment: (
                           <InputAdornment position="start">
                              <BsLock />
                           </InputAdornment>
                        ),
                     }}
                     size="small"
                     className={classes.inputField}
                  />
               )}
            />
         </div>

         <div className={styles.btn}>
            <Button
               type="submit"
               variant="contained"
               // disabled={!formState.isValid}
               startIcon={<MdAccountCircle />}
            >
               Submit
            </Button>
         </div>

         <div>
            <p>Already have an account? Login</p>
         </div>
      </form>
   );
};

export default SignupForms;
