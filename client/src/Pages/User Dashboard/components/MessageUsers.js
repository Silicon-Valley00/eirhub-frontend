import React, { useState, useEffect } from 'react';
import styles from './messageusers.module.css';
import { useDispatch } from 'react-redux';
import {
   fetchDoctorsByPatient,
   setDoctorToChatWith,
} from '../../../Store/Actions';
import { useSelector } from 'react-redux';

function MessageUsers() {
   const patientID = useSelector((state) => state.profile.id_patient);

   const dispatch = useDispatch();

   const [doctors, setDoctors] = useState([]);
   const [active, setActive] = useState(false);
   const [activeIndex, setActiveIndex] = useState();

   useEffect(() => {
      async function fetchdata() {
         const items = await fetchDoctorsByPatient(patientID);
         setDoctors(items);
      }
      fetchdata();
   }, []);

   let myDoctors;
   if (doctors === undefined) {
      myDoctors = <p className={styles.emptyMessage}>Nothing to show here.</p>;
   } else {
      if (doctors.length !== 0) {
         myDoctors = doctors.map((item, j) => {
            return (
               <div
                  className={
                     active && activeIndex === `${item.id_doctor}${j}`
                        ? `${styles.userBox} ${styles.active}`
                        : styles.userBox
                  }
                  onClick={() => {
                     setActive(true);
                     setActiveIndex(`${item.id_doctor}${j}`);
                     dispatch(setDoctorToChatWith(item.id_message));
                  }}
               >
                  <div className={styles.userImage}>
                     <img src={item.person_image} alt="avatar" />
                  </div>
                  <div className={styles.userName}>
                     <h3>{`Dr. ${item.first_name} ${item.last_name}`}</h3>
                  </div>
               </div>
            );
         });
      } else if (doctors.length === 0) {
         myDoctors = <p>Nothing to show here.</p>;
      }
   }

   return (
      <>
         <div className={styles.messageUsersBody}>
            <div className={styles.usersBox}>
               <h2>Doctors</h2>
               <div className={styles.usersBoxSection}>{myDoctors}</div>
            </div>
         </div>
      </>
   );
}

export default MessageUsers;
