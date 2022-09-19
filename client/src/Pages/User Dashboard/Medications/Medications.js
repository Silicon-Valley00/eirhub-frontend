import React, { useEffect, useState } from 'react';
import styles from './medication.module.css';
import { CgPill } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import {
   fetchMedications,
   deletePrescriptions,
   setReloadMedications,
} from '../../../Store/Actions';
import { useSelector, connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      reloadMedications: state.reloadMedications,
   };
};

function Medication(props) {
   const dispatch = useDispatch();
   const patientID = useSelector((state) => state.user.id_patient);

   const [prescriptions, setPrescriptions] = useState([]);
   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];

   useEffect(() => {
      async function fetchdata() {
         const items = await fetchMedications(patientID);
         setPrescriptions(items);
      }
      fetchdata();
      dispatch(setReloadMedications(false));
   }, [props.reloadMedications]);

   var list;
   //displays prescriptions
   if (prescriptions === undefined) {
      list = (
         <p
            style={{
               width: '200%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               color: '#c2c9d1',
               fontSize: '150%',
            }}
         >
            Nothing to show here.
         </p>
      );
   } else {
      if (prescriptions.length !== 0) {
         list = prescriptions.map((item, j) => {
            return (
               <div
                  className={styles.medicationBox}
                  key={`${item.drug_name}-${j}`}
               >
                  <div className={styles.upperContent}>
                     <div className={styles.icon}>
                        <i>
                           <CgPill />
                        </i>
                     </div>
                     <div className={styles.medicationName}>
                        <h3>{item.drug_name}</h3>
                        <p>{`Time: ${item.time_of_administration}`}</p>
                     </div>
                     <div className={styles.medicationCounter}>
                        <p>
                           {`${
                              Math.round(
                                 (new Date(item.end_date) -
                                    new Date(item.last_taken_date)) /
                                    (1000 * 3600 * 24)
                              ) < 0
                                 ? '0'
                                 : Math.round(
                                      (new Date(item.end_date) -
                                         new Date(item.last_taken_date)) /
                                         (1000 * 3600 * 24)
                                   )
                           }
                        days left`}
                        </p>
                     </div>
                  </div>
                  <div className={styles.midContent}>
                     <div className={styles.medicationDurations}>
                        <p>Dosage:</p>
                        <h3>{item.dosage}</h3>
                     </div>
                     <div className={styles.medicationDurations}>
                        <p>Last taken Date:</p>
                        <h3>{`${new Date(item.last_taken_date).getDate()} ${
                           months[new Date(item.last_taken_date).getMonth()]
                        } ${new Date(item.last_taken_date).getFullYear()}`}</h3>
                     </div>
                     <div className={styles.medicationDurations}>
                        <p>Start Date:</p>
                        <h3>{`${new Date(item.start_date).getDate()} ${
                           months[new Date(item.start_date).getMonth()]
                        } ${new Date(item.start_date).getFullYear()}`}</h3>
                     </div>
                     <div className={styles.medicationDurations}>
                        <p>End Date:</p>
                        <h3>{`${new Date(item.end_date).getDate()} ${
                           months[new Date(item.end_date).getMonth()]
                        } ${new Date(item.end_date).getFullYear()}`}</h3>
                     </div>
                  </div>
                  <div className={styles.lowerContent}>
                     <button
                        onClick={() =>
                           props.pushData({
                              drug_name: item.drug_name,
                              dosage: item.dosage,
                              time_of_administration:
                                 item.time_of_administration,
                              start_date: item.start_date,
                              end_date: item.end_date,
                              id_prescription: item.id_prescription,
                              last_taken_date: item.last_taken_date,
                           })
                        }
                     >
                        Edit
                     </button>
                     <button
                        onClick={() => {
                           dispatch(deletePrescriptions(item.id_prescription));
                        }}
                     >
                        Delete
                     </button>
                  </div>
               </div>
            );
         });
      } else if (prescriptions.length === 0) {
         // Sends message to be displayed when saved prescriptions is empty
         list = (
            <p
               style={{
                  width: '200%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#c2c9d1',
                  fontSize: '150%',
               }}
            >
               Nothing to show here.
            </p>
         );
      }
   }

   return (
      <>
         <div id={styles.medicationsBody}>
            <div className={styles.medicationsBoxContent}>{list}</div>
         </div>
      </>
   );
}
// export default Medication;
export default connect(mapStateToProps)(Medication);
