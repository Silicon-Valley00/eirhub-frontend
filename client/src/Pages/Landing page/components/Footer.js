import React, { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import footerStyle from '../components/footer.module.css';
const Footer = () => {
   return (
      <footer>
         <div className={footerStyle.logo}>
            <span className={footerStyle.logo}>Eirhub</span>
            <p className={footerStyle.logo}>
               Eirhubs helps patients get quick access to experienced
               practitioners and helps increase visibility on these
               practitioners
            </p>
            <div className={footerStyle.socialmedia}>
               <span>
                  <FaTwitter className={footerStyle.twit} />
               </span>
               <span>
                  <FaLinkedinIn className={footerStyle.linked} />
               </span>
               <span>
                  <RiInstagramFill className={footerStyle.insta} />
               </span>
            </div>
         </div>
         <div className={footerStyle.ourservices}>
            <h2>Our services</h2>
            <ul className={footerStyle.dropdown1}>
               <li>
                  <a href="#">Health Consultant</a>
               </li>
               <li>
                  <a href="#">Find Doctor</a>
               </li>
               <li>
                  <a href="#">E-Pharmacy</a>
               </li>
               <li>
                  <a href="#">Health Tips</a>
               </li>
               <li>
                  <a href="#">Blog</a>
               </li>
            </ul>
         </div>
         <div className={footerStyle.support}>
            <h2>Support</h2>
            <ul className={footerStyle.dropdown2}>
               <li>
                  <a href="#">Find a Doctor</a>
               </li>
               <li>
                  <a href="#">How it Works</a>
               </li>
               <li>
                  <a href="#">Book Appointment</a>
               </li>
               <li>
                  <a href="#">Register</a>
               </li>
               <li>
                  <a href="#">FAQ</a>
               </li>
               <li>
                  <a href="#">Terms of Use</a>
               </li>
            </ul>
         </div>
         <div className={footerStyle.contact}>
            <h2>Contact us</h2>
            <ul>
               <li>
                  <a href="#">+(233) 576 678 238</a>
               </li>
            </ul>
            <ul>
               <li>
                  <a href="#">info@Eirhub.com</a>
               </li>
            </ul>
            <ul>
               <li>
                  <a href="#">
                     17 Maple Avenue<br></br> Kumasi, Ghana{' '}
                  </a>
               </li>
            </ul>
         </div>
      </footer>
   );
};
export default Footer;
