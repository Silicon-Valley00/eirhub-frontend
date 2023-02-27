import React, { useState, useEffect } from 'react';
import styles from './medicationForm.module.css';
import { IoCalendar } from 'react-icons/io5';
import { GiMedicinePills, GiPillDrop } from 'react-icons/gi';
import { TiTime } from 'react-icons/ti';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import {
   addPrescriptions,
   updatePrescriptions,
   setReloadMedications,
   setMedicationsTemp,
   setMessage,
} from '../../../Store/Actions';
import { useSelector } from 'react-redux';

function Medication(props) {
   const dispatch = useDispatch();
   const userID = useSelector((state) => state.profile.id_patient);

   const [editMedication, setEditMedication] = useState({});
   // This transfers the setProfile function outside of this function's scope
   pullData = setEditMedication;

   // Handles error messages
   const [isError, setIsError] = useState(false);

   //Change color of select input
   const[fontColor, setFontColor]=useState(' #c2c9d1')

   // Handles user inputs for medication form
   const [drugName, setDrugName] = useState('');
   const [drugDosage, setDrugDosage] = useState('');
   const [drugTime, setDrugTime] = useState('');
   const [drugStartDate, setDrugStartDate] = useState('');
   const [drugEndDate, setDrugEndDate] = useState('');

   //sets input box with edit medication data for update
   useEffect(() => {
      if (Object.keys(editMedication).length !== 0) {
         setDrugName(editMedication.drug_name);
         setDrugDosage(editMedication.dosage);
         setDrugTime(editMedication.time_of_administration);
         setDrugStartDate(editMedication.start_date);
         setDrugEndDate(editMedication.end_date);
      }
   }, [editMedication]);

   function handleMedicationSubmit() {
      /*
         Function validates medication entries and submits them
         Args: Function takes no argument
         Return: Nothing is returned
      */
      if (
         //Checks if all details have been entered
         drugName !== '' &&
         drugDosage !== '' &&
         drugTime !== '' &&
         drugStartDate !== '' &&
         drugEndDate !== ''
      ) {
         if (new Date().getTime() > new Date(drugEndDate).getTime()) {
            // checks if end date is in the past
            dispatch(
               setMessage({
                  show: true,
                  msg: 'End date must not be in the past.',
                  state: 0,
               })
            );
         } else if (
            new Date(drugStartDate).getTime() > new Date(drugEndDate).getTime() //checks if end date comes before start date
         ) {
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Enter appropriate dates.',
                  state: 0,
               })
            );
         } else {
            //prepares data for submition when no error is encountered

            if (Object.keys(editMedication).length === 0) {
               const medicationBody = {
                  drug_name: drugName,
                  dosage: drugDosage,
                  time_of_administration: drugTime,
                  start_date: drugStartDate,
                  end_date: drugEndDate,
                  last_taken_date: drugStartDate,
                  id_patient: userID,
               };

               dispatch(addPrescriptions(medicationBody));
               clearInputsAndMedicationData();
            } else {
               const medicationBody = {
                  drug_name: drugName,
                  dosage: drugDosage,
                  time_of_administration: drugTime,
                  start_date: drugStartDate,
                  end_date: drugEndDate,
                  last_taken_date: editMedication.last_taken_date,
                  id_patient: userID,
                  id_prescription: editMedication.id_prescription,
               };

               dispatch(
                  updatePrescriptions(
                     editMedication.id_prescription,
                     medicationBody
                  )
               );
               clearInputsAndMedicationData();
            }
            // sets variable to use to reload medications
            // dispatch(setReloadMedications(true));
            //clears all input boxes and edit medication data
            clearInputsAndMedicationData();
         }
      } else {
         // alerts user when all input fields have not been filled
         dispatch(
            setMessage({
               show: true,
               msg: 'Enter all fields.',
               state: 0,
            })
         );
         setIsError(true);
      }

      // clearInputsAndMedicationData();
   }

   function clearInputsAndMedicationData() {
      //clears all input boxes and edit medication data
      setEditMedication({});
      setDrugName('');
      setDrugDosage('');
      setDrugTime('');
      setDrugStartDate('');
      setDrugEndDate('');
   }

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
                           onChange={(event) => {
                              setDrugName(event.target.value);
                              setIsError(false);
                           }}
                           value={drugName}
                        />
                     </div>
                  </div>
                  <div className={styles.formBox}>
                     <label htmlFor="dosage">Dosage</label>
                     <div className={styles.formBoxInputs}>
                        <i>
                           <GiPillDrop />
                        </i>
                        <input
                           name="dosage"
                           type="text"
                           id="dosage"
                           placeholder="eg. 1/x3"
                           onChange={(event) => {
                              setDrugDosage(event.target.value);
                              setIsError(false);
                           }}
                           value={drugDosage}
                        />
                     </div>
                  </div>
                  <div className={styles.formBox}>
                     <label htmlFor="time"> Time Period</label>
                     <div className={styles.formBoxInputs}>
                        <div className={styles.select}>
                           <select
                              placeholder="eg. Before Meal"
                              required
                              value={drugTime}
                              onChange={(event) => {
                                 setDrugTime(event.target.value);
                                 setIsError(false);
                              }}

                              style={{color: fontColor}}
                              onClick={()=>setFontColor('#0d3f58')}
                           >
                              <option value={''}>Select Period</option>
                              <option value={'Before Meals'}>
                                 Before Meals
                              </option>
                              <option value={'After Meals'}>After Meals</option>
                           </select>
                        </div>
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
                           onChange={(event) => {
                              setDrugStartDate(event.target.value);
                              setIsError(false);
                           }}
                           value={drugStartDate}
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
                           onChange={(event) => {
                              setDrugEndDate(event.target.value);
                              setIsError(false);
                           }}
                           value={drugEndDate}
                        />
                     </div>
                  </div>

                  <div className={styles.formButton}>
                     <button
                        id={styles.formBtn}
                        className={styles.formBtn}
                        onClick={() => handleMedicationSubmit()}
                     >
                        {Object.keys(editMedication).length === 0
                           ? 'Add Prescription'
                           : 'Update Prescription'}
                     </button>
                  </div>
                  {Object.keys(editMedication).length === 0 ? (
                     ''
                  ) : (
                     <div className={styles.formButton}>
                        <button
                           id={styles.formBtn}
                           className={styles.formCancelBtn}
                           onClick={() => clearInputsAndMedicationData()}
                        >
                           Cancel
                        </button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </>
   );
}

//This getter calls the pullData function once it has been set with a value
var pullData;
Medication.pullData = (editMedication) => {
   pullData(editMedication);
};
export default Medication;
