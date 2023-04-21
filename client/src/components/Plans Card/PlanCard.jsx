import React from "react";
import "./PlanCard.css";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import plans from "../../api/plans";

const PlanCard = () => {
  return (
    <div className="plan-card-row">
      {plans.map((plan, index) => (
        <Link to={plan.link} className="plan-link" key={index}>
        <motion.div className="plan-card" key={index}
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4}}
        >
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
        </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default PlanCard;
