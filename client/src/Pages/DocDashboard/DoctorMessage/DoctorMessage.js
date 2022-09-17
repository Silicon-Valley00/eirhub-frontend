import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './message.module.css';
import { CometChatMessages } from '../../../Chat UI Kit/cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import MessagePatients from '../../DoctorDashboard/components/MessagePatients';
import Navigation from '../../DoctorDashboard/components/Navigation';
import Sidebar from '../../DoctorDashboard/components/Sidebar';

const DoctorMessage = () => {
   const patientUID = useSelector((state) => state.patientToChatWith);
   return (
      <>
         <div className={styles.wrapper}></div>
         <main>
            <div className={styles.middle_section}>
               <div id={styles.messageBody}>
                  <CometChatMessages chatWithUser={patientUID} />
               </div>
            </div>
            <div className={styles.right_pane}>
               <MessagePatients />
            </div>
         </main>
      </>
   );
};
export default DoctorMessage;
