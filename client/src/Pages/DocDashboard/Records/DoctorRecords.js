import styles from './DoctorRecords.module.css';
import Dropzone from './Dropzone';
import { fetchReports } from '../../../Store/Actions';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const DoctorRecords = () => {
   const patientID = useSelector((state) => state.doctorRecordPatientId);

   const [reports, setReports] = useState([]);

   useState(() => {
      async function fetchdata() {
         const items = await fetchReports(patientID);
         setReports(items);
         console.log(items, reports);
         // console.log(items, reports);
      }
      fetchdata();
   }, [patientID]);

   const myReports = () => {
      if (reports === undefined) {
         return (
            <div className={styles.emptyMessageContainer}>
               <p className={styles.emptyMessage}>Nothing to show here.</p>
            </div>
         );
      } else if (reports.length !== 0) {
         return (
            <>
               <table>
                  <thead>
                     <th>Title</th>
                     <th>Type</th>
                     <th>Date Uploaded</th>
                     {/* <th>Actions</th> */}
                  </thead>
                  <tbody>
                     {reports?.map((report) => {
                        return report.id_patient === patientID ? (
                           <tr>
                              <td>
                                 <a href={report.report_url}>
                                    {report.description}
                                 </a>
                              </td>
                              <td>{report.report_type}</td>
                              <td>{report.upload_date}</td>

                              {/* <td className={styles.docRecordsicons}>
                                    <FaPencilAlt className={styles.docRecordspencil} />
                                    <FaTrash className={styles.docRecordstrash} />
                                 </td> */}
                           </tr>
                        ) : (
                           ''
                        );
                     })}
                  </tbody>
               </table>
            </>
         );
      } else if (reports.length === 0) {
         // Sends message to be displayed when saved videos is empty
         return (
            <div className={styles.emptyMessageContainer}>
               <p className={styles.emptyMessage}>Nothing to show here.</p>
            </div>
         );
      }
   };

   return (
      <>
         <Helmet>
            <title>Upload Reports | Eirhub</title>
            <meta name="description" content="Upload Reports" />
         </Helmet>
         <div className={styles.docRecordsContainer}>
            <div className={styles.docRecordsContainer1}>
               <h1>Upload Files</h1>

               <Dropzone patientID={patientID} className={styles.dropzone} />

               <div className={styles.docRecordsFiles}>{myReports()}</div>
            </div>
         </div>
      </>
   );
};

export default DoctorRecords;
