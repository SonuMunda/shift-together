import React from "react";
import "./Home.css";
import RentWidget from "../../components/RentWidget/RentWidget";
const Home = () => {
  const handleWidget = () => {
    const widget = document.querySelector(".rent-widget");
    widget.classList.add("show-widget");
  }

  return (
    <div className="main-wrapper">
      
      <RentWidget/>

      <section className="home-intro">
        <div className="home-intro-container container">
          <div className="home-intro-text">
            <h5 className="intro-text text-community">
              <span>Shift Together Community</span>
            </h5>

            <p className="intro-text text-slogan">
              Join our Community, make connections, and create a better world
              together.
            </p>

          </div>

          <div className="rent-btn-container">
            <button className="rent-flat-button"  onClick={handleWidget} >Rent a Flat</button>
          </div>
        </div>
      </section>
      <hr />

      <section className="help-section">
        <div className="help-sec-container p-3">
          <div className="help-sec-heading d-flex justify-content-center">
            <h2
              className="help-heading text-center fw-bold my-4 py-2"
              style={{ borderBottom: "3px solid black", width: "fit-content" }}
            >
              We provide 24x7 Help
            </h2>
          </div>

          <div className="help-sec-subheading">
            <h5 className="text-center">
              Need helplines contacts just choose your colony's area.
            </h5>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
