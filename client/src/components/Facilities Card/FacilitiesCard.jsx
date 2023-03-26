import React from "react";
import "./FacilitiesCard.css";
import facilitiesList from "../../api/facillitesList";

const FacilitiesCard = () => {
  return (
    <div className="facilities-row p-4">
      {facilitiesList.map((facility) => {
        const { id, title, icon } = facility;
        return (
          <div className="facility-card" key={id}>
            <div className="facility-icon">
              <img src={icon} alt={title} />
            </div>
            <div className="facility-title">
                <p className="text-center py-2">{title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FacilitiesCard;
