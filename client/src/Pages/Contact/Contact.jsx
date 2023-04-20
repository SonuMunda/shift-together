import React, { useState, useEffect } from "react";
import "./Contact.css";
import axios from "axios";
import RentWidget from "../../components/RentWidget/RentWidget";
import { FaMobileAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/getdata", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        const { name, email, phone } = data.user;
        setUserData({
          ...userData,
          name: name,
          email: email,
          phone: phone,
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Validate form data before sending
      const { name, email, phone, message } = userData;

      if (!name || !email || !phone || !message) {
        throw new Error("Please fill out all required fields.");
      }

      const response = await axios.post(
        "http://localhost:5000/contact",
        userData
      );

      if (!response.data.success) {
        throw new Error("Failed to send data");
      }

      // Clear form data after successful submission
      setUserData((prevState) => {
        return { ...prevState, message: "" };
      });

      // Show success message to user
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="main-wrapper">
      {/* Rent Widget */}
      <RentWidget />

      <section className="contact-intro">
        <div className="contact-heading text-light">
          <h4 className="text-uppercase fw-bold">Contact us</h4>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-container">
          <div className="contacts-row">
            <div className="contacts-col">
              <div className="col-row">
                <div className="icon">
                  <FaMobileAlt />
                </div>
                <div className="col-inner-row">
                  <div className="heading">
                    <label htmlFor="phone">Phone</label>
                  </div>
                  <div className="text">
                    <p>+91 98000-00089</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts-col">
              <div className="col-row">
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="col-inner-row">
                  <div className="heading">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="text">
                    <p>shifttogether@email.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts-col">
              <div className="col-row">
                <div className="icon">
                  <FaMapMarkedAlt />
                </div>
                <div className="col-inner-row">
                  <div className="heading">
                    <label htmlFor="address">Address</label>
                  </div>
                  <div className="text">
                    <p>Mohali, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="message-form">
            <div className="form-title">
              <h2>Get in Touch</h2>
            </div>

            {/* Contact form */}

            <form method="POST" onSubmit={handleFormSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="John"
                    className="form-control"
                    value={userData.name || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="jhon@email.com"
                    className="form-control"
                    value={userData.email || ""}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="6800000021"
                    className="form-control"
                    value={userData.phone || ""}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message" // change name attribute
                  id="msg-box"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={userData.message}
                  maxLength="200"
                ></textarea>
              </div>

              <input type="submit" value="Send Message" className="send-btn" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
