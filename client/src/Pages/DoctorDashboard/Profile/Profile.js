import React, { useState } from 'react';
import styles from './profile.module.css';
import avatarThree from '../../../assets/bruno-rodrigues-279xIHymPYY-unsplash 2.png';
import Navigation from '../components/Navigation';
import { FaCheck } from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      savedDoctorProfile: state.doctorProfile,
   };
};

function DoctorProfile(props) {
   console.log(props.savedDoctorProfile);

   // Variable used to dispatch actions
   const dispatch = useDispatch();

   // Handles values for input fields
   const [user, setUser] = useState({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      hospitalCode: '',
      specialty: '',
      licenseNum: '',
   });

   const handleChange = (e) => {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

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
         <Navigation nav={12} />
         <div className={styles.main}>
            <div id={styles.profileBody}>
               {/* Avatar with name and upload image button */}
               <div className={styles.upperContent}>
                  <div className={styles.profileImage}>
                     <img
                        src={avatarThree}
                        alt={'profile'}
                        className={styles.img}
                     />
                  </div>
                  <div className={styles.profileIntro}>
                     <div className={styles.profileName}>
                        <h2>Raymond Brown</h2>
                     </div>
                     <div className={styles.uploadImageBtn}>
                        <label htmlFor="file-upload-button">{uploadBtn}</label>
                        <input
                           id="file-upload-button"
                           type={'file'}
                           accept="image/*"
                           placeholder="Upload Image"
                           style={{
                              display: 'none',
                           }}
                           onChange={(e) => handleImageUpload(e)}
                        />
                     </div>
                  </div>
               </div>

               {/* Section with both personal and professional info */}
               <div className={styles.personal_and_proff}>
                  {/* Section for personal info */}
                  <div className={styles.personalInfo}>
                     <h2 className={styles.title}>Personal Information</h2>
                     <form
                        className={styles.personalInfoFormBox}
                        onSubmit={(e) => {
                           e.preventDefault();
                        }}
                        id="form"
                     >
                        {/* Firstname, middlename and lastname */}
                        <div className={styles.forFirst}>
                           <div className={styles.profileFormBox}>
                              <h3>First Name</h3>
                              <div className={styles.formBoxNameInputs}>
                                 <input
                                    name="firstName"
                                    className={styles.input_box}
                                    type="text"
                                    id="firstname"
                                    placeholder="Enter first name"
                                    required="true"
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>
                           <div className={styles.profileFormBox}>
                              <h3>Middle Name(Optional)</h3>
                              <div className={styles.formBoxNameInputs}>
                                 <input
                                    name="middleName"
                                    className={styles.input_box}
                                    type="text"
                                    id="middlename"
                                    placeholder="Enter middle name"
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>
                           <div className={styles.profileFormBox}>
                              <h3>Last Name</h3>
                              <div className={styles.formBoxNameInputs}>
                                 <input
                                    name="lastName"
                                    className={styles.input_box}
                                    type="text"
                                    id="lastname"
                                    placeholder="Enter last name"
                                    required="true"
                                    onChange={handleChange}
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
                                    className={styles.input_box}
                                    type="email"
                                    id="email"
                                    placeholder="Someone@gmail.com"
                                    required="true"
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>{' '}
                           <div className={styles.profileFormBox}>
                              <h3>Date of Birth</h3>
                              <div className={styles.formBoxNameInputs}>
                                 <input
                                    type="text"
                                    className={styles.input_box}
                                    name="dateOfBirth"
                                    id="date"
                                    placeholder="DD/MM/YYYY"
                                    required="true"
                                    onFocus={(event) =>
                                       (event.target.type = 'date')
                                    }
                                    onBlur={(event) => {
                                       if (!event.target.value) {
                                          event.target.type = 'text';
                                       }
                                    }}
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>
                           <div className={styles.profileFormBox}>
                              <h3>Gender</h3>
                              <div className={styles.formBoxNameInputs}>
                                 <div className={styles.select}>
                                    <select
                                       name="gender"
                                       placeholder="Gender"
                                       required="true"
                                       onChange={handleChange}
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
                                    className={styles.input_box}
                                    type="text"
                                    id="address"
                                    placeholder="Enter house address"
                                    required="true"
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
                  {/* End of personal details */}

                  {/* Section for professional details */}
                  <div className={styles.proffInfo}>
                     <h2 className={styles.title}>Professional Details</h2>
                     <form
                        className={styles.personalInfoFormBox}
                        onSubmit={(e) => {
                           e.preventDefault();
                        }}
                        id="form"
                     >
                        <div className={styles.proffBox}>
                           {/* license number */}
                           <div className={styles.profileFormBox}>
                              <h3>License Number</h3>
                              <div className={styles.formBoxNameInputs}>
                                 <input
                                    name="licenseNum"
                                    className={styles.input_box}
                                    type="text"
                                    id="licenseNum"
                                    placeholder="Enter License Number"
                                    required="true"
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>
                           {/* Specialty */}
                           <div className={styles.profileFormBox}>
                              <h3>Specialty</h3>
                              <div className={styles.formBoxNameInputs}>
                                 <input
                                    name="specialty"
                                    className={styles.input_box}
                                    type="text"
                                    id="specialty"
                                    placeholder="Enter Specialty"
                                    required="true"
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>
                           {/* Hospital code */}
                           <div className={styles.profileFormBox}>
                              <h3>Hospital Code</h3>
                              <div className={styles.formBoxNameInputs}>
                                 <input
                                    name="hospitalCode"
                                    className={styles.input_box}
                                    type="text"
                                    id="hospitalCode"
                                    placeholder="Enter Hospital Code"
                                    required="true"
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
                  {/* End of professional details */}
               </div>
               {/* End of info section */}

               {/* submit button */}
               <div className={styles.btn_div}>
                  <button type="submit" form="form" className={styles.btn}>
                     <span className={styles.btn_text}>Edit Profile</span>
                     <FaCheck className={styles.icon} />
                  </button>
               </div>
            </div>
         </div>
      </>
      // <>

      // </>
   );
}

export default connect(mapStateToProps)(DoctorProfile);
