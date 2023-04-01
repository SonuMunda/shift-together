import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { BiUser, BiAt, BiMobileAlt, BiLock } from "react-icons/bi";
import signupImg from "/images/signup_bg.png";
import RentWidget from "../../components/RentWidget/RentWidget";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all form fields are filled
    if (
      !formData.username ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.cpassword
    ) {
      alert("Please fill all form fields.");
      return;
    }

    // Number validation
    const numberRegex = /\d+/;
    if (numberRegex.test(formData.username)) {
      alert("Username should not contain any numbers.");
      return;
    }

    // Size validation
    if (formData.username.length < 4 || formData.username.length > 20) {
      alert("Username must between 4 and 20 characters");
      return;
    }

    // Check if email is valid
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Check if phone number is valid
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Check if password and confirm password match
    if (formData.password !== formData.cpassword) {
      alert("Passwords do not match.");
      return;
    }

    // All form fields are valid, submit the form
    console.log(formData);

    // Clear the form
    setFormData({
      username: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
    });
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
                <form className="signup-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="form-icon">
                      <BiUser />
                    </div>
                    <input
                      type="text"
                      name="username"
                      className="signup-form-control"
                      placeholder="Username"
                      value={formData.username}
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
                      value={formData.email}
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
                      value={formData.phone}
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
                      value={formData.password}
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
                      value={formData.cpassword}
                      onChange={handleChange}
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
