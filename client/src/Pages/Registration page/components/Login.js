import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './login.css'
import loginImage from '../../../images/loginimage.svg'
import { IoWarning } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';

function Login(props) {
    /* Code below handles user inputs, checks and form submissions */
    const [hidePassword, setHidePassword] = useState(true);
    const [hidePasswordOne, setHidePasswordOne] = useState(true);
    const [hidePasswordTwo, setHidePasswordTwo] = useState(true);
    console.log(props)
    const { submitLoginHandler,loginEmailErrorMessage,loginPasswordErrorMessage, handleLoginPassword, handleloginEmail, loginPassword, loginPasswordError, loginEmail, loginEmailError, msg, show, signupUser } = props

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
                        className={`input-field ${loginEmailError && 'error'}`}

                    >
                        <i>
                            <IoIosMail />
                        </i>
                        <input
                            type="text"
                            id="login-username"
                            placeholder="someone@example.com"
                            ref={loginEmail}
                            onChange={() => {
                                handleloginEmail();
                            }}
                        />
                    </div>
                    <div
                        className={
                            loginEmailError
                                ? 'error-message-box'
                                : 'no-error-message-box'
                        }
                    >
                        <i>
                            <IoWarning />
                        </i>
                        <p>{loginEmailErrorMessage}</p>
                    </div>
                    <h3>Password</h3>
                    <div
                        className={`input-field ${loginPasswordError && 'error'}`}
                    >
                        <i>
                            <RiLockPasswordFill />
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
                            {hidePassword ? 
                                <AiOutlineEye />
                             : 
                                    <AiOutlineEyeInvisible />
                                }
                        </i>
                    </div>
                    <div
                        className={
                            loginPasswordError
                                ? 'error-message-box'
                                : 'no-error-message-box'
                        }
                    >
                        <i>
                            <IoWarning />
                        </i>
                        <p>{loginPasswordErrorMessage}</p>
                    </div>
                    <div className="password-reset">
                        <a href="">Forgot password?</a>
                    </div>
                    <div className="submit">

                        <input
                            type="submit"
                            id="login-submit"
                            value="login"
                            className={
                                loginEmailError ||
                                    loginPasswordError
                                    ? 'btn inactive'
                                    : 'btn solid'
                            }
                            disabled={
                                loginEmailError ||
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
                <img src={loginImage} alt="" />
            </div>
        </section>
    );
}

export default Login;
