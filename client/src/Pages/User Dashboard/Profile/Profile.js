import React, { useState } from 'react';
import styles from './profile.module.css';
import avatarThree from '../../../assets/Rectangle.png';

function Profile() {
   // Handles values for input fields
   const [firstName, setFirstName] = useState('');
   const [middleName, setMiddleName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [dateOfBirth, setDateOfBirth] = useState('');
   const [gender, setGender] = useState('');
   const [nationality, setNationality] = useState('');
   const [mobileNumber, setMobileNumber] = useState('');
   const [address, setAddress] = useState('');
   const [idNumber, setIdNumber] = useState('');

   const [heartRate, setHeartRate] = useState('');
   const [temperature, setTemperature] = useState('');
   const [bloodPressure, setBloodPressure] = useState('');
   const [bloodGlucose, setBloodGlucose] = useState('');
   const [respiratoryRate, setRespiratoryRate] = useState('');
   const [bloodGroup, setBloodGroup] = useState('');
   const [weight, setWeight] = useState('');
   const [height, setHeight] = useState('');
   const [lastVisitDate, setLastVisitDate] = useState('');

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
                           value={firstName}
                           onChange={(event) =>
                              setFirstName(event.target.value)
                           }
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
                           value={middleName}
                           onChange={(event) =>
                              setMiddleName(event.target.value)
                           }
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
                           value={lastName}
                           onChange={(event) => setLastName(event.target.value)}
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
                           value={email}
                           onChange={(event) => setEmail(event.target.value)}
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
                           value={dateOfBirth}
                           onFocus={(event) => (event.target.type = 'date')}
                           onBlur={(event) => {
                              if (!event.target.value) {
                                 event.target.type = 'text';
                              }
                           }}
                           onChange={(event) =>
                              setDateOfBirth(event.target.value)
                           }
                        />
                     </div>
                  </div>
                  <div className={styles.profileFormBox}>
                     <h3>Gender</h3>
                     <div className={styles.formBoxNameInputs}>
                        <div className={styles.select}>
                           <select
                              placeholder="Gender"
                              required="true"
                              value={gender}
                              onChange={(event) =>
                                 setGender(event.target.value)
                              }
                           >
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
                           value={nationality}
                           onChange={(event) =>
                              setNationality(event.target.value)
                           }
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
                           value={mobileNumber}
                           //Allows only numbers to be entered
                           onKeyPress={(event) => {
                              if (!/^\d*\.?\d*$/.test(event.key)) {
                                 event.preventDefault();
                              }
                           }}
                           onChange={(event) =>
                              setMobileNumber(event.target.value)
                           }
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
                           value={address}
                           onChange={(event) => setAddress(event.target.value)}
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
                           value={idNumber}
                           onChange={(event) => setIdNumber(event.target.value)}
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
                           required={'true'}
                           value={heartRate}
                           //Allows only numbers to be entered
                           onKeyPress={(event) => {
                              if (!/^\d*\.?\d*$/.test(event.key)) {
                                 event.preventDefault();
                              }
                           }}
                           onChange={(event) =>
                              setHeartRate(event.target.value)
                           }
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
                           required={'true'}
                           value={temperature}
                           //Allows only numbers to be entered
                           onKeyPress={(event) => {
                              if (!/^\d*\.?\d*$/.test(event.key)) {
                                 event.preventDefault();
                              }
                           }}
                           onChange={(event) =>
                              setTemperature(event.target.value)
                           }
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
                           required={'true'}
                           value={bloodPressure}
                           //Allows only numbers to be entered
                           onKeyPress={(event) => {
                              if (!/^\d*\.?\d*$/.test(event.key)) {
                                 event.preventDefault();
                              }
                           }}
                           onChange={(event) =>
                              setBloodPressure(event.target.value)
                           }
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
                           required={'true'}
                           value={bloodGlucose}
                           //Allows only numbers to be entered
                           onKeyPress={(event) => {
                              if (!/^\d*\.?\d*$/.test(event.key)) {
                                 event.preventDefault();
                              }
                           }}
                           onChange={(event) =>
                              setBloodGlucose(event.target.value)
                           }
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
                           required={'true'}
                           value={respiratoryRate}
                           //Allows only numbers to be entered
                           onKeyPress={(event) => {
                              if (!/^\d*\.?\d*$/.test(event.key)) {
                                 event.preventDefault();
                              }
                           }}
                           onChange={(event) =>
                              setRespiratoryRate(event.target.value)
                           }
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
                           required={'true'}
                           value={bloodGroup}
                           onChange={(event) =>
                              setBloodGroup(event.target.value)
                           }
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
                           required={'true'}
                           value={weight}
                           //Allows only numbers to be entered
                           onKeyPress={(event) => {
                              if (!/^\d*\.?\d*$/.test(event.key)) {
                                 event.preventDefault();
                              }
                           }}
                           onChange={(event) => setWeight(event.target.value)}
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
                           value={height}
                           required={'true'}
                           //Allows only numbers to be entered
                           onKeyPress={(event) => {
                              if (!/^\d*\.?\d*$/.test(event.key)) {
                                 event.preventDefault();
                              }
                           }}
                           onChange={(event) => setHeight(event.target.value)}
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
                           required={'true'}
                           value={lastVisitDate}
                           onFocus={(event) => (event.target.type = 'date')}
                           onBlur={(event) => {
                              if (!event.target.value) {
                                 event.target.type = 'text';
                              }
                           }}
                           onChange={(event) =>
                              setLastVisitDate(event.target.value)
                           }
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
