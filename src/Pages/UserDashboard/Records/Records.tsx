import React, { useEffect, useState } from 'react';
import styles from './records.module.css';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BsArrowLeftCircle, BsDownload } from 'react-icons/bs';
import { fetchReports } from '../../../Store/Actions.js';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Records(props) {
   const [reports, setReports] = useState([]);
   const patientID = useSelector((state) => state.profile.id_patient);

   //Handles state on page been viewed
   const [changePage, setChangePage] = useState(false);
   const [report, setReport] = useState({
      description: 'Lab report ordered by Dr.Raymond Brown',
      id_report: 9,
      report_type: 'Lab report',
      upload_date: 'Sun, 24 Jul 2022 04:36:42 GMT',
   });

   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];

   useEffect(() => {
      async function fetchdata() {
         const items = await fetchReports(patientID);
         setReports(items);
      }
      fetchdata();
   }, []);

   function handleChangePage() {
      setChangePage(!changePage);
   }

   var list;
   if (reports === undefined) {
      list = (
         <tr
            style={{
               width: '290%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               color: '#c2c9d1',
               marginTop: '10rem',
               fontSize: '150%',
            }}
         >
            Nothing to show here.
         </tr>
      );
   } else {
      if (reports.length !== 0) {
         list = reports.map((item, j) => {
            return (
               <tr key={`${j}-${item.upload_date}-${item.report_type}`}>
                  <td>{item.report_type}</td>
                  <td>{item.report_type}</td>
                  <td>{`${new Date(item.upload_date).getDate() + 1}/${
                     new Date(item.upload_date).getMonth() + 1
                  }/${new Date(item.upload_date).getFullYear()}`}</td>
                  <td>
                     <div className={styles.options}>
                        <i
                           onClick={() => {
                              setReport(item);
                              handleChangePage();
                           }}
                        >
                           <AiFillInfoCircle />
                        </i>
                        <i>
                           <BsDownload
                              onClick={() => {
                                 if (item.report_url) {
                                    window.open(item.report_url, '_blank');
                                 }
                              }}
                           />
                        </i>
                     </div>
                  </td>
               </tr>
            );
         });
      } else if (reports.length === 0) {
         // Sends message to be displayed when saved videos is empty
         list = (
            <tr
               style={{
                  width: '290%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#c2c9d1',
                  marginTop: '10rem',
                  fontSize: '150%',
               }}
            >
               Nothing to show here.
            </tr>
         );
      }
   }

   return (
      <>
         <Helmet>
            <title>Reports | Eirhub</title>
            <meta name="description" content="Records page of the patient" />
         </Helmet>
         <div id={styles.recordBody}>
            <div className={styles.recordContent}>
               <div className={styles.recordTable}>
                  <table>
                     <thead>
                        <tr>
                           <th>Title</th>
                           <th>Type</th>
                           <th>Date Uploaded</th>
                           <th>Option</th>
                        </tr>
                     </thead>
                     <tbody>{list}</tbody>
                  </table>
                  <div
                     className={
                        !changePage
                           ? styles.recordOpenBox
                           : `${styles.recordOpenBox} ${styles.active}`
                     }
                  >
                     <div className={styles.top}>
                        <div className={styles.back}>
                           <i onClick={() => handleChangePage()}>
                              <BsArrowLeftCircle />
                           </i>
                        </div>
                        <div className={styles.reportTitle}>
                           <h2>{report.report_type}</h2>
                        </div>
                     </div>
                     <div className={styles.reportDescription}>
                        <div className={styles.descriptionBox}>
                           <div className={styles.left}>
                              <p>Type:</p>
                           </div>
                           <div className={styles.right}>
                              <p>{report.report_type}</p>
                           </div>
                        </div>
                        <div className={styles.descriptionBox}>
                           <div className={styles.left}>
                              <p>Description:</p>
                           </div>
                           <div className={styles.right}>
                              <p>{report.description}</p>
                           </div>
                        </div>
                        <div className={styles.descriptionBox}>
                           <div className={styles.left}>
                              <p>Created:</p>
                           </div>
                           <div className={styles.right}>
                              <p>{`${new Date(report.upload_date).getDate()} ${
                                 months[new Date(report.upload_date).getMonth()]
                              } ${new Date(
                                 report.upload_date
                              ).getFullYear()}`}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
export default Records;
