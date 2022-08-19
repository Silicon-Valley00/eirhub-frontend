import styles from './DoctorPatients.module.css'
import maleProfle from '../../../assets/Rectangle-1.png';
import femaleProfle from '../../../assets/Rectangle.png';
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
    return (
        <div className={styles.DSContainer2}>
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
    )
}

export default DoctorPatients;