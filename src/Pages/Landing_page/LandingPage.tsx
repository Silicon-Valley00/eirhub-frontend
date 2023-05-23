import React, { useEffect, useState } from 'react';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import QuickSolution from './components/QuickSolution';
import Services from './components/Services';
import styles from './Landingpage.module.css';
import AlertsMessageBox from '../GeneralComponents/Alert/AlertsMessageBox';
import { Helmet } from 'react-helmet';

const LandingPage = () => {
   useEffect(() => localStorage.clear(), []);

   return (
      <>
         <Helmet>
            <title>Eirhub | Homepage</title>
            <meta name="description" content="Eirhub" />
         </Helmet>
         <div
            className={styles.active}
            // handleModalsClose={handleModalsClose}
         >
            <AlertsMessageBox time={5000} />
            {/* navbar */}

            <Navbar />

            {/* Hero */}
            <div className={styles.back}>
               <div className={styles.hero_overlay}></div>
               <div className={styles.inner_div}>
                  <Hero />
               </div>
            </div>

            {/* Quick soluton */}
            <div className={styles.backwhite}>
               <div className={styles.inner_div}>
                  <QuickSolution />
               </div>
            </div>

            {/* Services */}
            <div className={styles.backwhite}>
               <div className={styles.inner_div}>
                  <Services />
               </div>
            </div>

            <Footer />
         </div>
      </>
   );
};

export default LandingPage;
