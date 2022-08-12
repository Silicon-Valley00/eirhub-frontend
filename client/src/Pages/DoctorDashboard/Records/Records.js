import React, { useState } from 'react';
import styles from './records.module.css';
import { FaClipboardList } from 'react-icons/fa';
import { BsArrowLeftCircle, BsDownload } from 'react-icons/bs';
import Navigation from '../components/Navigation';

function DoctorRecords() {
   const [changePage, setChangePage] = useState(false);
   function handleChangePage(value) {
      setChangePage(!changePage);
   }
   return (
      <>
         <Navigation />
      </>
   );
}
export default DoctorRecords;
