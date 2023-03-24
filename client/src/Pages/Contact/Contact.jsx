import React from "react";
import "./Contact.css";
import RentWidget from "../../components/RentWidget/RentWidget";
import { FaMobileAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="main-wrapper">
      {/* Rent Widget */}
      <RentWidget />

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

            <form action="">
              <div className="form-group-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="user-name"
                    placeholder="John"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="user-email"
                    placeholder="jhon@email.com"
                    className="form-control"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="user-phone"
                    placeholder="6800000021"
                    className="form-control"
                    required
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message-box"
                  id="msg-box"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="form-control"
                  required
                  maxlength="200"
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
