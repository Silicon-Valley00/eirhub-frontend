import React from 'react';
import { RiHeartPulseFill } from 'react-icons/ri';
import Navigation from '../components/Navigation';
import styles from './dashboard.module.css';

function MidDashboard() {
   return (
      <>
         <Navigation />
         <main>Yhh dashboard</main>
      </>
      // <>
      //    <main id={styles.midsection}>
      //       {/* upper container */}
      //       <div className={styles.displayBox}>
      //          {/* REVIEW: Change the container and change the classnames too */}
      //          <div className={styles.display}>
      //             <div className={styles.displayDetails}>
      //                <div className={styles.displayIcon}>
      //                   <i>
      //                      <RiHeartPulseFill />
      //                   </i>
      //                </div>
      //                <div className={styles.displayReadings}>
      //                   <h4>126 bpm</h4>
      //                </div>
      //             </div>
      //             <div className={styles.displayTitle}>
      //                <h4>Heart Rate</h4>
      //             </div>
      //             <div className={styles.displayInfo}>
      //                <p>Pulse is the most important physiological indicator</p>
      //             </div>
      //          </div>
      //       </div>
      //       {/* End of upper container */}

      //       {/* Start of Schedule section */}
      //       <div className={styles.medicationBox}>
      //          <h2>Schedules</h2>
      //          <div className={styles.medicationTable}></div>
      //       </div>
      //       {/* End of Schedule section */}

      //       {/* Start of upcoming appointment section */}
      //       <div className={styles.appointmentsBox}>
      //          <h2>Upcoming Appointments</h2>
      //          <div className={styles.appointmentTable}></div>
      //       </div>
      //       {/* End of upcoming appointment section */}
      //    </main>
      // </>
   );
}
export default MidDashboard;
