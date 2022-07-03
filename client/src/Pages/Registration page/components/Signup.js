import React, { useState } from 'react';
import './signup.css';
import signUp from '../../../images/signupimage.svg';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';
import { IoCalendar } from 'react-icons/io5';
import { IoWarning } from 'react-icons/io5';

function Signup(props) {
   const { msg, show } = props
   // Handles password visibilty
   const [hidePasswordOne, setHidePasswordOne] = useState(true);
   const [hidePasswordTwo, setHidePasswordTwo] = useState(true);
   return (
      <section className="signup-body">
         <div id="signup-content" className={props.modal ? 'active' : ''}>
            <div className="signup-container">
               <div className="left-region">
                  <h3>Eirhub</h3>
                  <div className="left-region-info-one">
                     <p>Sign up today and get in touch</p>
                  </div>

                  <div className="left-region-info-two">
                     <p> with doctors you can trust</p>
                  </div>
                  <div className="left-region-image">
                     <img src={signUp} alt="Sign-up image" />
                  </div>
               </div>
               <div className="right-region">
                  <div className="signup-form-title">
                     <h3>Create New Account</h3>
                     <p>Take control of your health today</p>
                  </div>
                  <div className="signup-form">
                     <div className="signup-form-box-names">
                        <div className="signup-form-box-name">
                           <label htmlFor="firstname"> Firstname</label>
                           <div
                              className={
                                 props.registerNameError
                                    ? 'signup-form-box-name-inputs-error'
                                    : 'signup-form-box-name-inputs'
                              }
                           >
                              <i>
                                 <FaRegUser />
                              </i>
                              <input
                                 name="firstname"
                                 type="text"
                                 id="firstname"
                                 placeholder="Enter Firstname"
                                 ref={props.signupFirstname}
                                 onChange={() => {
                                    props.handleRegisterUser();
                                 }}
                              />
                           </div>
                        </div>
                        <div className="signup-form-box-name">
                           <label htmlFor="lastname"> Lastname</label>
                           <div
                              className={
                                 props.registerNameError
                                    ? 'signup-form-box-name-inputs-error'
                                    : 'signup-form-box-name-inputs'
                              }
                           >
                              <i>
                                 <FaRegUser />
                              </i>
                              <input
                                 name="lastname"
                                 type="text"
                                 id="lastname"
                                 placeholder="Enter Lastname"
                                 ref={props.signupLastname}
                                 onChange={() => {
                                    props.handleRegisterUser();
                                 }}
                              />
                           </div>
                        </div>
                     </div>
                     <div
                        className={
                           props.registerNameError
                              ? 'error-message-box'
                              : 'no-error-message-box'
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerNameErrorMessage}</p>
                     </div>
                     <div className="signup-form-box">
                        <label htmlFor="date"> Date</label>
                        <div
                           className={
                              props.registerDateError
                                 ? 'signup-form-box-inputs-error'
                                 : 'signup-form-box-inputs'
                           }
                        >
                           <i>
                              <IoCalendar />
                           </i>
                           <input
                              type="text"
                              name="date"
                              id="date"
                              placeholder="DD/MM/YYYY"
                              ref={props.signupDate}
                              onFocus={(event) => (event.target.type = 'date')}
                              onBlur={(event) => {
                                 if (!event.target.value) {
                                    event.target.type = 'text';
                                 }
                              }}
                              onChange={() => {
                                 props.handleRegisterDate();
                              }}
                           />
                        </div>
                     </div>
                     <div
                        className={
                           props.registerDateError
                              ? 'error-message-box'
                              : 'no-error-message-box'
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerDateErrorMessage}</p>
                     </div>
                     <div className="signup-form-box">
                        <label htmlFor="email"> Email</label>
                        <div
                           className={
                              props.registerEmailError
                                 ? 'signup-form-box-inputs-error'
                                 : 'signup-form-box-inputs'
                           }
                        >
                           <i>
                              <IoIosMail />
                           </i>
                           <input
                              name="email"
                              type="email"
                              id="email"
                              placeholder="Enter mail"
                              ref={props.signupEmail}
                              onChange={() => {
                                 props.handleRegisterEmail();
                              }}
                           />
                        </div>
                     </div>
                     <div
                        className={
                           props.registerEmailError
                              ? 'error-message-box'
                              : 'no-error-message-box'
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerEmailErrorMessage}</p>
                     </div>
                     <div className="signup-form-box">
                        <label htmlFor="passwordone"> Password</label>
                        <div
                           className={
                              props.registerPasswordOneError
                                 ? 'signup-form-box-inputs-error'
                                 : 'signup-form-box-inputs'
                           }
                        >
                           <i>
                              <RiLockPasswordFill />
                           </i>
                           <input
                              type={hidePasswordOne ? 'password' : 'text'}
                              name="password"
                              id="password1"
                              placeholder="Enter a password"
                              ref={props.signupPassword}
                              onChange={() => {
                                 props.handleRegisterPassword();
                              }}
                           />
                           <i
                              onClick={() =>
                                 setHidePasswordOne(!hidePasswordOne)
                              }
                           >
                              {hidePasswordOne ? (
                                 <AiOutlineEye />
                              ) : (
                                    <AiOutlineEyeInvisible />
                                 )}
                           </i>
                        </div>
                     </div>
                     <div
                        className={
                           props.registerPasswordOneError
                              ? 'error-message-box'
                              : 'no-error-message-box'
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerPasswordOneErrorMessage}</p>
                     </div>

                     <div className="signup-form-box">
                        <label htmlFor="passwordconfirm">
                           Confirm Password
                        </label>
                        <div
                           className={
                              props.registerPasswordTwoError
                                 ? 'signup-form-box-inputs-error'
                                 : 'signup-form-box-inputs'
                           }
                        >
                           <i>
                              <RiLockPasswordFill />
                           </i>
                           <input
                              name="passwordconfirm"
                              type={hidePasswordTwo ? 'password' : 'text'}
                              id="password2"
                              placeholder="Confirm your password"
                              ref={props.signupPasswordconfirm}
                              onChange={() => {
                                 props.handleRegisterPasswordConfirm();
                              }}
                           />
                           <i
                              onClick={() =>
                                 setHidePasswordTwo(!hidePasswordTwo)
                              }
                           >
                              {hidePasswordTwo ? (
                                 <AiOutlineEye />
                              ) : (
                                    <AiOutlineEyeInvisible />
                                 )}
                           </i>
                        </div>
                     </div>
                     <div
                        className={
                           props.registerPasswordTwoError
                              ? 'error-message-box'
                              : 'no-error-message-box'
                        }
                     >
                        <i>
                           <IoWarning />
                        </i>
                        <p>{props.registerPasswordTwoErrorMessage}</p>
                     </div>
                     <div className="signup-form-button">
                        <input
                           type="submit"
                           id="submit-btn"
                           value="Create Account"
                           className={
                              props.registerNameError === true ||
                                 props.registerEmailError === true ||
                                 props.registerDateError === true ||
                                 props.registerPasswordOneError === true ||
                                 props.registerPasswordTwoError === true ||
                                 props.registerPasswordTwoError === null
                                 ? 'signup-btn-inactive '
                                 : 'signup-btn'
                           }
                           disabled={
                              props.registerNameError === true ||
                              props.registerEmailError === true ||
                              props.registerDateError === true ||
                              props.registerPasswordOneError === true ||
                              props.registerPasswordTwoError === true ||
                              props.registerPasswordTwoError === null
                           }
                        />
                     </div>
                     <div className="signup-form-message">
                        <p>Already have an account?</p>
                        <p id="signup-form-message-p">Login</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Signup;
