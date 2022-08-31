import React, { useState, useEffect } from 'react';
import styles from './messagepatients.module.css';
import avatarThree from '../../../assets/doc profile 1.png';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
   fetchPatientsByDoctorId,
   setPatientToChatWith,
} from '../../../Store/DoctorAction';

function MessagePatients() {
   const doctorID = useSelector((state) => state.doctorProfile.id_doctor);

   const dispatch = useDispatch();

   const [patients, setPatients] = useState([]);
   const [active, setActive] = useState(false);
   const [activeIndex, setActiveIndex] = useState();

   useEffect(() => {
      async function fetchdata() {
         const items = await fetchPatientsByDoctorId(doctorID);
         setPatients([items]);
      }
      fetchdata();
   }, []);

   let myPatients;
   console.log(patients);
   if (patients[0] === undefined) {
      myPatients = <p className={styles.emptyMessage}>Nothing to show here.</p>;
   } else {
      if (patients.length !== 0) {
         myPatients = patients.map((item, j) => {
            return (
               <div
                  className={
                     active && activeIndex === `${item.id_patient}${j}`
                        ? `${styles.userBox} ${styles.active}`
                        : styles.userBox
                  }
                  onClick={() => {
                     setActive(true);
                     setActiveIndex(`${item.id_patient}${j}`);
                     dispatch(
                        setPatientToChatWith(
                           `${item.first_name.toLowerCase()}${item.last_name.toLowerCase()}${
                              item.id_patient
                           }`
                        )
                     );
                  }}
               >
                  <div className={styles.userImage}>
                     <img src={item?.person_image} alt="avatar" />
                  </div>
                  <div className={styles.userName}>
                     <h3>{`${item.first_name} ${item.last_name}`}</h3>
                  </div>
               </div>
            );
         });
      } else if (patients.length === 0) {
         // Sends message to be displayed when saved videos is empty
         myPatients = <p>Nothing to show here.</p>;
      }
   }

   return (
      <>
         <div className={styles.messageUsersBody}>
            <div className={styles.usersBox}>
               <h2>Patients</h2>
               <div className={styles.usersBoxSection}>{myPatients}</div>
            </div>
         </div>
      </>
   );
}

export default MessagePatients;
