import React, { useEffect } from 'react';
import styles from './loading.module.css';
import spinner from '../../assets/loading-gif.gif';
import { useDispatch, connect, useSelector } from 'react-redux';
import { addNewHealthDetails } from '../../Store/Actions';
import { useLocation } from 'react-router-dom';
import AlertsMessageBox from '../General Components/Alert/AlertsMessageBox';
import LogoutModal from '../General Components/Logout Modal/LogoutModal';

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
         <AlertsMessageBox />
         <LogoutModal />
         {/* <main>
            <div className={styles.homeloadingbg}>
               <div className={styles.loadingspinner}>
                  <img src={spinner} alt="" />
               </div>
            </div>
         </main> */}
      </>
   );
}
export default connect(mapStateToProps)(Loading);
