import React from 'react';
import styles from './dropdown.module.css';
import { Link } from 'react-router-dom';

const SignUpDropdown = ({ clicked ,handleModalSignup,handleModalSignupDoctor}) => {
   return (
      <>
         <div className={styles.main}>
            <div className={styles.sub_main}>
               <ul className={styles.list}>
                  <li className={styles.list_first}>Sign up as: </li>
                  <div className={styles.list_last}                         onClick={() => handleModalSignup()}
>
                     Patient
                  </div>
                  <div className={styles.list_last}                         onClick={() => handleModalSignupDoctor()}
>
                     Doctor
                  </div>
               </ul>
            </div>
         </div>
      </>
   );
};

export default SignUpDropdown;
