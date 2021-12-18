import React from "react";

import Navbar from "../Navbar/Navbar.component";
import CartIcon from "../cart-icon/cart-icon.component";

import "./Header.style.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-grid">
        <div className="header-column">ยังไม่รู้จะใส่อะไร</div>
        <div className="header-column">
          <div className="header-header">Plant</div>
        </div>
        <div className="header-column">
          <CartIcon />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
