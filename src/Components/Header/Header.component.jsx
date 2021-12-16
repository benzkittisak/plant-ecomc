import React from "react";

import Navbar from "../Navbar/Navbar.component";

import "./Header.style.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-grid">
        <div className="header-column">ยังไม่รู้จะใส่อะไร</div>
        <div className="header-column">
          <div className="header-header">Plant</div>
        </div>
        <div className="header-column">ไว้จะใส่พวกตะกร้าสินค้ากับ Login ละกัน</div>
      </div>
     <Navbar/>
    </header>
  );
};

export default Header;
