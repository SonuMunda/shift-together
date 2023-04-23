import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RentWidget.css";

const RentWidget = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    duration: "",
    location: "",
    size: "",
  });

  //state for success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Get today's date
  const today = new Date();

  // Calculate the date 4 days from now
  const moveInDate = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);

  // Format the date as a string in ISO format (YYYY-MM-DD)
  const formattedDate = moveInDate.toISOString().split("T")[0];

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
      const { name, email, phone, date, duration, location, size } = userData;

      if (
        !name ||
        !email ||
        !phone ||
        !date ||
        !duration ||
        !location ||
        !size
      ) {
        throw new Error("Please fill out all required fields.");
      }

      const response = await axios.post("http://localhost:5000/rent", userData);

      if (!response.data.success) {
        throw new Error("Failed to send data");
      }

      // Clear form data after successful submission
      setUserData((prevState) => {
        return {
          ...prevState,
          message: "",
          date: "",
          duration: "",
          location: "",
          size: "",
        };
      });

      // Show success message to user
      setShowSuccessMessage(true);

      // Hide success message after 10 seconds
      setTimeout(
        () => {
          setShowSuccessMessage(false);
        },
        5000,
      );
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  const closeWidget = () => {
    const widget = document.querySelector(".widget-wrapper");
    widget.classList.remove("show-widget");
  };

  return (
    <div className="widget-wrapper">
      <button className="widget-close-btn" onClick={closeWidget}>
        &times;
      </button>
      <div className="rent-widget">
        <div className="widget-container">
          <div className="widget-heading">
            <h6 className="widget-text">Rent a Flat</h6>
          </div>

          <div className="widget-form">
            <form
              className="widget-form"
              onSubmit={handleFormSubmit}
              method="POST"
            >
              <div className="widget-form-group">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  id="name-field"
                  placeholder="Enter name"
                  required
                  className="widget-control"
                  value={userData.name || " "}
                  onChange={handleChange}
                />
              </div>
              <div className="wdgt-inr-row">
                <div className="widget-form-group">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    name="email"
                    id="email-field"
                    placeholder="Enter email"
                    required
                    className="widget-control"
                    value={userData.email || " "}
                    onChange={handleChange}
                  />
                </div>
                <div className="widget-form-group">
                  <label htmlFor="phone">Phone: </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{10}"
                    placeholder="Enter phone"
                    required
                    className="widget-control"
                    value={userData.phone || " "}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="wdgt-inr-row">
                <div className="widget-form-group">
                  <label htmlFor="move-in-date">Move-in Date:</label>
                  <input
                    type="date"
                    id="move-in-date"
                    name="date"
                    required
                    className="widget-control"
                    value={userData.date}
                    onChange={handleChange}
                    min={formattedDate}
                  />
                </div>

                <div className="widget-form-group">
                  <label htmlFor="duration">Duration</label>
                  <select
                    id="duration"
                    name="duration"
                    required
                    className="widget-control"
                    value={userData.duration}
                    onChange={handleChange}
                  >
                    <option value="">Choose Duration</option>
                    <option value="1 month">1 month</option>
                    <option value="3 months">3 months</option>
                    <option value="6 months">6 months</option>
                    <option value="1 year">1 year</option>
                    <option value="above 1 year">More than year</option>
                  </select>
                </div>
              </div>

              <div className="wdgt-inr-row">
                <div className="widget-form-group">
                  <label htmlFor="location">Location</label>
                  <select
                    id="location"
                    name="location"
                    required
                    className="widget-control"
                    value={userData.location}
                    onChange={handleChange}
                  >
                    <option value="">Select Location</option>
                    <option value="Mohali">Mohali</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Patiala">Patiala</option>
                    <option value="Kharar">Kharar</option>
                    <option value="Morinda">Morinda</option>
                  </select>
                </div>

                <div className="widget-form-group">
                  <label htmlFor="flatSize">Flat Size</label>
                  <select
                    id="flatSize"
                    name="size"
                    required
                    className="widget-control"
                    value={userData.size}
                    onChange={handleChange}
                  >
                    <option value="">Choose Flat Type</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                  </select>
                </div>
              </div>

              <div className="widget-btn">
                <button type="submit" className="widget-submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="success-message">
          <div className="sucess-icon mx-2 fs-3">
            <FaCheckCircle />
          </div>
          <div className="msg">
            <p>
              Thank you for your interest in renting our flat. We will check
              available flats and contact you later.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentWidget;
