import styles from './DoctorRecords.module.css';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import Dropzone from './Dropzone';

const DoctorRecords = () => {
   return (
      <>
         <div className={styles.wrapper}>
            <div className={styles.docRecordsContainer}>
               <div className={styles.docRecordsContainer1}>
                  <h1>Upload Files</h1>
                  {/* <div className={styles.docRecordsUpload}>
               <input ref={docRecordsUploadRef} style={{display:'none'}} type="file" accept='.doc,.docx,.pdf,.txt' name='file' onChange={changeHandler}/>
               {isSelected ? (
                  <div>
                     <p>Filename: {selectedFile.name}</p>
                     <p>Filetype: {selectedFile.type}</p>
                     <p>Size: {selectedFile.size/1024/1024}MB</p>
                        <p>lastModifiedDate:{' '}
                           {selectedFile.lastModifiedDate.toLocaleDateString()}</p>
                     <button onClick= {handleSubmission}>Submit</button>
                  </div>
               ):
               <FaFileUpload className={styles.docRecordsUploadimg} onClick={uploadFile} />}
               <h2 className={styles.docRecordsSheader}>
                     Drag and drop file or <span className={styles.docRecordsButtonLink} onClick={uploadFile}>browse</span>
                  {/* Drag and drop file or{' '}
               </h2>
            </div> */}
                  <Dropzone />

                  <div className={styles.docRecordsFiles}>
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
                           <td className={styles.docRecordsicons}>
                              <FaPencilAlt
                                 className={styles.docRecordspencil}
                              />
                              <FaTrash className={styles.docRecordstrash} />
                           </td>
                           <tr></tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default DoctorRecords;
