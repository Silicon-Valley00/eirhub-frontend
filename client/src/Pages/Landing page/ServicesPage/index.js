import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import style from './style.module.css';
import pic from '../../../assets/maleDoctor.jpg';

const ServicesPage = () => {
   return (
      <>
         <Navbar />
         <main className={style.main}>
            {/* upper section */}
            <div className={style.upper_part}>
               <div className={style.title}>Our Services</div>
               <div>
                  <p className={style.p_text}>
                     Across Eirhub,From Online appointment booking to medication
                     tracking,we offer a wide range of services to meet you as a
                     patient or provider at every point of your health care
                     journey
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
                  <div className={style.of_image}>
                     <img src={pic} alt="" className={style.of__image} />
                  </div>
               </div>

               {/* second container */}
               <div className={style.container}>
                  <div className={style.of_image}></div>
                  <div className={style.with_text}>
                     <p className={style.with_text_title}>Find a Doctor</p>
                     <p className={style.with_text_desc}>
                        Get access to the right doctor
                     </p>
                     <p className={style.with_text_content}>
                        Find a doctor that can help you get a solution to your
                        health problems{' '}
                     </p>
                  </div>
               </div>

               {/* third container */}
               <div className={style.container}>
                  <div className={style.with_text}>
                     <p className={style.with_text_title}>E-pharmacy</p>
                     <p className={style.with_text_desc}>
                        Manage your prescriptions more effectively
                     </p>
                     <p className={style.with_text_content}>
                        Keep track of your various prescriptions and get alerts
                        on when to refill
                     </p>
                  </div>
                  <div className={style.of_image}></div>
               </div>

               {/* fourth container */}
               <div className={style.container}>
                  <div className={style.of_image}></div>
                  <div className={style.with_text}>
                     <p className={style.with_text_title}>Health Tips</p>
                     <p className={style.with_text_desc}>
                        Get access to verified tips for a healthy living
                     </p>
                     <p className={style.with_text_content}>
                        Find a doctor that can help you get a solution to your
                        health problems
                     </p>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
};

export default ServicesPage;
