import React, { useState, useEffect } from 'react';
import avatarOne from '../../../assets/Rectangle-1.png';
import avatarTwo from '../../../assets/Rectangle-2.png';
import avatarFour from '../../../assets/bruno-rodrigues-279xIHymPYY-unsplash 2.png';
import avatarThree from '../../../assets/Rectangle.png';
import glucometer from '../../../images/Glucometer.svg';
import { ImDroplet } from 'react-icons/im';
import { RiHeartPulseFill } from 'react-icons/ri';
import { GiMedicalThermometer } from 'react-icons/gi';
import styles from './dashboard.module.css';
import { connect, useDispatch } from 'react-redux';
import {
   fetchMedications,
   updatePrescriptions,
} from '../../../Store/Actions.js';
import { useSelector } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      savedHealthDetails: state.health,
   };
};

function Dashboard(props) {
   const dispatch = useDispatch();
   const [medications, setMedications] = useState([]);
   const patientID = useSelector((state) => state.profile.idPatient);

   useEffect(() => {
      async function fetchdata() {
         const items = await fetchMedications(patientID);
         setMedications(items);
      }
      fetchdata();
      console.log(medications);
   }, []);

   var list;
   //displays medications
   console.log(medications);

   if (
      medications !== null ||
      medications !== undefined ||
      medications.length !== 0
   ) {
      list = medications.map((item, j) => {
         return (
            <tr key={`${item.drug_name}-${j}`}>
               <td>{`${item.drug_name}`}</td>
               <td>{`${item.dosage}`}</td>
               <td>{`${item.time_of_administration}`}</td>
               <td>
                  <input
                     type={'checkbox'}
                     defaultChecked={
                        new Date(item.last_taken_date).setHours(0, 0, 0, 0) ===
                        new Date().setHours(0, 0, 0, 0)
                           ? true
                           : false
                     }
                     onClick={(event) => changeCheckBox(event, item)}
                  />
               </td>
            </tr>
         );
      });
   } else if (medications.length === 0) {
      // Sends message to be displayed when saved videos is empty
      list = <p>No medications yet.</p>;
   }

   function changeCheckBox(event, data) {
      /*
         Function updates last taken dates of presciptions when checkbox is checked
         Args: Function takes event to check if box is checked and the presciptions
         Return: Nothing is returned
      */
      if (event.target.checked) {
         var today = new Date();
         var date = `${today.getFullYear()}-${
            (today.getMonth() + 1 < 10 ? '0' : '') + (today.getMonth() + 1)
         }-${(today.getDate() < 10 ? '0' : '') + today.getDate()}`;

         const updatedPrescription = {
            drug_name: data.drug_name,
            dosage: data.dosage,
            time_of_administration: data.time_of_administration,
            start_date: data.start_date,
            end_date: data.end_date,
            last_taken_date: date,
         };
         console.log('updated', updatedPrescription);
         //updating prescription
         dispatch(updatePrescriptions(data.id, updatedPrescription));
      } else {
         //prevents checkbox from changing to false
         event.preventDefault();
         return false;
      }
   }
   return (
      <>
         <main id={styles.midsection}>
            <div className={styles.vitalsBox}>
               <div className={styles.vitals}>
                  <div className={styles.vitalsDetails}>
                     <div className={styles.vitalsIcon}>
                        <i>
                           <RiHeartPulseFill />
                        </i>
                     </div>
                     <div className={styles.vitalsReadings}>
                        <h4>{`${props.savedHealthDetails.pulse} bpm`}</h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Heart Rate</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>Pulse is the most important physiological indicator</p>
                  </div>
               </div>
               <div className={styles.vitals}>
                  <div className={styles.vitalsDetails}>
                     <div className={styles.vitalsIcon}>
                        <i>
                           <GiMedicalThermometer />
                        </i>
                     </div>
                     <div className={styles.vitalsReadings}>
                        <h4>{`${props.savedHealthDetails.temperature} °C`}</h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Temperature</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>Pulse is the most important physiological indicator </p>
                  </div>
               </div>
               <div className={styles.vitals}>
                  <div className={styles.vitalsDetails}>
                     <div className={styles.vitalsIcon}>
                        <i>
                           <ImDroplet />
                        </i>
                     </div>
                     <div className={styles.vitalsReadings}>
                        <h4>{`${props.savedHealthDetails.blood_pressure}`}</h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Blood Pressure</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>Pulse is the most important physiological indicator </p>
                  </div>
               </div>
               <div className={styles.vitals}>
                  <div className={styles.vitalsDetails}>
                     <div className={styles.vitalsIcon}>
                        <i>
                           <img src={glucometer} alt={'Glucometer'} />
                        </i>
                     </div>
                     <div className={styles.vitalsReadings}>
                        <h4>{`${props.savedHealthDetails.blood_sugar} mg/dL`}</h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Blood Glucose</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>Pulse is the most important physiological indicator </p>
                  </div>
               </div>
            </div>
            <div className={styles.medicationBox}>
               <h2>Current Medications</h2>
               <div className={styles.medicationTable}>
                  <table>
                     <thead>
                        <tr>
                           <th>Medicine</th>
                           <th>Dosage</th>
                           <th>Time</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>{list}</tbody>
                  </table>
               </div>
            </div>
            <div className={styles.appointmentsBox}>
               <h2>Upcoming Appointments</h2>
               <div className={styles.appointmentTable}>
                  <table>
                     <thead>
                        <tr>
                           <th></th>
                           <th>Name</th>
                           <th>Location</th>
                           <th>Date</th>
                           <th>Time</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <div>
                                 <img src={avatarTwo} alt="avatar" />
                              </div>
                           </td>
                           <td>Dr. Natheniel Gaglo</td>
                           <td>37 Military Hospital</td>
                           <td>07/02/2020</td>
                           <td>2:00 PM</td>
                        </tr>
                        <tr>
                           <td>
                              <div>
                                 <img src={avatarOne} alt="avatar" />
                              </div>
                           </td>
                           <td>Dr. Raphael Botwe</td>
                           <td>Ridge Hospital</td>
                           <td>21/11/2020</td>
                           <td>8:00 AM</td>
                        </tr>
                        <tr>
                           <td>
                              <div>
                                 <img src={avatarFour} alt="avatar" />
                              </div>
                           </td>
                           <td>Dr. Joel Mensah</td>
                           <td>Korle Bu Hospital</td>
                           <td>03/05/2020</td>
                           <td>11:00 AM</td>
                        </tr>
                        <tr>
                           <td>
                              <div>
                                 <img src={avatarThree} alt="avatar" />
                              </div>
                           </td>
                           <td>Dr. Anne Hill</td>
                           <td>East Wing Clinic</td>
                           <td>30/06/2020</td>
                           <td>1:00 PM</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </main>
      </>
   );
}
export default connect(mapStateToProps)(Dashboard);
