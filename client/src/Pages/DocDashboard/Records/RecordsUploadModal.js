import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './recordsuploadmodal.module.css';


const RecordUploadModal = () => {
    const handleReportSubmit = (e) => {
        e.preventDefault()

    }




    return <form id={styles.recorduploadform} action="">
        <label for="filename">File Name</label>
        <select ref name="filename" placeholder="Choose Report Type" form="recorduploadform">
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
        <input name="description" type="text" />
        <input type="submit" onClick={handleReportSubmit} />
    </form>
}