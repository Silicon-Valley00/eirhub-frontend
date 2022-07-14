import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import styles from './navbar.module.css';
import close from '../../../images/close.svg';
import menu from '../../../images/menu.svg';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
   const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);

   return (
      <nav id={styles.nav}>
         {/* Logo */}
         <Link to="/" id={styles.img}>
            <img
               src={logo}
               className={styles.logo_img}
               alt=""
               height={50}
               width={200}
            />
         </Link>
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
                  <Link to="/" className={styles.each}>
                     Home
                  </Link>
                  <Link to="/our-services" className={styles.each}>
                     Our Services
                  </Link>
                  <li className={styles.each}>How it Works</li>
               </ul>
               <div id={styles.signup}>
                  <ul className={styles.signup_list}>
                     <li
                        className={styles.signup_item}
                        onClick={() => props.handleModalSignup()}
                     >
                        Sign Up
                     </li>
                     <li id={styles.separator}>|</li>
                     <li
                        className={styles.signup_item}
                        onClick={() => props.handleModalLogin()}
                     >
                        Login
                     </li>
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
