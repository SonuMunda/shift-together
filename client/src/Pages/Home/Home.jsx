import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="main-wrapper">
      <section className="home-intro">
        <div className="home-intro-container ">
          <div className="home-intro-text">
            <h1 className="text-uppercase">
              <span className="intro-text">
                Welcome to Shift Together
              </span>
            </h1>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Home;
