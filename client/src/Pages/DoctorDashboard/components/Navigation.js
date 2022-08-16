import styles from './navigation.module.css';
import avatarThree from '../../../assets/Rectangle.png';
import Sidebar from './Sidebar';

function Navigation({ nav }) {
   return (
      <nav className={styles.nav}>
         <div className={styles.welcome_msg}>
            <p className={styles.logo}>Eirhub</p>

            {/* Avatar with welcome message */}
            <div className={styles.avatar}>
               <img
                  src={avatarThree}
                  alt="avatar"
                  className={styles.avatar_img}
               />
               <p className={styles.hello_msg}>Hello, Raymond</p>
            </div>
         </div>

         <Sidebar indicator={nav} />
      </nav>
   );
}
export default Navigation;
