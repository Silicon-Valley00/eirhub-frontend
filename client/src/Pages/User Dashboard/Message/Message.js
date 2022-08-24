import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './message.module.css';
import { CometChatUI } from '../../../Chat UI KIt/cometchat-pro-react-ui-kit/CometChatWorkspace/src';

function Message() {
   const doctorUID = useSelector((state) => state.doctorToChatWith);
   return (
      <>
         <div id={styles.messageBody}>
            <CometChatUI
               chatWithUser={doctorUID}
               chats={false}
               users={false}
               groups={false}
            />
         </div>
      </>
   );
}
export default Message;
