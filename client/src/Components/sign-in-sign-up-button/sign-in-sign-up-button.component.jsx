import React from "react";
import { Link } from "react-router-dom";



import "./sign-in-sign-up-button.style.scss";

const SignInSignUpButton = () => {
  return (
    <div className="sign-in-sing-up-button">
      <Link className="s-button" to={"/signin"}>
        เข้าสู่ระบบ
      </Link>
    </div>
  );
};



export default SignInSignUpButton;
