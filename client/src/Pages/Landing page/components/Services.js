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
            <div className={Styles.services_title}>
               {/* <AnimationOnScroll animateIn="animate__fadeInUp"> */}
               <h2>Meet Our Parteners</h2>
               {/* </AnimationOnScroll> */}
            </div>
            {/* <AnimationOnScroll animateIn="animate__fadeInUp"> */}
            <div className={Styles.services__doctors__box}>
               {React.Children.toArray(
                  details.map((detail) => {
                     return (
                        <div className={Styles.card}>
                           <div className={Styles.img}>
                              <img src={detail.profile_pic} alt="Doctor" />
                           </div>
                           <div className={Styles.services_doctor_info}>
                              <h4>{detail.name}</h4>
                              <p>{detail.profession}</p>
                           </div>
                        </div>
                     );
                  })
               )}
            </div>
            {/* </AnimationOnScroll> */}

            <div className={Styles.services_button}>
               <input value={'Find A Doctor'} type={'submit'} />
            </div>

            <div className={Styles.services_message}>
               <div className={Styles.services_message_box}>
                  <div className={Styles.services_message_info}>
                     <h4>Dont Delay Care For You and those You Love. </h4>
                  </div>

                  <div className={Styles.services_message_button}>
                     <input value={'Book an Appointment'} type={'submit'} />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
