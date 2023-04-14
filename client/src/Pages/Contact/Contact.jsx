import React, { useState, useEffect } from "react";
import "./Contact.css";
import RentWidget from "../../components/RentWidget/RentWidget";
import { FaMobileAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
const Contact = () => {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userMessage: "",
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
          userName: name,
          userEmail: email,
          userPhone: phone,
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
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }

      // Clear form data after successful submission
      setUserData({ ...userData, userMessage: "" });

      // Show success message to user
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit form. Please try again later.");
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

            <form onSubmit={handleFormSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="userName"
                    placeholder="John"
                    className="form-control"
                    value={userData.userName || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="jhon@email.com"
                    className="form-control"
                    value={userData.userEmail || ""}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="userPhone"
                    placeholder="6800000021"
                    className="form-control"
                    value={userData.userPhone || ""}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="userMessage" // change name attribute
                  id="msg-box"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={userData.userMessage}
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
