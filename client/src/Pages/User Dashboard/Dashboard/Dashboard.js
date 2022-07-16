import React from 'react';
import avatarOne from '../../../assets/Rectangle-1.png';
import avatarTwo from '../../../assets/Rectangle-2.png';
import avatarFour from '../../../assets/bruno-rodrigues-279xIHymPYY-unsplash 2.png';
import avatarThree from '../../../assets/Rectangle.png';
import glucometer from '../../../images/Glucometer.svg';
import { ImDroplet } from 'react-icons/im';
import { RiHeartPulseFill } from 'react-icons/ri';
import { GiMedicalThermometer } from 'react-icons/gi';
import styles from './dashboard.module.css';

function Dashboard() {
   return (
      <>
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
                        <h4>32.7 °C</h4>
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
                           <th>Dosage</th>
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
                              <div>
                                 <img src={avatarTwo} alt="avatar" />
                              </div>
                           </td>
                           <td>Dr. Natheniel Gaglo</td>
                           <td>37 Military Hospital</td>
                           <td>07/02/2020</td>
                           <td>2:00 PM</td>
                        </tr>
                        <tr>
                           <td>
                              <div>
                                 <img src={avatarOne} alt="avatar" />
                              </div>
                           </td>
                           <td>Dr. Raphael Botwe</td>
                           <td>Ridge Hospital</td>
                           <td>21/11/2020</td>
                           <td>8:00 AM</td>
                        </tr>
                        <tr>
                           <td>
                              <div>
                                 <img src={avatarFour} alt="avatar" />
                              </div>
                           </td>
                           <td>Dr. Joel Mensah</td>
                           <td>Korle Bu Hospital</td>
                           <td>03/05/2020</td>
                           <td>11:00 AM</td>
                        </tr>
                        <tr>
                           <td>
                              <div>
                                 <img src={avatarThree} alt="avatar" />
                              </div>
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
      </>
   );
}
export default Dashboard;
