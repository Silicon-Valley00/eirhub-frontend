import React from 'react';
import styles from './services.module.css';
import docOne from '../../../assets/docProfileImage3.svg';
import docTwo from '../../../assets/docProfileImage4.svg';
import docThree from '../../../assets/docProfileImage1.svg';
import Cards from './Cards';

const details = [
   {
      name: 'Dr. Jaine Hauffmann',
      profession: 'Restorative Dentist',
      profile_pic: docOne,
   },
   {
      name: 'Dr. Steven Strange',
      profession: 'Cardiac Surgeon',
      profile_pic: docTwo,
   },
   {
      name: 'Dr. Diane Elinam',
      profession: 'Gynaecologist',
      profile_pic: docThree,
   },
];

const Services = (props) => {
   return (
      <section id={styles.services_body}>
         <div className={styles.services_container} data-aos={'slide up'}>
            <div className={styles.services_title}>Meet Our Providers</div>

            {/* display cards with of doctors */}
            <div className={styles.services_doctors_box}>
               {React.Children.toArray(
                  details.map((detail) => {
                     return (
                        <>
                           <Cards detail={detail} />
                        </>
                     );
                  })
               )}
            </div>

            {/* Button beneath the cards */}
            <div
               className={styles.services_button}
               onClick={() => props.handleModalSignup()}
            >
               <input
                  value={'Find A Doctor'}
                  type={'submit'}
                  className={styles.services_button_input}
               />
            </div>

            {/* Box that displays and ad and book an appointment */}
            <div className={styles.services_message}>
               <div className={styles.services_message_box}>
                  <div className={styles.services_message_info}>
                     <h4 className={styles.services_ad}>
                        Don't Delay Care For You and those You Love.
                     </h4>
                     {/* A button that is used to book an appointment.  */}
                     <button
                        className={styles.message_btn}
                        onClick={() => props.handleModalSignup()}
                     >
                        Book an Appointment
                     </button>
                     <div className={styles.circle_1}></div>
                  </div>
                  <div className={styles.circle_2}></div>
                  <div className={styles.square}>
                     <div className={styles.square_2}></div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
