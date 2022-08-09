import React, { useState } from 'react';
import styles from './profile.module.css';
import avatarThree from '../../../assets/Rectangle.png';

function Profile() {
   // Handles values for input fields
   const [userImage, setUserImage] = useState('');

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

   const [guardianFirstName, setGuardianFirstName] = useState('');
   const [guardianMiddleName, setGuardianMiddleName] = useState('');
   const [guardianLastName, setGuardianLastName] = useState('');
   const [guardianEmail, setGuardianEmail] = useState('');
   const [guardianDateOfBirth, setGuardianDateOfBirth] = useState('');
   const [guardianGender, setGuardianGender] = useState('');
   const [guardianMobileNumber, setGuardianMobileNumber] = useState('');
   const [guardianAddress, setGuardianAddress] = useState('');
   const [guardianIdNumber, setGuardianIdNumber] = useState('');

   // handles image button value
   const [uploadBtn, setUploadBtn] = useState('Upload Image');
   // handles state of input fields disability
   const [disableFormBtn, setDisableFormBtn] = useState(true);

   function handleImageUpload(e) {
      /*
         Function validates image file selected for upload.
         Args:
         Function takes event as an argument
         Return:
         If image after validation is ok, image is accepted else user is notified to change image selected
      
      */
      if (e.target.files.length === 0) return false; //Breaks out of function when no file is selected
      const userimage = e.target.files[0];
      if (!/^image\//.test(userimage.type)) {
         //Checks for the image format
         alert(`${userimage.name} is not accepted`); //User alerted of wrong selected file
         return false;
      } else {
         setUserImage(userimage); //selected image file is accepted
         alert('good');
         setUploadBtn('Image Uploaded');
      }
   }

   function handleProfileUpdate() {
      const profile = {
         first_name: firstName,
         middle_name: middleName,
         last_name: lastName,
         email: email,
         date_of_birth: dateOfBirth,
         gender: gender,
         nationality: nationality,
         mobile_number: mobileNumber,
         address: address,
         id_number: idNumber,

         heart_rate: heartRate,
         temperature: temperature,
         blood_pressure: bloodPressure,
         blood_glucose: bloodGlucose,
         respiratory_rate: respiratoryRate,
         blood_group: bloodGroup,
         weight: weight,
         height: height,
         last_visit_date: lastVisitDate,

         guardian_first_name: guardianFirstName,
         guardian_middle_name: guardianMiddleName,
         guardian_last_name: guardianLastName,
         guardian_email: guardianEmail,
         guardian_date_of_birth: guardianDateOfBirth,
         guardian_gender: guardianGender,
         guardian_mobile_number: guardianMobileNumber,
         guardian_address: guardianAddress,
         guardian_id_number: guardianIdNumber,
      };

      console.log(profile);

      setDisableFormBtn(true);
   }
   return (
      <>
         <div id={styles.profileBody}>
            <form
               onSubmit={(e) => {
                  e.preventDefault();
               }}
            >
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
                           disabled={disableFormBtn}
                        />
                     </div>
                  </div>
               </div>
               <div className={styles.personalInfo}>
                  <h2>Personal Information</h2>
                  <div className={styles.personalInfoFormBox}>
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
                              disabled={disableFormBtn}
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
                              disabled={disableFormBtn}
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
                              onChange={(event) =>
                                 setLastName(event.target.value)
                              }
                              disabled={disableFormBtn}
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
                              disabled={disableFormBtn}
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
                              disabled={disableFormBtn}
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
                                 disabled={disableFormBtn}
                              >
                                 <option>Select gender</option>
                                 <option value={'male'}>Male</option>
                                 <option value={'female'}>Female</option>
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
                              disabled={disableFormBtn}
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
                              disabled={disableFormBtn}
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
                              onChange={(event) =>
                                 setAddress(event.target.value)
                              }
                              disabled={disableFormBtn}
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
                              onChange={(event) =>
                                 setIdNumber(event.target.value)
                              }
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>
                  </div>
               </div>

               <div className={styles.healthInfo}>
                  <h2>Health Details</h2>
                  <div className={styles.healthInfoFormBox}>
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
                              disabled={disableFormBtn}
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
                              disabled={disableFormBtn}
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
                                 if (!/^\d*\.?\/?\d*$/.test(event.key)) {
                                    event.preventDefault();
                                 }
                              }}
                              onChange={(event) =>
                                 setBloodPressure(event.target.value)
                              }
                              disabled={disableFormBtn}
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
                              disabled={disableFormBtn}
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
                              disabled={disableFormBtn}
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
                              disabled={disableFormBtn}
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
                              onChange={(event) =>
                                 setWeight(event.target.value)
                              }
                              disabled={disableFormBtn}
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
                              onChange={(event) =>
                                 setHeight(event.target.value)
                              }
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>
                     <div className={styles.healthFormBox}>
                        <h3>Last Visit Date</h3>
                        <div className={styles.formBoxNameInputs}>
                           <input
                              type="text"
                              name="date"
                              id="date"
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
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.guardianInfo}>
                  <h2>Guradian Details(If applicable)</h2>
                  <div className={styles.guardianInfoFormBox}>
                     <div className={styles.guardianFormBox}>
                        <h3>First Name</h3>
                        <div className={styles.formBoxNameInputs}>
                           <input
                              name="guardianfirstname"
                              type="text"
                              id="guardianfirstname"
                              placeholder="Enter first name"
                              required="true"
                              value={guardianFirstName}
                              onChange={(event) =>
                                 setGuardianFirstName(event.target.value)
                              }
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>
                     <div className={styles.guardianFormBox}>
                        <h3>Middle Name(Optional)</h3>
                        <div className={styles.formBoxNameInputs}>
                           <input
                              name="guardianmiddlename"
                              type="text"
                              id="guardianmiddlename"
                              placeholder="Enter middle name"
                              value={guardianMiddleName}
                              onChange={(event) =>
                                 setGuardianMiddleName(event.target.value)
                              }
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>
                     <div className={styles.guardianFormBox}>
                        <h3>Last Name</h3>
                        <div className={styles.formBoxNameInputs}>
                           <input
                              name="guardianlastname"
                              type="text"
                              id="guardianlastname"
                              placeholder="Enter last name"
                              required="true"
                              value={guardianLastName}
                              onChange={(event) =>
                                 setGuardianLastName(event.target.value)
                              }
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>
                     <div className={styles.guardianFormBox}>
                        <h3>Email</h3>
                        <div className={styles.formBoxNameInputs}>
                           <input
                              name="email"
                              type="email"
                              id="email"
                              placeholder="Someone@gmail.com"
                              required="true"
                              value={guardianEmail}
                              onChange={(event) =>
                                 setGuardianEmail(event.target.value)
                              }
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>
                     <div className={styles.guardianFormBox}>
                        <h3>Date of Birth</h3>
                        <div className={styles.formBoxNameInputs}>
                           <input
                              type="text"
                              name="guardiandate"
                              id="guardiandate"
                              placeholder="DD/MM/YYYY"
                              required="true"
                              value={guardianDateOfBirth}
                              onFocus={(event) => (event.target.type = 'date')}
                              onBlur={(event) => {
                                 if (!event.target.value) {
                                    event.target.type = 'text';
                                 }
                              }}
                              onChange={(event) =>
                                 setGuardianDateOfBirth(event.target.value)
                              }
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>
                     <div className={styles.guardianFormBox}>
                        <h3>Gender</h3>
                        <div className={styles.formBoxNameInputs}>
                           <div className={styles.select}>
                              <select
                                 placeholder="Gender"
                                 required="true"
                                 value={guardianGender}
                                 onChange={(event) =>
                                    setGuardianGender(event.target.value)
                                 }
                                 disabled={disableFormBtn}
                              >
                                 <option>Select gender</option>
                                 <option value={'male'}>Male</option>
                                 <option value={'female'}>Female</option>
                              </select>
                           </div>
                        </div>
                     </div>

                     <div className={styles.guardianFormBox}>
                        <h3>ID Number</h3>
                        <div className={styles.formBoxNameInputs}>
                           <input
                              name="guardianidnumber"
                              type="text"
                              id="guardianidnumber"
                              placeholder="eg. GHA-08008238Hjj"
                              required="true"
                              value={guardianIdNumber}
                              onChange={(event) =>
                                 setGuardianIdNumber(event.target.value)
                              }
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>

                     <div className={styles.guardianFormBox}>
                        <h3>Mobile Number</h3>
                        <div className={styles.formBoxNameInputs}>
                           <input
                              name="guardianmobilenumber"
                              type="tel"
                              id="guardianmobilenumber"
                              placeholder="Enter phone number"
                              required="true"
                              value={guardianMobileNumber}
                              //Allows only numbers to be entered
                              onKeyPress={(event) => {
                                 if (!/^\d*\.?\d*$/.test(event.key)) {
                                    event.preventDefault();
                                 }
                              }}
                              onChange={(event) =>
                                 setGuardianMobileNumber(event.target.value)
                              }
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>
                     <div className={styles.guardianFormBox}>
                        <h3>House Address</h3>
                        <div className={styles.formBoxNameInputs}>
                           <input
                              name="guardianaddress"
                              type="text"
                              id="guardianaddress"
                              placeholder="Enter house address"
                              required="true"
                              value={guardianAddress}
                              onChange={(event) =>
                                 setGuardianAddress(event.target.value)
                              }
                              disabled={disableFormBtn}
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.formButton}>
                  {disableFormBtn ? (
                     <button
                        className={styles.formBtn}
                        onClick={() => {
                           setDisableFormBtn(false);
                        }}
                     >
                        {disableFormBtn ? 'Update Profile' : 'Submit'}
                     </button>
                  ) : (
                     <button
                        type="submit"
                        className={styles.formBtn}
                        onClick={() => {
                           handleProfileUpdate();
                        }}
                     >
                        {disableFormBtn ? 'Update Profile' : 'Submit'}
                     </button>
                  )}
               </div>
            </form>
         </div>
      </>
   );
}

export default Profile;
