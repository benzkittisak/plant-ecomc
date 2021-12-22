import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { Link } from "react-router-dom";

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from "../../redux/user/user.actions";

import "./sign-in-sign-up-button.style.scss";

const SignInSignUpButton = ({currentUser , signOut}) => {
  return (
    <div className="sign-in-sing-up-button">
      {
        currentUser ? (
          
          <div className="sign-out">
            <span className="displayName">{currentUser.displayName}</span>
            <button type="button" onClick={signOut} className="sign-out-button">ออกจากระบบ</button>
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

const mapDispathToProps = dispatch => ({
  signOut : () => dispatch(signOutStart())
})

export default connect(mapStateToProps , mapDispathToProps)(SignInSignUpButton);
