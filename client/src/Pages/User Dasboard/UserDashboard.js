import React from 'react';
import styles from './userdashboard.module.css';
import { GrClose } from 'react-icons/gr';
import { MdSpaceDashboard, MdMenu } from 'react-icons/md';
import { BsFillFileEarmarkFill } from 'react-icons/bs';
import { TiMessages } from 'react-icons/ti';
import { ImExit, ImDroplet } from 'react-icons/im';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { CgPill } from 'react-icons/cg';
import { RiHeartPulseFill } from 'react-icons/ri';
import { GiMedicalThermometer } from 'react-icons/gi';
import { HiDotsVertical } from 'react-icons/hi';
import glucometer from '../../assets/glucometer.svg';

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
                           <img src={glucometer} alt={'Glucometer image'} />
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
            <div className={styles.medicationBox}>
               <h2>Current Medications</h2>
               <div className={styles.medicationTable}>
                  <table>
                     <thead>
                        <tr>
                           <th>Medicine</th>
                           <th>Amount</th>
                           <th>Time</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>Clopidogrel</td>
                           <td>1/x2</td>
                           <td>After Meals</td>
                           <td>
                              <input type={'checkbox'} />
                           </td>
                        </tr>
                        <tr>
                           <td>UltraVit OMEGA + DHA</td>
                           <td>1/x3</td>
                           <td>After Meals</td>
                           <td>
                              <input type={'checkbox'} />
                           </td>
                        </tr>
                        <tr>
                           <td>Ticagrelor</td>
                           <td>2/x1</td>
                           <td>Before Meals</td>
                           <td>
                              <input type={'checkbox'} />
                           </td>
                        </tr>
                        <tr>
                           <td>Ticagrelor</td>
                           <td>2/x1</td>
                           <td>Before Meals</td>
                           <td>
                              <input type={'checkbox'} />
                           </td>
                        </tr>
                        <tr>
                           <td>Ticagrelor</td>
                           <td>2/x1</td>
                           <td>Before Meals</td>
                           <td>
                              <input type={'checkbox'} />
                           </td>
                        </tr>
                        <tr>
                           <td>Ticagrelor</td>
                           <td>2/x1</td>
                           <td>Before Meals</td>
                           <td>
                              <input type={'checkbox'} />
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            <div className={styles.appointmentsBox}>
               <h2>Upcoming Appointments</h2>
               <div className={styles.appointmentTable}>
                  <table>
                     <thead>
                        <tr>
                           <th></th>
                           <th>Name</th>
                           <th>Location</th>
                           <th>Date</th>
                           <th>Time</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <div></div>
                           </td>
                           <td>Dr. Natheniel Gaglo</td>
                           <td>37 Military Hospital</td>
                           <td>07/02/2020</td>
                           <td>2:00 PM</td>
                        </tr>
                        <tr>
                           <td>
                              <div></div>
                           </td>
                           <td>Dr. Raphael Botwe</td>
                           <td>Ridge Hospital</td>
                           <td>21/11/2020</td>
                           <td>8:00 AM</td>
                        </tr>
                        <tr>
                           <td>
                              <div></div>
                           </td>
                           <td>Dr. Joel Mensah</td>
                           <td>Korle Bu Hospital</td>
                           <td>03/05/2020</td>
                           <td>11:00 AM</td>
                        </tr>
                        <tr>
                           <td>
                              <div></div>
                           </td>
                           <td>Dr. Anne Hill</td>
                           <td>East Wing Clinic</td>
                           <td>30/06/2020</td>
                           <td>1:00 PM</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </main>
         <div className={styles.right}>
            <div className={styles.profile}>
               <div className={styles.menu} id={styles.menuBtn}>
                  <i>
                     <MdMenu />
                  </i>
               </div>
               <div className={styles.profileImage}>+</div>
               <div className={styles.info}>
                  <p>
                     Hey, <b>Amanda</b>
                  </p>
               </div>
            </div>
            <div className={styles.calendar}></div>
            <div className={styles.recentNotifications}>
               <h2>Recent Notifications</h2>
               <div className={styles.notificationBox}>
                  <div className={styles.notifications}>
                     <div className={styles.notificationsHeadings}>
                        <div className={styles.notificationsImage}></div>
                        <div className={styles.notificationsInfo}>
                           <h3>Dr. Mensah Mathews</h3>
                           <p>12:30pm, 20 Mar</p>
                        </div>
                        <div className={styles.notificationsOption}>
                           <i>
                              <HiDotsVertical />
                           </i>
                        </div>
                     </div>
                     <div className={styles.notificationsMessage}>
                        <p>
                           Hi Sebrina, we have your scans ready and i would like
                           you to come over so we could talk. I have some really
                           good news and a not so bad news. we would also talk
                           about plans that we would have to take based on the
                           tests. Take care of yourself. Bye
                        </p>
                     </div>
                  </div>
                  <div className={styles.notifications}>
                     <div className={styles.notificationsHeadings}>
                        <div className={styles.notificationsImage}></div>
                        <div className={styles.notificationsInfo}>
                           <h3>Dr. Mensah Mathews</h3>
                           <p>12:30pm, 20 Mar</p>
                        </div>
                        <div className={styles.notificationsOption}>
                           <i>
                              <HiDotsVertical />
                           </i>
                        </div>
                     </div>
                     <div className={styles.notificationsMessage}>
                        <p>
                           Hi Sebrina, we have your scans ready and i would like
                           you to come over so we could talk. I have some really
                           good news and a not so bad news. we would also talk
                           about plans that we would have to take based on the
                           tests. Take care of yourself. Bye
                        </p>
                     </div>
                  </div>
                  <div className={styles.notifications}>
                     <div className={styles.notificationsHeadings}>
                        <div className={styles.notificationsImage}></div>
                        <div className={styles.notificationsInfo}>
                           <h3>Dr. Mensah Mathews</h3>
                           <p>12:30pm, 20 Mar</p>
                        </div>
                        <div className={styles.notificationsOption}>
                           <i>
                              <HiDotsVertical />
                           </i>
                        </div>
                     </div>
                     <div className={styles.notificationsMessage}>
                        <p>
                           Hi Sebrina, we have your scans ready and i would like
                           you to come over so we could talk. I have some really
                           good news and a not so bad news. we would also talk
                           about plans that we would have to take based on the
                           tests. Take care of yourself. Bye
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default UserDashboard;
