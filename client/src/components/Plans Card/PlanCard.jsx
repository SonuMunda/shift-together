import React from "react";
import "./PlanCard.css";
import plans from "../../api/plans";

const PlanCard = () => {
  return (
    <div className="plan-card-row">
      {plans.map((plan, index) => (
        <div className="plan-card" key={index}>
          <div className="plan-col-heading">
            <h5 className="fw-bold p-2">Price on Request</h5>
          </div>
          <div className="plan-size">
            <h6 className="px-2">
              {plan.sizePrimary}
              <span className="text-secondary">{plan.sizeSecondary}</span>
            </h6>
          </div>
          <div className="plan-col-heading">
            <p className="px-2">{plan.sizeHeading}</p>
          </div>
          <div className="card-image my-2">
            <img src={plan.image} alt={plan.imageAlt} />
          </div>

          <div className="plan-col-price">
            <p className="fw-bold">{plan.price} per month</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;