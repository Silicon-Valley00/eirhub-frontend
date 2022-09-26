import styles from './DoctorRecords.module.css';
import Dropzone from './Dropzone';
import { fetchReports } from '../../../Store/Actions';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
// import { connect, useDispatch } from 'react-redux';
import { setMessage } from '../../../Store/Actions';

const DoctorRecords = () => {
   // const dispatch = useDispatch();
   const patientID = useSelector((state) => state.doctorRecordPatientId);

   const [reports, setReports] = useState([]);

   const deleteReport = (reportId) => {
      return async function (dispatch) {
         try {
            const response = await axios({
               method: 'DELETE',
               url: `https://eirhub-backend.herokuapp.com/reports/${reportId}`,
               headers: {
                  'Access-Control-Allow-Origin': '*',
                  //Helpful in some cases.
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Methods': '*',
               },
            });
            if (response.status === 200) {
               //checks details of response
               if (response.data.status === true) {
                  //returns response
                  // alert('med delete worked');
                  // dispatch(setReloadMedications(true));
                  dispatch(
                     setMessage({
                        show: true,
                        msg: 'Report deleted.',
                        state: 0,
                     })
                  );
               }
            } else {
               //takes all statuses aside 200
               // alert('Could not make update, try again med delete 1');
               dispatch(
                  setMessage({
                     show: true,
                     msg: 'Delete unsuccessful.',
                     state: 1,
                  })
               );
            }
         } catch (error) {
            // alert('Could not make update, try again med delete 2');
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Delete unsuccessful.',
                  state: 1,
               })
            );
         }
      };
   };

   useEffect(() => {
      async function fetchdata() {
         const items = await fetchReports(patientID);
         setReports(items.reverse());
         console.log(items, reports);
      }
      fetchdata();
   }, [patientID, reports]);

   const myReports = () => {
      if (reports === undefined) {
         return (
            <div className={styles.emptyMessageContainer}>
               <p className={styles.emptyMessage}>Nothing to show here.</p>
            </div>
         );
      } else if (reports.length !== 0) {
         return (
            <div className={styles.docRecordsFiles}>
               <table>
                  <thead>
                     <th>Title</th>
                     <th>Type</th>
                     <th>Date Uploaded</th>
                     <th>Actions</th>
                  </thead>
                  <tbody>
                     {reports?.map((report) => {
                        const removeReport = (reportId) => {
                           console.log(reportId);
                           deleteReport(reportId);
                           setReports(
                              reports.filter(
                                 (report) => report.id_report !== reportId
                              )
                           );
                           console.log(reports);
                        };
                        return report.id_patient === patientID ? (
                           <tr>
                              <td>
                                 <Link to={report.report_url}>
                                    {report.description}
                                 </Link>
                              </td>
                              <td>{report.report_type}</td>
                              <td>{report.upload_date}</td>

                              <td className={styles.docRecordsicons}>
                                 {/* <FaPencilAlt className={styles.docRecordspencil} /> */}
                                 <FaTrash
                                    className={styles.docRecordstrash}
                                    onClick={() =>
                                       removeReport(report.id_report)
                                    }
                                 />
                              </td>
                           </tr>
                        ) : (
                           ''
                        );
                     })}
                  </tbody>
               </table>
            </div>
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
