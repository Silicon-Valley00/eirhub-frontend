import React, { useState } from 'react';
import logo from '../../../assets/landingPage/logo.svg';
import styles from './navbar.module.css';
import close from '../../../assets/landingPage/close.svg';
import menu from '../../../assets/landingPage/menu.svg';
import { Link, NavLink } from 'react-router-dom';
import LoginDropdown from './LoginDropdown';
import SignUpDropdown from './SignUpDropdown';
import { Box, Button, Modal } from '@mui/material';

const style = {
   position: 'absolute',
   height: '20rem',
   width: '200px',
   color: 'var(--white)',
   top: '3rem',
   right: '5rem',
   bottom: 0,
   borderRadius: '20px',
   paddingRight: '20px',
   paddingLeft: '20px',
   /* padding-top: 15px; */
   paddingBottom: '15px',
};

const Navbar = () => {
   const [sidebar, setSidebar] = useState(false);
   const [loginClick, setLoginClick] = useState(false);
   const [signUpClick, setSignUpClick] = useState(false);

   const handleClose = () => {
      setLoginClick(false);
      setSignUpClick(false);
   };

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
                        <div>
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
                           <Modal
                              open={loginClick}
                              onClose={handleClose}
                              aria-labelledby="parent-modal-title"
                              aria-describedby="parent-modal-description"
                           >
                              <Box sx={{ ...style, width: 200 }}>
                                 <LoginDropdown />
                                 {/* <ChildModal /> */}
                              </Box>
                           </Modal>
                           <Modal
                              open={signUpClick}
                              onClose={handleClose}
                              aria-labelledby="parent-modal-title"
                              aria-describedby="parent-modal-description"
                           >
                              <Box sx={{ ...style, width: 200 }}>
                                 <SignUpDropdown />
                                 {/* <ChildModal /> */}
                              </Box>
                           </Modal>
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
