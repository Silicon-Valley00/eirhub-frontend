import React, { useEffect, useState } from 'react';
import styles from './finddoctor.module.css';
import doctorProfileTwo from '../../../assets/docProfileImage4.svg';
import doctorProfileThree from '../../../assets/docProfileImage1.svg';
import { FaTimes } from 'react-icons/fa';
import { fetchDoctors } from '../../../Store/Actions';

function FindingDoctor(props) {
   //handles state for all Doctor's fetched
   const [allDoctors, setAllDoctors] = useState([]);

   const [searchResults, setSearchResults] = useState([]); //handles state for Doctor's searched
   const [enteredName, setEnteredName] = useState(''); //handles state for Doctor's name to search
   const [specialty, setSpecialty] = useState(''); //handles state for Doctor's specialty to search
   const [hospital, setHospital] = useState(''); //handles state for Doctor's hospital to search

   const [useEffectCount, setUseEffectCount] = useState(0);
   const [useEffectCountHpt, setUseEffectCountHpt] = useState(0);

   useEffect(() => {
      async function fetchdata() {
         const items = await fetchDoctors();
         setAllDoctors(items);
         setSearchResults(items);
      }
      fetchdata();
   }, []);

   useEffect(() => {
      if (useEffectCount === 0) {
         setUseEffectCount(useEffectCount + 1);
         return;
      }

      handleDoctorSearch(enteredName);
   }, [specialty, hospital]);

   // useEffect(() => {
   //    console.log('called');
   //    if (useEffectCountHpt === 0) {
   //       setUseEffectCountHpt(useEffectCountHpt + 1);
   //       return;
   //    }
   //    handleDoctorSearch(enteredName);
   // }, [hospital]);

   // handles close of search for doctor's name
   function closeSearch() {
      setEnteredName('');
      handleDoctorSearch('');
   }

   function handleDoctorSearch(enteredName) {
      setSearchResults(allDoctors);

      let nameToSearch =
         enteredName !== '' ? enteredName.toLowerCase().trim() : '';
      let spt = specialty;
      let hpt = hospital;

      let results = allDoctors
         .filter((item) => {
            //filter by entered doctor's name
            if (nameToSearch === '') {
               return item;
            }
            return (
               `${item.first_name} ${item.middle_name} ${item.last_name}`
                  .toLowerCase()
                  .indexOf(nameToSearch) !== -1
            );
         })
         .filter((item) => {
            //filter by selected doctor's specialty
            if (spt === '') {
               return item;
            } else {
               if (
                  item.doctor_specialties === null ||
                  item.doctor_specialties === ''
               ) {
                  return;
               }
               var specialties = item.doctor_specialties
                  .toLowerCase()
                  .split(',');
               return specialties.includes(spt);
            }
         })
         .filter((item) => {
            //filter by selected doctor's hospital
            if (hpt === '') {
               return item;
            } else {
               if (item.hospital_name === null || item.hospital_name === '') {
                  return;
               }

               return item.hospital_name.toLowerCase().indexOf(hpt) !== -1;
            }
         });
      setSearchResults(results);
   }

   var list;

   if (searchResults !== undefined) {
      if (searchResults.length !== 0) {
         list = searchResults.map((item, j) => {
            return (
               <div
                  className={styles.doctorBox}
                  key={`${item.first_name} ${item.last_name}-${j}`}
               >
                  <div className={styles.doctorImage}>
                     <img src={item.person_image} alt="doctor-profile" />
                  </div>
                  <div className={styles.doctorInfo}>
                     <div className={styles.doctorName}>
                        <h3>{`Dr. ${item.first_name} ${item.last_name} `}</h3>
                     </div>
                     <div className={styles.doctorDetails}>
                        <p>{item.doctor_specialties}</p>
                     </div>
                     <div className={styles.doctorInfoLink}>
                        <p
                           onClick={() =>
                              props.pushData({
                                 date_of_birth: item.date_of_birth,
                                 id_doctor: item.id_doctor,
                                 doctor_ratings: item.doctor_ratings,
                                 doctor_specialties: item.doctor_specialties,
                                 first_name: item.first_name,
                                 gender: item.gender,
                                 hospital_code: item.hospital_code,
                                 hospital_name: item.hospital_name,
                                 house_address: item.house_address,
                                 last_name: item.last_name,
                                 license_number: item.license_number,
                                 middle_name: item.middle_name,
                                 person_image: item.person_image,
                                 user_email: item.user_email,
                              })
                           }
                        >
                           View Profile
                        </p>
                     </div>
                  </div>
               </div>
            );
         });
      } else {
         <p className={styles.emptyMessage}>No doctors found.</p>;
      }
   } else {
      <p className={styles.emptyMessage}>No doctors found.</p>;
   }

   return (
      <>
         <div id={styles.findDoctorBody}>
            <div className={styles.title}>
               <h1>Find a Doctor, Book an Appointment</h1>
            </div>
            <div className={styles.formRegion}>
               <form onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.searchRegion}>
                     <div>
                        <input
                           type={'text'}
                           placeholder="Type to search"
                           name="searchbox"
                           value={enteredName}
                           onChange={(event) =>
                              setEnteredName(event.target.value)
                           }
                        />
                        <span>
                           {enteredName.trim().length !== 0 && (
                              <i>
                                 <FaTimes onClick={() => closeSearch()} />
                              </i>
                           )}
                        </span>
                     </div>
                     <button
                        onClick={() => {
                           handleDoctorSearch(enteredName);
                        }}
                     >
                        Search
                     </button>
                  </div>
                  <p>Filter by: </p>
                  <div className={styles.filterRegion}>
                     <div className={styles.selectOne}>
                        <select
                           placeholder="Speciality"
                           onChange={(event) => {
                              setSpecialty(event.target.value);
                           }}
                        >
                           <option key={''} value={''}>
                              Speciality
                           </option>
                           <option key={'ct scan'} value={'ct scan'}>
                              CT Scan
                           </option>
                           <option key={'dentistry'} value={'dentistry'}>
                              {' '}
                              Dentistry
                           </option>
                           <option key={'dermatology'} value={'dermatology'}>
                              Dermatology
                           </option>
                           <option
                              key={'endocrinology'}
                              value={'endocrinology'}
                           >
                              Endocrinology
                           </option>
                           <option
                              key={'emergency medicine'}
                              value={'emergency medicine'}
                           >
                              Emergency medicine
                           </option>
                           <option
                              key={'general surgery'}
                              value={'general surgery'}
                           >
                              General surgery
                           </option>
                           <option key={'laboratory'} value={'laboratory'}>
                              Laboratory
                           </option>
                           <option key={'nephrology'} value={'nephrology'}>
                              Nephrology
                           </option>
                           <option key={'gynaecology'} value={'gynaecology'}>
                              Gynaecology
                           </option>
                           <option key={'obstetrics'} value={'obstetrics'}>
                              Obstetrics
                           </option>
                           <option key={'orthopaedic'} value={'orthopaedic'}>
                              Orthopaedic
                           </option>
                           <option key={'oncology'} value={'oncology'}>
                              Oncology
                           </option>
                           <option key={'pediatrics'} value={'pediatrics'}>
                              Pediatrics
                           </option>
                           <option
                              key={'physician specialist'}
                              value={'physician specialist'}
                           >
                              Physician specialist
                           </option>
                           <option
                              key={'physiotherapy'}
                              value={'physiotherapy'}
                           >
                              Physiotherapy
                           </option>
                           <option key={'x-ray'} value={'x-ray'}>
                              X-Ray
                           </option>
                        </select>
                     </div>
                     <div className={styles.selectTwo}>
                        <select
                           placeholder="Hospital"
                           onChange={(event) => {
                              setHospital(event.target.value);
                           }}
                        >
                           <option value={''}>Hospital</option>
                           <option value={'komfo anokye teaching hospital'}>
                              Komfo Anokye Teaching Hospital
                           </option>
                           <option value={'knust university hospital'}>
                              KNUST University Hospital
                           </option>
                           <option value={'ridge medical center'}>
                              Ridge Medical Center
                           </option>
                           <option value={'north legon hospital'}>
                              North Legon Hospital
                           </option>
                           <option value={'neptune medical hospital'}>
                              Neptune Medical Center
                           </option>
                           <option value={'gbawe sda hospital'}>
                              Gbawe SDA Hospital
                           </option>
                        </select>
                     </div>
                  </div>
               </form>
            </div>
            <div className={styles.doctorsBox}>
               {list}
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
