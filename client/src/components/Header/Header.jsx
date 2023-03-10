import React from "react";
import "./Header.css";
import brand from '/images/brand.png';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="brand">
            <img src={brand} alt="Shift Together" />
        </div>

        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-btns">
          <NavLink to="/login" className="">
            <button className="header-btn" id="h-login-btn">Login</button>
          </NavLink>

          <NavLink to="/signup" className="">
            <button className="header-btn" id="h-signup-btn">Signup</button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
