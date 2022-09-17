import React from 'react';
import landingpageImage from '../../../assets/landingpage design.png';
import heroStyles from './hero.module.css';
import Typewriter from 'typewriter-effect';

const Hero = (props) => {
   return (
      <section id={heroStyles.hero_body}>
         <div id={heroStyles.overlay}></div>
         <div className={heroStyles.hero_container}>
            <div className={heroStyles.hero_content}>
               <div className={heroStyles.content_title}>
                  <h1 className={heroStyles.content__title}>
                     Let's Help Connect You With The Best Doctors
                  </h1>
               </div>
               <div className={heroStyles.content_info}>
                  <p className={heroStyles.content__info}>
                     <Typewriter
                        options={{ loop: false, delay: 20 }}
                        onInit={(typewriter) => {
                           typewriter
                              .pauseFor(500)
                              .typeString('EirHub helps patients')
                              .pauseFor(300)
                              .deleteChars(8)
                              .typeString(
                                 ' <Strong>patients</Strong> get quick access to experienced practitioners and helps increase the visibility of these practitioners'
                              )
                              .deleteChars(14)
                              .typeString(' <Strong>practitioners</Strong>')
                              .start();
                        }}
                     />
                  </p>
               </div>

               <div className={heroStyles.content_button}>
                  <button
                     className={heroStyles.content__button}
                     onClick={() => props.handleModalSignup()}
                  >
                     Book an appointment
                  </button>
               </div>
            </div>
            <div className={heroStyles.hero_image}>
               <img
                  src={landingpageImage}
                  alt="Hero"
                  className={heroStyles.hero__image}
               />
            </div>
         </div>
      </section>
   );
};

export default Hero;
