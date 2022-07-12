import React, { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import footerStyle from '../components/footer.module.css';

const Footer = () => {
   return (
      <footer>
         {/* logo div*/}
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
         {/* <div className={footerStyle.fourservices}>
            <h2
               onClick={() =>
                  //toggling with onclick
                  toggleDropdown({
                     state: showServices,
                     setState: setShowServices,
                  })
               }
               className={footerStyle.fheader}
            >
               Our services
               {/*Trigger image if showServices is false*/}
         {/*}  {!showServices ? (
                  <IoIosArrowDown className={footerStyle.fmobilehide1} />
               ) : (
                  <IoIosArrowUp className={footerStyle.fmobilehide2} />
               )}
            </h2>
            {showServices && (
               <ul className={footerStyle.fdropdown}>
                  <li className={footerStyle.flist}>Health Consultant</li>
                  <li className={footerStyle.flist}>Find Doctor</li>
                  <li className={footerStyle.flist}>E-Pharmacy</li>
                  <li className={footerStyle.flist}>Health Tips</li>
                  <li className={footerStyle.flist}>Blog</li>
               </ul>
            )}
         </div> */}

         {/* support div*/}
         {/* <div className={footerStyle.fsupport}>
            <h2
               onClick={() =>
                  toggleDropdown({
                     state: showSupport,
                     setState: setShowSupport,
                  })
               }
               className={footerStyle.fheader}
            >
               Support
               {!showSupport ? (
                  <IoIosArrowDown className={footerStyle.fmobilehide1} />
               ) : (
                  <IoIosArrowUp className={footerStyle.fmobilehide2} />
               )}
            </h2>
            {showSupport && (
               <ul className={footerStyle.fdropdown}>
                  <li className={footerStyle.flist}>Find a Doctor</li>
                  <li className={footerStyle.flist}>How it Works</li>
                  <li className={footerStyle.flist}>Book Appointment</li>
                  <li className={footerStyle.flist}>Register</li>
                  <li className={footerStyle.flist}>FAQ</li>
                  <li className={footerStyle.flist}>Terms of Use</li>
               </ul>
            )}
         </div> */}
         {/*Contact*/}
         <div className={footerStyle.fcontact}>
            <h2 className={footerStyle.fheader}>Contact us</h2>
            <ul className={footerStyle.fdropdown}>
               <li className={footerStyle.flist}>+(233) 576 678 238</li>
            </ul>
            <ul className={footerStyle.fdropdown}>
               <li className={footerStyle.flist}>info@Eirhub.com</li>
            </ul>
            <ul className={footerStyle.fdropdown}>
               <li className={footerStyle.flist}>
                  17 Maple Avenue<br></br> Kumasi, Ghana
               </li>
            </ul>
         </div>
      </footer>
   );
};
export default Footer;
