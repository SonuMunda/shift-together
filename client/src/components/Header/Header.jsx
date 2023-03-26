import React from "react";
import "./Header.css";
import brand from "/images/brand.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const openWidget = () => {
    const widget = document.querySelector(".rent-widget");
    if (widget) {
      widget.classList.add("show-widget");
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-row">
          <div className="menubar">
            <FaBars onClick={toggleNavbar} />
          </div>

          <div className="brand">
            <NavLink to="/">
              <img src={brand} alt="Shift Together" />
            </NavLink>
          </div>
        </div>

        <nav className={`navbar ${isOpen ? "show-navbar" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={closeNavbar}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" onClick={closeNavbar}>
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link" onClick={closeNavbar}>
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-btns">
          <button
            className="header-btn"
            id="header-rent-btn"
            onClick={openWidget}
          >
            Rent a Flat
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
