import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import footerStyle from './footer.module.css';

const Footer = (props) => {
   return (
      <div className={footerStyle.back}>
      <div className={footerStyle.inner_div}>
      <footer>
         {/* logo div*/}
         <div className={footerStyle.logo}>
            <Link to="/">
               <span className={footerStyle.logo}>Eirhub</span>
            </Link>

            <p className={footerStyle.logo}>
               Eirhubs helps patients get quick access to experienced
               practitioners and helps increase visibility on these
               practitioners
            </p>
            <div className={footerStyle.socialmedia}>
               <span  onClick={()=> window.open("https://twitter.com/",'_blank')}>
                  <FaTwitter className={footerStyle.twit}/>
               </span>
               <span onClick={()=> window.open("https://www.linkedin.com/",'_blank')}>
                  <FaLinkedinIn className={footerStyle.linked} />
               </span>
               <span onClick={()=> window.open("https://www.instagram.com/",'_blank')}>
                  <RiInstagramFill className={footerStyle.insta} />
               </span>
            </div>
         </div>
         <div className={footerStyle.fourservices}>
           
            <h2 className={footerStyle.fheader}>Our services</h2>
            <ul className={footerStyle.fdropdown}>
               <li className={footerStyle.flist}>Health Consultant</li>
               <li className={footerStyle.flist} onClick={ () => props.handleModalSignup() }>Find a Doctor</li>
               <li className={footerStyle.flist}>E-Pharmacy</li>
            </ul>
         </div>

         {/* support div*/}
         <div className={footerStyle.fsupport}>
            <h2 className={footerStyle.fheader}>Support</h2>
            <ul className={footerStyle.fdropdown}>
               <li className={footerStyle.flist} onClick={ () => props.handleModalSignup() }>Find a Doctor</li>
               <Link className={footerStyle.flist} to="/how-it-works">
               <li className={footerStyle.flist}>How it Works</li>
               </Link>
               <li className={footerStyle.flist} onClick={ () => props.handleModalSignup() }>Book Appointment</li>
               <li className={footerStyle.flist} onClick={ () => props.handleModalSignup() }>Register</li>
               <li className={footerStyle.flist}>
                  <Link to="/FAQ" className={footerStyle.flist}>
                     FAQ
                  </Link>
               </li>
               <li className={footerStyle.flist}>Terms of Use</li>
            </ul>
         </div>
         {/*Contact*/}
         <div className={footerStyle.fcontact}>
            <h2 className={footerStyle.fheader}>Contact us</h2>
            <ul className={footerStyle.fdropdown}>
               <li className={footerStyle.flist}  onClick={ () => window.open('tel:+233 576 678 238', '_self')}>+(233) 576 678 238</li>
            </ul>
            <ul className={footerStyle.fdropdown}>
               <li className={footerStyle.flist} onClick={ () => window.open('mailto:eirhub@gmail.com', '_self')}>info@Eirhub.com</li>
            </ul>
            <ul className={footerStyle.fdropdown}>
               <li className={footerStyle.flist}>
                  17 Maple Avenue<br></br> Kumasi, Ghana
               </li>
            </ul>
         </div>
      </footer>
       </div>
       </div>
   );
};
export default Footer;
