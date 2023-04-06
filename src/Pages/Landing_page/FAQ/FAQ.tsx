import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './faq.module.css';
import { data } from './FAQ_data';
import { useState } from 'react';
import Registration from '../../Registration page/Registration';
import AlertsMessageBox from '../../General Components/Alert/AlertsMessageBox';
import { Helmet } from 'react-helmet';
import { persistor } from '../../../Store/store';

const FAQ = () => {
   const [selected, setSelected] = useState<number | null>(null);

   const toggle = (index: number) => {
      if (selected === index) {
         return setSelected(null);
      }

      setSelected(index);
   };

   return (
      <>
         <Helmet>
            <title>FAQ | Eirhub</title>
         </Helmet>
         <div className={styles.active}>
            <AlertsMessageBox time={5000} />

            <Navbar />
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
               <div className={styles.container}>
                  <div className={styles.wrapper}>
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
                                       <span className={styles.plusMinus}>
                                          {selected === index ? '-' : '+'}
                                       </span>
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
                  </div>
               </div>
            </main>

            <Footer />
         </div>
      </>
   );
};

export default FAQ;
