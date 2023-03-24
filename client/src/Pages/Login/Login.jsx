import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { BiLock, BiUser } from "react-icons/bi";
import loginBG from "/images/login_bg.png";
import RentWidget from "../../components/RentWidget/RentWidget";

const Login = () => {
  return (
    <div className="main-wrapper">
      {/* rent widget */}
      <RentWidget/>

      {/* Login Section */}
      <section className="login">
        <div className="login-container">
          <div className="login-row">
            <div className="login-col" id="login-img-col">
              <div className="login-img">
                <img src={loginBG} alt="image" />
              </div>
            </div>
            <div className="login-col">
              <div className="login-form-container">
                <div className="login-heading">
                  <h4 className="login-text p-2">Login</h4>
                </div>

                {/* Login Form */}
                <form className="login-form">
                  <div className="form-group">
                    <div className="form-icon">
                      <BiUser />
                    </div>
                    <input
                      type="email"
                      name="user-email"
                      className="login-form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-icon">
                      <BiLock />
                    </div>
                    <input
                      type="password"
                      name="user-password"
                      className="login-form-control"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <input type="submit" value="Login" className="login-btn" />
                </form>

                <div className="login-text my-2">
                <Link to="/signup" className="signup-link">
                  Don't have an account? Signup
                </Link>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
