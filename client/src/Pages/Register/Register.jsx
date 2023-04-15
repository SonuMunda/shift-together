import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiAt, BiMobileAlt, BiLock } from "react-icons/bi";
import signupImg from "/images/signup_bg.png";
import RentWidget from "../../components/RentWidget/RentWidget";

const Register = () => {
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setuserDetails((prevuserDetails) => ({
      ...prevuserDetails,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, phone, password, cpassword } = userDetails;

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        phone,
        password,
        cpassword,
      });

      console.log(response.data);
      window.alert("Registration Successful");
      setuserDetails({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
      });
      navigate("/login"); //for navigating user to login page
    } catch (error) {
      console.error(error);
      window.alert("Invalid Registration");
    }
  };

  return (
    <div className="main-wrapper">
      {/* Rent Widget */}
      <RentWidget />
      <section className="signup">
        <div className="signup-container">
          <div className="signup-row">
            <div className="signup-col">
              <div className="signup-form-container">
                <div className="signup-heading">
                  <h4 className="signup-text p-2">Signup</h4>
                </div>
                <form className="signup-form" method="POST">
                  <div className="form-group">
                    <div className="form-icon">
                      <BiUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      className="signup-form-control"
                      placeholder="name"
                      value={userDetails.name}
                      onChange={handleChange}
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
                      value={userDetails.email}
                      onChange={handleChange}
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
                      value={userDetails.phone}
                      onChange={handleChange}
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
                      value={userDetails.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-icon">
                      <BiLock />
                    </div>
                    <input
                      type="password"
                      name="cpassword"
                      className="signup-form-control"
                      placeholder="Confirm Password"
                      value={userDetails.cpassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <input
                    type="submit"
                    value="signup"
                    className="signup-btn"
                    onClick={handleSubmit}
                  />
                </form>

                <div className="signup-text my-2">
                  <Link to="/login" className="login-link">
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>
            {/* Image */}
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
