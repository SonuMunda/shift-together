import React from "react";
import "./Home.css";
import RentWidget from "../../components/RentWidget/RentWidget";
const Home = (props) => {
  const handleWidget = () => {
    const widget = document.querySelector(".rent-widget");
    widget.classList.add("show-widget");
  };

  return (
    <div className="main-wrapper">
      <RentWidget />

      <section className="home-intro">
        <div className="home-intro-container container animate__animated animate__bounce">
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
            <button className="rent-flat-button" onClick={handleWidget}>
              Rent a Flat
            </button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans">
        <div className="plans-container p-4">
          <div className="plans-heading">
            <h2 className="text-center fw-bold my-4 py-2 text-uppercase">
              Floor Plans & Price
            </h2>
          </div>
          {props.PlanCard}
        </div>
      </section>
      <hr />
      {/* Facilities Section */}
      <section className="facilities">
        <div className="facilities-container container py-4">
          <div className="facilities-heading">
            <h2 className="text-center fw-bold my-4 py-2 text-uppercase">
              Facilities & Amenities
            </h2>
          </div>
          <div className="facilities-sub-heading">
            <h6 className="fw-bold text-uppercase">Top Facilities</h6>
          </div>
          <div className="facilities-text">
            <p>
              Shift Together presents an exclusive opportunity to own a stunning
              home that offers all kinds of amenities and facilities. This
              includes a sewage treatment plant, 24x7 security, and easy access
              to 24/7 power backup. It also has a gated community, an exclusive
              offering only for Shift Together residents. Shift Together has an
              excellent combination of comfort and convenience to suit every
              requirement as well as need.
            </p>
          </div>

          <div className="facilities-content">{props.FacilitiesCard}</div>
        </div>
      </section>

      <hr />

    </div>
  );
};

export default Home;
