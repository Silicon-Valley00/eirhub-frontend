import React, { useState, useRef, useEffect } from "react";
import signUp from '../images/femaleDoctor.jpg'
import signIn from '../images/maleDoctor.jpg'

function Startpage() {
    /*Code below handles switch in startpages and modal */
    //States
    const [changePage, changePageHandler] = useState(true);
    const [errorMessages, errorMessageHandler] = useState([]);
    const [errorMessagesTwo, errorMessageTwoHandler] = useState([]);
    const [modalChange, modalChangehandler] = useState(false);
    //Handles close of modal
    function closeModal() {
        modalChangehandler(false);
    }
    //Handles change for sign in page
    function pageChangeSignin() {
        changePageHandler(true);
    }
    //Handles change for sign up page
    function pageChangeSignup() {
        changePageHandler(false);
    }

    /* Code below handles user inputs, checks and form submissions */
    // User sign in refs
    const signinUser = useRef();
    const signinPassword = useRef();
    // User sign up refs
    const signupUser = useRef();
    const signupEmail = useRef();
    const signupPassword = useRef();
    const signupPasswordconfirm = useRef();

    useEffect(() => {
        if (errorMessages.length > 0) {
            modalChangehandler(true);
        }
    }, [errorMessages]);
    useEffect(() => {
        if (errorMessagesTwo.length > 0) {
            modalChangehandler(true);
        }
    }, [errorMessagesTwo]);

    function submitSigninHandler() {
        errorMessageHandler([]);
        errorMessageTwoHandler([]);
        let enteredSignInName = signinUser.current.value;
        let enteredSignInPassword = signinPassword.current.value;

        let enteredSignUpName = signupUser.current.value;
        let enteredSignUpEmail = signupEmail.current.value;
        let enteredSignUpPassword = signupPassword.current.value;
        let enteredSignUpPasswordconfirm = signupPasswordconfirm.current.value;

        // Checks for errors in entered values
        let count = 0;
        var pattern = /^[a-zA-Z ]+$/;
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        //Sign in value checks
        if (changePage) {
            if (enteredSignInName === "") {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Username is required",
                ]);
            } else if (enteredSignInName.match(pattern)) {
                count++;
            } else {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Your username must contain only letters",
                ]);
            }

            if (enteredSignInPassword === "") {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Passsword is required",
                ]);
            } else if (enteredSignInPassword.length < 8) {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must be at least 8 charaters long containing numerical values and special characters",
                ]);
            } else if (enteredSignInPassword.search(/[0-9]/) === -1) {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a numerical value",
                ]);
            } else if (enteredSignInPassword.search(/[a-z]/) === -1) {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a small letter",
                ]);
            } else if (enteredSignInPassword.search(/[A-Z]/) === -1) {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a capital letter.",
                ]);
            } else if (
                enteredSignInPassword.search(/[!@#$%^&*()+.,?;'":]/) === -1
            ) {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a special character",
                ]);
            } else {
                count++;
            }
            //Sign up values ckeck
        } else {
            if (enteredSignUpName === "") {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Username is required",
                ]);
            } else if (enteredSignUpName.match(pattern)) {
                count++;
            } else {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Your username must contain only letters",
                ]);
            }

            if (enteredSignUpEmail === "") {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Email is required",
                ]);
            } else if (enteredSignUpEmail.match(emailPattern)) {
                count++;
            } else {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Invalid email",
                ]);
            }

            if (enteredSignUpPassword === "") {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Passsword is required",
                ]);
            } else if (enteredSignUpPassword.length < 8) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must be at least 8 charaters long containing numerical values and special characters",
                ]);
            } else if (enteredSignUpPassword.search(/[0-9]/) === -1) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a numerical value",
                ]);
            } else if (enteredSignUpPassword.search(/[a-z]/) === -1) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a small letter",
                ]);
            } else if (enteredSignUpPassword.search(/[A-Z]/) === -1) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a capital letter.",
                ]);
            } else if (
                enteredSignUpPassword.search(/[!@#$%^&*()+.,?;'":]/) === -1
            ) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a special character",
                ]);
            } else {
                count++;
            }

            if (enteredSignUpPassword === "") {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Passsword confirmation is required",
                ]);
            } else if (enteredSignUpPassword !== enteredSignUpPasswordconfirm) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Passwords do not match",
                ]);
            } else {
                count++;
            }
        }

        const signinData = {
            name: enteredSignInName,
            password: enteredSignInPassword,
        };
        const signupData = {
            name: enteredSignUpName,
            email: enteredSignUpEmail,
            password: enteredSignUpPassword,
        };
        //Outputs sign in details when successful
        if (count === 2 && changePage === true) {
            console.log(signinData);
        } //Outputs sign up details when successful
        else if (count === 4 && changePage === false) {
            console.log(signupData);
        }
    }

    return (
        <div
            className={["container", !changePage && "sign-up-mode"]
                .filter((e) => !!e)
                .join(" ")}
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
                        <div className="input-field">
                            <input
                                type="text"
                                id="login-username"
                                placeholder="Username"
                                ref={signinUser}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="password"
                                id="login-password"
                                placeholder="Password"
                                ref={signinPassword}
                            />
                        </div>
                        <input
                            type="submit"
                            id="login-submit"
                            value="Login"
                            className="btn solid"
                            onClick={submitSigninHandler}
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
                        <div className="input-field">
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                ref={signupUser}
                            />
                        </div>

                        <div className="input-field">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                ref={signupEmail}
                            />
                        </div>
                        <div className="msg-two"></div>
                        <div className="input-field">
                            <input
                                type="password"
                                id="password1"
                                placeholder="Password"
                                ref={signupPassword}
                            />
                        </div>

                        <div className="input-field">
                            <input
                                type="password"
                                id="password2"
                                placeholder="Confirm Password"
                                ref={signupPasswordconfirm}
                            />
                        </div>

                        <input
                            type="submit"
                            id="submit-btn"
                            value="Register"
                            className="btn solid"
                            onClick={submitSigninHandler}
                        />
                    </form>
                </div>
            </div>

            <div className="panel-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ab, sit.
                        </p>
                        <button
                            className="btn transparent"
                            id="sign-up-btn"
                            onClick={pageChangeSignup}
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
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Assumenda id cumque sit?
                        </p>
                        <button
                            className="btn transparent"
                            id="sign-in-btn"
                            onClick={pageChangeSignin}
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

// const Login = () => {
//     return (
//         <div>
//             <h2>Login</h2>
//             <form action="">
//                 <input type="text" placeholder="name"/>
//                 <input type="email" placeholder="email"/>
//                 <input type="password" placeholder="password"/>
//                 <input type="radio"/>
//             </form>

//         </div>
//     )
// }

// export default Login


