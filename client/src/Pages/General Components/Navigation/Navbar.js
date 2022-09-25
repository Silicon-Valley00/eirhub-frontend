import styles from './navbar.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
// import avatarThree from '../../assets/Rectangle.png';
import { Link } from 'react-router-dom';

const Navigation = ({ nav, openFunc }) => {
   const isPatientAuth = useSelector((state) => state.isPatientAuth);
   const isDoctorAuth = useSelector((state) => state.isDoctorAuth);

   const userPatient = useSelector((state) => state?.profile.first_name);
   const userDoctor = useSelector((state) => state?.doctorProfile.first_name);
   const docImage = useSelector((state) => state.doctorProfile?.person_image);
   const patientImage = useSelector((state) => state.profile?.person_image);

   var nameToShow;
   var imageToShow;
   var dashboard;
   if (isPatientAuth === true) {
      nameToShow = userPatient;
      imageToShow = patientImage;
      dashboard = '/userdashboard';
   } else if (isDoctorAuth === true) {
      nameToShow = userDoctor;
      imageToShow = docImage;
      dashboard = '/doctordashboard';
   }

   return (
      <nav className={styles.nav}>
         <div className={styles.welcome_msg}>
            <div className={styles.menu} id={styles.menuBtn}>
               <i
                  onClick={() => {
                     openFunc();
                  }}
               >
                  <MdMenu />
               </i>
            </div>

            <Link to={dashboard}>
               <p className={styles.logo}>Eirhub</p>
            </Link>

            {/* Avatar with welcome message */}
            <div className={styles.avatar}>
               <img
                  src={imageToShow}
                  alt="avatar"
                  className={styles.avatar_img}
               />
               <p className={styles.hello_msg}>Hello, {nameToShow}</p>
            </div>
         </div>
      </nav>
   );
};
export default Navigation;