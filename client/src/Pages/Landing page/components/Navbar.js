import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import styles from './navbar.module.css';
import close from '../../../images/close.svg';
import menu from '../../../images/menu.svg';
import { NavLink } from 'react-router-dom';
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
      <nav id={styles.nav}>
         {/* Logo */}
         <NavLink to="/" id={styles.img}>
            <img
               src={logo}
               className={styles.logo_img}
               alt=""
               height={50}
               width={200}
            />
         </NavLink>
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
               {/* REVIEW: active navlink is not working. */}
               <ul id={styles.nav_links}>
                  <NavLink
                     to="/"
                     // activeClassName={styles.nav_link_active}
                     className={styles.each}
                  >
                     Home
                  </NavLink>
                  <NavLink
                     to="/our-services"
                     // activeClassName={styles.nav_link_active}
                     className={styles.each}
                  >
                     Our Services
                  </NavLink>
                  <NavLink
                     to="/how-it-works"
                     // activeClassName={styles.nav_link_active}
                     className={styles.each}
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

                     {/* <li
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
                     </li> */}
                  </ul>
                  {loginClick && <LoginDropdown handleModalLogin={props.handleModalLogin} handleModalLoginDoctor={props.handleModalLoginDoctor} />}
                  {signUpClick && <SignUpDropdown handleModalSignup={props.handleModalSignup} handleModalSignupDoctor={props.handleModalSignupDoctor}/>}
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
