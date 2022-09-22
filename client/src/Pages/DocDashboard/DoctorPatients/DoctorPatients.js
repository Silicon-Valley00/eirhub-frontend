import styles from './DoctorPatients.module.css';
import maleProfile from '../../../assets/Rectangle-1.png';
import femaleProfile from '../../../assets/Rectangle.png';
import { GrClose } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { fetchPatientsByDoctorId } from '../../../Store/DoctorAction';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../Store/ReducerStore';
import axios from 'axios';
import { setMessage } from '../../../Store/Actions';
import { setDoctorRecordPatientId } from '../../../Store/Actions';

function DoctorPatients() {
   const id_doctor = useSelector((state) => state.doctorProfile.id_doctor);
   const [patients, setPatients] = useState();
   console.log(patients);
   const baseURL = 'http://127.0.0.1:5000';

   const dispatch = useDispatch();

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
                     msg: 'Unable to fetch Patients, please make sure you are connected.',
                     state: 0,
                  })
               );
            });
         // const items = dispatch(fetchPatientsByDoctorId(doctorId));
      }
      fetchPatients();
   }, []);

   const [show, setShow] = useState(false);

   const showPeople = () => {
      setShow(!show);
   };

   return (
      <>
         <FaUserCircle
            color="#05a6c2"
            className={styles.menu}
            onClick={() => showPeople()}
         />
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
               <ul>
                  {patients?.map((patient, index) => {
                     return (
                        <div
                           className={styles.imageDiv}
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
                           ></img>
                           <li>
                              {patient.first_name} {patient.middle_name}{' '}
                              {patient.last_name}
                           </li>
                        </div>
                     );
                  })}
               </ul>
            </div>
         </main>
      </>
   );
}

export default DoctorPatients;
