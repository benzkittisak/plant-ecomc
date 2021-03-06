import React, { useState } from "react";
import { connect } from "react-redux";

import { googleSignInStart , emailSignInStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.style.scss";

const SignIn = ({googleSignInStart , emailSignInStart}) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { email, password } = userData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    emailSignInStart(email,password)
  }
  return (
    <div className="sign-in">
      <h2 className="title">มีบัญชีอยู่แล้วหรือ ?</h2>
      <span>เข้าสู่ระบบด้วยอีเมลของคุณกันเลย</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          label="อีเมล"
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="รหัสผ่าน"
          required
          handleChange={handleChange}
        />

        <div className="button-container">
            <CustomButton type="submit">เข้าสู่ระบบ</CustomButton>
            <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>เข้าสู่ระบบด้วย Google</CustomButton>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({email , password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
