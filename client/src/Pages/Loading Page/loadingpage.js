import React, { useEffect } from 'react';
import styles from './loading.module.css';
import spinner from '../../assets/loading-gif.gif';
import { useDispatch, connect, useSelector } from 'react-redux';
import { addNewHealthDetails } from '../../Store/Actions';
import { useLocation } from 'react-router-dom';

const mapStateToProps = (state) => {
   return {
      savedProfile: state.profile,
      savedHealthDetails: state.health,
      savedGuardianDetails: state.guardian,
   };
};

function Loading(props) {
   const patientID = useSelector((state) => state.user.id_patient);
   const auth = useSelector((state) => state.isPatient);
   const location = useLocation();

   const dispatch = useDispatch();
   useEffect(() => {
      if (auth === true && location.state === true) {
         dispatch(addNewHealthDetails(patientID, props.savedProfile));
      }
      dispatch(
         addNewHealthDetails(
            props.savedHealthDetails,
            props.savedGuardianDetails,
            patientID,
            props.savedProfile
         )
      );
   });
   return (
      <>
         <main id={styles.loadingBody}>
            {/* <div className={styles.homeloadingbg}>
               <div className={styles.loadingspinner}>
                  <img src={spinner} alt="" />
               </div>
            </div> */}
            <div className={styles.loader}>
               <span style={{ '--i': 1 }}></span>
               <span style={{ '--i': 2 }}></span>
               <span style={{ '--i': 3 }}></span>
               <span style={{ '--i': 4 }}></span>
               <span style={{ '--i': 5 }}></span>
               <span style={{ '--i': 6 }}></span>
               <span style={{ '--i': 7 }}></span>
               <span style={{ '--i': 8 }}></span>
               <span style={{ '--i': 9 }}></span>
               <span style={{ '--i': 10 }}></span>
            </div>
         </main>
      </>
   );
}
export default connect(mapStateToProps)(Loading);
