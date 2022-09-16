import styles from './DoctorRecords.module.css';
import React, { useState, useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFileUpload } from 'react-icons/fa';

function Dropzone() {
   const [selectedFile, setSelectedFile] = useState();
   const [isSelected, setIsSelected] = useState(false);

   const docRecordsUploadRef = useRef();

   const uploadFile = () => {
      docRecordsUploadRef.current.click();
   };
   const changeHandler = (e) => {
      setSelectedFile(e.target.files[0]);
      setIsSelected(true);
      console.log(selectedFile)
   };

   const handleSubmission = () => { };

   const onDrop = useCallback((acceptedFiles) => {
      // Do something with the files'
      
      setSelectedFile(acceptedFiles[0])
      setIsSelected(true)
      // console.log(selectedFile)
      // console.log(e)
      // e.preventDefault()
   }, []);
   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop
   });

   return (
      <div {...getRootProps()} className={styles.docRecordsUpload}>
         <input
            {...getInputProps({ onChange: { changeHandler } })}
            ref={docRecordsUploadRef}
            style={{ display: 'none' }}
            type="file"
            accept=".doc,.docx,.pdf,.txt"
            name="file"

         />
         {isSelected && selectedFile ?
            <div>
               <p>Filename: {selectedFile.name}</p>
               <p>Filetype: {selectedFile.type}</p>
               <p>Size: {(selectedFile.size / 1024 / 1024).toString().slice(0, 4)}MB</p>
               <button className={styles.btn} onClick={handleSubmission}>Submit</button>
            </div>
            : isDragActive ?
               <h2>Drop files here</h2>
               : <div>
                  <FaFileUpload
                     className={styles.docRecordsUploadimg}
                     onClick={uploadFile}
                  />
                  <h2 className={styles.docRecordsSheader}>
                     Drag and drop file or{' '}
                     <span className={styles.docRecordsButtonLink} onClick={uploadFile}>
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
