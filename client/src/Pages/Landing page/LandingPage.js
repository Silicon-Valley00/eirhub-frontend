import React, { useState } from 'react';
import Registration from '../Registration page/Registration';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import QuickSolution from './components/QuickSolution';
import Services from './components/Services';
import styles from './Landingpage.module.css';

const LandingPage = () => {
   const [modalSignup, setModalSignup] = useState(false);
   const [modalLogin, setModalLogin] = useState(false);

   function handleModalSignup() {
      setModalLogin(false);
      setModalSignup(true);
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
      <div>
         <Navbar />
         <Hero />
         <QuickSolution />
         <Services />
         <Footer />
      </div>
   );
};

export default LandingPage;
