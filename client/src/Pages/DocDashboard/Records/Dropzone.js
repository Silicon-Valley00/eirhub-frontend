import styles from './DoctorRecords.module.css';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFileUpload } from 'react-icons/fa';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';


function Dropzone(props) {
   // const patientID = useSelector((state) => state.profile.id_patient);
   const doctorID = props.doctorProfile.id_doctor;

   const [selectedFiles, setSelectedFiles] = useState([]);
   const [isSelected, setIsSelected] = useState(false);

   const docRecordsUploadRef = useRef();

   // const uploadFile = () => {
   //    docRecordsUploadRef.current.click();
   // };
   // const changeHandler = (e) => {
   //    setSelectedFile(e.target.files[0]);
   //    setIsSelected(true);
   //    console.log(selectedFile)
   // };

   // function postReport(report_url) {
   //    const current_date = new Date(Date.now())
   //    const upload_date = `${current_date.getFullYear()}-${current_date.getMonth() + 1}-${current_date.getDate()}`
   //    const reportData = {
   //       "report_type": "Lab report",
   //       "description": 'Lab report posted by Cloudinary',
   //       "upload_date": upload_date,
   //       "report_url": report_url,
   //       "id_doctor": doctorID,
   //       "id_patient": props.patientID
   //    }
   //    axios.post(`http://127.0.0.1:5000/report`,
   //       reportData,
   //       {
   //          headers: {
   //             'Content-Type': 'application/json',
   //             'Access-Control-Allow-Origin': '*',
   //             //Helpful in some cases.
   //             'Access-Control-Allow-Headers': '*',
   //             'Access-Control-Allow-Methods': '*',
   //          }
   //       }
   //    )
   //       .then(() => {
   //          alert('Report Uploaded')
   //       })
   //       .catch((error) => {
   //          alert(`Failed: ${error}`)
   //       })
   // }




   // const handleSubmission = () => {

   //    selectedFiles.map(file => {

   //       const formData = new FormData();
   //       formData.append('file', file);
   //       formData.append('upload_preset', 'ji5ue4f9')

   //       axios
   //          .post('https://api.cloudinary.com/v1_1/eirhub-siliconvalley/auto/upload', formData)
   //          .then((response) => {
   //             postReport(response.data.url)
   //          })
   //          .catch((error) => console.log(error));
   //    })
   //    setSelectedFiles([])
   //    setIsSelected(false)
   //    // console.log(isSelected,selectedFiles);

   // };

   const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
      // Do something with the files'
      // acceptedFiles.forEach(file => {

      //    setSelectedFiles(previous => [...previous, file])
      // })
      setSelectedFiles(acceptedFiles)
      setIsSelected(true)
      // console.log(selectedFiles,acceptedFiles, rejectedFiles)
      // console.log(typeof selectedFiles,typeof acceptedFiles)
      // console.log(e)
      // e.preventDefault()
   }, []);
   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: { 'text/*': ['.txt', '.pdf', '.docx', '.doc'] },
      multiple: false,
      // maxFiles: 3
   });

   return (
      <div className={styles.dropzone}>
         <div {...getRootProps()} className={styles.docRecordsUpload}>
            <input
               {...getInputProps()}
               ref={docRecordsUploadRef}
               style={{ display: 'none' }}
               type="file"
               accept=".doc,.docx,.pdf,.txt"
               name="file"
               disabled
            />
            {isSelected && (selectedFiles.length > 0) ?
               <div>
                  <ul /*className={styles.selectedFiles}*/>
                     
                     <li >
                        <p>
                           Filename: {selectedFiles.name}
                           Filetype: {selectedFiles.type}
                           Size: {(selectedFiles.size / 1024 / 1024).toString().slice(0, 4)}MB
                     </p>
                     </li>
                     {/* {selectedFiles.map((file, index) => 
                     <li key={index}>
                        <p>
                           Filename: {file.name}
                           Filetype: {file.type}
                           Size: {(file.size / 1024 / 1024).toString().slice(0, 4)}MB
                     </p>
                     </li>
                     )
                     } */}
                  </ul>
               </div>
               : isDragActive ?
                  <h2>Drop files here</h2>
                  : <div>
                     <FaFileUpload
                        className={styles.docRecordsUploadimg}
                     />
                     <h2 className={styles.docRecordsSheader}>
                        Drag and drop file or{' '}
                        <span className={styles.docRecordsButtonLink} >
                           browse
            </span>
                        {/* Drag and drop file or{' '}
            <Link to="/" className={styles.docRecordsButtonLink}>
            browse
         </Link> */}
                     </h2>
                  </div>
            }
         </div>
         {/* {isSelected && <button className={styles.btn} onClick={handleSubmission}>Submit</button>} */}
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      doctorProfile: state.doctorProfile,
   };
};

export default connect(mapStateToProps)(Dropzone);
