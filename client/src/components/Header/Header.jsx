import React, { useEffect } from "react";
import "./Header.css";
import brand from "/images/brand.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaLeaf } from "react-icons/fa";
import { useState } from "react";
import { animate, motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const openWidget = () => {
    const widget = document.querySelector(".widget-wrapper");
    if (widget) {
      widget.classList.add("show-widget");
    }
  };

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/logout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }

      localStorage.removeItem("token");
      setIsLoggedIn(false); // <-- Update isLoggedIn state immediately
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <motion.header
      initial={{ marginTop: "-75" }}
      animate={{ marginTop: 0 }}
      transition={{ type: "spring", delay: 0.4 }}
    >
      <div className="header-container">
        <div className="header-row">
          <div className="menubar">
            <FaBars onClick={toggleNavbar} />
          </div>

          <motion.div className="brand" initial={{}}>
            <NavLink to="/">
              <img src={brand} alt="Shift Together" />
            </NavLink>
          </motion.div>
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
              <NavLink
                to="/helpline"
                className="nav-link"
                onClick={closeNavbar}
              >
                Helpline
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-btns">
          {isLoggedIn ? (
            <button className="header-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink to="/login" onClick={closeNavbar}>
              <button className="header-btn">Login</button>
            </NavLink>
          )}
          <button
            className="header-btn"
            id="header-rent-btn"
            onClick={openWidget}
          >
            Rent a Flat
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
