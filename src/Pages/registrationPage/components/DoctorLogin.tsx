import { useState } from 'react';
import loginStyles from '../styles/Login.module.css';
import docLoginImage from '../../../assets/images/doctor login.svg';
import { Dialog } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import LoginForms from '../forms/LoginForms';

function DoctorLogin({
   show,
   handleClose,
}: {
   show: boolean;
   handleClose: () => void;
}) {
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
            <div style={{ padding: '20px', width: '100%' }}>
               <LoginForms />
            </div>

            <div className={loginStyles.rightSide}>
               <h1>Eirhub</h1>
               <p>Let's save lives.</p>
               <img id={loginStyles.loginImg} src={docLoginImage} alt="login" />
            </div>
         </div>
      </Dialog>
   );
}

export default DoctorLogin;
