import React, { useState } from 'react';
import Registration from '../Registration page/Registration';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import './Landingpage.css';

const LandingPage = () => {
   const [modalSignup, setModalSignup] = useState(false);
   const [modalLogin, setModalLogin] = useState(false);

   function handleModalSignup() {
      setModalSignup(true);
      setModalLogin(false);
   }
   function handleModalLogin() {
      setModalSignup(false);
      setModalLogin(true);
   }
   function handleModalsClose() {
      setModalSignup(false);
      setModalLogin(false);
   }
   return (
      <>
         <div
            id="blur"
            className={modalLogin || modalSignup ? 'active' : ''}
            handleModalsClose={handleModalsClose}
         >
            <Navbar
               handleModalLogin={handleModalLogin}
               handleModalSignup={handleModalSignup}
            />
            <Hero />

            {/* <Services /> */}
         </div>
         <Registration
            modalLogin={modalLogin}
            modalSignup={modalSignup}
            handleModalsClose={handleModalsClose}
         />
      </>
   );
};

export default LandingPage;
