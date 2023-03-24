import React from "react";
import "./RentWidget.css";
import { useState } from "react";

const RentWidget = () => {

  const closeWidget = () => {
    const widget = document.querySelector(".rent-widget");
    widget.classList.remove("show-widget");
  };

  return (
    <div className="widget-wrapper">
      <div className="rent-widget" >
        <div className="widget-container">
          <div className="widget-heading">
            <h6 className="widget-text">Rent a Flat</h6>
          </div>

          <button className="widget-close-btn" onClick={closeWidget}>&times;</button>

          <div className="widget-form">
            <form className="widget-form">
              <div className="widget-form-group">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  id="name-field"
                  placeholder="Enter name"
                  required
                  className="widget-control"
                />
              </div>
              <div className="widget-form-group">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="Enter email"
                  required
                  className="widget-control"
                />
              </div>
              <div className="widget-form-group">
                <label htmlFor="phone">Phone: </label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}"
                  placeholder="Enter phone"
                  required
                  className="widget-control"
                />
              </div>

              <div className="widget-form-group">
                <label htmlFor="move-in-date">Move-in Date:</label>
                <input
                  type="date"
                  id="move-in-date"
                  name="move-in-date"
                  required
                  className="widget-control"
                />
              </div>

              <div className="widget-form-group">
                <label htmlFor="duration">Duration</label>
                <select
                  id="duration"
                  name="duration"
                  required
                  className="widget-control"
                >
                  <option value="">Select duration</option>
                  <option value="1 month">1 month</option>
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                  <option value="1 year">1 year</option>
                </select>
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
    </div>
  );
};

export default RentWidget;
