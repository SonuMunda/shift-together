import React from "react";
import "./Plan.css";
import { Link } from "react-router-dom";
import PlanImg from "/images/3D-Floor-Plans-scaled.jpg";
const Plan3 = () => {
  return (
    <>
      <section className="plan">
        <div className="plan-container">
          <div className="home-link">
            <Link to="/" className="text-decoration-none text-light p-2">Back to Home</Link>
          </div>
          <div className="title-header">
            <div className="plan-title">
              <h6 className="text-secondary">Showing Floor Plan for</h6>
              <h4 className="fw-bold">3 BHK Apartment</h4>
            </div>
            <div className="plan-size">
              <h6 className="p-2 bg-dark text-light">
                1500 sq ft (139.35 sq m)
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
                    <p> 3 x 3.35m X 4.27m</p>
                  </li>
                  <li className="interior-item">
                    <h6 className="fw-bold">Bathroom</h6>
                    <p>3 x 1.52m X 2.01m</p>
                  </li>
                  <li className="interior-item">
                    <h6 className="fw-bold">Dresser</h6>
                    <p>1 x 1.52m X 1.22m</p>
                  </li>
                  <li className="interior-item">
                    <h6 className="fw-bold">Kitchen</h6>
                    <p>1 x 2.82m X 2.44m </p>
                  </li>
                  <li className="interior-item">
                    <h6 className="fw-bold">Living Room</h6>
                    <p>1 x 5.51m X 3.35m</p>
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

export default Plan3;
