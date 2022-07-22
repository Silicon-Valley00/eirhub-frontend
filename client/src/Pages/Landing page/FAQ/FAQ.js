import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './faq.module.css';
import { data } from './FAQ_data';
import { useState } from 'react';

const FAQ = () => {
   const [selected, setSelected] = useState(null);

   const toggle = (index) => {
      if (selected === index) {
         return setSelected(null);
      }

      setSelected(index);
   };
   return (
      <>
         <Navbar />
         <main className={styles.main}>
            <div className={styles.upper_part}>
               <div className={styles.title}>FAQ</div>
               <div>
                  <p className={styles.p_text}>
                     Eirhub is designed to help you get the care you need when
                     you need it, in just a couple of clicks
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
      </>
   );
};

export default FAQ;
