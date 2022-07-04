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
         <div className={sidebar ? 'linkContainer active' : 'linkContainer'}>
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
            <div className="left">
               <ul id="nav_links">
                  <li className="each">Home</li>
                  <li className="each">Our Services</li>
                  <li className="each">Find a doctor</li>
                  <li className="each">How it Works</li>
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
