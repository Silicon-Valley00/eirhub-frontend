import React, { useState } from 'react';
import styles from './records.module.css';
import { FaClipboardList } from 'react-icons/fa';
import { BsArrowLeftCircle, BsDownload } from 'react-icons/bs';

function Records() {
   const [changePage, setChangePage] = useState(false);
   function handleChangePage(value) {
      setChangePage(!changePage);
   }
   return (
      <>
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
                     <tbody>
                        <tr>
                           <td>Lab_report</td>
                           <td>Lab report </td>
                           <td>07/02/2020</td>
                           <td>
                              <div className={styles.options}>
                                 <i onClick={() => handleChangePage()}>
                                    <FaClipboardList />
                                 </i>
                                 <i>
                                    <BsDownload />
                                 </i>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>X_ray</td>
                           <td>Chest X-ray</td>
                           <td>07/02/2020</td>
                           <td>
                              <div className={styles.options}>
                                 <i onClick={() => handleChangePage()}>
                                    <FaClipboardList />
                                 </i>
                                 <i>
                                    <BsDownload />
                                 </i>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Blood_Culture</td>
                           <td>Lab report </td>
                           <td>07/02/2020</td>
                           <td>
                              <div className={styles.options}>
                                 <i onClick={() => handleChangePage()}>
                                    <FaClipboardList />
                                 </i>
                                 <i>
                                    <BsDownload />
                                 </i>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>Lab_report</td>
                           <td>Lab report </td>
                           <td>07/02/2020</td>
                           <td>
                              <div className={styles.options}>
                                 <i onClick={() => handleChangePage()}>
                                    <FaClipboardList />
                                 </i>
                                 <i>
                                    <BsDownload />
                                 </i>
                              </div>
                           </td>
                        </tr>
                     </tbody>
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
                           <h2>Report Details</h2>
                        </div>
                     </div>
                     <div className={styles.reportDescription}>
                        <div className={styles.descriptionBox}>
                           <div className={styles.left}>
                              <p>Type:</p>
                           </div>
                           <div className={styles.right}>
                              <p>Lab Report</p>
                           </div>
                        </div>
                        <div className={styles.descriptionBox}>
                           <div className={styles.left}>
                              <p>Description:</p>
                           </div>
                           <div className={styles.right}>
                              <p>
                                 Urology lab report ordered by Dr. Raymond Brown
                                 for disease confirmation
                              </p>
                           </div>
                        </div>
                        <div className={styles.descriptionBox}>
                           <div className={styles.left}>
                              <p>Created:</p>
                           </div>
                           <div className={styles.right}>
                              <p>07 October 2021</p>
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
