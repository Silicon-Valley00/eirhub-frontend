import React, { useEffect } from 'react';
import styles from './loading.module.css';
import spinner from '../../assets/loading-gif.gif';
import { useDispatch, connect, useSelector } from 'react-redux';
import { fetchMedications, setMedicationsTemp } from '../../Store/Actions';
import { addNewGuardianInfo } from '../../Store/Actions';
import { useLocation } from 'react-router-dom';
import AlertsMessageBox from '../General Components/Alert/AlertsMessageBox';

const mapStateToProps = (state) => {
   return {
      savedProfile: state.profile,
      savedHealthDetails: state.health,
      savedGuardianDetails: state.guardian,
   };
};

function Loading(props) {
   const patientID = useSelector((state) => state.user.id_patient);
   const auth = useSelector((state) => state.isPatientAuth);
   const { state } = useLocation();
   const { status } = state;

   const dispatch = useDispatch();

   useEffect(() => {
      if (auth === true && status === true) {
         console.log('running');
         dispatch(
            addNewGuardianInfo(props.savedGuardianDetails, props.savedProfile)
         );
      }

      if (patientID !== '') {
         async function fetchdata() {
            const items = await fetchMedications(patientID);
            dispatch(setMedicationsTemp(items));
         }

         fetchdata();
      }
   }, []);
   return (
      <>
         {/* <AlertsMessageBox
            show={true}
            state={1}
            message={'Profile could not load. Try again.'}
         /> */}
         <main>
            <div className={styles.homeloadingbg}>
               <div className={styles.loadingspinner}>
                  <img src={spinner} alt="" />
               </div>
            </div>
         </main>
      </>
   );
}
export default connect(mapStateToProps)(Loading);