import React from 'react';
import Styles from './services.module.css';
import docOne from '../../../assets/docProfileImage3.svg';
import docTwo from '../../../assets/docProfileImage4.svg';
import docThree from '../../../assets/docProfileImage1.svg';

const details = [
   {
      name: 'Dr. Jaine Huaffmann',
      profession: 'Restorative Dentist',
      profile_pic: docOne,
   },
   {
      name: 'Dr. Micheal Asempa',
      profession: 'Cardiac Surgeon',
      profile_pic: docTwo,
   },
   {
      name: 'Dr. Diane Elinam',
      profession: 'Gynaecologist',
      profile_pic: docThree,
   },
];

const Services = () => {
   return (
      <section id={Styles.services_body}>
         <div className={Styles.services_container} data-aos={'slide up'}>
            <div className={Styles.services_title}>Meet Our Partgit ners</div>

            <div className={Styles.services_doctors_box}>
               {React.Children.toArray(
                  details.map((detail) => {
                     return (
                        <div className={Styles.card}>
                           <div className={Styles.img}>
                              <img src={detail.profile_pic} alt="Doctor" />
                           </div>
                           <div className={Styles.services_doctor_info}>
                              <h4 className={Styles.services_doctor_info_h4}>
                                 {detail.name}
                              </h4>
                              <p className={Styles.services_doctor_info_p}>
                                 {detail.profession}
                              </p>
                           </div>
                        </div>
                     );
                  })
               )}
            </div>

            <div className={Styles.services_button}>
               <input
                  value={'Find A Doctor'}
                  type={'submit'}
                  className={Styles.services_button_input}
               />
            </div>

            {/* Box that displays and ad and book an appointment */}
            <div className={Styles.services_message}>
               <div className={Styles.services_message_box}>
                  <div className={Styles.services_message_info}>
                     <h4 className={Styles.services_ad}>
                        Don't Delay Care For You and those You Love.{' '}
                     </h4>
                     <button className={Styles.message_btn}>
                        Book an Appointment
                     </button>
                     <div className={Styles.circle_1}></div>
                  </div>
                  <div className={Styles.circle_2}></div>
                  <div className={Styles.square}>
                     <div className={Styles.square_2}></div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
