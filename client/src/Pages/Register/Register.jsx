import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { BiUser, BiAt, BiMobileAlt, BiLock } from "react-icons/bi";
import signupImg from "/images/signup_bg.png";
import RentWidget from "../../components/RentWidget/RentWidget";

const Register = () => {
  return (
    <div className="main-wrapper">
{/* Rent Widget */}
      <RentWidget/>
      <section className="signup">
        <div className="signup-container">
          <div className="signup-row">
            <div className="signup-col">
              <div className="signup-form-container">
                <div className="signup-heading">
                  <h4 className="signup-text p-2">Signup</h4>
                </div>
                <form className="signup-form">
                  <div className="form-group">
                    <div className="form-icon">
                      <BiUser />
                    </div>
                    <input
                      type="text"
                      name="username"
                      className="signup-form-control"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-icon">
                      <BiAt />
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="signup-form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-icon">
                      <BiMobileAlt />
                    </div>
                    <input
                      type="text"
                      name="phone"
                      className="signup-form-control"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-icon">
                      <BiLock />
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="signup-form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-icon">
                      <BiLock />
                    </div>
                    <input
                      type="password"
                      name="conPassword"
                      className="signup-form-control"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>

                  <input type="submit" value="signup" className="signup-btn" />
                </form>

                <div className="signup-text my-2">
                  <Link to="/login" className="login-link">
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>

            <div className="signup-col" id="signup-img-col">
              <div className="signup-img">
                <img src={signupImg} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
