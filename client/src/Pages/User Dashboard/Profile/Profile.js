import React from 'react';
import styles from './profile.module.css';
import avatarThree from '../../../assets/Rectangle.png';

function Profile() {
   // function handles image upload
   function handleImageUpload(e) {
      if (e.target.files.length === 0) return false;
      const userimage = e.target.files[0];
      if (!/^image\//.test(userimage.type)) {
         alert(`${userimage.name} is not accepted`);
         return false;
      } else {
         alert('good');
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
                     <input
                        id="file-upload-button"
                        type={'file'}
                        accept="image/*"
                        placeholder="Upload Image"
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
                        <select placeholder="gender">
                           <option>Select gender</option>
                           <option>Male</option>
                           <option>Female</option>
                        </select>
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
