import { useState } from 'react';
import signUpImg from '../../../images/imagetwo.svg';
import loginImg from '../../../images/imageone.svg';
import { FaRegUser, FaShower } from 'react-icons/fa';
import { MdOutlineVpnKey } from 'react-icons/md';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import Alert from './Alert'
import './login.css'

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
                            <h2 className="title">Welcome Back</h2>
                            <p>Please enter your details</p>
                            {/* <div className="server-message"></div> */}
                            <h3>Email</h3>
                            <div
                                className={
                                    loginUserError ? 'error' : 'input-field'
                                }
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
                            {loginUserError && <Alert show={show} msg={msg} />}
                            <h3>Password</h3>
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
                            {loginPasswordError && <Alert show={show} msg={msg} />}
                            <div className="submit">

                            <input
                                type="submit"
                                id="login-submit"
                                value="login"
                                className={
                                    loginUserError ||
                                        loginPasswordError
                                        ? 'btn-inactive solid'
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
                                    <p>New Here ? <a href="">Sign up</a></p>
                            </div>
                        </form>

                   </div>
            <div className="sideimage">
               <h1>Eirhub</h1>
               <p>Health is an everyday thing</p>
           </div>
        </section>
    );
}

export default Login;
