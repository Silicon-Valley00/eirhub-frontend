import React from 'react';
import Footer from '../Landing page/components/Footer';
import Navbar from '../Landing page/components/Navbar';
import styles from './styles.module.css';

const HowItWorks = () => {
   return (
      <>
         <Navbar />
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
      </>
   );
};

export default HowItWorks;
