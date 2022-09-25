import React, { useRef } from 'react';
import styles from './recordsuploadmodal.module.css';


const RecordsUploadModal = (props) => {
    const reporttype = useRef()
    const description = useRef()

    const handleReportSubmit = (e) => {
        e.preventDefault()
        // console.log(e)
        // selectedfiles.forEach(file=> {
            console.log(props)
            props.selectedFiles.type = reporttype.current.value
            props.selectedFiles.description = description.current.value
            props.setModalOpen(false)
        // }

        // )

    }




    return <form className={styles.recordsuploadform} >
        {/* {props.selectedfiles.map((file)=> { */}
            <label for="reporttype">Report Type</label>
            <select ref={reporttype} name="reporttype" placeholder="Choose Report Type" form="recorduploadform">
                <option value="Laboratory">Laboratory</option>
                <option value="Consultation">Consultation</option>
                <option value="Medical History">Medical History</option>
                <option value="Physical">Physical</option>
                <option value="Radiology">Radiology</option>
                <option value="Pathology">Pathology</option>
                <option value="Discharge">Discharge</option>
                <option value="Other">Other</option>
            </select>
            <label htmlFor="description">Description</label>
            <textarea ref={description} cols="50" rows="1" name="description" type="text" />

        {/* })} */}
        <button className={styles.btn} onClick={handleReportSubmit}>Submit</button>
            </form>
}


export default RecordsUploadModal;