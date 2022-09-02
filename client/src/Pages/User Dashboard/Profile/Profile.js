import React, { useState } from 'react';
import styles from './profile.module.css';
import avatarThree from '../../../assets/Rectangle.png';
import { useDispatch, connect, useSelector } from 'react-redux';
import {
   updateProfile,
   updateHealthDetails,
   updateGuardianInfo,
} from '../../../Store/Actions.js';

const mapStateToProps = (state) => {
   return {
      savedProfile: state.profile,
      savedHealthDetails: state.health,
      savedGuardianDetails: state.guardian,
   };
};

function Profile(props) {
   // Handles dispatching of actions
   const patientID = useSelector((state) => state.user.id_patient);
   const guardianID = useSelector((state) => state.user.id_guardian);

   const dispatch = useDispatch();
   console.log(
      props.savedProfile,
      props.savedGuardianDetails,
      props.savedGuardianDetails
   );

   // Handles values for input fields
   const [userImage, setUserImage] = useState(
      props.savedProfile.person_image !== ''
         ? props.savedProfile.person_image
         : avatarThree
   );

   // Profile details
   const [firstName, setFirstName] = useState(props.savedProfile.first_name);
   const [middleName, setMiddleName] = useState(props.savedProfile.middle_name);
   const [lastName, setLastName] = useState(props.savedProfile.last_name);
   const [email, setEmail] = useState(props.savedProfile.user_email);
   const [dateOfBirth, setDateOfBirth] = useState(
      props.savedProfile.date_of_birth !== ''
         ? `${new Date(props.savedProfile.date_of_birth).getFullYear()}-${
              new Date(props.savedProfile.date_of_birth).getMonth() + 1
           }-${new Date(props.savedProfile.date_of_birth).getDate() + 1}`
         : ''
   );
   const [gender, setGender] = useState(props.savedProfile.gender);
   const [nationality, setNationality] = useState(
      props.savedProfile.nationality
   );
   const [mobileNumber, setMobileNumber] = useState(
      props.savedProfile.phone_number
   );
   const [address, setAddress] = useState(props.savedProfile.house_address);
   const [idNumber, setIdNumber] = useState(props.savedProfile.id_number);

   // Health details
   const [heartRate, setHeartRate] = useState(props.savedHealthDetails.pulse);
   const [temperature, setTemperature] = useState(
      props.savedHealthDetails.temperature
   );
   const [bloodPressure, setBloodPressure] = useState(
      props.savedHealthDetails.blood_pressure
   );
   const [bloodGlucose, setBloodGlucose] = useState(
      props.savedHealthDetails.blood_sugar
   );
   const [respiratoryRate, setRespiratoryRate] = useState(
      props.savedHealthDetails.respiratory_rate
   );
   const [bloodGroup, setBloodGroup] = useState(
      props.savedHealthDetails.blood_group
   );
   const [weight, setWeight] = useState(props.savedHealthDetails.weight);
   const [height, setHeight] = useState(props.savedHealthDetails.height);
   const [lastVisitDate, setLastVisitDate] = useState(
      props.savedHealthDetails.last_visit !== ''
         ? `${new Date(props.savedHealthDetails.last_visit).getFullYear()}-${
              new Date(props.savedHealthDetails.last_visit).getMonth() + 1
           }-${new Date(props.savedHealthDetails.last_visit).getDate() + 1}`
         : ''
   );

   // Guardian details
   const [guardianFirstName, setGuardianFirstName] = useState(
      props.savedGuardianDetails.first_name
   );
   const [guardianMiddleName, setGuardianMiddleName] = useState(
      props.savedGuardianDetails.middle_name
   );
   const [guardianLastName, setGuardianLastName] = useState(
      props.savedGuardianDetails.last_name
   );
   const [guardianEmail, setGuardianEmail] = useState(
      props.savedGuardianDetails.email
   );
   const [guardianDateOfBirth, setGuardianDateOfBirth] = useState(
      props.savedGuardianDetails.date_of_birth !== ''
         ? `${new Date(
              props.savedGuardianDetails.date_of_birth
           ).getFullYear()}-${
              new Date(props.savedGuardianDetails.date_of_birth).getMonth() + 1
           }-${
              new Date(props.savedGuardianDetails.date_of_birth).getDate() + 1
           }`
         : ''
   );
   const [guardianGender, setGuardianGender] = useState(
      props.savedGuardianDetails.gender
   );
   const [guardianMobileNumber, setGuardianMobileNumber] = useState(
      props.savedGuardianDetails.phone_number
   );
   const [guardianAddress, setGuardianAddress] = useState(
      props.savedGuardianDetails.house_address
   );
   const [guardianIdNumber, setGuardianIdNumber] = useState(
      props.savedGuardianDetails.id_number
   );

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
         //alert(`${userimage.name} is not accepted`); //User alerted of wrong selected file
         return false;
      } else {
         let reader = new FileReader();
         reader.onloadend = function () {
            setUserImage(reader.result);
         };
         reader.readAsDataURL(userimage);

         setUploadBtn('Image Uploaded');
      }
   }

   function handleProfileUpdate() {
      /*
         Function updates user profile, health and guardian details
         Args: None 
         Return: None      
      */
      let enteredProfileInfo = {
         first_name: firstName,
         middle_name: middleName,
         last_name: lastName,
         user_email: email,
         date_of_birth: dateOfBirth,
         gender: gender,
         nationality: nationality,
         phone_number: mobileNumber,
         house_address: address,
         id_number: idNumber,
         person_image: userImage,
         id_doctor: props.savedProfile.id_doctor,
         id_guardian: props.savedProfile.id_guardian,
      };
      let enteredHealthInfo = {
         pulse: heartRate,
         temperature: temperature,
         blood_pressure: bloodPressure,
         blood_sugar: bloodGlucose,
         respiratory_rate: respiratoryRate,
         blood_group: bloodGroup,
         weight: weight,
         height: height,
         last_visit: lastVisitDate,
      };
      let enteredGuardianinfo = {
         first_name: guardianFirstName,
         middle_name: guardianMiddleName,
         last_name: guardianLastName,
         user_email: guardianEmail,
         date_of_birth: guardianDateOfBirth,
         gender: guardianGender,
         phone_number: guardianMobileNumber,
         house_address: guardianAddress,
         id_number: guardianIdNumber,
      };

      console.log(enteredProfileInfo);
      dispatch(
         updateProfile(
            patientID,
            enteredProfileInfo,
            guardianID,
            enteredGuardianinfo,
            enteredHealthInfo
         )
      );
      // dispatch(updateProfile(props.savedProfile.idPatient, enteredProfileInfo));
      // dispatch(
      //    updateHealthDetails(props.savedProfile.idPatient, enteredHealthInfo)
      // );
      // dispatch(
      //    updateGuardianInfo(
      //       props.savedProfile.idGuardian,
      //       enteredGuardianinfo,
      //       props.savedProfile.idPatient,
      //       enteredHealthInfo
      //    )
      // );
      setUploadBtn('Upload Image');
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
                     <img src={userImage} alt={'profile'} />
                  </div>
                  <div className={styles.profileIntro}>
                     <div className={styles.profileName}>
                        <h2>{`${props.savedProfile.first_name} ${props.savedProfile.last_name}`}</h2>
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
                              required
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
                              required
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
                              required
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
                              required
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
                                 required
                                 value={gender}
                                 onChange={(event) =>
                                    setGender(event.target.value)
                                 }
                                 disabled={disableFormBtn}
                              >
                                 <option value={''}>Select gender</option>
                                 <option value={'Male'}>Male</option>
                                 <option value={'Female'}>Female</option>
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
                              required
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
                              required
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
                              required
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
                              required
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
                              required
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
                              required
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
                              required
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
                              required
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
                              required
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
                              required
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
                              required
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
                              required
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
                              required
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
                  <h2>Guardian Details(If applicable)</h2>
                  <div className={styles.guardianInfoFormBox}>
                     <div className={styles.guardianFormBox}>
                        <h3>First Name</h3>
                        <div className={styles.formBoxNameInputs}>
                           <input
                              name="guardianfirstname"
                              type="text"
                              id="guardianfirstname"
                              placeholder="Enter first name"
                              required
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
                              required
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
                              required
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
                              required
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
                                 required
                                 value={guardianGender}
                                 onChange={(event) =>
                                    setGuardianGender(event.target.value)
                                 }
                                 disabled={disableFormBtn}
                              >
                                 <option value={''}>Select gender</option>
                                 <option value={'Male'}>Male</option>
                                 <option value={'Female'}>Female</option>
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
                              required
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
                              required
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
                              required
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
                        Edit Profile
                     </button>
                  ) : (
                     <button
                        type="submit"
                        className={styles.formBtn}
                        onClick={() => {
                           handleProfileUpdate();
                        }}
                        disabled={
                           firstName === '' ||
                           lastName === '' ||
                           dateOfBirth === '' ||
                           gender === '' ||
                           idNumber === '' ||
                           email === '' ||
                           address === '' ||
                           mobileNumber === '' ||
                           nationality === '' ||
                           weight === '' ||
                           height === '' ||
                           heartRate === '' ||
                           temperature === '' ||
                           bloodGlucose === '' ||
                           bloodGroup === '' ||
                           bloodPressure === '' ||
                           respiratoryRate === '' ||
                           lastVisitDate === '' ||
                           guardianAddress === '' ||
                           guardianDateOfBirth === '' ||
                           guardianEmail === '' ||
                           guardianFirstName === '' ||
                           guardianGender === '' ||
                           guardianIdNumber === '' ||
                           guardianLastName === '' ||
                           guardianMobileNumber === ''
                        }
                     >
                        Update
                     </button>
                  )}
               </div>
            </form>
         </div>
      </>
   );
}

export default connect(mapStateToProps)(Profile);
