import React from 'react';
import styles from './schedule.module.css';
import avatarOne from '../../../assets/Rectangle-1.png';
import avatarTwo from '../../../assets/Rectangle-2.png';
import avatarFour from '../../../assets/bruno-rodrigues-279xIHymPYY-unsplash 2.png';
import avatarThree from '../../../assets/Rectangle.png';

function Schedule() {
   return (
      <>
         <div id={styles.scheduleBody}>
            <div className={styles.conditionBox}>
               <h2>Conditions</h2>
               <div className={styles.conditionDetails}>
                  <input
                     type={'text'}
                     placeholder="Enter condtion"
                     name="conditionBox"
                  />
                  <button>Submit</button>
               </div>
            </div>
            <div className={styles.appointmentsBox}>
               <h2>Pending Appointments</h2>
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
         </div>
      </>
   );
}

export default Schedule;
