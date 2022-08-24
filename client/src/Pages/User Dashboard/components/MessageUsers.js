import React, { useState } from 'react';
import styles from './messageusers.module.css';
import avatarThree from '../../../assets/doc profile 1.png';
import { useDispatch } from 'react-redux';
import { setDoctorToChatWith } from '../../../Store/Actions';

function MessageUsers() {
   const dispatch = useDispatch();
   const [active, setActive] = useState(false);
   const [activeIndex, setActiveIndex] = useState();
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
                  <div className={styles.userBox}>
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  <div className={styles.userBox}>
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  <div className={styles.userBox}>
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  <div className={styles.userBox}>
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  <div className={styles.userBox}>
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  <div className={styles.userBox}>
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  <div className={styles.userBox}>
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  <div className={styles.userBox}>
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  <div className={styles.userBox}>
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
                  <div className={styles.userBox}>
                     <div className={styles.userImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.userName}>
                        <h3>Mellisaa James</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default MessageUsers;
