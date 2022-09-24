import styles from './navigation.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import avatarThree from '../../assets/Rectangle.png';

const Navigation = ({ nav, openFunc }) => {
   const isPatientAuth = useSelector((state) => state.isPatientAuth);
   const isDoctorAuth = useSelector((state) => state.isDoctorAuth);

   const userPatient = useSelector((state) => state?.profile.first_name);
   const userDoctor = useSelector((state) => state?.doctorProfile.first_name);
   const docImage = useSelector((state) => state.doctorProfile?.person_image);
   const patientImage = useSelector((state) => state.profile?.person_image);

   var nameToShow;
   var imageToShow;
   if (isPatientAuth === true) {
      nameToShow = userPatient;
      imageToShow = patientImage;
   } else if (isDoctorAuth === true) {
      nameToShow = userDoctor;
      imageToShow = docImage;
   }

   const [openMenu, setOpenMenu] = useState(false);

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
            <p className={styles.logo}>Eirhub</p>

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
