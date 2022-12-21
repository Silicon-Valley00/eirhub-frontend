import React, { useEffect, useState } from 'react';
import Registration from '../Registration page/Registration';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import QuickSolution from './components/QuickSolution';
import Services from './components/Services';
import styles from './Landingpage.module.css';
import AlertsMessageBox from '../General Components/Alert/AlertsMessageBox';
import { Helmet } from 'react-helmet';
import { persistor } from '../../Store/ReducerStore';

const LandingPage = () => {
   // Handles the states of the modals that show the different registration pages to users based on gtheir selection
   const [modalSignup, setModalSignup] = useState(false);
   const [modalSignupDoctor, setModalSignupDoctor] = useState(false);
   const [modalLogin, setModalLogin] = useState(false);
   const [modalLoginDoctor, setModalLoginDoctor] = useState(false);

   useEffect(() => localStorage.clear(), []);

   // Function opens the patients' signup form modal
   function handleModalSignup() {
      setModalLogin(false);
      setModalSignup(true);
      setModalLoginDoctor(false);
      setModalSignupDoctor(false);
   }

   // Function opens the patients' login form modal
   function handleModalLogin() {
      setModalSignup(false);
      setModalLogin(true);
      setModalLoginDoctor(false);
      setModalSignupDoctor(false);
   }

   // Function opens the doctors' signup form modal
   function handleModalSignupDoctor() {
      setModalLogin(false);
      setModalSignup(false);
      setModalLoginDoctor(false);
      setModalSignupDoctor(true);
   }

   // Function opens the doctors' login form modal
   function handleModalLoginDoctor() {
      setModalLogin(false);
      setModalSignup(false);
      setModalLoginDoctor(true);
      /* Setting the state of the modalSignupDoctor to false. */
      setModalSignupDoctor(false);
   }

   // Handles close of all form modals
   function handleModalsClose() {
      setModalSignup(false);
      setModalLogin(false);
      setModalLoginDoctor(false);
      setModalSignupDoctor(false);
   }
   return (
      <>
         <Helmet>
            <title>Eirhub | Homepage</title>
            <meta name="description" content="Eirhub" />
         </Helmet>
         <div
            id={styles.blur}
            className={
               modalLogin ||
               modalSignup ||
               modalLoginDoctor ||
               modalSignupDoctor
                  ? styles.active
                  : ''
            }
            // handleModalsClose={handleModalsClose}
         >
            <AlertsMessageBox time={5000} />
            {/* navbar */}

            <Navbar
               handleModalLogin={handleModalLogin}
               handleModalSignup={handleModalSignup}
               handleModalLoginDoctor={handleModalLoginDoctor}
               handleModalSignupDoctor={handleModalSignupDoctor}
               indicator={1}
            />

            {/* Hero */}
            <div className={styles.back}>
               <div className={styles.hero_overlay}></div>
               <div className={styles.inner_div}>
                  <Hero handleModalSignup={handleModalSignup} />
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
                  <Services handleModalSignup={handleModalSignup} />
               </div>
            </div>

            {/* footer */}
            {/* <div className={styles.back}>
               <div className={styles.inner_div}> */}

            <Footer handleModalSignup={handleModalSignup} />
            {/* </div>
            <Footer />
            {/* </div>
            </div> */}
         </div>
         <Registration
            modalLogin={modalLogin}
            modalSignup={modalSignup}
            modalLoginDoctor={modalLoginDoctor}
            modalSignupDoctor={modalSignupDoctor}
            handleModalsClose={handleModalsClose}
            handleModalLogin={handleModalLogin}
            handleModalSignup={handleModalSignup}
            handleModalLoginDoctor={handleModalLoginDoctor}
            handleModalSignupDoctor={handleModalSignupDoctor}
         />
      </>
   );
};

export default LandingPage;
