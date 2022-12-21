import React, { useRef } from 'react';
import styles from './recordsuploadmodal.module.css';
import { GrFormClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { setMessage } from '../../../Store/Actions';

const RecordsUploadModal = (props) => {
   const reporttype = useRef();
   const description = useRef();
   const dispatch = useDispatch();

   const handleReportSave = (e) => {
      e.preventDefault();
      props.selectedFile.description = description.current.value;
      props.selectedFile.type = reporttype.current.value;
      props.setModalOpen(false);
   };

   const closeModal = () => {
      props.setModalOpen(false);
      props.setIsSelected(false);
      props.setSelectedFile();
      dispatch(
         setMessage({
            show: true,
            msg: 'Record Upload Cancelled Successfully.',
            state: 1,
         })
      );
   };

   return (
      <form className={styles.recordsuploadform}>
         <GrFormClose className={styles.formClose} onClick={closeModal} />
         {/* {props.selectedFile.map((file)=> { */}
         <label for="reporttype">Report Type</label>
         <select
            ref={reporttype}
            name="reporttype"
            placeholder="Choose Report Type"
            form="recorduploadform"
         >
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
         <textarea
            ref={description}
            cols="50"
            rows="1"
            name="description"
            type="text"
         />

         {/* })} */}
         <button className={styles.btn} onClick={handleReportSave}>
            Save
         </button>
      </form>
   );
};

export default RecordsUploadModal;
