import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import { selectCartHidden } from "../../redux/cart/cart.selectors";

import Navbar from "../Navbar/Navbar.component";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import SignInSignUpButton from "../sign-in-sign-up-button/sign-in-sign-up-button.component";

import "./Header.style.scss";

const Header = ({ hidden }) => {
  return (
    <header className="header-container">
      <div className="header-grid">
        <div className="header-column"></div>
        <div className="header-column">
          <div className="header-header">Plant</div>
        </div>
        <div className="header-column">
          <SignInSignUpButton />
          <CartIcon />
        </div>
      </div>
      <Navbar />

      {hidden ? null : <CartDropdown />}
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
