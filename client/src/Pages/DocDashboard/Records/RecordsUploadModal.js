import React from 'react';
import styles from './recordsuploadmodal.module.css';


const RecordsUploadModal = (props) => {
    const handleReportSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        // selectedfiles.forEach(file=> {
            props.selectedFiles.type = e.target.reporttype.value
            props.selectedFiles.description = e.target.description.value
        // }

        // )

    }




    return <form className={styles.recordsuploadform} >
        {/* {props.selectedfiles.map((file)=> { */}
            <label for="reporttype">Report Type</label>
            <select name="reporttype" placeholder="Choose Report Type" form="recorduploadform">
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
            <textarea cols="50" rows="1" name="description" type="text" />

        {/* })} */}
        <button className={styles.btn} onClick={handleReportSubmit}>Submit</button>
            </form>
}


export default RecordsUploadModal;