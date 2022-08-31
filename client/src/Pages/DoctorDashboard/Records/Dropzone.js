import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className={styles.docRecordsUpload}>
            <input {...getInputProps()} ref={docRecordsUploadRef} style={{ display: 'none' }} type="file" accept='.doc,.docx,.pdf,.txt' name='file' onChange={changeHandler} />
            {isSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size: {selectedFile.size / 1024 / 1024}MB</p>
                    <p>lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}</p>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            ) : isDragActive ?
                    <FaFileUpload className={styles.docRecordsUploadimg} onClick={uploadFile} />}
            <h2 className={styles.docRecordsSheader}>
                Drag and drop file or <span className={styles.docRecordsButtonLink} onClick={uploadFile}>browse</span>
                {/* Drag and drop file or{' '}
                  <Link to="/" className={styles.docRecordsButtonLink}>
                     browse
                  </Link> */}
            </h2>
            :  <span className={styles.docRecordsButtonLink} onClick={uploadFile}>upload</span>
        </div>
    )
}


