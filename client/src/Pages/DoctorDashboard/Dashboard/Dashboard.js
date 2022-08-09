import React from 'react';
import { RiHeartPulseFill } from 'react-icons/ri';
import styles from './dashboard.module.css';

function MidDashboard() {
   return (
      <>
         <main id={styles.midsection}>
            {/* upper container */}
            <div className={styles.vitalsBox}>
               {/* REVIEW: Change the container and change the classnames too */}
               <div className={styles.vitals}>
                  <div className={styles.vitalsDetails}>
                     <div className={styles.vitalsIcon}>
                        <i>
                           <RiHeartPulseFill />
                        </i>
                     </div>
                     <div className={styles.vitalsReadings}>
                        <h4>126 bpm</h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Heart Rate</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>Pulse is the most important physiological indicator</p>
                  </div>
               </div>
            </div>
            {/* End of upper container */}

            {/* Start of Schedule section */}
            <div className={styles.medicationBox}>
               <h2>Schedules</h2>
               <div className={styles.medicationTable}></div>
            </div>
            {/* End of Schedule section */}

            {/* Start of upcoming appointment section */}
            <div className={styles.appointmentsBox}>
               <h2>Upcoming Appointments</h2>
               <div className={styles.appointmentTable}></div>
            </div>
            {/* End of upcoming appointment section */}
         </main>
      </>
   );
}
export default MidDashboard;
