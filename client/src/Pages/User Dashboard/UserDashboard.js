import React, { useState, useEffect } from 'react';
import styles from './userdashboard.module.css';
import { MdMenu, MdOutlineAutoDelete } from 'react-icons/md';
import avatarThree from '../../assets/Rectangle.png';
import Navigation from './components/Navigation';
import { useSelector } from 'react-redux';
import BirthdayCard from '../Birthday Card/BirthdayCard';
import LogoutModal from '../General Components/Logout Modal/LogoutModal';
import NavBar from '../DocDashboard/Navigation';

function UserDashboard(props) {
   const user = useSelector((state) => state.user.name);
   const userProfileImage = useSelector((state) => state.profile.person_image);
   const patientDOB = useSelector((state) => state.profile.date_of_birth);

   // handles menu open and close for smaller devices
   const [openMenu, setOpenMenu] = useState(false);
   const [birthdayModal, setBirthdayModal] = useState(false);
   const [logoutModal, setLogoutModal] = useState(false);
   const openFunc = () => {
      setOpenMenu(!openMenu);
   }

   //Display birthday card to user on their birthday
   useEffect(() => {
      if (
         new Date().setHours(0, 0, 0, 0) ===
         new Date(
            `${new Date(patientDOB).getFullYear()}-${
               new Date(patientDOB).getMonth() + 1
            }-${new Date(patientDOB).getDate() + 1}`
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
      <NavBar openFunc={openFunc} />
      <div className={styles.max_div}>
         <div
            id={styles.blur}
            className={birthdayModal || logoutModal ? styles.active : ''}
         >
            <div className={styles.userbody}>
               <div className={styles.container}>
                  <Navigation
                     openMenu={openMenu}
                     setOpenMenu={setOpenMenu}
                     page={props.page}
                     handleLogoutModal={handleLogoutModal}
                  />
                  {props.parent}

                  <div className={styles.right}>
                     {/* <div className={styles.profile}>
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
                           <img
                              src={
                                 userProfileImage !== ''
                                    ? userProfileImage
                                    : avatarThree
                              }
                              alt="avatar"
                           />
                        </div>
                        <div className={styles.info}>
                           <p>
                              Hey, <b>{user}</b>
                           </p>
                        </div>
                     </div> */}
                     {props.child}
                  </div>
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
}
export default UserDashboard;
