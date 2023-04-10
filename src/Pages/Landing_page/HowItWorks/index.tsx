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

interface MyDivProps extends React.HTMLAttributes<HTMLDivElement> {
   'data-aos': string;
   duration: string;
}
const HowItWorks = (props: MyDivProps) => {
   return (
      <>
         <Helmet>
            <title>How It Works</title>
            <meta name="description" content="How It Works" />
         </Helmet>

         <div className={styles.active}>
            <AlertsMessageBox time={5000} />
            <Navbar />
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
                        <div {...props} className={styles.left_card}>
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
                        <div {...props} className={styles.right_card}>
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
                        <div {...props} className={styles.left_card}>
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
                           {...props}
                           data-aos="zoom-out-up"
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
            <Footer />
         </div>
      </>
   );
};

export default HowItWorks;
