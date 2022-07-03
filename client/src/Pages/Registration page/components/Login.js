import { useState } from 'react';
import { FaRegUser, FaShower } from 'react-icons/fa';
import { MdOutlineVpnKey } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import Alert from './Alert'
import './login.css'
import loginImage from '../../../images/loginimage.svg'

function Login(props) {
    /* Code below handles user inputs, checks and form submissions */
    const [hidePassword, setHidePassword] = useState(true);
    const [hidePasswordOne, setHidePasswordOne] = useState(true);
    const [hidePasswordTwo, setHidePasswordTwo] = useState(true);
    console.log(props)
    const { submitLoginHandler, handleLoginPassword, handleLoginUser, loginPassword, loginPasswordError, loginUser, loginUserError, msg, show, signupUser}= props

    return (
        <section className="login-container">
            <div className="login-body" >
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                            className="login-form"
                        >
                            <h1 className="title">Welcome Back</h1>
                            <p>Please enter your details</p>
                            {/* <div className="server-message"></div> */}
                            <h3>Email</h3>
                            <div
                                    className = {`input-field ${loginPasswordError && 'error'}`}

                            >
                                <i>
                                    <FaRegUser />
                                </i>
                                <input
                                    type="text"
                                    id="login-username"
                                    placeholder="someone@example.com"
                                    ref={loginUser}
                                    onChange={() => {
                                        handleLoginUser();
                                    }}
                                />
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
                            </div>                            <h3>Password</h3>
                            <div
                                className={`input-field ${loginPasswordError && 'error'}`}
                                >
                                <i>
                                    <MdOutlineVpnKey />
                                </i>
                                <input
                                    type={hidePassword ? 'password' : 'text'}
                                    id="login-password"
                                    placeholder="Enter your password"
                                    ref={loginPassword}
                                    onChange={() => {
                                        handleLoginPassword();
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
                            </div>                                <div className="password-reset">
                                    <a href="">Forgot password?</a>
                                    </div>
                            <div className="submit">

                            <input
                                type="submit"
                                id="login-submit"
                                value="login"
                                className={
                                    loginUserError ||
                                        loginPasswordError
                                        ? 'btn inactive'
                                        : 'btn solid'
                                    }
                                    disabled={
                                        loginUserError ||
                                        loginPasswordError ||
                                        loginPasswordError
                                    }
                                    onClick={() => {
                                        submitLoginHandler();
                                    }}
                                    />
                                    <div className="signup-toggle">
                                    <p>New Here ? <a href="">Sign up</a></p>
                                    </div>
                            </div>
                        </form>

                   </div>
            <div className="right-side">
               <h1>Eirhub</h1>
               <p>Health is an everyday thing</p>
               <img src={loginImage} alt=""/>
           </div>
        </section>
    );
}

export default Login;
