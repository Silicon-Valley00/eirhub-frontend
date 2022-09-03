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
   };

   const handleSubmission = () => {};

   const onDrop = useCallback((acceptedFiles) => {
      // Do something with the files'
      setIsSelected(true)
      setSelectedFile(acceptedFiles[0])
   }, []);
   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   return (
      <div {...getRootProps()} className={styles.docRecordsUpload}>
         <input
            {...getInputProps()}
            ref={docRecordsUploadRef}
            style={{ display: 'none' }}
            type="file"
            accept=".doc,.docx,.pdf,.txt"
            name="file"
            onChange={changeHandler}
         />
         {isSelected ? (
            <div>
               <p>Filename: {selectedFile.name}</p>
               <p>Filetype: {selectedFile.type}</p>
               <p>Size: {(selectedFile.size / 1024 / 1024).toString().slice(0,4)}MB</p>
               <button className={styles.btn} onClick={handleSubmission}>Submit</button>
            </div>
         ) : (

            <div>
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
               )}
      </div>
   );
}

export default Dropzone;
