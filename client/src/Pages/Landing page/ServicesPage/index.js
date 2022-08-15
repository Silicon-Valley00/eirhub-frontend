import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import style from './style.module.css';
import pic1 from '../../../assets/OnlineConsultation5.jpg';
import pic2 from '../../../assets/findadoctor.png';
import pic3 from '../../../assets/prescription-drug-coverage-1-1x1.jpg';
import pic4 from '../../../assets/weightloss.jpg';
import Registration from '../../Registration page/Registration';
import styles from '../Landingpage.module.css';

const ServicesPage = () => {
   // Handles the states of the modals that show the different registration pages to users based on gtheir selection
   const [modalSignup, setModalSignup] = useState(false);
   const [modalSignupDoctor, setModalSignupDoctor] = useState(false);
   const [modalLogin, setModalLogin] = useState(false);
   const [modalLoginDoctor, setModalLoginDoctor] = useState(false);

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
            <Navbar
               handleModalLogin={handleModalLogin}
               handleModalSignup={handleModalSignup}
               handleModalLoginDoctor={handleModalLoginDoctor}
               handleModalSignupDoctor={handleModalSignupDoctor}
            />{' '}
            <main className={style.main}>
               {/* upper section */}
               <div className={style.upper_part}>
                  <div className={style.title}>Our Services</div>
                  <div>
                     <p className={style.p_text}>
                        Across Eirhub,From Online appointment booking to
                        medication tracking,we offer a wide range of services to
                        meet you as a patient or provider at every point of your
                        health care journey
                     </p>
                  </div>
                  <div className={style.h_line}></div>
               </div>

               {/* body section with images */}
               <section className={style.lower_section}>
                  {/* first container */}
                  <div className={style.container}>
                     <div className={style.with_text}>
                        <p className={style.with_text_title}>
                           Health Consultation
                        </p>
                        <p className={style.with_text_desc}>
                           An easier way to talk with your doctor
                        </p>
                        <p className={style.with_text_content}>
                           Get to book appointments and meet your doctor
                           face-to-face or online just with a few clicks
                        </p>
                     </div>
                     <div data-aos="fade-in" className={style.of_image}>
                        <img src={pic1} alt="" className={style.of__image} />
                     </div>
                  </div>

                  {/* second container */}
                  <div className={`${style.container}`}>
                     <div data-aos="fade-in" className={style.of_image}>
                        <img src={pic2} alt="" className={style.of__image} />
                     </div>
                     <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className={style.with_text}
                     >
                        <p className={style.with_text_title}>Find a Doctor</p>
                        <p className={style.with_text_desc}>
                           Get access to the right doctor
                        </p>
                        <p className={style.with_text_content}>
                           Find a doctor that can help you get a solution to
                           your health problems
                        </p>
                     </div>
                  </div>

                  {/* third container */}
                  <div className={style.container}>
                     <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className={style.with_text}
                     >
                        <p className={style.with_text_title}>E-pharmacy</p>
                        <p className={style.with_text_desc}>
                           Manage your prescriptions more effectively
                        </p>
                        <p className={style.with_text_content}>
                           Keep track of your various prescriptions and get
                           alerts on when to refill
                        </p>
                     </div>
                     <div data-aos="fade-in" className={style.of_image}>
                        <img src={pic3} alt="" className={style.of__image} />
                     </div>
                  </div>

                  {/* fourth container */}
                  <div className={style.container}>
                     <div data-aos="fade-in" className={style.of_image}>
                        <img src={pic4} alt="" className={style.of__image} />
                     </div>
                     <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className={style.with_text}
                     >
                        <p className={style.with_text_title}>Health Tips</p>
                        <p className={style.with_text_desc}>
                           Get access to verified tips for a healthy living
                        </p>
                        <p className={style.with_text_content}>
                           Find a doctor that can help you get a solution to
                           your health problems
                        </p>
                     </div>
                  </div>
               </section>
            </main>
            <Footer />
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

export default ServicesPage;
