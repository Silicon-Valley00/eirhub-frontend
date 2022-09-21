import styles from './DoctorRecords.module.css';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFileUpload } from 'react-icons/fa';
import axios from 'axios';

function Dropzone() {
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


   function postReport(report_url){
      const reportData = {
         "report_type": "Lab report",
         "description": `Lab report posted by Cloudinary`,
         "uploaddate": `${Date.now()}`,
         "report_url": report_url
      }
      axios.post(`http://127.0.0.1:5000/report/`, reportData)
         .then(() => {
            alert('Report Uploaded')
         })
         .catch((error)=>{
            alert(`Failed:${error}`)
         })
   }




   const handleSubmission = () => {
      selectedFiles.map(file=>{

         const formData = new FormData();
         formData.append('file', file);
         formData.append('upload_preset', 'ji5ue4f9')
         
         axios
         .post('https://api.cloudinary.com/v1_1/eirhub-siliconvalley/image/upload', formData)
         .then((response) => {
            postReport(response.data.url)
         })
         .catch((error) => console.log(error));
      })
    };

   const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
      // setSelectedFiles(acceptedFiles)
      // Do something with the files'
      acceptedFiles.forEach(file => {
         const reader = new FileReader()
         reader.onload = ()=>{
            
            setSelectedFiles(previous => [...previous,file])
         }
         reader.readAsDataURL(file)
      })
      setIsSelected(true)
      // console.log(selectedFiles,acceptedFiles, rejectedFiles)
      // console.log(typeof selectedFiles,typeof acceptedFiles)
      // console.log(e)
      // e.preventDefault()
   }, []);
   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: {'text/*': ['.txt','.pdf','.docx','.doc']},
      multiple: true,
      maxFiles: 3
   });

   useEffect(()=>{
      console.log(isSelected,selectedFiles)
   },[selectedFiles])

   return (
      <div {...getRootProps()} className={styles.docRecordsUpload}>
         <input
            {...getInputProps()}
            ref={docRecordsUploadRef}
            style={{ display: 'none' }}
            type="file"
            accept=".doc,.docx,.pdf,.txt"
            name="file"
         // disabled={isSelected}
         />
         {isSelected && (selectedFiles.length > 0) ?
         <div>
         <ul /*className={styles.selectedFiles}*/>
            {selectedFiles.map((file,index) => <li key={index}>
               <p>Filename: {file.name} Filetype: {file.type} Size: {(file.size / 1024 / 1024).toString().slice(0, 4)}MB</p>
               </li>
            )
            }
         </ul>
            <button className={styles.btn} onClick={handleSubmission}>Submit</button>
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
   );
}

export default Dropzone;
