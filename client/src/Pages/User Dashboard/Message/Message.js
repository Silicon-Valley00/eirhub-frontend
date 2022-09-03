import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './message.module.css';
import { CometChatMessages } from '../../../Chat UI Kit/cometchat-pro-react-ui-kit/CometChatWorkspace/src';

function Message() {
   const doctorUID = useSelector((state) => state.doctorToChatWith);
   return (
      <>
         <div id={styles.messageBody}>
            <CometChatMessages chatWithUser={doctorUID} />
         </div>
      </>
   );
}
export default Message;
