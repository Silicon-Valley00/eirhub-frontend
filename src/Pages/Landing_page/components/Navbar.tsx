import React, { useEffect, useRef, useState } from 'react';
import logo from '../../../assets/landingPage/logo.svg';
import styles from './navbar.module.css';
import close from '../../../assets/landingPage/close.svg';
import menu from '../../../assets/landingPage/menu.svg';
import { Link, NavLink } from 'react-router-dom';
import LoginDropdown from './LoginDropdown';
import SignUpDropdown from './SignUpDropdown';

const Navbar = (props) => {
   const [sidebar, setSidebar] = useState(false);
   const [loginClick, setLoginClick] = useState(false);
   const [signUpClick, setSignUpClick] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);
   const handleSignUpClick = () => {
      setSignUpClick(!signUpClick);
      setLoginClick(false);
   };
   const handleLoginClick = () => {
      setLoginClick(!loginClick);
      setSignUpClick(false);
   };

   return (
      <div className={styles.nav_background}>
         <main className={styles.main}>
            <div className={styles.back}>
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
                           ? `${styles.linkContainer} ${styles.sidebar}`
                           : `${styles.linkContainer}`
                     }
                  >
                     {/* Close icon */}
                     <div>
                        <img
                           src={close}
                           alt=""
                           id={styles.close}
                           height={20}
                           width={20}
                           onClick={showSidebar}
                        />
                     </div>
                     <div className={styles.left}>
                        <ul id={styles.nav_links}>
                           <NavLink
                              to="/"
                              className={({ isActive }) =>
                                 isActive
                                    ? `${styles.active} ${styles.each}`
                                    : styles.each
                              }
                           >
                              Home
                           </NavLink>
                           <NavLink
                              to="/our-services"
                              className={({ isActive }) =>
                                 isActive
                                    ? `${styles.active} ${styles.each}`
                                    : styles.each
                              }
                           >
                              Our Services
                           </NavLink>
                           <NavLink
                              to="/how-it-works"
                              className={({ isActive }) =>
                                 isActive
                                    ? `${styles.active} ${styles.each}`
                                    : styles.each
                              }
                           >
                              How it Works
                           </NavLink>
                        </ul>
                        <div id={styles.signup}>
                           <ul className={styles.signup_list}>
                              <li
                                 className={styles.signup_item}
                                 onClick={handleSignUpClick}
                              >
                                 Sign Up
                              </li>
                              <li id={styles.separator}>|</li>
                              <li
                                 className={styles.signup_item}
                                 onClick={handleLoginClick}
                              >
                                 Login
                              </li>
                           </ul>
                           {loginClick && (
                              <LoginDropdown
                                 handleModalLogin={props.handleModalLogin}
                                 handleModalLoginDoctor={
                                    props.handleModalLoginDoctor
                                 }
                              />
                           )}
                           {signUpClick && (
                              <SignUpDropdown
                                 handleModalSignup={props.handleModalSignup}
                                 handleModalSignupDoctor={
                                    props.handleModalSignupDoctor
                                 }
                              />
                           )}
                        </div>
                     </div>
                  </div>
                  {/* menu icon */}
                  <img
                     src={menu}
                     alt=""
                     height={20}
                     width={20}
                     id={styles.menu}
                     onClick={showSidebar}
                  />
               </nav>
            </div>
         </main>
      </div>
   );
};

export default Navbar;
