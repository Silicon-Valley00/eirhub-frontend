import React from 'react';
import { useSelector } from 'react-redux';
import styles from './message.module.css';
// import { CometChatMessages } from '../../../Chat UI Kit/cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import { Helmet } from 'react-helmet';

function Message() {
   const doctorUID = useSelector((state) => state.doctorToChatWith);
   return (
      <>
         <Helmet>
            <title>Message Your Doctor</title>
            <meta name="description" content="Message your doctor" />
         </Helmet>
         <div id={styles.messageBody}>
            {/* {doctorUID !== '' ? (
               <CometChatMessages chatWithUser={doctorUID} />
            ) : (
               <div className={styles.messageDiv}>
                  <p>Select doctor to start messaging</p>
               </div>
            )} */}
         </div>
      </>
   );
}
export default Message;
