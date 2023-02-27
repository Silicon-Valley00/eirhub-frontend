import React, { useEffect, useRef, useState } from 'react';
// import logo from '../../../assets/images/logo.svg';
import styles from './navbar.module.css';
import { ReactComponent as close } from '../../../assets/images/close.svg';
import menu from '../../../assets/images/menu.svg';
import { Link } from 'react-router-dom';
import LoginDropdown from './LoginDropdown';
import SignUpDropdown from './SignUpDropdown';

// Function to use when the user clicks outside of the dropdown.
function useClickOutside(Handler) {
   let menuRef = useRef();
   useEffect(() => {
      let secondHandler = (event) => {
         if (menuRef && !menuRef.current.contains(event.target)) {
            Handler();
         }
      };
      document.addEventListener('mousedown', secondHandler, true);
      return () => {
         document.removeEventListener('mousedown', secondHandler, true);
      };
   }, [menuRef]);
   return menuRef;
}

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

   let menuRef = useClickOutside(() => {
      setLoginClick(false);
      setSignUpClick(false);
   });

   function handleHeaderClick(event) {
      event.stopPropagation();
   }

   return (
      <div className={styles.nav_background}>
         <main className={styles.main} onClick={handleHeaderClick}>
            <div className={styles.back}>
               <nav id={styles.nav} ref={menuRef}>
                  {/* Logo */}
                  <Link to="/" id={styles.img}>
                     <img
                        // src={logo}
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
                           <Link
                              to="/"
                              className={
                                 props.indicator === 1
                                    ? `${styles.active} ${styles.each}`
                                    : styles.each
                              }
                           >
                              Home
                           </Link>
                           <Link
                              to="/our-services"
                              className={
                                 props.indicator === 2
                                    ? `${styles.active} ${styles.each}`
                                    : styles.each
                              }
                           >
                              Our Services
                           </Link>
                           <Link
                              to="/how-it-works"
                              className={
                                 props.indicator === 3
                                    ? `${styles.active} ${styles.each}`
                                    : styles.each
                              }
                           >
                              How it Works
                           </Link>
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
