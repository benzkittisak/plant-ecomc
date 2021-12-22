import React, { useState } from "react";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.style.scss";

const SignUp = ({ signUpStart }) => {
  const [userData, setUserData] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });
  const { email, displayName, password, confirmPassword } = userData;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("รหัสไม่ตรงกัน");
      return;
    }
    signUpStart(userData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  console.log(displayName);
  return (
    <div className="sign-up">
      <h2 className="title">ยังไม่มีบัญชีหรอ ?</h2>
      <span>งั้นมาสมัครสมาชิกเลยสิ</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="ชื่อที่แสดงบนเว็บ"
          required
        />
        <FormInput
          type="email"
          name="email"
          label="อีเมล"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="รหัสผ่าน"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="ยืนยันรหัสผ่าน"
          required
        />
        <CustomButton type="submit">สมัครสมาชิก</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userData) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
