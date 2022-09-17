import React, { useEffect, useState } from 'react';
import styles from './alerts.module.css';
import { FaTimes } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import { RiErrorWarningFill } from 'react-icons/ri';

function AlertsMessageBox(props) {
   const [show, setShow] = useState(props.show);
   useEffect(() => {
      setTimeout(() => {
         setShow(false);
      }, 5000);
   }, [show]);

   function handleClose() {
      setShow(false);
   }
   return (
      <main id={styles.alertBody}>
         <div className={styles.alertBox}>
            <div
               className={`${
                  props.state === 0
                     ? `${styles.alertError}`
                     : `${styles.alertSuccess}`
               } ${show ? `${styles.show}` : `${styles.hide}`}`}
            >
               <span className={styles.iconBox}>
                  <i>
                     {props.state === 0 ? (
                        <RiErrorWarningFill />
                     ) : (
                        <HiCheckCircle />
                     )}{' '}
                  </i>
               </span>

               <span className={styles.message}>{props.message}</span>
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
