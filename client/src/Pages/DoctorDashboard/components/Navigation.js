import React from 'react';
import styles from './navigation.module.css';
import { GrClose } from 'react-icons/gr';
import { MdSpaceDashboard, MdMenu } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import { ImExit } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { TbCalendarTime } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import avatarThree from '../../../assets/Rectangle.png';
import Sidebar from './Sidebar';

function Navigation(props) {
   return (
      <nav className={styles.nav}>
         <div className={styles.welcome_msg}>
            <p className={styles.logo}>Eirhub</p>
            <MdMenu color="#05a6c2" className={styles.menu} />
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

         <Sidebar />
      </nav>
   );
}
export default Navigation;
