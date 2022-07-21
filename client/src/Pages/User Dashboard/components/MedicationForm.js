import React from 'react';
import styles from './medicationForm.module.css';
import { IoCalendar } from 'react-icons/io5';
import { GiMedicinePills, GiPillDrop } from 'react-icons/gi';
import { TiTime } from 'react-icons/ti';

function MedicationForm() {
   return (
      <>
         <div className={styles.medicationFormBody}>
            <div className={styles.formContent}>
               <div className={styles.formTitle}>
                  <h3>Fill in prescription details</h3>
               </div>
               <div className={styles.form}>
                  <div className={styles.formBox}>
                     <label htmlFor="drugname"> Drug name</label>
                     <div className={styles.formBoxInputs}>
                        <i>
                           <GiMedicinePills />
                        </i>
                        <input
                           name="drugname"
                           type="text"
                           id="lastname"
                           placeholder="Enter name of drug"
                        />
                     </div>
                  </div>
                  <div className={styles.formBox}>
                     <label htmlFor="dosage"> Dosage</label>
                     <div className={styles.formBoxInputs}>
                        <i>
                           <GiPillDrop />
                        </i>
                        <input
                           name="dosage"
                           type="text"
                           id="dosage"
                           placeholder="eg.1/x3"
                        />
                     </div>
                  </div>
                  <div className={styles.formBox}>
                     <label htmlFor="time"> Time</label>
                     <div className={styles.formBoxInputs}>
                        <i>
                           <TiTime />
                        </i>
                        <input
                           name="time"
                           type="text"
                           id="time"
                           placeholder="Select time to take drug"
                           onFocus={(event) => (event.target.type = 'time')}
                           onBlur={(event) => {
                              if (!event.target.value) {
                                 event.target.type = 'text';
                              }
                           }}
                        />
                     </div>
                  </div>

                  <div className={styles.formBox}>
                     <label htmlFor="startdate">Start Date </label>
                     <div className={styles.formBoxInputs}>
                        <i>
                           <IoCalendar />
                        </i>
                        <input
                           type="text"
                           name="startdate"
                           id="date"
                           placeholder="DD/MM/YYYY"
                           onFocus={(event) => (event.target.type = 'date')}
                           onBlur={(event) => {
                              if (!event.target.value) {
                                 event.target.type = 'text';
                              }
                           }}
                        />
                     </div>
                  </div>
                  <div className={styles.formBox}>
                     <label htmlFor="enddate">End Date </label>
                     <div className={styles.formBoxInputs}>
                        <i>
                           <IoCalendar />
                        </i>
                        <input
                           type="text"
                           name="enddate"
                           id="enddate"
                           placeholder="DD/MM/YYYY"
                           onFocus={(event) => (event.target.type = 'date')}
                           onBlur={(event) => {
                              if (!event.target.value) {
                                 event.target.type = 'text';
                              }
                           }}
                        />
                     </div>
                  </div>

                  <div className={styles.formButton}>
                     <button id={styles.formBtn} className={styles.formBtn}>
                        Add prescription
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
export default MedicationForm;
