import React from "react";

import FormInput from '../form-input/form-input.component';
import CustomButton  from "../custom-button/custom-button.component";

import './sign-up.style.scss'

const SignUp = () => {
    return(
        <div className="sign-up">
            <h2 className="title">ยังไม่มีบัญชีหรอ ?</h2>
            <span>งั้นมาสมัครสมาชิกเลยสิ</span>

            <form >
                <FormInput
                type="text"
                name="displayName"
                value=""
                label="ชื่อที่แสดงบนเว็บ"
                required
                />
                <FormInput
                type="email"
                name="email"
                value=""
                label="อีเมล"
                required
                />
                <FormInput
                type="password"
                name="password"
                value=""
                label="รหัสผ่าน"
                required
                />
                <FormInput
                type="password"
                name="confirmPassword"
                value=""
                label="ยืนยันรหัสผ่าน"
                required
                />
                <CustomButton type="submit" >สมัครสมาชิก</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;