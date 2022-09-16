import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './message.module.css';
import { CometChatMessages } from '../../../Chat UI Kit/cometchat-pro-react-ui-kit/CometChatWorkspace/src';

function Message() {
   const doctorUID = useSelector((state) => state.doctorToChatWith);
   return (
      <>
         <div id={styles.messageBody}>
            {doctorUID !== '' ? (
               <CometChatMessages chatWithUser={doctorUID} />
            ) : (
               <div>
                  <p>Select patient to start messaging</p>
               </div>
            )}
         </div>
      </>
   );
}
export default Message;
