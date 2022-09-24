import React, { useState, useEffect } from 'react';
import glucometer from '../../../images/Glucometer.svg';
import { ImDroplet } from 'react-icons/im';
import { RiHeartPulseFill } from 'react-icons/ri';
import { GiMedicalThermometer } from 'react-icons/gi';
import styles from './dashboard.module.css';
import { connect, useDispatch } from 'react-redux';
import {
   fetchAppointments,
   fetchMedications,
   setAppointmentDates,
   setIsANewUser,
   setMessage,
   updatePrescriptions,
} from '../../../Store/Actions.js';
import { useSelector } from 'react-redux';
import store from '../../../Store/ReducerStore';
import { Helmet } from 'react-helmet';

const mapStateToProps = (state) => {
   return {
      savedHealthDetails: state.health,
      tempMeds: state.tempMedications,
      isNewUser: state.isNewUser,
   };
};

function Dashboard(props) {
   console.log(store.getState());
   const dispatch = useDispatch();
   const [medications, setMedications] = useState([]);
   const [appointments, setAppointments] = useState([]);
   const patientID = useSelector((state) => state.profile.id_patient);

   useEffect(() => {
      async function fetchdata() {
         const items = await fetchMedications(patientID);
         setMedications(items);

         const schedules = await fetchAppointments(patientID, true);
         setAppointments(schedules);
      }
      fetchdata();

      if (props.isNewUser === true) {
         dispatch(
            setMessage({
               show: true,
               msg: 'Please complete your profile.',
               state: 1,
            })
         );
         dispatch(setIsANewUser(false));
      }
   }, []);

   let appointment_dates = [];
   useEffect(() => {
      if (appointments === undefined) return;
      if (
         appointments !== undefined ||
         appointments !== null ||
         appointments.length !== 0
      ) {
         for (let item of appointments) {
            if (
               new Date().getTime() <= new Date(item.appointment_date).getTime()
            ) {
               appointment_dates.push(
                  new Date(item.appointment_date).getTime()
               );
            }
         }
      }
      dispatch(setAppointmentDates(appointment_dates));
   }, [appointments]);

   var list;
   //displays medications

   if (medications === undefined) {
      list = (
         <tr
            style={{
               width: '250%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               color: '#c2c9d1',
               marginTop: '2rem',
               fontSize: '150%',
            }}
         >
            Nothing to show here.
         </tr>
      );
   } else {
      if (medications.length !== 0) {
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
                           new Date(item.last_taken_date).setHours(
                              0,
                              0,
                              0,
                              0
                           ) === new Date().setHours(0, 0, 0, 0)
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
         list = (
            <tr
               style={{
                  width: '250%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#c2c9d1',
                  marginTop: '2rem',
                  fontSize: '150%',
               }}
            >
               Nothing to show here.
            </tr>
         );
      }
   }
   var appointmentsData;
   //gets all apoints for display
   if (appointments === undefined) {
      appointmentsData = (
         <tr
            style={{
               width: '1200%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               color: '#c2c9d1',
               marginTop: '2.5rem',
               fontSize: '150%',
            }}
         >
            Nothing to show here.
         </tr>
      );
   } else {
      if (appointments.length !== 0) {
         appointmentsData = appointments.map((item, j) => {
            return (
               <tr key={`${item.appointment_reason}-${j * 3}`}>
                  <td>
                     <div>
                        <img src={item.doctor_info.person_image} alt="avatar" />
                     </div>
                  </td>
                  <td>{`Dr. ${item.doctor_info.first_name} ${item.doctor_info.last_name}`}</td>
                  <td>{item.appointment_location}</td>
                  <td>
                     {`${new Date(item.appointment_date).getDate()}/${
                        new Date(item.appointment_date).getMonth() + 1
                     }/${new Date(item.appointment_date).getFullYear()}`}
                  </td>
                  <td>{`${item.appointment_start_time.slice(
                     0,
                     2
                  )}:${item.appointment_start_time.slice(
                     3,
                     5
                  )} - ${item.appointment_end_time.slice(
                     0,
                     2
                  )}:${item.appointment_end_time.slice(3, 5)}`}</td>
               </tr>
            );
         });
      } else if (appointments.length === 0) {
         // Sends message to be displayed when saved videos is empty
         appointmentsData = (
            <tr
               style={{
                  width: '1200%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#c2c9d1',
                  marginTop: '2.5rem',
                  fontSize: '150%',
               }}
            >
               Nothing to show here.
            </tr>
         );
      }
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
            id_patient: patientID,
         };
         //updating prescription
         dispatch(
            updatePrescriptions(data.id_prescription, updatedPrescription)
         );
      } else {
         //prevents checkbox from changing to false
         console.log(props.tempMeds);
         var result = props.tempMeds.find(
            (item) => item.id_prescription === data.id_prescription
         );

         if (result === undefined || result === null) {
            event.preventDefault();
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Uncheck unsuccessful, try again',
                  state: 0,
               })
            );
            return false;
         } else {
            const updatedPrescription = {
               drug_name: data.drug_name,
               dosage: data.dosage,
               time_of_administration: data.time_of_administration,
               start_date: data.start_date,
               end_date: data.end_date,
               last_taken_date: result.last_taken_date,
               id_patient: patientID,
            };
            //updating prescription
            dispatch(
               updatePrescriptions(data.id_prescription, updatedPrescription)
            );
         }
      }
   }

   return (
      <>
         <Helmet>
            <title>Dashboard | Eirhub</title>
            <meta name="description" content="Patient Dashboard" />
         </Helmet>
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
                        <h4>
                           {props.savedHealthDetails?.pulse
                              ? `${props.savedHealthDetails?.pulse} bpm`
                              : ''}
                        </h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Heart Rate</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>
                        Your heart rate is the number of times each minute that
                        your heart beats
                     </p>
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
                        <h4>
                           {props.savedHealthDetails?.temperature
                              ? `${props.savedHealthDetails?.temperature} °C`
                              : ''}
                        </h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Temperature</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>Body temperature is a measure of how body heat. </p>
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
                        <h4>
                           {props.savedHealthDetails.blood_pressure
                              ? `${props.savedHealthDetails.blood_pressure}`
                              : ''}
                        </h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Blood Pressure</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>
                        Blood pressure is the force of blood pushing against the
                        artery walls
                     </p>
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
                        <h4>
                           {props.savedHealthDetails.blood_sugar
                              ? `${props.savedHealthDetails.blood_sugar} mg/dL`
                              : ''}
                        </h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Blood Glucose</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>
                        A test that screens for diabetes by measuring the level
                        of glucose sugar.
                     </p>
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
                     <tbody>{appointmentsData}</tbody>
                  </table>
               </div>
            </div>
         </main>
      </>
   );
}
export default connect(mapStateToProps)(Dashboard);
