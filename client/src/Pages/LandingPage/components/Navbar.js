import React from 'react';
import logo from '../logo.svg';

const Navbar = () => {
   return (
      <nav>
         <div id="img">
            <img src={logo} alt="" />
         </div>
         <div>
            <ul>
               <li>Home</li>
               <li>Our Services</li>
               <li>Find a doctor</li>
               <li>How it Works</li>
            </ul>
         </div>
         <div>
            <p>Sign Up | Login</p>
         </div>
      </nav>
   );
};

export default Navbar;
