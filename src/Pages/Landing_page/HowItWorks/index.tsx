import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Registration from '../../Registration page/Registration';
import styles from './styles.module.css';
import { HiCheck } from 'react-icons/hi';
import { GiLabCoat, GiVideoConference } from 'react-icons/gi';
import { IoIosClock } from 'react-icons/io';
import { MdVerified } from 'react-icons/md';
import AlertsMessageBox from '../../General Components/Alert/AlertsMessageBox';
import { Helmet } from 'react-helmet';
import { persistor } from '../../../Store/ReducerStore';

const HowItWorks = () => {
   // Handles the states of the modals that show the different registration pages to users based on gtheir selection
   const [modalSignup, setModalSignup] = useState(false);
   const [modalSignupDoctor, setModalSignupDoctor] = useState(false);
   const [modalLogin, setModalLogin] = useState(false);
   const [modalLoginDoctor, setModalLoginDoctor] = useState(false);

   useEffect(() => setTimeout(() => persistor.purge(), 200), []);

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
            <title>How It Works</title>
            <meta name="description" content="How It Works" />
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
            handleModalsClose={handleModalsClose}
         >
            <AlertsMessageBox time={5000} />
            <Navbar
               handleModalLogin={handleModalLogin}
               handleModalSignup={handleModalSignup}
               handleModalLoginDoctor={handleModalLoginDoctor}
               handleModalSignupDoctor={handleModalSignupDoctor}
               indicator={3}
            />
            <main className={styles.main}>
               {/* upper section */}
               <div className={styles.upper_part}>
                  <div className={styles.title}>How It Works</div>
                  <div>
                     <p className={styles.p_text}>
                        Eirhub is designed to help you get the care you need
                        when you need it, in just a couple of clicks
                     </p>
                  </div>
                  <div className={styles.h_line}></div>
               </div>

               {/* center pole */}
               <section className={styles.lower_section}>
                  {/* pole */}
                  <div className={styles.pole}>
                     {/* first circle */}
                     <div className={styles.circle_1}>
                        <p className={styles.circle__num}>1</p>
                        {/* first card on the left */}
                        <div
                           data-aos="zoom-out-up"
                           duration="4000"
                           className={styles.left_card}
                        >
                           <div className={styles.left__card}>
                              <GiLabCoat className={styles.icon} />
                              <p className={styles.heading}>Find a doctor</p>
                              <p className={styles.content}>
                                 Choose from a wide variety of highly-qualified
                                 doctors near you.
                              </p>
                           </div>
                           <div className={styles.left__arrow}></div>
                        </div>
                     </div>
                     {/* second circle */}
                     <div className={styles.circle_2}>
                        <p className={styles.circle__num}>2</p>
                        {/* first card on the right */}
                        <div
                           data-aos="zoom-out-up"
                           duration="4000"
                           className={styles.right_card}
                        >
                           <div className={styles.right__arrow}></div>
                           <div className={styles.right__card}>
                              <MdVerified className={styles.icon} />
                              <p className={styles.heading}>
                                 Book an appointment
                              </p>
                              <p className={styles.content}>
                                 Request for an appointment with your preferred
                                 Doctor.
                              </p>
                           </div>
                        </div>
                     </div>
                     {/* third circle */}
                     <div className={styles.circle_3}>
                        <p className={styles.circle__num}>3</p>
                        {/* Second card on the left */}
                        <div
                           data-aos="zoom-out-up"
                           duration="4000"
                           className={styles.left_card}
                        >
                           <div className={styles.left__card}>
                              <IoIosClock className={styles.icon} />
                              <p className={styles.heading}>
                                 {' '}
                                 Doctor picks a date and time
                              </p>
                              <p className={styles.content}>
                                 Wait for the selected doctor to pick a date and
                                 time for your appointment.
                              </p>
                           </div>
                           <div className={styles.left__arrow}></div>
                        </div>
                     </div>
                     {/* fourth circle */}
                     <div className={styles.circle_4}>
                        <p className={styles.circle__num}>
                           <HiCheck />
                        </p>

                        {/* Second card on the right */}
                        <div
                           data-aos="zoom-out-up"
                           duration="4000"
                           className={styles.right_card}
                        >
                           <div className={styles.right__arrow}></div>
                           <div className={styles.right__card}>
                              <GiVideoConference className={styles.icon} />
                              <p className={styles.heading}>Meet your doctor</p>
                              <p className={styles.content}>
                                 See your doctor in-person or online and get the
                                 help you need.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            </main>
            <Footer handleModalSignup={handleModalSignup} />
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

export default HowItWorks;
