import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { Link } from "react-router-dom";

import { selectCurrentUser } from '../../redux/user/user.selectors';

import "./sign-in-sign-up-button.style.scss";

const SignInSignUpButton = ({currentUser}) => {
  return (
    <div className="sign-in-sing-up-button">
      {
        currentUser ? (
          
          <div className="sign-out">
            <span className="displayName">{currentUser.displayName.split(' ')[0]}</span>
            <button type="button" className="sign-out-button">ออกจากระบบ</button>
          </div>
        ) : (
           <Link className="s-button" to={"/signin"}>
        เข้าสู่ระบบ
      </Link>
        )
      }
     
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

export default connect(mapStateToProps)(SignInSignUpButton);
