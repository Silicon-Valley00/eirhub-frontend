import React, { useEffect, useState } from 'react';
import styles from './finddoctor.module.css';
import doctorProfileOne from '../../../assets/docProfileImage3.svg';
import doctorProfileTwo from '../../../assets/docProfileImage4.svg';
import doctorProfileThree from '../../../assets/docProfileImage1.svg';
import { FaTimes } from 'react-icons/fa';
import { fetchDoctors } from '../../../Store/Actions';

function FindingDoctor(props) {
   const [allDoctors, setAllDoctors] = useState([]);
   const [enteredName, setEnteredName] = useState(''); //handles state for Doctor's name to search
   const [isSearchByDoctorName, isSearchByDoctorNameHandler] = useState(false); //sets whether search for doctors is done by name
   const [isSearchByDoctorSpt, isSearchByDoctorSptHandler] = useState(false); //sets whether search is done by specialty for doctors
   const [isSearchByDoctorHpt, isSearchByDoctorHptHandler] = useState(false); //sets whether search is done by hospital for doctors

   const [nameSearchResults, setNameSearchResults] = useState([]); //arrays stores doctors filtered by entered name
   const [sptSearchResults, setSptSearchResults] = useState([]); //arrays stores doctors filtered by entered specialty
   const [hptSearchResults, setHptSearchResults] = useState([]); //arrays stores doctors filtered by entered specialty

   const [isSearchOn, setIsSearchOn] = useState();
   const [searchResults, setSearchResults] = useState([]);
   const [specialty, setSpecialty] = useState('');

   useEffect(() => {
      async function fetchdata() {
         const items = await fetchDoctors();
         setAllDoctors(items);
         setSearchResults(items);
      }
      fetchdata();
   }, []);

   useEffect(() => {
      handleDoctorSearchBySpecialty();
   }, [specialty]);
   // console.log(allDoctors);

   function closeSearch() {
      setEnteredName('');
      console.log(allDoctors);
      var reset = [...allDoctors];
      setSearchResults(reset);

      console.log('chg 1', searchResults);
      if (isSearchByDoctorSpt === true) {
         handleDoctorSearchBySpecialty();
      }
      isSearchByDoctorNameHandler(false);
   }

   function handleDoctorSearchByName() {
      if (enteredName === '') {
         closeSearch();
         return;
      }
      var filteredDoctors = [];
      var nameToSearch = enteredName.toLowerCase();
      console.log('nam 1', searchResults);

      searchResults.forEach(function (item) {
         var name = `${item.first_name} ${item.middle_name} ${item.last_name}`;
         //puts all doctor profiles same with entered name into an array
         if (name.toLowerCase().indexOf(nameToSearch) !== -1) {
            filteredDoctors.push(item);
         }
      });
      setSearchResults(filteredDoctors);
      isSearchByDoctorNameHandler(true);
   }

   function handleDoctorSearchBySpecialty() {
      if (specialty === '') {
         console.log('fired');
         setSearchResults((oldArray) => [...allDoctors]);
         console.log('chg 1', searchResults);

         if (isSearchByDoctorName === true) {
            handleDoctorSearchByName();
         }
         isSearchByDoctorSptHandler(false);

         return;
      }
      var filteredDoctorsTwo = [];
      let spt = specialty.toLowerCase();
      console.log('fired', spt);
      console.log('spe 1', searchResults);

      searchResults.forEach(function (item) {
         // if (
         //    item.doctor_specialties === null ||
         //    item.doctor_specialties === ''
         // )
         //    return;
         var specialties = item.doctor_specialties.toLowerCase().split(',');
         //puts all doctor profiles thta has the entered name into an array
         if (specialties.includes(spt)) {
            filteredDoctorsTwo.push(item);
         }
      });
      setSearchResults(filteredDoctorsTwo);
      isSearchByDoctorSptHandler(true);
   }

   var list;
   if (isSearchByDoctorName === true || isSearchByDoctorSpt === true) {
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
                              doctor_id: item.doctor_id,
                              doctor_ratings: item.doctor_ratings,
                              doctor_specialties: item.doctor_specialties,
                              first_name: item.first_name,
                              gender: item.gender,
                              hospital_code: item.hospital_code,
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
      if (allDoctors !== undefined) {
         if (allDoctors.length !== 0) {
            list = allDoctors.map((item, j) => {
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
                                    doctor_id: item.doctor_id,
                                    doctor_ratings: item.doctor_ratings,
                                    doctor_specialties: item.doctor_specialties,
                                    first_name: item.first_name,
                                    gender: item.gender,
                                    hospital_code: item.hospital_code,
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
         } else if (allDoctors.length === 0) {
            <p className={styles.emptyMessage}>No doctors found.</p>;
         }
      } else {
         <p className={styles.emptyMessage}>No doctors found.</p>;
      }
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
                           {isSearchByDoctorName && (
                              <i>
                                 <FaTimes onClick={() => closeSearch()} />
                              </i>
                           )}
                        </span>
                     </div>
                     <button
                        onClick={() => {
                           handleDoctorSearchByName();
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
                              // handleDoctorSearchBySpecialty();
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
                           <option key={'pediatics'} value={'pediatics'}>
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
                        <select placeholder="Hospital">
                           <option value={''}>Hospital</option>
                           <option value={'komfo anokye teaching hospital'}>
                              Komfo Anokye Teaching Hospital
                           </option>
                           <option value={'knust university hospital'}>
                              KNUST University Hospital
                           </option>
                           <option value={'ridge medical center'}>
                              Ridge Medical center
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

// import React, { useEffect, useState } from 'react';
// import styles from './finddoctor.module.css';
// import doctorProfileOne from '../../../assets/docProfileImage3.svg';
// import doctorProfileTwo from '../../../assets/docProfileImage4.svg';
// import doctorProfileThree from '../../../assets/docProfileImage1.svg';
// import { FaTimes } from 'react-icons/fa';
// import { fetchDoctors } from '../../../Store/Actions';

// function FindingDoctor(props) {
//    const [allDoctors, setAllDoctors] = useState([]);
//    const [enteredName, setEnteredName] = useState(''); //handles state for Doctor's name to search
//    const [isSearchByDoctorName, isSearchByDoctorNameHandler] = useState(false); //sets whether search for doctors is done by name
//    const [isSearchByDoctorSpt, isSearchByDoctorSptHandler] = useState(false); //sets whether search is done by specialty for doctors
//    const [isSearchByDoctorHpt, isSearchByDoctorHptHandler] = useState(false); //sets whether search is done by hospital for doctors

//    const [nameSearchResults, setNameSearchResults] = useState([]); //arrays stores doctors filtered by entered name
//    const [sptSearchResults, setSptSearchResults] = useState([]); //arrays stores doctors filtered by entered specialty
//    const [hptSearchResults, setHptSearchResults] = useState([]); //arrays stores doctors filtered by entered specialty

//    useEffect(() => {
//       async function fetchdata() {
//          const items = await fetchDoctors();
//          setAllDoctors(items);
//       }
//       fetchdata();
//    }, []);
//    // console.log(allDoctors);

//    function closeSearch() {
//       /*
//          Function handles close of Doctor search
//          Args: None
//          Return: None
//       */
//       setEnteredName('');
//       isSearchByDoctorNameHandler(false);
//       setNameSearchResults([]);
//    }

//    function handleDoctorSearch() {
//       /*
//          Function handles search of doctor(s) marching entered name
//          Args: None
//          Return: List of doctor profile(s) marched with entered name
//       */
//       isSearchByDoctorNameHandler(true);
//       if (isSearchByDoctorHpt === true && isSearchByDoctorSpt === false) {
//          //makes search with filtered doctors by hospital
//          setNameSearchResults([]);
//          var filterItems = enteredName.toLowerCase();
//          hptSearchResults.forEach(function (item) {
//             var name = `${item.first_name} ${item.middle_name} ${item.last_name}`;
//             //puts all doctor profiles same with entered name into an array
//             if (name.toLowerCase().indexOf(filterItems) !== -1) {
//                setNameSearchResults((oldArray) => [...oldArray, item]);
//             }
//          });
//       } else if (
//          isSearchByDoctorHpt === false &&
//          isSearchByDoctorSpt === true
//       ) {
//          //makes search with filtered doctors by hospital
//          setNameSearchResults([]);
//          var filterItems = enteredName.toLowerCase();
//          sptSearchResults.forEach(function (item) {
//             var name = `${item.first_name} ${item.middle_name} ${item.last_name}`;
//             //puts all doctor profiles same with entered name into an array
//             if (name.toLowerCase().indexOf(filterItems) !== -1) {
//                setNameSearchResults((oldArray) => [...oldArray, item]);
//             }
//          });
//       } else {
//          setNameSearchResults([]);
//          var filterItems = enteredName.toLowerCase();
//          allDoctors.forEach(function (item) {
//             var name = `${item.first_name} ${item.middle_name} ${item.last_name}`;
//             //puts all doctor profiles same with entered name into an array
//             if (name.toLowerCase().indexOf(filterItems) !== -1) {
//                setNameSearchResults((oldArray) => [...oldArray, item]);
//             }
//          });
//       }
//    }

//    function handleSearchBySpecialty(specialty) {
//       /*
//          Function handles search of doctor(s) marching speciality
//          Args: speciality to search by
//          Return: List of doctor profile(s) marching speciality
//       */
//       if (specialty === '') {
//          isSearchByDoctorSptHandler(false);
//          return;
//       }

//       isSearchByDoctorSptHandler(true);

//       if (isSearchByDoctorName === true && isSearchByDoctorHpt === false) {
//          //makes use of filtered doctors by name to make search
//          setSptSearchResults([]);
//          let spt = specialty.toLowerCase();
//          nameSearchResults.forEach(function (item) {
//             if (
//                item.doctor_specialties === null ||
//                item.doctor_specialties === ''
//             )
//                return;
//             var specialties = item.doctor_specialties.toLowerCase().split(',');
//             //puts all doctor profiles same with entered name into an array
//             if (specialties.includes(spt)) {
//                setSptSearchResults((oldArray) => [...oldArray, item]);
//             }
//          });
//       } else if (
//          isSearchByDoctorName === false &&
//          isSearchByDoctorHpt === true
//       ) {
//          //makes use of filtered doctors by hospital to make search
//          setSptSearchResults([]);
//          let spt = specialty.toLowerCase();
//          hptSearchResults.forEach(function (item) {
//             if (
//                item.doctor_specialties === null ||
//                item.doctor_specialties === ''
//             )
//                return;
//             var specialties = item.doctor_specialties.toLowerCase().split(',');
//             //puts all doctor profiles same with entered name into an array
//             if (specialties.includes(spt)) {
//                setSptSearchResults((oldArray) => [...oldArray, item]);
//             }
//          });
//       } else if (
//          isSearchByDoctorName === true &&
//          isSearchByDoctorHpt === true
//       ) {
//          //makes use of filtered doctors by hospital to make search
//          setSptSearchResults([]);
//          let spt = specialty.toLowerCase();
//          hptSearchResults.forEach(function (item) {
//             if (
//                item.doctor_specialties === null ||
//                item.doctor_specialties === ''
//             )
//                return;
//             var specialties = item.doctor_specialties.toLowerCase().split(',');
//             //puts all doctor profiles same with entered name into an array
//             if (specialties.includes(spt)) {
//                setSptSearchResults((oldArray) => [...oldArray, item]);
//             }
//          });
//       } else {
//          //makes use of all doctors to make search
//          setSptSearchResults([]);
//          let spt = specialty.toLowerCase();
//          allDoctors.forEach(function (item) {
//             if (
//                item.doctor_specialties === null ||
//                item.doctor_specialties === ''
//             )
//                return;
//             var specialties = item.doctor_specialties.toLowerCase().split(',');
//             //puts all doctor profiles same with entered name into an array
//             if (specialties.includes(spt)) {
//                setSptSearchResults((oldArray) => [...oldArray, item]);
//             }
//          });
//       }
//    }

//    var list;
//    if (
//       isSearchByDoctorName === true &&
//       isSearchByDoctorSpt === false &&
//       isSearchByDoctorHpt === false
//    ) {
//       list = nameSearchResults.map((item, j) => {
//          return (
//             <div
//                className={styles.doctorBox}
//                key={`${item.first_name} ${item.last_name}-${j}`}
//             >
//                <div className={styles.doctorImage}>
//                   <img src={item.person_image} alt="doctor-profile" />
//                </div>
//                <div className={styles.doctorInfo}>
//                   <div className={styles.doctorName}>
//                      <h3>{`Dr. ${item.first_name} ${item.last_name} `}</h3>
//                   </div>
//                   <div className={styles.doctorDetails}>
//                      <p>{item.doctor_specialties}</p>
//                   </div>
//                   <div className={styles.doctorInfoLink}>
//                      <p
//                         onClick={() =>
//                            props.pushData({
//                               date_of_birth: item.date_of_birth,
//                               doctor_id: item.doctor_id,
//                               doctor_ratings: item.doctor_ratings,
//                               doctor_specialties: item.doctor_specialties,
//                               first_name: item.first_name,
//                               gender: item.gender,
//                               hospital_code: item.hospital_code,
//                               house_address: item.house_address,
//                               last_name: item.last_name,
//                               license_number: item.license_number,
//                               middle_name: item.middle_name,
//                               person_image: item.person_image,
//                               user_email: item.user_email,
//                            })
//                         }
//                      >
//                         View Profile
//                      </p>
//                   </div>
//                </div>
//             </div>
//          );
//       });
//    } else if (
//       (isSearchByDoctorName === true &&
//          isSearchByDoctorSpt === true &&
//          isSearchByDoctorHpt === false) ||
//       (isSearchByDoctorName === false &&
//          isSearchByDoctorSpt === true &&
//          isSearchByDoctorHpt === false)
//    ) {
//       list = sptSearchResults.map((item, j) => {
//          return (
//             <div
//                className={styles.doctorBox}
//                key={`${item.first_name} ${item.last_name}-${j}`}
//             >
//                <div className={styles.doctorImage}>
//                   <img src={item.person_image} alt="doctor-profile" />
//                </div>
//                <div className={styles.doctorInfo}>
//                   <div className={styles.doctorName}>
//                      <h3>{`Dr. ${item.first_name} ${item.last_name} `}</h3>
//                   </div>
//                   <div className={styles.doctorDetails}>
//                      <p>{item.doctor_specialties}</p>
//                   </div>
//                   <div className={styles.doctorInfoLink}>
//                      <p
//                         onClick={() =>
//                            props.pushData({
//                               date_of_birth: item.date_of_birth,
//                               doctor_id: item.doctor_id,
//                               doctor_ratings: item.doctor_ratings,
//                               doctor_specialties: item.doctor_specialties,
//                               first_name: item.first_name,
//                               gender: item.gender,
//                               hospital_code: item.hospital_code,
//                               house_address: item.house_address,
//                               last_name: item.last_name,
//                               license_number: item.license_number,
//                               middle_name: item.middle_name,
//                               person_image: item.person_image,
//                               user_email: item.user_email,
//                            })
//                         }
//                      >
//                         View Profile
//                      </p>
//                   </div>
//                </div>
//             </div>
//          );
//       });
//    } else if (
//       (isSearchByDoctorName === true &&
//          isSearchByDoctorSpt === false &&
//          isSearchByDoctorHpt === true) ||
//       (isSearchByDoctorName === false &&
//          isSearchByDoctorSpt === false &&
//          isSearchByDoctorHpt === true)
//    ) {
//       list = hptSearchResults.map((item, j) => {
//          return (
//             <div
//                className={styles.doctorBox}
//                key={`${item.first_name} ${item.last_name}-${j}`}
//             >
//                <div className={styles.doctorImage}>
//                   <img src={item.person_image} alt="doctor-profile" />
//                </div>
//                <div className={styles.doctorInfo}>
//                   <div className={styles.doctorName}>
//                      <h3>{`Dr. ${item.first_name} ${item.last_name} `}</h3>
//                   </div>
//                   <div className={styles.doctorDetails}>
//                      <p>{item.doctor_specialties}</p>
//                   </div>
//                   <div className={styles.doctorInfoLink}>
//                      <p
//                         onClick={() =>
//                            props.pushData({
//                               date_of_birth: item.date_of_birth,
//                               doctor_id: item.doctor_id,
//                               doctor_ratings: item.doctor_ratings,
//                               doctor_specialties: item.doctor_specialties,
//                               first_name: item.first_name,
//                               gender: item.gender,
//                               hospital_code: item.hospital_code,
//                               house_address: item.house_address,
//                               last_name: item.last_name,
//                               license_number: item.license_number,
//                               middle_name: item.middle_name,
//                               person_image: item.person_image,
//                               user_email: item.user_email,
//                            })
//                         }
//                      >
//                         View Profile
//                      </p>
//                   </div>
//                </div>
//             </div>
//          );
//       });
//    } else {
//       if (
//          allDoctors !== null ||
//          allDoctors !== undefined ||
//          allDoctors.length !== 0
//       ) {
//          list = allDoctors.map((item, j) => {
//             return (
//                <div
//                   className={styles.doctorBox}
//                   key={`${item.first_name} ${item.last_name}-${j}`}
//                >
//                   <div className={styles.doctorImage}>
//                      <img src={item.person_image} alt="doctor-profile" />
//                   </div>
//                   <div className={styles.doctorInfo}>
//                      <div className={styles.doctorName}>
//                         <h3>{`Dr. ${item.first_name} ${item.last_name} `}</h3>
//                      </div>
//                      <div className={styles.doctorDetails}>
//                         <p>{item.doctor_specialties}</p>
//                      </div>
//                      <div className={styles.doctorInfoLink}>
//                         <p
//                            onClick={() =>
//                               props.pushData({
//                                  date_of_birth: item.date_of_birth,
//                                  doctor_id: item.doctor_id,
//                                  doctor_ratings: item.doctor_ratings,
//                                  doctor_specialties: item.doctor_specialties,
//                                  first_name: item.first_name,
//                                  gender: item.gender,
//                                  hospital_code: item.hospital_code,
//                                  house_address: item.house_address,
//                                  last_name: item.last_name,
//                                  license_number: item.license_number,
//                                  middle_name: item.middle_name,
//                                  person_image: item.person_image,
//                                  user_email: item.user_email,
//                               })
//                            }
//                         >
//                            View Profile
//                         </p>
//                      </div>
//                   </div>
//                </div>
//             );
//          });
//       } else if (allDoctors.length === 0) {
//          <p>No doctors found.</p>;
//       }
//    }

//    return (
//       <>
//          <div id={styles.findDoctorBody}>
//             <div className={styles.title}>
//                <h1>Find a Doctor, Book an Appointment</h1>
//             </div>
//             <div className={styles.formRegion}>
//                <form onSubmit={(e) => e.preventDefault()}>
//                   <div className={styles.searchRegion}>
//                      <div>
//                         <input
//                            type={'text'}
//                            placeholder="Type to search"
//                            name="searchbox"
//                            value={enteredName}
//                            onChange={(event) =>
//                               setEnteredName(event.target.value)
//                            }
//                         />
//                         <span>
//                            {isSearchByDoctorName && (
//                               <i>
//                                  <FaTimes onClick={() => closeSearch()} />
//                               </i>
//                            )}
//                         </span>
//                      </div>
//                      <button
//                         onClick={() => {
//                            handleDoctorSearch();
//                         }}
//                      >
//                         Search
//                      </button>
//                   </div>
//                   <p>Filter by: </p>
//                   <div className={styles.filterRegion}>
//                      <div className={styles.selectOne}>
//                         <select
//                            placeholder="Speciality"
//                            onChange={(event) =>
//                               handleSearchBySpecialty(event.target.value)
//                            }
//                         >
//                            <option value={''}>Speciality</option>
//                            <option value={'ct scan'}>CT Scan</option>
//                            <option value={'dentistry'}> Dentistry</option>
//                            <option value={'dermatology'}>Dermatology</option>
//                            <option value={'endocrinology'}>
//                               Endocrinology
//                            </option>
//                            <option value={'emergency medicine'}>
//                               Emergency medicine
//                            </option>
//                            <option value={'general surgery'}>
//                               General surgery
//                            </option>
//                            <option value={'laboratory'}>Laboratory</option>
//                            <option value={'nephrology'}>Nephrology</option>
//                            <option value={'gynaecology'}>Gynaecology</option>
//                            <option value={'obstetrics'}>Obstetrics</option>
//                            <option value={'orthopaedic'}>Orthopaedic</option>
//                            <option value={'oncology'}>Oncology</option>
//                            <option value={'pediatics'}>Pediatrics</option>
//                            <option value={'physician specialist'}>
//                               Physician specialist
//                            </option>
//                            <option value={'physiotherapy'}>
//                               Physiotherapy
//                            </option>
//                            <option value={'x-ray'}>X-Ray</option>
//                         </select>
//                      </div>
//                      <div className={styles.selectTwo}>
//                         <select placeholder="Hospital">
//                            <option value={''}>Hospital</option>
//                            <option value={'komfo anokye teaching hospital'}>
//                               Komfo Anokye Teaching Hospital
//                            </option>
//                            <option value={'knust university hospital'}>
//                               KNUST University Hospital
//                            </option>
//                            <option value={'ridge medical center'}>
//                               Ridge Medical center
//                            </option>
//                            <option value={'north legon hospital'}>
//                               North Legon Hospital
//                            </option>
//                            <option value={'neptune medical hospital'}>
//                               Neptune Medical Center
//                            </option>
//                            <option value={'gbawe sda hospital'}>
//                               Gbawe SDA Hospital
//                            </option>
//                         </select>
//                      </div>
//                   </div>
//                </form>
//             </div>
//             <div className={styles.doctorsBox}>
//                {list}
//                <div className={styles.doctorBox}>
//                   <div className={styles.doctorImage}>
//                      <img src={doctorProfileTwo} alt="doctor-profile" />
//                   </div>
//                   <div className={styles.doctorInfo}>
//                      <div className={styles.doctorName}>
//                         <h3>Gucci Delix, Pharm D</h3>
//                      </div>
//                      <div className={styles.doctorDetails}>
//                         <p>
//                            Clinical Pharmacy Specialist, Hermatology/Oncology
//                            Assistant Professor, Pharmacy Hermatology
//                         </p>
//                      </div>
//                      <div className={styles.doctorInfoLink}>
//                         <p>View Profile</p>
//                      </div>
//                   </div>
//                </div>

//                <div className={styles.doctorBox}>
//                   <div className={styles.doctorImage}>
//                      <img src={doctorProfileThree} alt="doctor-profile" />
//                   </div>
//                   <div className={styles.doctorInfo}>
//                      <div className={styles.doctorName}>
//                         <h3>Gucci Delix, Pharm D</h3>
//                      </div>
//                      <div className={styles.doctorDetails}>
//                         <p>
//                            Clinical Pharmacy Specialist, Hermatology/Oncology
//                            Assistant Professor, Pharmacy Hermatology
//                         </p>
//                      </div>
//                      <div className={styles.doctorInfoLink}>
//                         <p>View Profile</p>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </>
//    );
// }
// export default FindingDoctor;
