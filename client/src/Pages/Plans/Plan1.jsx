import React from "react";
import "./Plan.css";
import { Link } from "react-router-dom";
import PlanImg from "/images/floor-plan-1bhk-1t-485-sq-ft-491832.jpeg";
const Plan1 = () => {
  return (
    <>
      <section className="plan">
        <div className="plan-container">
          <div className="home-link">
            <Link to="/" className="text-decoration-none text-light p-2">
              Back to Home
            </Link>
          </div>
          <div className="title-header">
            <div className="plan-title">
              <h6 className="text-secondary">Showing Floor Plan for</h6>
              <h4 className="fw-bold">1 BHK Apartment</h4>
            </div>
            <div className="plan-size">
              <h6 className="p-2 bg-dark text-light">
                485 sq ft (45.058 sq m)
              </h6>
            </div>
          </div>
          <div className="plan-row">
            <div className="plan-col">
              <div className="plan-image">
                <img src={PlanImg} alt="Plan Image" />
              </div>
            </div>
            <div className="plan-col">
              <div className="plan-content">
                <ul className="interior-list">
                  <li className="interior-item">
                    <h6 className="fw-bold">Bedroom</h6>
                    <p>1 x 9.5 sqm</p>
                  </li>
                  <li className="interior-item">
                    <h6 className="fw-bold">Bathroom</h6>
                    <p>1 x 1.8m X 1.1m</p>
                  </li>
                  <li className="interior-item">
                    <h6 className="fw-bold">Balcony</h6>
                    <p>1 x 1.1m X 0.9m</p>
                  </li>
                  <li className="interior-item">
                    <h6 className="fw-bold">Kitchen</h6>
                    <p>1 x 5.5 sqm </p>
                  </li>
                  <li className="interior-item">
                    <h6 className="fw-bold">Living Room</h6>
                    <p>1 x 9.5 sqm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plan1;
