import React, { useState, useEffect } from 'react';
import styles from './docdashboard.module.css';
import { useSelector } from 'react-redux';
import BirthdayCard from '../Birthday Card/BirthdayCard';
import Sidebar from './components/Sidebar';
import Navbar from '../General Components/Navigation/Navbar';
import LogoutModal from '../General Components/Logout Modal/LogoutModal';
import AlertsMessageBox from '../General Components/Alert/AlertsMessageBox';

const DocDashboard = (props) => {
   const [logoutModal, setLogoutModal] = useState(false);

   const patientDOB = useSelector((state) => state.profile.date_of_birth);

   // handles menu open and close for smaller devices
   const [openMenu, setOpenMenu] = useState(false);

   const openFunc = () => {
      setOpenMenu(!openMenu);
   };
   const [birthdayModal, setBirthdayModal] = useState(false);

   //Display birthday card to user on their birthday
   useEffect(() => {
      if (
         new Date().setHours(0, 0, 0, 0) ===
         new Date(
            `${new Date(patientDOB).getFullYear()}-${
               new Date(patientDOB).getMonth() + 1
            }-${new Date(patientDOB).getDate()}`
         ).getTime()
      ) {
         setBirthdayModal(true);
      }
   }, []);

   function handleBirthdayModalClose() {
      setBirthdayModal(false);
   }

   function handleLogoutModal() {
      setLogoutModal(!logoutModal);
   }

   return (
      <>
         <AlertsMessageBox time={3000} />
         <div className={styles.max_div}>
            <div
               id={styles.blur}
               className={birthdayModal || logoutModal ? styles.active : ''}
            >
               <Navbar openFunc={openFunc} />
               <div className={styles.userbody}>
                  <div className={styles.container}>
                     <Sidebar
                        openMenu={openMenu}
                        setOpenMenu={setOpenMenu}
                        page={props.page}
                        handleLogoutModal={handleLogoutModal}
                     />
                     {props.middleSection}

                     <div className={styles.right}>{props.rightSection}</div>
                  </div>
               </div>{' '}
            </div>
            <BirthdayCard
               birthdayModal={birthdayModal}
               handleBirthdayModalClose={handleBirthdayModalClose}
            />

            <LogoutModal
               logoutModal={logoutModal}
               handleLogoutModal={handleLogoutModal}
            />
         </div>
      </>
   );
};
export default DocDashboard;
