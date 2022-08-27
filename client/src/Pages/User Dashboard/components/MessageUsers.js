import React, { useState, useEffect } from 'react';
import styles from './messageusers.module.css';
import avatarThree from '../../../assets/doc profile 1.png';
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
         setDoctors([items]);
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
                     dispatch(
                        setDoctorToChatWith(
                           `${item.first_name.toLowerCase()}${item.last_name.toLowerCase()}${
                              item.id_doctor
                           }`
                        )
                     );
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
         // Sends message to be displayed when saved videos is empty
         myDoctors = <p>Nothing to show here.</p>;
      }
   }

   return (
      <>
         <div className={styles.messageUsersBody}>
            <div className={styles.usersBox}>
               <h2>Doctors</h2>
               <div className={styles.usersBoxSection}>
                  <div
                     className={
                        active && activeIndex === 0
                           ? `${styles.userBox} ${styles.active}`
                           : styles.userBox
                     }
                     onClick={() => {
                        setActive(true);
                        setActiveIndex(0);
                        dispatch(setDoctorToChatWith('superhero5'));
                     }}
                  >
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  <div
                     className={
                        active && activeIndex === 1
                           ? `${styles.userBox} ${styles.active}`
                           : styles.userBox
                     }
                     onClick={() => {
                        setActive(true);
                        setActiveIndex(1);

                        dispatch(setDoctorToChatWith('superhero1'));
                     }}
                  >
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  {myDoctors}
               </div>
            </div>
         </div>
      </>
   );
}

export default MessageUsers;
