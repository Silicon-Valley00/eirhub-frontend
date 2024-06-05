import { FormProvider, useForm } from 'react-hook-form';
import loginStyles from '../styles/Login.module.css';
import { z } from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { BiMailSend } from 'react-icons/bi';
import { GenericButton, GenericInput } from '../../_shared';
import { useNavigate } from 'react-router-dom';
import Constants from '../../../utils/constants';

const LoginForms = () => {
   const navigate = useNavigate();
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

   const methods = useForm({
      resolver: zodResolver(schema),
      mode: 'onChange',
   });

   return (
      <FormProvider {...methods}>
         <form className={loginStyles.loginForm}>
            <h1 className={loginStyles.title}>Welcome Back</h1>
            <p className={loginStyles.info}>Please enter your details</p>
            {/* REVIEW: Don't really understand why username is used in login */}
            <div className={loginStyles.inputField}>
               <GenericInput
                  label="Email"
                  name="email"
                  placeholder="Someone@gmail.com"
                  icons={<BiMailSend />}
               />
            </div>

            {/* REVIEW:Edge browser seem to show the eye icon when password is being entered */}
            <div className={loginStyles.inputField}>
               <GenericInput
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
               />
            </div>

            {/* FIXME: disabled prop not working */}
            <GenericButton
               type="submit"
               variant="contained"
               onClick={() => navigate(Constants.ROUTES.doctorDashborad)}
               text="Login"
               sx={{
                  width: '60%',
                  fontSize: '.9rem',
                  height: '40px',
                  borderRadius: '8px',
               }}
            />
            <div className={loginStyles.signupToggle}>
               <div>
                  New Here ?{' '}
                  <p className={loginStyles.link} onClick={() => {}}>
                     Sign up
                  </p>
               </div>
            </div>
         </form>
      </FormProvider>
   );
};

export default LoginForms;
