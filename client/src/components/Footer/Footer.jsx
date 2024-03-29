import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="f-row d-flex justify-content-around p-4">
          <div className="f-col d-flex align-items-center justify-content-center" id="company">
            <h3 className="text-uppercase">Shift Together</h3>
          </div>
          <div className="f-col">
            <h3>Company</h3>
            <ul className="d-flex flex-column">
              <li className="py-1">
                <Link to="/"> Home</Link>
              </li>
              <li className="py-1">
                <Link to="/about">About</Link>
              </li>
              <li className="py-1">
                <Link to="/contact"> Contact</Link>
              </li>
              <li className="py-1">
                <Link to="/helpline"> Help</Link>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h3>Follow us</h3>
            <ul className="d-flex my-2">
              <li className="mx-2">
                <Link to="https://www.facebook.com/profile.php?id=100091761383031" target="_blank">
                  <FaFacebook className="f-icon" />
                </Link>
              </li>
              <li className="mx-2">
                <Link to="https://twitter.com/Shift_Together" target="_blank">
                  <FaTwitter className="f-icon" />
                </Link>
              </li>
              <li className="mx-2">
                <Link to="https://instagram.com/shifttogetherwebsite?igshid=ZDdkNTZiNTM=" target="_blank">
                  <FaInstagram className="f-icon" />
                </Link>
              </li>
              <li className="mx-2">
                <Link to="https://www.linkedin.com/in/shift-together-596698273/" target="_blank">
                  <FaLinkedin className="f-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cr">
        <p className="p-4">&copy; 2023 | Shift Together Pvt. Ltd. </p>
      </div>
    </footer>
  );
};

export default Footer;
