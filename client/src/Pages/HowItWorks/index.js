import React from 'react';
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
         </main>
      </>
   );
};

export default HowItWorks;
