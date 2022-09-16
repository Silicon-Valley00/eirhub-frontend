import styles from './navigation.module.css';
import { useSelector } from 'react-redux';

function Navigation({ nav }) {
   const user = useSelector((state) => state?.doctorProfile.first_name);
   const userProfileImage = useSelector(
      (state) => state.doctorProfile?.person_image
   );

   return (
      <nav className={styles.nav}>
         <div className={styles.welcome_msg}>
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
}
export default Navigation;
