import React from 'react';
import './services.css';
import docProfileImageOne from '../../../assets/doc profile 1.png';
import docProfileImageTwo from '../../../assets/doctor profile 2.png';

const Services = () => {
   return (
      <section id="services-body">
         <div className="services-container">
            <div className="services-title">
               <h2>Meet Our Doctors</h2>
            </div>
            <div className="services-doctors-box">
               <div className="services-doctor-box">
                  <div className="services-doctor-image">
                     <img src={docProfileImageOne} alt="Doctor's-image" />
                  </div>
                  <div className="services-doctor-info">
                     <h4>Dr. Jaine Huaffmann</h4>
                     <p>Restorative Dentist</p>
                  </div>
               </div>
               <div className="services-doctor-box">
                  <div className="services-doctor-image">
                     <img src={docProfileImageTwo} alt="Doctor's-image" />
                  </div>
                  <div className="services-doctor-info">
                     <h4>Dr. Micheal Asempa</h4>
                     <p>Cardiac Surgeon</p>
                  </div>
               </div>
               <div className="services-doctor-box">
                  <div className="services-doctor-image">
                     <img src={docProfileImageOne} alt="Doctor's-image" />
                  </div>
                  <div className="services-doctor-info">
                     <h4>Dr. Diane Elinam</h4>
                     <p>Gynaecologist</p>
                  </div>
               </div>
            </div>
            <div className="services-button">
               <input value={'Find A Doctor'} type={'submit'} />
            </div>
            <div className="services-message">
               <div className="services-message-box">
                  <div className="services-message-info">
                     <h4>Dont Delay Care For You and those You Love. </h4>
                  </div>
                  <div className="services-message-button">
                     <input value={'Book an Appointment'} type={'submit'} />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
