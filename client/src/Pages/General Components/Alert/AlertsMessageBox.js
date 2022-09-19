import React, { useEffect, useState } from 'react';
import styles from './alerts.module.css';
import { FaTimes } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import { RiErrorWarningFill } from 'react-icons/ri';
import { connect } from 'react-redux';
import { setMessage } from '../../../Store/Actions';
import { useDispatch } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      message: state.message,
   };
};
function AlertsMessageBox(props) {
   const dispatch = useDispatch();

   // const [show, setShow] = useState(props.message.show);
   useEffect(() => {
      setTimeout(() => {
         dispatch(
            setMessage({
               show: false,
               msg: props.message.msg,
               state: props.message.state,
            })
         );
      }, 3000);
   }, [props.message.show]);

   function handleClose() {
      dispatch(
         setMessage({
            show: false,
            msg: props.message.msg,
            state: props.message.state,
         })
      );
   }
   return (
      <main
         id={styles.alertBody}
         style={{ display: props.message.show === false ? 'none' : '' }}
      >
         <div className={styles.alertBox}>
            <div
               className={`${
                  props.message.state === 0
                     ? `${styles.alertError}`
                     : `${styles.alertSuccess}`
               } ${props.message.show ? `${styles.show}` : `${styles.hide}`}`}
            >
               <span className={styles.iconBox}>
                  <i>
                     {props.message.state === 0 ? (
                        <RiErrorWarningFill />
                     ) : (
                        <HiCheckCircle />
                     )}{' '}
                  </i>
               </span>

               <span className={styles.message}>{props.message.msg}</span>
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
export default connect(mapStateToProps)(AlertsMessageBox);
