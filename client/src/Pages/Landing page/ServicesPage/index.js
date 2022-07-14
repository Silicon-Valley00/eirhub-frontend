import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import style from './style.module.css';

const ServicesPage = () => {
   return (
      <>
         <Navbar />
         <main className={style.main}>
            <div className={style.upper_part}>
               <div className={style.title}>Our Services</div>
               <div>
                  <p className={style.p_text}>
                     Across Eirhub,From Online appointment booking to medication
                     tracking,we offer a wide range of services to meet you as a
                     patient or provider at every point of your health care
                     journey
                  </p>
                  <p></p>
                  <p></p>
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
};

export default ServicesPage;
