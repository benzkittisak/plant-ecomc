import React from "react";

import './signin-signup.style.scss';

import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from '../../Components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {
    return(
        <div className="sign-in-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage;