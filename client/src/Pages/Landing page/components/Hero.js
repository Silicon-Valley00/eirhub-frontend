import React from 'react';
import landingpageImage from '../../../assets/landingpage design.png';
import heroStyles from './hero.module.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const Hero = () => {
   return (
      <section id={heroStyles.hero_body}>
         <div id={heroStyles.overlay}></div>
         <div className={heroStyles.hero_container}>
            <div className={heroStyles.hero_content}>
               <div className={heroStyles.content_title}>
                  <h1>Let's Help Connect You With The Best Doctors</h1>
               </div>
               <div className={heroStyles.content_info}>
                  <p>
                     EirHub helps patients get quick access to experienced
                     practitioners and helps increase the visibility of these
                     practitioners.
                  </p>
               </div>

               <div className={heroStyles.content_button}>
                  <button>Book an appointment</button>
               </div>
            </div>

            <div className={heroStyles.hero_image}>
               <img src={landingpageImage} alt="Hero" />
            </div>
         </div>
      </section>
   );
};

export default Hero;
