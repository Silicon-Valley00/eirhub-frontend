import React, { useState } from 'react';
import styles from './finddoctorprofile.module.css';
import { AiFillStar } from 'react-icons/ai';
import doctorProfileOne from '../../../assets/docProfileImage3.svg';
import { useNavigate } from 'react-router-dom';

function FindingDoctor(props) {
   const navigate = useNavigate();
   const [profile, setProfile] = useState({});
   // This transfers the setProfile function outside of this function's scope
   pullData = setProfile;
   console.log(profile);

   return (
      <>
         {Object.keys(profile).length === 0 ? (
            <div className={styles.profileBody}>
               <div className={styles.profileImage}>
                  <img src={profile.person_image} alt="doctor-profile" />
               </div>
               <div className={styles.profileDetails}>
                  <h3>{`Dr. ${profile.first_name} ${profile.middle_name} ${profile.last_name}`}</h3>
               </div>
               <div className={styles.profileInfo}>
                  <div className={styles.profileRatings}>
                     <h3>Ratings</h3>
                     <div className={styles.profileRatingsContent}>
                        {[...Array(profile.doctor_ratings)].map((e, i) => (
                           <span className="busterCards" key={i}>
                              <AiFillStar />
                           </span>
                        ))}

                        <p>{`${profile.doctor_ratings} out of 5`}</p>
                     </div>
                  </div>
                  <div className={styles.profileSpecialities}>
                     <h3>Specialities</h3>
                     {profile.doctor_specialties
                        .split(',')
                        .map((specilaity, i) => {
                           return <p key={i}>{specilaity}</p>;
                        })}
                  </div>
                  <div className={styles.profileHospital}>
                     <h3>Hospital</h3>
                     <p>{`${profile.location}`}</p>
                  </div>
               </div>
               <div className={styles.profileButton}>
                  <button onClick={() => navigate('/scheduling')}>
                     Request an Appointment
                  </button>
               </div>
            </div>
         ) : (
            <div className={styles.profileBody}>
               <div className={styles.profileImage}>
                  <img src={''} alt="doctor-profile" />
               </div>
               <div className={styles.profileDetails}>
                  <h3></h3>
               </div>
               <div className={styles.profileInfo}>
                  <div className={styles.profileRatings}>
                     <h3>Ratings</h3>
                     <div className={styles.profileRatingsContent}>
                        <p></p>
                     </div>
                  </div>
                  <div className={styles.profileSpecialities}>
                     <h3>Specialities</h3>
                  </div>
                  <div className={styles.profileHospital}>
                     <h3>Hospital</h3>
                     <p></p>
                  </div>
               </div>
               <div className={styles.profileButton}></div>
            </div>
         )}
      </>
   );
}
//This getter calls the pullData function once it has been set with a value
var pullData;
FindingDoctor.pullData = (profile) => {
   pullData(profile);
};
export default FindingDoctor;
