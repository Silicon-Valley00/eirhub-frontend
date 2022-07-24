import React from 'react';
import styles from './dropdown.module.css';

const LoginDropdown = ({ clicked,handleModalLogin,handleModalLoginDoctor }) => {
   return (
      <>
         <div className={styles.main}>
            <div className={styles.sub_main}>
               <ul className={styles.list}>
                  <li className={styles.list_first}>Login as: </li>
                  <div className={styles.list_last}                         onClick={() => handleModalLogin()}
>
                     Patient
                  </div>
                  <div className={styles.list_last}                         onClick={() => handleModalLoginDoctor()}
>
                     Doctor
                  </div>
               </ul>
            </div>
         </div>
      </>
   );
};

export default LoginDropdown;
