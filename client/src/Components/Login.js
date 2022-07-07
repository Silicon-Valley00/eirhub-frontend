import { useState } from 'react';
import signUp from '../images/femaleDoctor.jpg';
import signIn from '../images/maleDoctor.jpg';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineVpnKey } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

function Startpage(props) {
   /* Code below handles user inputs, checks and form submissions */
   const [hidePassword, setHidePassword] = useState(true);
   const [hidePasswordOne, setHidePasswordOne] = useState(true);
   const [hidePasswordTwo, setHidePasswordTwo] = useState(true);

   return (
      <div
         className={['container', !props.changePage && 'sign-up-mode']
            .filter((e) => !!e)
            .join(' ')}
      >
         <div className="forms-container">
            <div className="signin-signup">
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
                  className="sign-in-form"
               >
                  <h2 className="title">Sign In</h2>
                  {/* <div className="server-message"></div> */}
                  <div
                     className={props.loginUserError ? 'error' : 'input-field'}
                  >
                     <i>
                        <FaRegUser />
                     </i>
                     <input
                        type="text"
                        id="login-username"
                        placeholder="Username"
                        ref={props.signinUser}
                        onKeyUp={() => {
                           props.handleLoginUser();
                        }}
                     />
                  </div>
                  <div
                     className={
                        props.loginPasswordError ? 'error' : 'input-field'
                     }
                  >
                     <i>
                        <MdOutlineVpnKey />
                     </i>
                     <input
                        type={hidePassword ? 'password' : 'text'}
                        id="login-password"
                        placeholder="Password"
                        ref={props.signinPassword}
                        onKeyUp={() => {
                           props.handleLoginPassword();
                        }}
                     />
                     <i onClick={() => setHidePassword(!hidePassword)}>
                        {hidePassword ? (
                           <AiOutlineEye />
                        ) : (
                           <AiOutlineEyeInvisible />
                        )}
                     </i>
                  </div>
                  <input
                     type="submit"
                     id="login-submit"
                     value="Login"
                     className={
                        props.login ? 'btn-inactive solid' : 'btn solid'
                     }
                     disabled={props.login}
                     onClick={() => {
                        props.submitSigninHandler();
                     }}
                  />
               </form>

               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
                  className="sign-up-form"
               >
                  <h2 className="title">Sign Up</h2>
                  {/* <!-- <div className="server-message"></div> --> */}
                  <div
                     className={
                        props.registerUserError ? 'error' : 'input-field'
                     }
                  >
                     <i>
                        <FaRegUser />
                     </i>
                     <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        ref={props.signupUser}
                        onKeyUp={() => {
                           props.handleRegisterUser();
                        }}
                     />
                  </div>

                  <div
                     className={
                        props.registerEmailError ? 'error' : 'input-field'
                     }
                  >
                     <i>
                        <HiOutlineMail />
                     </i>
                     <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        ref={props.signupEmail}
                        onKeyUp={() => {
                           props.handleRegisterEmail();
                        }}
                     />
                  </div>
                  <div className="msg-two"></div>
                  <div
                     className={
                        props.registerPasswordOneError ? 'error' : 'input-field'
                     }
                  >
                     <i>
                        <MdOutlineVpnKey />
                     </i>
                     <input
                        type={hidePasswordOne ? 'password' : 'text'}
                        id="password1"
                        placeholder="Password"
                        ref={props.signupPassword}
                        onKeyUp={() => {
                           props.handleRegisterPassword();
                        }}
                     />
                     <i onClick={() => setHidePasswordOne(!hidePasswordOne)}>
                        {hidePasswordOne ? (
                           <AiOutlineEye />
                        ) : (
                           <AiOutlineEyeInvisible />
                        )}
                     </i>
                  </div>

                  <div
                     className={
                        props.registerPasswordTwoError ? 'error' : 'input-field'
                     }
                  >
                     <i>
                        <MdOutlineVpnKey />
                     </i>
                     <input
                        type={hidePasswordTwo ? 'password' : 'text'}
                        id="password2"
                        placeholder="Confirm Password"
                        ref={props.signupPasswordconfirm}
                        onKeyUp={() => {
                           props.handleRegisterPasswordConfirm();
                        }}
                     />
                     <i onClick={() => setHidePasswordTwo(!hidePasswordTwo)}>
                        {hidePasswordTwo ? (
                           <AiOutlineEye />
                        ) : (
                           <AiOutlineEyeInvisible />
                        )}
                     </i>
                  </div>

                  <input
                     type="submit"
                     id="submit-btn"
                     value="Register"
                     className={
                        props.register ? 'btn-inactive solid' : 'btn solid'
                     }
                     disabled={props.register}
                     onClick={() => {
                        props.submitSigninHandler();
                     }}
                  />
               </form>
            </div>
         </div>

         <div className="panel-container">
            <div className="panel left-panel">
               <div className="content">
                  <h3>New here?</h3>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Ab, sit.
                  </p>
                  <button
                     className="btn transparent"
                     id="sign-up-btn"
                     onClick={() => {
                        props.pageChangeSignup();
                     }}
                  >
                     Sign Up
                  </button>
               </div>
               <img src={signUp} className="image" alt="Sign up logo" />
            </div>
            <div className="panel right-panel">
               <div className="content">
                  <h3>Have an account?</h3>
                  <p>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Assumenda id cumque sit?
                  </p>
                  <button
                     className="btn transparent"
                     id="sign-in-btn"
                     onClick={() => {
                        props.pageChangeSignin();
                     }}
                  >
                     Sign In
                  </button>
               </div>
               <img src={signIn} className="image" alt="Sign in logo" />
            </div>
         </div>
      </div>
   );
}

export default Startpage;