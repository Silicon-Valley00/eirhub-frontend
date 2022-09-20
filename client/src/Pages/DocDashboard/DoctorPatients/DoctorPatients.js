import styles from './DoctorPatients.module.css';
import maleProfile from '../../../assets/Rectangle-1.png';
import femaleProfile from '../../../assets/Rectangle.png';
import { GrClose } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { fetchPatientsByDoctorId } from '../../../Store/DoctorAction';
import { useSelector } from 'react-redux';

function DoctorPatients() {
   const doctorId = useSelector((state) => state.doctorProfile.id_doctor);
   const [patients, setPatients] = useState();
   useEffect(()=>{
      async function fetchPatients(){
         const items = await fetchPatientsByDoctorId(doctorId)
         setPatients(items)

      }
      fetchPatients();
   },[])

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
                        <div className={styles.imageDiv}>
                           <img
                              src={patient.person_image}
                              alt={patient.first_name}
                           ></img>
                           <li key={index}>
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
