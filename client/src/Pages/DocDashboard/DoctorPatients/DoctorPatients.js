import styles from './DoctorPatients.module.css';
import { GrClose } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
// import store from '../../../Store/ReducerStore';
import axios from 'axios';
import { setMessage, setDoctorRecordPatientId } from '../../../Store/Actions';

function DoctorPatients() {
   const id_doctor = useSelector((state) => state.doctorProfile.id_doctor);
   const [patients, setPatients] = useState();
   const baseURL = 'https://eirhub-backend.herokuapp.com';

   const dispatch = useDispatch();
   const patientID = useSelector((state) => state.doctorRecordPatientId);

   useEffect(() => {
      async function fetchPatients() {
         await axios
            .get(`${baseURL}/doctors/?id_doctor=${id_doctor}`, {
               headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Methods': '*',
               },
            })
            .then((res) => {
               setPatients(res.data.msg);
            })
            .catch((err) => {
               dispatch(
                  setMessage({
                     show: true,
                     msg: 'Failed to fetch patients.',
                     state: 0,
                  })
               );
            });
      }
      fetchPatients();
   }, []);

   const [show, setShow] = useState(false);

   const showPeople = () => {
      setShow(!show);
   };

   return (
      <>
         <div className={styles.menu}>
            <FaUserCircle onClick={() => showPeople()} />
         </div>

         <main className={styles.main}>
            <div
               className={
                  show
                     ? `${styles.patientsSection} ${styles.show} `
                     : `${styles.patientsSection} ${styles.hide}`
               }
            >
               <div className={styles.logo_close}>
                  <h2>Patients</h2>
                  <GrClose
                     className={styles.close}
                     onClick={() => showPeople()}
                  />
               </div>
               <ul className={styles.patients_list}>
                  {patients?.map((patient, index) => {
                     return (
                        <li>
                           <div
                              className={
                                 patient.id_patient === patientID
                                    ? `${styles.imageDiv} ${styles.active}`
                                    : `${styles.imageDiv}`
                              }
                              onClick={() => {
                                 dispatch(
                                    setDoctorRecordPatientId(patient.id_patient)
                                 );
                              }}
                              key={index}
                           >
                              <img
                                 src={patient.person_image}
                                 alt={patient.first_name}
                              />

                              <div className={styles.name}>
                                 {patient.first_name} {patient.middle_name}{' '}
                                 {patient.last_name}
                              </div>
                           </div>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </main>
      </>
   );
}

export default DoctorPatients;
