import React, { useState } from 'react';
import styles from './finddoctorprofile.module.css';

function FindingDoctor(props) {
   const [profile, setProfile] = useState('default');
   // This transfers the setProfile function outside of this function's scope
   pullData = setProfile;

   return (
      <>
         <div className={styles.profileBody}>{profile}</div>
      </>
   );
}
//This getter calls the pullData function once it has been set with a value
var pullData;
FindingDoctor.pullData = (profile) => {
   pullData(profile);
};
export default FindingDoctor;
