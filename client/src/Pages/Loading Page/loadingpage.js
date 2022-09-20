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
      savedGuardianDetails: state.guardian,
      patientID: state.profile.id_patient,
      auth: state.isPatientAuth,
   };
};

function Loading(props) {
   const { state } = useLocation();
   const { status } = state;

   const dispatch = useDispatch();

   useEffect(() => {
      // console.log(status);
      // console.log(props.auth);
      // setTimeout(() => {
      //    if (props.auth === true && status === true) {
      //       console.log('running');
      //       dispatch(
      //          addNewGuardianInfo(
      //             props.savedGuardianDetails,
      //             props.savedProfile
      //          )
      //       );
      //    }
      // }, 1500);
      if (props.patientID !== '') {
         async function fetchdata() {
            const items = await fetchMedications(props.patientID);
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
