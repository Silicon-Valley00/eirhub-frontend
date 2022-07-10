import React, { useState } from 'react';
import styles from './userdashboard.module.css';
import { MdMenu } from 'react-icons/md';
import avatarThree from '../../assets/Rectangle.png';
import Navigation from './components/Navigation';
import Dashboard from './Dashboard/Dashboard';
import DashboardNotificationAlerts from './components/DashBoardNotificationAlerts';

function UserDashboard() {
   // handles menu open and close
   const [openMenu, setOpenMenu] = useState(false);

   return (
      <div className={styles.container}>
         <Navigation openMenu={openMenu} setOpenMenu={setOpenMenu} />
         <Dashboard />

         <div className={styles.right}>
            <div className={styles.profile}>
               <div className={styles.menu} id={styles.menuBtn}>
                  <i
                     onClick={() => {
                        setOpenMenu(true);
                     }}
                  >
                     <MdMenu />
                  </i>
               </div>
               <div className={styles.profileImage}>
                  <img src={avatarThree} alt="avatar" />
               </div>
               <div className={styles.info}>
                  <p>
                     Hey, <b>Amanda</b>
                  </p>
               </div>
            </div>
            <DashboardNotificationAlerts />
         </div>
      </div>
   );
}
export default UserDashboard;
