import React,{useState} from 'react';
import Footer from '../Landing page/components/Footer';
import Navbar from '../Landing page/components/Navbar';
import Registration from '../Registration page/Registration';
import styles from './styles.module.css';

const HowItWorks = () => {
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
            className={modalLogin || modalSignup || modalLoginDoctor ||modalSignupDoctor ? styles.active : ''}
            handleModalsClose={handleModalsClose}
         >
            <Navbar
                handleModalLogin={handleModalLogin}
                handleModalSignup={handleModalSignup}
                handleModalLoginDoctor={handleModalLoginDoctor}
                handleModalSignupDoctor={handleModalSignupDoctor}
            />{' '}
         <main className={styles.main}>
            {/* upper section */}
            <div className={styles.upper_part}>
               <div className={styles.title}>How It Works</div>
               <div>
                  <p className={styles.p_text}>
                     Eirhub is designed to help you get the care you need when
                     you need it, in just a couple of clicks
                  </p>
               </div>
            </div>

            {/* center pole */}
            <section className={styles.lower_section}>
               {/* pole */}
               <div className={styles.pole}>
                  {/* first circle */}
                  <div className={styles.circle_1}>
                     <p>1</p>
                     <div className={styles.left__card}></div>
                  </div>
                  {/* second circle */}
                  <div className={styles.circle_2}>
                     2<div className={styles.right__card}></div>
                  </div>
                  {/* third circle */}
                  <div className={styles.circle_3}>
                     3 <div className={styles.left__card}></div>
                  </div>
                  {/* fourth circle */}
                  <div className={styles.circle_4}>
                     4<div className={styles.right__card}></div>
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

export default HowItWorks;
