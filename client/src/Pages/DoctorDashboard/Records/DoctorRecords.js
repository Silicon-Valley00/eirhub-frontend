import styles from './DoctorRecords.module.css';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { FaFileUpload, FaTrash, FaPencilAlt } from 'react-icons/fa';
import Patients from '../DoctorPatients/DoctorPatients'


function DoctorRecords() {
   

   return (
      <>
         <Navigation />
         <div className={styles.DRContainer}>
            <div className={styles.DRContainer1}>
            <h1>Upload Files</h1>
            <div className={styles.DRUpload}>
               <FaFileUpload className={styles.DRUploadimg} />
               <h2 className={styles.DRSheader}>
                  Drag and drop file or{' '}
                  <Link to="/" className={styles.DRButtonLink}>
                     browse
                  </Link>
               </h2>
            </div>
            <div className={styles.DRFiles}>
               <table>
                  <thead>
                     <th>Title</th>
                     <th>Type</th>
                     <th>Date Uploaded</th>
                     <th>Actions</th>
                  </thead>
                  <tbody>
                     <td>Lab_Report</td>
                     <td>Lab_Report</td>
                     <td>07/10/2022</td>
                     <td className={styles.DRicons}>
                        <FaPencilAlt className={styles.DRpencil} />
                        <FaTrash className={styles.DRtrash} />
                     </td>
                     <tr></tr>
                  </tbody>
               </table>
            </div>
            </div>
            <Patients show/>
         </div>
      </>
   );
}
export default DoctorRecords;
