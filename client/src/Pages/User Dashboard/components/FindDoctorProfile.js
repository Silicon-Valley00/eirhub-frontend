import React, { useEffect, useState } from 'react';
import styles from './finddoctorprofile.module.css';
import { AiFillStar } from 'react-icons/ai';
import doctorProfileOne from '../../../assets/docProfileImage3.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDoctorForAppointment } from '../../../Store/Actions';

function FindingDoctor(props) {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [profile, setProfile] = useState({});
   const [showProfile, setShowprofile] = useState(false);
   // This transfers the setProfile function outside of this function's scope
   pullData = setProfile;

   useEffect(() => {
      if (Object.keys(profile).length === 0) {
         //checks if any doctor profile is available for display
         setShowprofile(false);
      } else {
         setShowprofile(true);
      }
   }, [profile]);

   function submitDoctorProfile() {
      dispatch(setDoctorForAppointment(profile));
      navigate('/scheduling');
      console.log('Submitted doctor profile');
   }
   return (
      <>
         {showProfile === true ? (
            <div className={styles.profileBody}>
               <div className={styles.profileImage}>
                  <img
                     className={styles.image}
                     src={profile.person_image}
                     alt="doctor-profile"
                  />
               </div>
               <div className={styles.profileDetails}>
                  <h3>{`Dr. ${
                     profile.first_name === null ? '' : profile.first_name
                  } ${
                     profile.middle_name === null ? '' : profile.middle_name
                  } ${
                     profile.last_name === null ? '' : profile.last_name
                  }`}</h3>
               </div>
               <div className={styles.profileInfo}>
                  <div className={styles.profileSpecialities}>
                     <h3>Specialities</h3>
                     {profile.doctor_specialties === null
                        ? ''
                        : profile.doctor_specialties
                             .split(',')
                             .map((specilaity, i) => {
                                return <p key={i}>{specilaity}</p>;
                             })}
                  </div>
                  <div className={styles.profileHospital}>
                     <h3>Hospital</h3>
                     <p>{`${
                        profile.hospital_name === null
                           ? ''
                           : profile.hospital_name
                     }`}</p>
                  </div>
               </div>
               <div className={styles.profileButton}>
                  <button onClick={() => submitDoctorProfile()}>
                     Request an Appointment
                  </button>
               </div>
            </div>
         ) : (
            <div className={styles.profileBody}>
               {/* <div className={styles.profileImage}>
                  <img src={doctorProfileOne} alt="doctor-profile" />
               </div>
               <div className={styles.profileDetails}>
                  <h3></h3>
               </div> */}
               {/* <div className={styles.profileInfo}>
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
               </div> */}
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
