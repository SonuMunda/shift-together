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
      {/* Help Sections */}
      <section className="help-section">
        <div className="help-sec-container p-3">
          <div className="help-sec-heading d-flex justify-content-center">
            <h2 className="help-heading text-uppercase text-center fw-bold mt-3 py-2">
              We provide 24x7 Help
            </h2>
          </div>

          <div className="help-sec-subheading">
            <h5 className="text-center text-uppercase">
              Need helplines contacts just choose your colony's area.
            </h5>
          </div>

          <div className="location-menu">
            <div className="location-menu-container">
              <label htmlFor="location-menu-heading">
                Choose Colony's Location
              </label>
              <select name="location-name" id="loction-selector">
                <option value="mohali">Mohali</option>
                <option value="kharar">Kharar</option>
                <option value="gharuan">Gharuan</option>
                <option value="panchkula">Panchkula</option>
                <option value="morinda">Morinda</option>
                <option value="">Chandigarh</option>
              </select>
            </div>
          </div>
          <div className="location-data">
            <div className="location-data-container">
              <div className="location-data-heading">
                <h3 className="text-center text-uppercase">Mohali</h3>
              </div>
              <div className="helpline-numbers">
                <div className="helpline-numbers-container">
                  <table className="contacts-table table table-striped">
                    <thead className="table-heading">
                      <tr className="th-row">
                        <th className="sr-no">#</th>
                        <th className="s-name">Service Name</th>
                        <th className="h-numbers">Helpline Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#</td>
                        <td>Police</td>
                        <td>0172-2222222</td>
                      </tr>
                      <tr>
                        <td>#</td>
                        <td>Police</td>
                        <td>0172-2222222</td>
                      </tr>
                      <tr>
                        <td>#</td>
                        <td>Police</td>
                        <td>0172-2222222</td>
                      </tr>
                      <tr>
                        <td>#</td>
                        <td>Police</td>
                        <td>0172-2222222</td>
                      </tr>
                      <tr>
                        <td>#</td>
                        <td>Police</td>
                        <td>0172-2222222</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
