import React from 'react';
import styles from './birthdaycard.module.css';
import birthdaySVG from '../../assets/birthday.svg';
import { IoCloseOutline } from 'react-icons/io5';

function BirthdayCard(props) {
   return (
      <>
         <div className={styles.birthdayBody}>
            <div
               className={
                  props.birthdayModal
                     ? `${styles.card} ${styles.active}`
                     : styles.card
               }
            >
               <div
                  className={styles.closeModal}
                  onClick={() => {
                     props.handleBirthdayModalClose();
                  }}
               >
                  <i>
                     <IoCloseOutline />
                  </i>
               </div>
               <img
                  src={birthdaySVG}
                  alt="birthday"
                  className={styles.birthday}
               />
               <div className={styles.text}>
                  <h1>Happy Birthday!</h1>
                  <p>We hope you have a wonderful birthday</p>
                  <p className={`${styles.muted} ${styles.name}`}>
                     - The Eirhub Team
                  </p>
               </div>
               <div className={styles.space}></div>
            </div>
         </div>
      </>
   );
}
export default BirthdayCard;
