import React, { useState } from 'react';
import styles from './doctordashboard.module.css';
import { MdMenu } from 'react-icons/md';
import avatarThree from '../../assets/Rectangle.png';
import Navigation from './components/Navigation';
import { useSelector } from 'react-redux';

function DoctorDashboard(props) {
   const user = useSelector((state) => state.name);

   // handles menu open and close for smaller devices
   const [openMenu, setOpenMenu] = useState(false);

   return (
      <div className={styles.userbody}>
         <div className={styles.container}>
            {/* HACK: Make the middle section also have its own vertical scrollbar. */}
            <Navigation
               openMenu={openMenu}
               setOpenMenu={setOpenMenu}
               page={props.page}
            />
            {props.parent}

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

                  {/* Show Avatar and doctor's name */}
                  <div className={styles.profileImage}>
                     <img src={avatarThree} alt="avatar" />
                  </div>
                  <div className={styles.info}>
                     {/* <p>
                        Hey, <b>amanda</b>
                     </p> */}
                     <p>
                        Hello, <b>{user}</b>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default DoctorDashboard;
