import React, { useState } from 'react';
import styles from './profile.module.css';
import avatarThree from '../../../assets/Rectangle.png';

function Profile() {
   // function handles image upload
   const [uploadBtn, setUploadBtn] = useState('Upload Image');
   function handleImageUpload(e) {
      if (e.target.files.length === 0) return false;
      const userimage = e.target.files[0];
      if (!/^image\//.test(userimage.type)) {
         alert(`${userimage.name} is not accepted`);
         return false;
      } else {
         alert('good');
         setUploadBtn('Image Uploaded');
      }
   }
   return (
      <>
         <div id={styles.profileBody}>
            <div className={styles.upperContent}>
               <div className={styles.profileImage}>
                  <img src={avatarThree} alt={'profile'} />
               </div>
               <div className={styles.profileIntro}>
                  <div className={styles.profileName}>
                     <h2>Melissa Burkinstock</h2>
                  </div>
                  <div className={styles.uploadImageBtn}>
                     <label htmlFor="file-upload-button">{uploadBtn}</label>
                     <input
                        id="file-upload-button"
                        type={'file'}
                        accept="image/*"
                        placeholder="Upload Image"
                        style={{ visibility: 'hidden' }}
                        onChange={(e) => handleImageUpload(e)}
                     />
                  </div>
               </div>
            </div>
            <div className={styles.personalInfo}>
               <h2>Personal Information</h2>
               <form
                  className={styles.personalInfoFormBox}
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
               >
                  <div className={styles.profileFormBox}>
                     <h3>First Name</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="firstname"
                           type="text"
                           id="firstname"
                           placeholder="Enter first name"
                           required="true"
                        />
                     </div>
                  </div>
                  <div className={styles.profileFormBox}>
                     <h3>Middle Name(Optional)</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="middletname"
                           type="text"
                           id="middlename"
                           placeholder="Enter middle name"
                        />
                     </div>
                  </div>
                  <div className={styles.profileFormBox}>
                     <h3>Last Name</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="lastname"
                           type="text"
                           id="lastname"
                           placeholder="Enter last name"
                           required="true"
                        />
                     </div>
                  </div>
                  <div className={styles.profileFormBox}>
                     <h3>Email</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="email"
                           type="email"
                           id="email"
                           placeholder="Someone@gmail.com"
                           required="true"
                        />
                     </div>
                  </div>
                  <div className={styles.profileFormBox}>
                     <h3>Date of Birth</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           type="text"
                           name="date"
                           id="date"
                           placeholder="DD/MM/YYYY"
                           required="true"
                           onFocus={(event) => (event.target.type = 'date')}
                           onBlur={(event) => {
                              if (!event.target.value) {
                                 event.target.type = 'text';
                              }
                           }}
                        />
                     </div>
                  </div>
                  <div className={styles.profileFormBox}>
                     <h3>Gender</h3>
                     <div className={styles.formBoxNameInputs}>
                        <div className={styles.select}>
                           <select placeholder="Gender" required="true">
                              <option>Select gender</option>
                              <option>Male</option>
                              <option>Female</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div className={styles.profileFormBox}>
                     <h3>Nationality</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="nationality"
                           type="text"
                           id="nationality"
                           placeholder="Enter Nationality"
                           required="true"
                        />
                     </div>
                  </div>
                  <div className={styles.profileFormBox}>
                     <h3>Mobile Number</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="mobilenumber"
                           type="tel"
                           id="mobilenumber"
                           placeholder="Enter phone number"
                           required="true"
                        />
                     </div>
                  </div>
                  <div className={styles.profileFormBox}>
                     <h3>House Address</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="address"
                           type="text"
                           id="address"
                           placeholder="Enter house address"
                           required="true"
                        />
                     </div>
                  </div>
                  <div className={styles.profileFormBox}>
                     <h3>ID Number</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="idnumber"
                           type="text"
                           id="idnumber"
                           placeholder="eg. GHA-08008238Hjj"
                           required="true"
                        />
                     </div>
                  </div>
               </form>
            </div>

            <div className={styles.healthInfo}>
               <h2>Health Details</h2>
               <form
                  className={styles.healthInfoFormBox}
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
               >
                  <div className={styles.healthFormBox}>
                     <h3>Heart Rate (bpm)</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="heartrate"
                           type="text"
                           id="heartrate"
                           placeholder="Enter heart rate "
                        />
                     </div>
                  </div>
                  <div className={styles.healthFormBox}>
                     <h3>Temperature (℃)</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="temperature"
                           type="text"
                           id="temperature"
                           placeholder="Enter temperature "
                        />
                     </div>
                  </div>
                  <div className={styles.healthFormBox}>
                     <h3>Blood Pressure </h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="bloodpressure"
                           type="text"
                           id="bloodpressure"
                           placeholder="Enter blood pressure"
                        />
                     </div>
                  </div>
                  <div className={styles.healthFormBox}>
                     <h3>Blood Glucose (mg/dL)</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="bloodglucose"
                           type="text"
                           id="bloodglucose"
                           placeholder="Enter blood glucose "
                        />
                     </div>
                  </div>
                  <div className={styles.healthFormBox}>
                     <h3>Respiratory Rate</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="respiratoryrate"
                           type="text"
                           id="respiratoryrate"
                           placeholder="Enter respiratory rate"
                        />
                     </div>
                  </div>
                  <div className={styles.healthFormBox}>
                     <h3>Blood Group</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="bloodgroup"
                           type="text"
                           id="bloodgroup"
                           placeholder="Enter blood group"
                        />
                     </div>
                  </div>
                  <div className={styles.healthFormBox}>
                     <h3>Weight (kg)</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="weight"
                           type="text"
                           id="weight"
                           placeholder="Enter weight"
                        />
                     </div>
                  </div>
                  <div className={styles.healthFormBox}>
                     <h3>Height (cm)</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           name="height"
                           type="text"
                           id="height"
                           placeholder="Enter height"
                        />
                     </div>
                  </div>
                  <div className={styles.healthFormBox}>
                     <h3>Last Visit Date</h3>
                     <div className={styles.formBoxNameInputs}>
                        <input
                           type="text"
                           name="lastvistdate"
                           id="lastvisitdate"
                           placeholder="DD/MM/YYYY"
                           onFocus={(event) => (event.target.type = 'date')}
                           onBlur={(event) => {
                              if (!event.target.value) {
                                 event.target.type = 'text';
                              }
                           }}
                        />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}

export default Profile;
