import styles from './navigation.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';

const Navigation = ({ nav, openFunc }) => {
   const user = useSelector((state) => state?.doctorProfile.first_name);
   const userProfileImage = useSelector(
      (state) => state.doctorProfile?.person_image
   );
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
                  src={userProfileImage}
                  alt="avatar"
                  className={styles.avatar_img}
               />
               <p className={styles.hello_msg}>Hello, {user}</p>
            </div>
         </div>
      </nav>
   );
};
export default Navigation;
