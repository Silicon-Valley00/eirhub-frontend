import React, { useState } from 'react';
import styles from './profile.module.css';
import avatarThree from '../../../assets/Rectangle.png';

function DoctorProfile() {
   // Handles values for input fields
   const [firstName, setFirstName] = useState('');
   const [middleName, setMiddleName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [dateOfBirth, setDateOfBirth] = useState('');
   const [gender, setGender] = useState('');
   const [address, setAddress] = useState('');
   const [idNumber, setIdNumber] = useState('');

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
            {/* Avatar with name and upload image button */}
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

            {/* Section for personal info */}
            <div className={styles.personalInfo}>
               <h2>Personal Information</h2>
               <form
                  className={styles.personalInfoFormBox}
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
               >
                  {/* Firstname, middlename and lastname */}
                  <div className={styles.forFirst}>
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
                              onChange={(event) =>
                                 setLastName(event.target.value)
                              }
                           />
                        </div>
                     </div>
                  </div>
                  {/* Email, date of birth and Gender */}
                  <div className={styles.forSecond}>
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
                     </div>{' '}
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
                  </div>
                  {/* House address */}
                  <div className={styles.forThird}>
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
                           />
                        </div>
                     </div>
                  </div>
               </form>
            </div>
            {/* End of personal details */}

            {/* Section for professional details */}
            <div className={styles.proffInfo}>
               <h2>Proffessional Details</h2>
               <form
                  className={styles.proffInfoFormBox}
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
               >
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
            {/* End of professional details */}
         </div>
      </>
   );
}

export default DoctorProfile;
