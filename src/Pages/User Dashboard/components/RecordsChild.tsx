import React from 'react';
import styles from './recordchild.module.css';
import Calender from './Calendar';

function RecordChild() {
   return (
      <>
         <div className={styles.recordChildBody}>
            <div className={styles.calendar}>
               <Calender />
            </div>
         </div>
      </>
   );
}

export default RecordChild;
