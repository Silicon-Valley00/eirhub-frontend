import React from 'react';
import landingpageImage from '../../../assets/landingpage design.png';
import './hero.css';

const Hero = () => {
   return (
      <section id="hero-body">
         <div className="hero-container">
            <div className="hero-content">
               <div className="content-title">
                  <h1>Lets Help Connect You With The Best Doctors</h1>
               </div>
               <div className="content-info">
                  <p>
                     EirHub helps patients get quick access to experienced
                     practitioners and helps increase the visibility of these
                     practitioners.
                  </p>
               </div>
               <div className="content-button">
                  <input value={'Book an Appointment'} type={'submit'} />
               </div>
            </div>
            <div className="hero-image">
               <img src={landingpageImage} alt="Hero" />
            </div>
         </div>
      </section>
   );
};

export default Hero;
