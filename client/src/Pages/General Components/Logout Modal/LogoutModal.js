import React from 'react';
import styles from './logoutmodal.module.css';
import { persistor } from '../../../Store/ReducerStore';
import { Logout } from '../../../context/authcontext';
import { setPatientAuth } from '../../../Store/Actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function LogoutModal(props) {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   function logout() {
      try {
         setTimeout(() => persistor.purge(), 200);
         dispatch(setPatientAuth(false));
         Logout();
         navigate('/landing-page');
      } catch (err) {
         console.log(err);
      }
   }
   return (
      <>
         <main
            id={
               props.logoutModal === true
                  ? `${styles.show}`
                  : `${styles.modalBody}`
            }
         >
            <div className={styles.modal}>
               <div className={styles.message}>
                  <h3>Are you sure you want to leave?</h3>
               </div>
               <div className={styles.btns}>
                  <button
                     className={styles.cancel}
                     onClick={() => props.handleLogoutModal()}
                  >
                     No, stay
                  </button>
                  <button className={styles.quit} onClick={() => logout()}>
                     Yes, leave
                  </button>
               </div>
            </div>
         </main>
      </>
   );
}

export default LogoutModal;
