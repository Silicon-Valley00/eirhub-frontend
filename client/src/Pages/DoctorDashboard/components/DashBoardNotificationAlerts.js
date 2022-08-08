import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import avatarTwo from '../../../assets/Rectangle-2.png';
import avatarFour from '../../../assets/bruno-rodrigues-279xIHymPYY-unsplash 2.png';
import avatarThree from '../../../assets/Rectangle.png';
import Calendar from './Calendar';
import styles from './dashboardnotifications.module.css';

function DashboardNotificationAlerts() {
   return (
      <>
         <div className={styles.calendar}>
            <Calendar />
         </div>
         <div className={styles.recentNotifications}>
            <h2>Recent Notifications</h2>
            <div className={styles.notificationBox}>
               <div className={styles.notifications}>
                  <div className={styles.notificationsHeadings}>
                     <div className={styles.notificationsImage}>
                        <img src={avatarTwo} alt="avatar" />
                     </div>
                     <div className={styles.notificationsInfo}>
                        <h3>Dr. Killian Adams</h3>
                        <p>10:10pm, 09 Mar</p>
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
                     <div className={styles.notificationsImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.notificationsInfo}>
                        <h3>Dr. Yvette Mills</h3>
                        <p>1:02 am, 15 Mar</p>
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
                     <div className={styles.notificationsImage}>
                        <img src={avatarFour} alt="avatar" />
                     </div>
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
                     <div className={styles.notificationsImage}>
                        <img src={avatarThree} alt="avatar" />
                     </div>
                     <div className={styles.notificationsInfo}>
                        <h3>Dr. Yvette Mills</h3>
                        <p>1:02 am, 15 Mar</p>
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
      </>
   );
}
export default DashboardNotificationAlerts;
