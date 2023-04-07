import React, { useState } from "react";
import locationData from "../../api/locationData";
import "./Helpline.css";

const Helpline = () => {
  const [selectedLocation, setSelectedLocation] = useState("Mohali");

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const selectedLocationData = locationData.find(
    (data) => data.location === selectedLocation
  );

  return (
    <div className="main-wrapper">
      <div className="helpline-intro">
        <div className="helpline-intro-container">
          <h1 className="helpline-intro-heading text-uppercase text-center fw-bold mt-3 py-2">
            Helpline Numbers
          </h1>
        </div>
      </div>
      {/* Help Sections */}
      <section className="help-section">
        <div className="help-sec-container p-3">
          <div className="help-sec-heading d-flex justify-content-center">
            <h2 className="help-heading text-uppercase text-center fw-bold mt-3 py-2">
              We provide 24x7 Help
            </h2>
          </div>

          {/* <div className="help-sec-subheading>
          </div> */}

          <div className="location-selector">
            <div className="location-selector-container">
              <label htmlFor="location-select" className="me-3">
                Select Location:
              </label>
              <select
                id="location-select"
                value={selectedLocation}
                onChange={handleLocationChange}
              >
                {locationData.map((data) => (
                  <option key={data.location} value={data.location}>
                    {data.location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="help-sec-content p-4">
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Sr. No.</th>
                  <th>Service Name</th>
                  <th>Helpline Number</th>
                </tr>
              </thead>
              <tbody>
                {selectedLocationData.helplineNumbers.map((number) => (
                  <tr key={number.srNo}>
                    <td>{number.srNo}</td>
                    <td>{number.serviceName}</td>
                    <td>{number.helplineNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Helpline;
