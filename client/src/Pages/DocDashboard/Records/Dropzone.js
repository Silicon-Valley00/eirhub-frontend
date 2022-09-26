import styles from './DoctorRecords.module.css';
import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFileUpload } from 'react-icons/fa';
import axios from 'axios';
// import { useSelector } from 'react-redux';
import { connect, useDispatch } from 'react-redux';
import { setMessage } from '../../../Store/Actions';
import RecordsUploadModal from './RecordsUploadModal';

function Dropzone(props) {
   const doctorID = props.doctorProfile.id_doctor;
   const dispatch = useDispatch();

   const [selectedFile, setSelectedFile] = useState();
   const [isSelected, setIsSelected] = useState(false);
   const [modalOpen, setModalOpen] = useState(false);


   function postReport(report_url) {
      const current_date = new Date(Date.now());
      const upload_date = `${current_date.getFullYear()}-${
         current_date.getMonth() + 1
         }-${current_date.getDate()} ${current_date.getHours()}:${current_date.getMinutes()}:${current_date.getSeconds()}`;
      const reportData = {
         report_type: selectedFile.type,
         description: selectedFile.description,
         upload_date: upload_date,
         report_url: report_url,
         id_patient: props.patientID,
         id_doctor: doctorID,
      };
      axios
         .post(`https://eirhub-backend.herokuapp.com/report`, reportData, {
            headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               //Helpful in some cases.
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
         })
         .then(() => {
            alert('Report Uploaded');
         })
         .catch((error) => {
            alert(`Failed: ${error}`);
         });
   }

   const handleSubmission = () => {


      // if the patients id is not null do what's below
      if (props.patientID) {

         const file = selectedFile[0]

         const formData = new FormData();
         formData.append('file', file);
         formData.append('upload_preset', 'ji5ue4f9')

         axios
            .post(
               'https://api.cloudinary.com/v1_1/eirhub-siliconvalley/auto/upload',
               formData
            )
            .then((response) => {
               postReport(response.data.url);
               dispatch(
                  setMessage({
                     show: true,
                     msg: 'Report Uploaded Successfully 🎉',
                     state: 1,
                  })
               );
            })
            .catch((error) => {
               dispatch(
                  setMessage({
                     show: true,
                     msg: 'Upload Failed, try again.',
                     state: 0,
                  })
               );
            });
      } else {
         dispatch(
            setMessage({
               show: true,
               msg: 'Upload Failed, no patient selected.',
               state: 0,
            })
         );
      }
      // })
      setSelectedFile()
      setIsSelected(false)

   };

   const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
      // Do something with the files'
      setSelectedFile(acceptedFiles)
      setIsSelected(true)
      setModalOpen(true)
   }, []);


   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: { 'text/*': ['.txt', '.pdf', '.docx', '.doc'] },
      multiple: false,
   });

   return (
      <div className={styles.dropzone}>
         <div {...getRootProps()} className={styles.docRecordsUpload}>
            <input
               {...getInputProps()}
            />
            {isSelected && (selectedFile.length > 0) ? (
               <div>
                  <ul /*className={styles.selectedFile}*/>

                     <li >

                        <p>Description: {selectedFile.description}</p>
                        <p>Report Type: {selectedFile.type} Report</p>
                        <p>Size: {(selectedFile[0].size / 1024 / 1024).toString().slice(0, 4)}MB</p>
                     </li>
                  </ul>
               </div>
            ) : isDragActive ? (
               <h2>Drop files here</h2>
            ) : (
                     <div>
                        <FaFileUpload className={styles.docRecordsUploadimg} />
                        <h2 className={styles.docRecordsSheader}>
                           Drag and drop file or{' '}
                           <span className={styles.docRecordsButtonLink}>browse</span>
                        </h2>
                     </div>
                  )}
         </div>
         {isSelected && (
            <button className={styles.btn} onClick={handleSubmission}>
               Submit
            </button>
         )}
         {modalOpen && (
            <RecordsUploadModal
               setModalOpen={setModalOpen}
               selectedFile={selectedFile}
               setIsSelected={setIsSelected}
               setSelectedFile={setSelectedFile}
            />
         )}
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      doctorProfile: state.doctorProfile,
   };
};

export default connect(mapStateToProps)(Dropzone);
