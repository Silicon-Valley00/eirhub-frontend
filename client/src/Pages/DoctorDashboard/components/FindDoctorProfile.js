import React, { useState } from 'react';
import styles from './finddoctorprofile.module.css';
import doctorProfileOne from '../../../assets/docProfileImage3.svg';

function FindingDoctor(props) {
   const [profile, setProfile] = useState('default');
   // This transfers the setProfile function outside of this function's scope
   pullData = setProfile;

   return (
      <>
         <div className={styles.profileBody}>
            <div className={styles.profileImage}>
               <img src={doctorProfileOne} alt="doctor-profile" />
            </div>
            <div className={styles.profileDetails}>
               <h3>Gucci Delix, Pharm D</h3>
               <p>Clinical Pharmacist</p>
            </div>
            <div className={styles.profileInfo}>
               <div className={styles.profileRatings}>
                  <h3>Ratings</h3>
                  <p>3 out of 5</p>
               </div>
               <div className={styles.profileSpecialities}>
                  <h3>Specialities</h3>
                  <p>Clinical Pharmacy</p>
                  <p>Hermatology</p>
                  <p>Oncology</p>
               </div>
               <div className={styles.profileHospital}>
                  <h3>Hospital</h3>
                  <p>Ridge Hospital</p>
               </div>
            </div>
            <div className={styles.profileButton}>
               <button>Request an Appointment</button>
            </div>
         </div>
      </>
   );
}
//This getter calls the pullData function once it has been set with a value
var pullData;
FindingDoctor.pullData = (profile) => {
   pullData(profile);
};
export default FindingDoctor;
