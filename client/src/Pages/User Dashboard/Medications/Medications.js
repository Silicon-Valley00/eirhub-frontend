import React from 'react';
import styles from './medication.module.css';
import { CgPill } from 'react-icons/cg';

function Medication(props) {
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
                        <p>12 left</p>
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
               </div>
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
                        <p>12 left</p>
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
                     <button>Edit</button>
                     <button>Delete</button>
                  </div>
               </div>
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
                        <p>12 left</p>
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
                     <button>Edit</button>
                     <button>Delete</button>
                  </div>
               </div>
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
                        <p>12 left</p>
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
                     <button>Edit</button>
                     <button>Delete</button>
                  </div>
               </div>
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
                        <p>12 left</p>
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
                     <button>Edit</button>
                     <button>Delete</button>
                  </div>
               </div>
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
                        <p>12 left</p>
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
                     <button>Edit</button>
                     <button>Delete</button>
                  </div>
               </div>
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
                        <p>12 left</p>
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
                     <button>Edit</button>
                     <button>Delete</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
export default Medication;
