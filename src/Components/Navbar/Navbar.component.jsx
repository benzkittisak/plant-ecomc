import React from "react";

import { Link } from "react-router-dom";

import './Navbar.style.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-link">
            <Link className="nav-item" to={"/"}>
              หน้าแรก
            </Link>
          </li>
          <li className="nav-link">
            <Link className="nav-item" to={"/"}>
              ร้านค้า
            </Link>
          </li>
          <li className="nav-link">
            <Link className="nav-item" to={"/"}>
              เกี่ยวกับ
            </Link>
          </li>
          <li className="nav-link">
            <Link className="nav-item" to={"/"}>
              ติดต่อ
            </Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar;