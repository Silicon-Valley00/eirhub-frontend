import React from 'react';
import logo from '../logo.svg';
import './navbar.css';

const Navbar = () => {
   return (
      <nav id="nav">
         <div id="img">
            <img src={logo} alt="" height={50} width={200} />
         </div>
         <div>
            <ul id="nav-links">
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
