import React from 'react';
import styles from './finddoctor.module.css';
import doctorProfileOne from '../../../assets/docProfileImage3.svg';
import doctorProfileTwo from '../../../assets/docProfileImage4.svg';
import doctorProfileThree from '../../../assets/docProfileImage1.svg';

function FindingDoctor(props) {
   return (
      <>
         <div id={styles.findDoctorBody}>
            <div className={styles.title}>
               <h1>Find a Doctor, Book an Appointment</h1>
            </div>
            <div className={styles.formRegion}>
               <form>
                  <div className={styles.searchRegion}>
                     <input
                        type={'text'}
                        placeholder="Type to search"
                        name="searchbox"
                     />
                     <button>Search</button>
                  </div>
                  <p>Filter by: </p>
                  <div className={styles.filterRegion}>
                     <div className={styles.selectOne}>
                        <select placeholder="Speciality">
                           <option>One</option>
                           <option>Two</option>
                           <option>Three</option>
                        </select>
                     </div>
                     <div className={styles.selectTwo}>
                        <select placeholder="Hospital">
                           <option>One</option>
                           <option>Two</option>
                           <option>Three</option>
                        </select>
                     </div>
                  </div>
               </form>
            </div>
            <div className={styles.doctorsBox}>
               <div className={styles.doctorBox}>
                  <div className={styles.doctorImage}>
                     <img src={doctorProfileOne} alt="doctor-profile" />
                  </div>
                  <div className={styles.doctorInfo}>
                     <div className={styles.doctorName}>
                        <h3>Gucci Delix, Pharm D</h3>
                     </div>
                     <div className={styles.doctorDetails}>
                        <p>
                           Clinical Pharmacy Specialist, Hermatology/Oncology
                           Assistant Professor, Pharmacy Hermatology
                        </p>
                     </div>
                     <div className={styles.doctorInfoLink}>
                        <p onClick={() => props.pushData('first')}>
                           View Profile
                        </p>
                     </div>
                  </div>
               </div>
               <div className={styles.doctorBox}>
                  <div className={styles.doctorImage}>
                     <img src={doctorProfileThree} alt="doctor-profile" />
                  </div>
                  <div className={styles.doctorInfo}>
                     <div className={styles.doctorName}>
                        <h3>Gucci Delix, Pharm D</h3>
                     </div>
                     <div className={styles.doctorDetails}>
                        <p>
                           Clinical Pharmacy Specialist, Hermatology/Oncology
                           Assistant Professor, Pharmacy Hermatology
                        </p>
                     </div>
                     <div className={styles.doctorInfoLink}>
                        <p onClick={() => props.pushData('second')}>
                           View Profile
                        </p>
                     </div>
                  </div>
               </div>
               <div className={styles.doctorBox}>
                  <div className={styles.doctorImage}>
                     <img src={doctorProfileOne} alt="doctor-profile" />
                  </div>
                  <div className={styles.doctorInfo}>
                     <div className={styles.doctorName}>
                        <h3>Gucci Delix, Pharm D</h3>
                     </div>
                     <div className={styles.doctorDetails}>
                        <p>
                           Clinical Pharmacy Specialist, Hermatology/Oncology
                           Assistant Professor, Pharmacy Hermatology
                        </p>
                     </div>
                     <div className={styles.doctorInfoLink}>
                        <p>View Profile</p>
                     </div>
                  </div>
               </div>
               <div className={styles.doctorBox}>
                  <div className={styles.doctorImage}>
                     <img src={doctorProfileTwo} alt="doctor-profile" />
                  </div>
                  <div className={styles.doctorInfo}>
                     <div className={styles.doctorName}>
                        <h3>Gucci Delix, Pharm D</h3>
                     </div>
                     <div className={styles.doctorDetails}>
                        <p>
                           Clinical Pharmacy Specialist, Hermatology/Oncology
                           Assistant Professor, Pharmacy Hermatology
                        </p>
                     </div>
                     <div className={styles.doctorInfoLink}>
                        <p>View Profile</p>
                     </div>
                  </div>
               </div>
               <div className={styles.doctorBox}>
                  <div className={styles.doctorImage}>
                     <img src={doctorProfileThree} alt="doctor-profile" />
                  </div>
                  <div className={styles.doctorInfo}>
                     <div className={styles.doctorName}>
                        <h3>Gucci Delix, Pharm D</h3>
                     </div>
                     <div className={styles.doctorDetails}>
                        <p>
                           Clinical Pharmacy Specialist, Hermatology/Oncology
                           Assistant Professor, Pharmacy Hermatology
                        </p>
                     </div>
                     <div className={styles.doctorInfoLink}>
                        <p>View Profile</p>
                     </div>
                  </div>
               </div>
               <div className={styles.doctorBox}>
                  <div className={styles.doctorImage}>
                     <img src={doctorProfileTwo} alt="doctor-profile" />
                  </div>
                  <div className={styles.doctorInfo}>
                     <div className={styles.doctorName}>
                        <h3>Gucci Delix, Pharm D</h3>
                     </div>
                     <div className={styles.doctorDetails}>
                        <p>
                           Clinical Pharmacy Specialist, Hermatology/Oncology
                           Assistant Professor, Pharmacy Hermatology
                        </p>
                     </div>
                     <div className={styles.doctorInfoLink}>
                        <p>View Profile</p>
                     </div>
                  </div>
               </div>
               <div className={styles.doctorBox}>
                  <div className={styles.doctorImage}>
                     <img src={doctorProfileOne} alt="doctor-profile" />
                  </div>
                  <div className={styles.doctorInfo}>
                     <div className={styles.doctorName}>
                        <h3>Gucci Delix, Pharm D</h3>
                     </div>
                     <div className={styles.doctorDetails}>
                        <p>
                           Clinical Pharmacy Specialist, Hermatology/Oncology
                           Assistant Professor, Pharmacy Hermatology
                        </p>
                     </div>
                     <div className={styles.doctorInfoLink}>
                        <p>View Profile</p>
                     </div>
                  </div>
               </div>
               <div className={styles.doctorBox}>
                  <div className={styles.doctorImage}>
                     <img src={doctorProfileTwo} alt="doctor-profile" />
                  </div>
                  <div className={styles.doctorInfo}>
                     <div className={styles.doctorName}>
                        <h3>Gucci Delix, Pharm D</h3>
                     </div>
                     <div className={styles.doctorDetails}>
                        <p>
                           Clinical Pharmacy Specialist, Hermatology/Oncology
                           Assistant Professor, Pharmacy Hermatology
                        </p>
                     </div>
                     <div className={styles.doctorInfoLink}>
                        <p>View Profile</p>
                     </div>
                  </div>
               </div>

               <div className={styles.doctorBox}>
                  <div className={styles.doctorImage}>
                     <img src={doctorProfileThree} alt="doctor-profile" />
                  </div>
                  <div className={styles.doctorInfo}>
                     <div className={styles.doctorName}>
                        <h3>Gucci Delix, Pharm D</h3>
                     </div>
                     <div className={styles.doctorDetails}>
                        <p>
                           Clinical Pharmacy Specialist, Hermatology/Oncology
                           Assistant Professor, Pharmacy Hermatology
                        </p>
                     </div>
                     <div className={styles.doctorInfoLink}>
                        <p>View Profile</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
export default FindingDoctor;
