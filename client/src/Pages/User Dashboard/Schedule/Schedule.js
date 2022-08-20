import React, { useState, useEffect } from 'react';
import styles from './schedule.module.css';
import avatarOne from '../../../assets/Rectangle-1.png';
import avatarTwo from '../../../assets/Rectangle-2.png';
import avatarFour from '../../../assets/bruno-rodrigues-279xIHymPYY-unsplash 2.png';
import avatarThree from '../../../assets/Rectangle.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
   addAppointments,
   clearDoctorForAppointment,
   fetchAppointments,
} from '../../../Store/Actions.js';
import store from '../../../Store/ReducerStore';

function Schedule() {
   console.log(store.getState());
   const dispatch = useDispatch();
   const doctorID = useSelector((state) => state.doctorAppointment.id_doctor);
   const doctorFirstName = useSelector(
      (state) => state.doctorAppointment.first_name
   );
   const doctorLastName = useSelector(
      (state) => state.doctorAppointment.last_name
   );
   const doctorHospital = useSelector(
      (state) => state.doctorAppointment.hospital_name
   );

   const [condition, setCondition] = useState('');
   const [appointments, setAppointments] = useState([]);
   const patientID = useSelector((state) => state.profile.id_patient);

   useEffect(() => {
      async function fetchdata() {
         const schedules = await fetchAppointments(patientID, false);
         setAppointments(schedules);
      }
      fetchdata();
   }, []);

   function requestAppoinment() {
      if (
         doctorFirstName === undefined ||
         doctorFirstName === null ||
         doctorFirstName === ''
      ) {
         alert('First request an appointment from a doctor');
      } else {
         if (condition === '') {
            alert('Please enter condition');
            return;
         }

         const appointMentDetails = {
            appointment_date: '',
            appointment_start_time: '',
            appointment_end_time: '',
            appointment_reason: condition,
            appointment_status: 'Pending',
            appointment_location: '',
            id_patient: patientID,
            id_doctor: doctorID,
         };

         dispatch(addAppointments(appointMentDetails));
         setCondition('');
         dispatch(clearDoctorForAppointment());
      }
   }

   var appointmentsData;
   //displays medications
   if (appointments === undefined) {
      appointmentsData = <p>Nothing to show here.</p>;
   } else {
      if (appointments.length !== 0) {
         appointmentsData = appointments.map((item, j) => {
            return (
               <tr key={`${item.appointment_reason}-${j}`}>
                  <td>
                     <div>
                        <img
                           src={
                              item.doctor_info.person_image
                                 ? item.doctor_info.person_image
                                 : avatarOne
                           }
                           alt="avatar"
                        />
                     </div>
                  </td>
                  <td>{`Dr. ${item.doctor_info.first_name} ${item.doctor_info.last_name}`}</td>
                  <td>Ridge Hospital</td>
                  <td>{item.appointment_reason}</td>
                  <td>{item.appointment_status}</td>
               </tr>
            );
         });
      } else if (appointments.length === 0) {
         // Sends message to be displayed when saved videos is empty
         appointmentsData = <p>Nothing to show here.</p>;
      }
   }
   return (
      <>
         <div id={styles.scheduleBody}>
            <div className={styles.DoctorBox}>
               <div className={styles.doctorDetailsField}>
                  <h2>Doctor Name</h2>
                  <div className={styles.doctorNameDetails}>
                     <input
                        type={'text'}
                        value={
                           doctorFirstName === undefined ||
                           doctorFirstName === null ||
                           doctorFirstName === ''
                              ? ''
                              : `Dr. ${doctorFirstName} ${doctorLastName}`
                        }
                        disabled
                     />
                  </div>
               </div>
               <div className={styles.doctorDetailsField}>
                  <h2>Doctor Location</h2>
                  <div className={styles.doctorLocationDetails}>
                     <input
                        type={'text'}
                        value={
                           doctorHospital === undefined ||
                           doctorHospital === null ||
                           doctorHospital === ''
                              ? ''
                              : `${doctorHospital}`
                        }
                        disabled
                     />
                  </div>
               </div>
            </div>
            <div className={styles.conditionBox}>
               <h2>Conditions</h2>
               <div className={styles.conditionDetails}>
                  <input
                     type={'text'}
                     placeholder="Enter condtion"
                     name="conditionBox"
                     onChange={(event) => setCondition(event.target.value)}
                  />
                  <button onClick={() => requestAppoinment()}>Submit</button>
               </div>
            </div>
            <div className={styles.appointmentsBox}>
               <h2>Pending Appointments</h2>
               <div className={styles.appointmentTable}>
                  <table>
                     <thead>
                        <tr>
                           <th></th>
                           <th>Name</th>
                           <th>Location</th>
                           <th>Condition</th>
                           <th>Status</th>
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
                           <td>Headache</td>
                           <td>Pending</td>
                        </tr>
                        <tr>
                           <td>
                              <div>
                                 <img src={avatarTwo} alt="avatar" />
                              </div>
                           </td>
                           <td>Dr. Natheniel Gaglo</td>
                           <td>37 Military Hospital</td>
                           <td>Headache</td>
                           <td>Pending</td>
                        </tr>

                        {/* {appointmentsData} */}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </>
   );
}

export default Schedule;
