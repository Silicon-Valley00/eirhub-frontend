import React from 'react';
import { useSelector } from 'react-redux';
import styles from './message.module.css';
import { CometChatMessages } from '../../../Chat UI Kit/cometchat-pro-react-ui-kit/CometChatWorkspace/src';
import { Helmet } from 'react-helmet';
import { RiMessage3Fill } from 'react-icons/ri';
import store from '../../../Store/ReducerStore';
import { setMessageStateFunc } from '../../../Store/DoctorAction';

const DoctorMessage = () => {
   const patientUID = useSelector((state) => state.patientToChatWith);
   const Iconstate = useSelector((state) => state.messagePatientState);
   console.log('icon', Iconstate);
   console.log(store.getState());

   return (
      <>
         <Helmet>
            <title>Message Your Patients</title>
            <meta name="description" content="Message your patients" />
         </Helmet>
         <div id={styles.messageBody}>
            {patientUID !== '' ? (
               <CometChatMessages chatWithUser={patientUID} />
            ) : (
               <div className={styles.messageDiv}>
                  <p>Select patient to start messaging</p>
               </div>
            )}{' '}
            <div className={styles.messageIcon}>
               <RiMessage3Fill
                  onClick={() => {
                     // setShow(!show);
                     store.dispatch(setMessageStateFunc(true));
                  }}
               />
            </div>
         </div>
      </>
   );
};
export default DoctorMessage;
