import React, { useEffect, useState } from 'react';
import styles from './alerts.module.css';
import { FaTimes } from 'react-icons/fa';

function AlertsMessageBox() {
   const [show, setShow] = useState(false);
   useEffect(() => {
      setTimeout(() => {
         setShow(!show);
      }, 5000);
   }, [show]);

   function handleClose() {
      setShow(false);
   }
   return (
      <main id={styles.alertBody}>
         <div className={styles.alertBox}>
            <div
               className={`${styles.alert} ${
                  show ? `${styles.show}` : `${styles.hide}`
               }`}
            >
               <span className={styles.iconBox}>
                  <i>+</i>
               </span>

               <span className={styles.message}>
                  Warning: This is an error message.
               </span>
               <span className={styles.closeBtn} onClick={() => handleClose()}>
                  <span>
                     <i>
                        <FaTimes />
                     </i>
                  </span>
               </span>
            </div>
         </div>
      </main>
   );
}
export default AlertsMessageBox;
