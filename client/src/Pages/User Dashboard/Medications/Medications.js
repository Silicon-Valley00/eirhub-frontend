import React, { useEffect, useState } from 'react';
import styles from './medication.module.css';
import { CgPill } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { fetchMedications, deletePrescriptions } from '../../../Store/Actions';
import { useSelector } from 'react-redux';

function Medication(props) {
   const dispatch = useDispatch();
   const patientID = useSelector((state) => state.profile.id_patient);

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
   }, []);

   var list;
   //displays prescriptions
   if (prescriptions === undefined) {
      list = <p className={styles.emptyMessage}>Nothing to show here.</p>;
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
                                 new Date(item.end_date) -
                                    new Date(item.last_taken_date)
                              ) /
                              (1000 * 3600 * 24) /
                              parseFloat(item.dosage[0])
                           }
                        left`}
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
                           dispatch(deletePrescriptions(item.id));
                        }}
                     >
                        Delete
                     </button>
                  </div>
               </div>
            );
         });
      } else if (prescriptions.length === 0) {
         // Sends message to be displayed when saved videos is empty
         list = <p>Nothing to show here.</p>;
      }
   }

   return (
      <>
         <div id={styles.medicationsBody}>
            <div className={styles.medicationsBoxContent}>
               <div className={styles.medicationBox}>
                  <div className={styles.upperContent}>
                     <div className={styles.icon}>
                        <i>
                           <CgPill />
                        </i>
                     </div>
                     <div className={styles.medicationName}>
                        <h3>Ticagrelor</h3>
                        <p>Time: Before meals</p>
                     </div>
                     <div className={styles.medicationCounter}>
                        <p>
                           {' '}
                           {`${Math.round(
                              (new Date('2022-07-08') -
                                 new Date('2022-07-01')) /
                                 (1000 * 3600 * 24) /
                                 parseFloat(2)
                           )}
                        left`}
                        </p>
                     </div>
                  </div>
                  <div className={styles.midContent}>
                     <div className={styles.medicationDurations}>
                        <p>Dosage:</p>
                        <h3>2/x3</h3>
                     </div>
                     <div className={styles.medicationDurations}>
                        <p>Last taken Date:</p>
                        <h3>16 July 2022</h3>
                     </div>
                     <div className={styles.medicationDurations}>
                        <p>Start Date:</p>
                        <h3>15 July 2022</h3>
                     </div>
                     <div className={styles.medicationDurations}>
                        <p>End Date:</p>
                        <h3>19 August 2022</h3>
                     </div>
                  </div>
                  <div className={styles.lowerContent}>
                     <button
                        onClick={() =>
                           props.pushData({
                              drug_name: 'name',
                              dosage: 'mcndj',
                              time_of_administration: '14:54',
                              start_date: '2022-07-25',
                              end_date: '2022-07-13',
                           })
                        }
                     >
                        Edit
                     </button>
                     <button>Delete</button>
                  </div>
               </div>{' '}
               {list}
            </div>
         </div>
      </>
   );
}
export default Medication;
