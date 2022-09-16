import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './message.module.css';
import { CometChatMessages } from '../../../Chat UI Kit/cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import MessagePatients from '../components/MessagePatients';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';

function Message() {
   const patientUID = useSelector((state) => state.patientToChatWith);
   return (
      <>
         <Navigation nav={10} />
         <div className={styles.wrapper}></div>
         <main>
            <Sidebar indicator={5} />
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
}
export default Message;
