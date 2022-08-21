import styles from './DoctorPatients.module.css'
import maleProfle from '../../../assets/Rectangle-1.png';
import femaleProfle from '../../../assets/Rectangle.png';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'



const patients = [
    {
        image: femaleProfle,
        name: 'Melissa Burkinstock',
    },
    {
        image: maleProfle,
        name: 'James Freeman',
    },
    {
        image: femaleProfle,
        name: 'Chioma Ukechukwu',
    },
    {
        image: femaleProfle,
        name: 'Melissa Burkinstock',
    },
    {
        image: femaleProfle,
        name: 'Melissa Burkinstock',
    },
];

function DoctorPatients() {
    const [show, setShow] = useState(false);
    return (<>
        <FaUserCircle
            color="#05a6c2"
            className={styles.menu}
            onClick={() => setShow(true)}

        />
        <div className={show ?`${styles.DSContainer2} ${styles.show} `:`${styles.DSContainer2} ${styles.hide}`}>
            <div className={styles.logo_close}>
            <GrClose className={styles.close} onClick={()=>{setShow(false)}} />
            <h2>Patients</h2>
            </div>
            <ul>
                {patients.map((patientnames, index) => {
                    return (
                        <div className={styles.imageDiv}>
                            <img src={patientnames.image}></img>
                            <li key={index}>{patientnames.name}</li>
                        </div>

                    );
                })}
            </ul>
        </div>
        </>
    )
}

export default DoctorPatients;