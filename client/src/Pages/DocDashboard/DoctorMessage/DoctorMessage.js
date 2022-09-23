import React from 'react';
import { useSelector } from 'react-redux';
import styles from './message.module.css';
import { CometChatMessages } from '../../../Chat UI Kit/cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import MessagePatients from '../../DocDashboard/components/MessagePatients';

const DoctorMessage = () => {
   const patientUID = useSelector((state) => state.patientToChatWith);
   return (
      <>
         <>
            <div id={styles.messageBody}>
               {patientUID !== '' ? (
                  <CometChatMessages chatWithUser={patientUID} />
               ) : (
                  <div className={styles.messageDiv}>
                     <p>Select patient to start messaging</p>
                  </div>
               )}
            </div>
         </>
      </>
   );
};
export default DoctorMessage;
