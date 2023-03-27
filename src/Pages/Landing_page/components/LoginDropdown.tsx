import React from 'react';
import styles from './dropdown.module.css';
import { Box, Modal, Typography } from '@mui/material';
import Login from '../../Registration page/components/Login';

const LoginDropdown = () => {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
   };
   return (
      <>
         <div className={styles.main}>
            <div className={styles.sub_main}>
               <ul className={styles.list}>
                  <li className={styles.list_first}>Login as: </li>
                  <div className={styles.list_last} onClick={handleOpen}>
                     Patient
                  </div>
                  <div className={styles.list_last} onClick={undefined}>
                     Doctor
                  </div>
               </ul>
            </div>
         </div>
         <div>
            <Login show={open} handleClose={handleClose} />
         </div>
      </>
   );
};

export default LoginDropdown;
