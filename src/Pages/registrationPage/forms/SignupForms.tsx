import React, { useState } from 'react';
import styles from '../styles/forms.module.css';
import { Controller, FormProvider, useForm } from 'react-hook-form';
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
import { Link, useNavigate } from 'react-router-dom';
import { GenericButton, GenericInput } from '../../_shared';
import Constants from '../../../utils/constants';

const SignupForms = () => {
   const [showPassword, setShowPassword] = useState(false);
   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.preventDefault();
   };

   const schema = z.object({
      firstname: z.string().min(3),
      lastname: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6),
      dob: z.string().min(3),
   });

   const methods = useForm({
      mode: 'onChange',
      resolver: zodResolver(schema),
   });

   const navigate = useNavigate();
   return (
      <FormProvider {...methods}>
         <form
            className={styles.signupBody}
            onSubmit={(e) => {
               e.preventDefault();
            }}
         >
            <div className={styles.firstAndLastname}>
               <div className={styles.signupFormBoxInputs}>
                  <GenericInput
                     label="Firstnames"
                     name="firstname"
                     placeholder="Enter firstname"
                     icons={<BsPersonCircle />}
                  />
               </div>

               <div>
                  <GenericInput
                     label="Lastname"
                     name="lastname"
                     placeholder="Enter firstname"
                     icons={<BsPersonCircle />}
                  />
               </div>
            </div>

            <div className={styles.names}>
               <GenericInput
                  label="Email"
                  name="email"
                  placeholder="Enter firstname"
                  icons={<BsPersonCircle />}
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
               <GenericInput
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter Password"
                  icons={<BsLock />}
               />
            </div>

            <div className={styles.names}>
               <GenericInput
                  type="password"
                  label="Confirm Password"
                  name="confirm_password"
                  placeholder="Confirm you password"
                  icons={<BsLock />}
               />
            </div>

            <div className={styles.btn}>
               <GenericButton
                  onClick={() => navigate(Constants.ROUTES.userDashboard)}
                  sx={{
                     width: '60%',
                     fontSize: '.9rem',
                     height: '40px',
                     borderRadius: '8px',
                  }}
                  text="Create Account"
                  type="submit"
                  variant="contained"
               />
            </div>

            <div className={styles.already_have_an_account}>
               <p>
                  Already have an account? <span>Login </span>{' '}
               </p>
            </div>
         </form>
      </FormProvider>
   );
};

export default SignupForms;
