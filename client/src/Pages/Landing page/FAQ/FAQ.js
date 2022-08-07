import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './faq.module.css';
import { data } from './FAQ_data';
import { useState } from 'react';
import Registration from '../../Registration page/Registration';

const FAQ = () => {
   const [selected, setSelected] = useState(null);

   const toggle = (index) => {
      if (selected === index) {
         return setSelected(null);
      }

      setSelected(index);
   };

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
            />
            <main className={styles.main}>
               <div className={styles.upper_part}>
                  <div className={styles.title}>FAQ</div>
                  <div>
                     <p className={styles.p_text}>
                        Eirhub is designed to help you get the care you need
                        when you need it, in just a couple of clicks
                     </p>
                  </div>
                  <div className={styles.h_line}></div>
               </div>

               {/* lower section of FAQ */}

               <section className={styles.lower_section}>
                  <div className={styles.question__container}>
                     {data.map((item, index) => {
                        return (
                           <div className={styles.question_and_answer}>
                              <div
                                 className={styles.question}
                                 onClick={() => toggle(index)}
                              >
                                 <h1>{item.question}</h1>
                                 <span>{selected === index ? '-' : '+'}</span>
                              </div>
                              <div
                                 className={
                                    selected === index
                                       ? `${styles.show}`
                                       : `${styles.answer}`
                                 }
                              >
                                 {item.answer}
                              </div>
                           </div>
                        );
                     })}
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

export default FAQ;
