import React from "react";
import "./Helpline.css";

const Helpline = () => {
  return (
    <div className="main-wrapper">
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

export default Helpline;
