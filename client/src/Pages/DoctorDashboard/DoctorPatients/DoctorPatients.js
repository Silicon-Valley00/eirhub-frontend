import styles from './DoctorPatients.module.css'
import maleProfle from '../../../assets/Rectangle-1.png';
import femaleProfle from '../../../assets/Rectangle.png';
import { MdMenu } from 'react-icons/md'
import { useState } from 'react'



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
    console.log(show)
    return (<>
        <MdMenu
            color="#05a6c2"
            className={styles.menu}
            onClick={() => setShow(!show)}

        />
        <div className={show ?`${styles.DSContainer2} ${styles.show} `:`${styles.DSContainer2} ${styles.hide}`}>
            <h2>Patients</h2>
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