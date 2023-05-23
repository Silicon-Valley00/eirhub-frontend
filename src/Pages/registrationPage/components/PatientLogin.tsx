import { useState, useRef } from 'react';
import loginStyles from '../styles/Login.module.css';
import loginImage from '../../../assets/images/loginimage.svg';

import {
   Button,
   Dialog,
   DialogContent,
   IconButton,
   InputAdornment,
   OutlinedInput,
   TextField,
   ThemeProvider,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
   MdAccountCircle,
   MdOutlineVisibility,
   MdOutlineVisibilityOff,
} from 'react-icons/md';
import { useStyles } from '../dialogStyles';
import { theme } from '../../../utils/theme/theme';
import LoginForms from '../forms/LoginForms';

function PatientLogin({
   show,
   handleClose,
}: {
   show: boolean;
   handleClose: () => void;
}) {
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
         maxWidth="xl"
         fullWidth={true}
      >
         <DialogContent className={loginStyles.loginSection}>
            <div style={{ padding: '20px', width: '100%' }}>
               <LoginForms />
            </div>

            <div className={loginStyles.rightSide}>
               <h1>Eirhub</h1>
               <p>Health is an everyday thing</p>
               <img id={loginStyles.loginImg} src={loginImage} alt="login" />
            </div>
         </DialogContent>
      </Dialog>
   );
}

export default PatientLogin;
