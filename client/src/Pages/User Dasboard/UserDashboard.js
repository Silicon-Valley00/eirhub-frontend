import React from 'react';
import styles from './userdashboard.module.css';
import { GrClose } from 'react-icons/gr';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsFillFileEarmarkFill } from 'react-icons/bs';
import { TiMessages } from 'react-icons/ti';
import { ImExit, ImDroplet } from 'react-icons/im';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { CgPill } from 'react-icons/cg';
import { RiHeartPulseFill } from 'react-icons/ri';
import { GiMedicalThermometer } from 'react-icons/gi';

function UserDashboard() {
   return (
      <div className={styles.container}>
         <aside>
            <div className={styles.top}>
               <div className={styles.logo}>
                  <h2>Eirhub</h2>
               </div>
               <div className={styles.close} id={styles.closeBtn}>
                  <i>
                     <GrClose />
                  </i>
               </div>
            </div>
            <div className={styles.sidebar}>
               <ul>
                  <li>
                     <span className={styles.icons}>
                        <i>
                           <MdSpaceDashboard />
                        </i>
                     </span>
                     <h3>Dasboard</h3>
                  </li>
                  <li className={styles.active}>
                     <span className={styles.icons}>
                        <i>
                           <FaUser />
                        </i>
                     </span>
                     <h3>Profile</h3>
                  </li>
                  <li>
                     <span className={styles.icons}>
                        <i>
                           <BsFillFileEarmarkFill />
                        </i>
                     </span>
                     <h3>Records</h3>
                  </li>
                  <li>
                     <span className={styles.icons}>
                        <i>
                           <CgPill />
                        </i>
                     </span>
                     <h3>Medications</h3>
                  </li>

                  <li>
                     <span className={styles.icons}>
                        <i>
                           <TiMessages />
                        </i>
                     </span>
                     <h3>Messages</h3>
                  </li>
                  <li>
                     <span className={styles.icons}>
                        <i>
                           <IoSettingsOutline />
                        </i>
                     </span>
                     <h3>Settings</h3>
                  </li>
                  <li>
                     <span className={styles.icons}>
                        <i>
                           <ImExit />
                        </i>
                     </span>
                     <h3>Logout</h3>
                  </li>
               </ul>
            </div>
         </aside>
         <main id={styles.midsection}>
            <div className={styles.vitalsBox}>
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
               <div className={styles.vitals}>
                  <div className={styles.vitalsDetails}>
                     <div className={styles.vitalsIcon}>
                        <i>
                           <GiMedicalThermometer />
                        </i>
                     </div>
                     <div className={styles.vitalsReadings}>
                        <h4>32.7°C</h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Temperature</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>Pulse is the most important physiological indicator </p>
                  </div>
               </div>
               <div className={styles.vitals}>
                  <div className={styles.vitalsDetails}>
                     <div className={styles.vitalsIcon}>
                        <i>
                           <ImDroplet />
                        </i>
                     </div>
                     <div className={styles.vitalsReadings}>
                        <h4>120/80</h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Blood Pressure</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>Pulse is the most important physiological indicator </p>
                  </div>
               </div>
               <div className={styles.vitals}>
                  <div className={styles.vitalsDetails}>
                     <div className={styles.vitalsIcon}>
                        <i>
                           <img src="https://img.icons8.com/ios-glyphs/30/000000/diabetes-monitor.png" />
                        </i>
                     </div>
                     <div className={styles.vitalsReadings}>
                        <h4>170 mg/dL</h4>
                     </div>
                  </div>
                  <div className={styles.vitalsTitle}>
                     <h4>Blood Glucose</h4>
                  </div>
                  <div className={styles.vitalsInfo}>
                     <p>Pulse is the most important physiological indicator </p>
                  </div>
               </div>
            </div>
            <div></div>
         </main>
      </div>
   );
}
export default UserDashboard;
