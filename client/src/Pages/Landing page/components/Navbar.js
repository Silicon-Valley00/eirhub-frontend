import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import './navbar.css';
import close from '../../../images/close.svg';
import menu from '../../../images/menu.svg';

const Navbar = (props) => {
   const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);

   return (
      <nav id="nav">
         {/* Logo */}
         <div id="img">
            <img src={logo} alt="" height={50} width={200} />
         </div>
         <div className={sidebar ? 'link-container active' : 'link-container'}>
            {/* Close icon */}
            <div>
               <img
                  src={close}
                  alt=""
                  id="close"
                  height={30}
                  width={30}
                  onClick={showSidebar}
               />
            </div>
            <div className="left-div">
               <ul id="nav-links">
                  <li className="each">Home</li>
                  <li className="each">Our Services</li>
                  <li className="each" onClick={() => props.handleModalLogin()}>
                     Find a doctor
                  </li>
                  <li
                     className="each"
                     onClick={() => props.handleModalSignup()}
                  >
                     How it Works
                  </li>
               </ul>
               <div id="signup">
                  <p>
                     Sign Up <span id="separator">|</span> Login
                  </p>
               </div>
            </div>
         </div>
         {/* menu icon */}
         <img
            src={menu}
            alt=""
            height={30}
            width={30}
            id="menu"
            onClick={showSidebar}
         />
      </nav>
   );
};

export default Navbar;
