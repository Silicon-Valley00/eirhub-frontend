import React, { useEffect, useState } from 'react';
import styles from './finddoctor.module.css';
import { FaTimes } from 'react-icons/fa';
import { fetchDoctors } from '../../../Store/Actions';
import { Helmet } from 'react-helmet';

function FindingDoctor(props) {
   //handles state for all Doctor's fetched
   const [allDoctors, setAllDoctors] = useState([]);
   const [allHospitals, setAllHospitals] = useState([]);
   const [allSpecialties, setAllSpecialties] = useState([]);

   const [searchResults, setSearchResults] = useState([]); //handles state for Doctor's searched
   const [enteredName, setEnteredName] = useState(''); //handles state for Doctor's name to search
   const [specialty, setSpecialty] = useState(''); //handles state for Doctor's specialty to search
   const [hospital, setHospital] = useState(''); //handles state for Doctor's hospital to search

   const [useEffectCount, setUseEffectCount] = useState(0);

   useEffect(() => {
      async function fetchdata() {
         const items = await fetchDoctors();
         setAllDoctors(items.doctors);
         setSearchResults(items.doctors);
         setAllHospitals(items.hospitals);
         setAllSpecialties(items.specialities);
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

      if (allDoctors.length === 0 || allDoctors === undefined) {
         return;
      } else {
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
                  var specialties = item.doctor_specialties.toLowerCase();
                  return specialties.includes(spt);
               }
            })
            .filter((item) => {
               //filter by selected doctor's hospital
               if (hpt === '') {
                  return item;
               } else {
                  if (
                     item.hospital_name === null ||
                     item.hospital_name === ''
                  ) {
                     return;
                  }

                  return item.hospital_name.toLowerCase().indexOf(hpt) !== -1;
               }
            });
         setSearchResults(results);
      }
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
                     <img
                        className={styles.image}
                        src={item.person_image}
                        alt="doctor-profile"
                     />
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
      }
   }

   return (
      <>
         <Helmet>
            <title>Find A Doctor | Eirhub</title>
            <meta name="description" content="Find a doctor of you choice" />
         </Helmet>
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
                           {allSpecialties.length !== 0 ||
                           allSpecialties === undefined ? (
                              allSpecialties.map((item, j) => {
                                 return (
                                    <option
                                       key={`${item}-${j}`}
                                       value={item.toLowerCase()}
                                    >
                                       {item}
                                    </option>
                                 );
                              })
                           ) : (
                              <option></option>
                           )}
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
                           {allHospitals.length !== 0 ||
                           allHospitals === undefined ? (
                              allHospitals.map((item, j) => {
                                 return (
                                    <option
                                       key={`${item}-${j}`}
                                       value={item.toLowerCase()}
                                    >
                                       {item}
                                    </option>
                                 );
                              })
                           ) : (
                              <option></option>
                           )}
                        </select>
                     </div>
                  </div>
               </form>
            </div>

            {searchResults.length !== 0 || searchResults === undefined ? (
               <div className={styles.doctorsBox}>{list}</div>
            ) : (
               <div className={styles.emptyMessage}>
                  <p>No results found.</p>
               </div>
            )}
         </div>
      </>
   );
}
export default FindingDoctor;
