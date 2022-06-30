import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import './navbar.css';
import close from '../../../images/close.svg';
import menu from '../../../images/menu.svg';

const Navbar = () => {
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
                  <li>Home</li>
                  <li>Our Services</li>
                  <li>Find a doctor</li>
                  <li>How it Works</li>
               </ul>
               <div id="signup">
                  <ul id="nav-links-two">
                     <li>Sign up</li>
                     <li>|</li>
                     <li>Login</li>
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
            id="menu"
            onClick={showSidebar}
         />
      </nav>
   );
};

export default Navbar;
