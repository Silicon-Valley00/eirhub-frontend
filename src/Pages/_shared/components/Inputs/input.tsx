import {
   IconButton,
   InputAdornment,
   OutlinedInput,
   SxProps,
   TextField,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { BsPersonCircle } from 'react-icons/bs';
import { useStyles } from '../../../../appTheme';
import { useState } from 'react';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

type GeneralInputProps = {
   label: string;
   name: string;
   placeholder: string;
   type?: 'text' | 'password' | 'email';
   sx?: SxProps;
   required?: boolean;
   icons?: React.ReactNode;
};

const GeneralInput = ({
   label,
   name,
   placeholder,
   sx,
   type,
   required,
}: GeneralInputProps) => {
   const [showPassword, setShowPassword] = useState(false);
   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
   ) => {
      event.preventDefault();
   };

   const classes = useStyles();
   const { control, formState } = useFormContext();
   return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         <label htmlFor={name}>{label}</label>
         <Controller
            name={name}
            control={control}
            rules={{
               required: {
                  value: true,
                  message: 'Lastname is required',
               },
            }}
            render={({ field }) =>
               type !== 'password' ? (
                  <TextField
                     {...field}
                     id={name}
                     placeholder={placeholder}
                     variant="outlined"
                     error={Boolean(formState.errors.name)}
                     required
                     fullWidth
                     sx={{ ...sx }}
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
               ) : (
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
               )
            }
         />
      </div>
   );
};

export default GeneralInput;
