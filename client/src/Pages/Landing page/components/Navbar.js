import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import styles from './navbar.module.css';
import close from '../../../images/close.svg';
import menu from '../../../images/menu.svg';

const Navbar = (props) => {
   const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);

   return (
      <nav id={styles.nav}>
         {/* Logo */}
         <div id={styles.img}>
            <img src={logo} alt="" height={50} width={200} />
         </div>
         <div
            className={
               sidebar
                  ? `${styles.linkContainer} ${styles.active}`
                  : `${styles.linkContainer}`
            }
         >
            {/* Close icon */}
            <div>
               <img
                  src={close}
                  alt=""
                  id={styles.close}
                  height={30}
                  width={30}
                  onClick={showSidebar}
               />
            </div>
            <div className={styles.left}>
               <ul id={styles.nav_links}>
                  <li className={styles.each}>Home</li>
                  <li className={styles.each}>Our Services</li>
                  <li className={styles.each}>Find a doctor</li>
                  <li className={styles.each}>How it Works</li>
               </ul>
               <div id={styles.signup}>
                  <ul className={styles.signup_list}>
                     <li className={styles.signup_item}>Sign Up</li>
                     <li id={styles.separator}>|</li>
                     <li className={styles.signup_item}>Login</li>
                  </ul>
               </div>
            </div>
         </div>
         {/* menu icon */}
         <img
            src={menu}
            alt=""
            height={30}
            width={30}
            id={styles.menu}
            onClick={showSidebar}
         />
      </nav>
   );
};

export default Navbar;
