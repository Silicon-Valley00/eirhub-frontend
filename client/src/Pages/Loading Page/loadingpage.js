import React, { useEffect } from 'react';
import styles from './loading.module.css';
import spinner from '../../assets/loading-gif.gif';
import { useDispatch } from 'react-redux';
import { addNewHealthDetails,connect } from '../../Store/Actions';

const mapStateToProps = (state) => {
   return {
      savedProfile: state.profile,
      savedHealthDetails: state.health,
      savedGuardianDetails: state.guardian,
   };
};
                

function Loading(props) {     
   const patientID = useSelector((state) => state.user.id_patient);
   const dispatch = useDispatch();
   useEffect (() => {
      dispatch(addNewHealthDetails(patientID,props.savedProfile))
   }) 
   return (
      <>
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
export default connect(mapStateToProps)(Loading)
