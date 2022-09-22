import styles from './DoctorRecords.module.css';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import Dropzone from './Dropzone';
import {
   fetchReports,
} from '../../../Store/Actions';
import { useState } from 'react';
import { connect, useSelector } from 'react-redux';


const DoctorRecords = (props) => {
   const patientID = useSelector((state) => state.doctorRecordPatientId);

   const [reports, setReports] = useState([]);

   useState(() => {
      async function fetchdata() {
         const items = await fetchReports(patientID);
         setReports([items]);
         // console.log(items, reports);

      }
   }, [])

   const myReports = () => {

      if (reports === undefined) {
         return <div className={styles.emptyMessageContainer}>
            <p className={styles.emptyMessage}>Nothing to show here.</p>
         </div>
      } else if (reports.length !== 0) {
         return (
            <>
               <table>
                  <thead>
                     <th>Title</th>
                     <th>Type</th>
                     <th>Date Uploaded</th>
                     <th>Actions</th>
                  </thead>
                  <tbody>
                     {reports?.map((report) => {
                        return (
                           <tr>
                              <td>Lab_Report</td>
                              <td>Lab_Report</td>
                              <td>07/10/2022</td>
                              <td className={styles.docRecordsicons}>
                                 <FaPencilAlt className={styles.docRecordspencil} />
                                 <FaTrash className={styles.docRecordstrash} />
                              </td>

                           </tr>
                        )
                     })}

                  </tbody>
               </table>
            </>)

      } else if (reports.length === 0) {
         // Sends message to be displayed when saved videos is empty
         return <div className={styles.emptyMessageContainer}>

            <p className={styles.emptyMessage}>Nothing to show here.</p>
         </div>
      }
   }

   return (
      <>
         {/* <div className={styles.docRecordsContainer}> */}
         <div className={styles.docRecordsContainer1}>
            <h1>Upload Files</h1>

            <Dropzone />

            <div className={styles.docRecordsFiles}>
               {myReports()}
            </div>
            {/* </div> */}
         </div>
      </>
   );

}

export default DoctorRecords;