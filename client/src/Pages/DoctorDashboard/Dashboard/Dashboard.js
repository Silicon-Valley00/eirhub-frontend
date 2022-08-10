import React from 'react';
import Navigation from '../components/Navigation';
import styles from './dashboard.module.css';
import { IoIosPeople } from 'react-icons/io';
import { AiFillFile } from 'react-icons/ai';
import { CgCalendar } from 'react-icons/cg';

function MidDashboard() {
   return (
      <>
         <Navigation />
         <main className={styles.main}>
            <div className={styles.middle_section}>
               {/* box that containst the summary display for the doctor */}
               <div className={styles.doctor_display}>
                  {/* Each display make into a card and joined together on large screens */}
                  <div className={styles.card} id={styles.first_card}>
                     <IoIosPeople className={styles.icon} />
                     <div>
                        <p className={styles.digits}>132</p>
                        <p className={styles.text}>Patients</p>
                     </div>
                  </div>
                  <div className={styles.card} id={styles.second_card}>
                     <AiFillFile className={styles.icon} />
                     <div>
                        <p className={styles.digits}>114</p>
                        <p className={styles.text}>records</p>
                     </div>
                  </div>
                  <div className={styles.card} id={styles.second_card}>
                     <CgCalendar className={styles.icon} />
                     <div>
                        <p className={styles.digits}>132</p>
                        <p className={styles.text}>appointments</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.right_pane}>right</div>
         </main>
      </>
   );
}
export default MidDashboard;
