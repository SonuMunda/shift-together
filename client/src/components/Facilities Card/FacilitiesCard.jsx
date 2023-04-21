import React from "react";
import { motion } from "framer-motion";
import "./FacilitiesCard.css";
import facilitiesList from "../../api/facillitesList";

const FacilitiesCard = () => {
  return (
    <div className="facilities-row p-4">
      {facilitiesList.map((facility) => {
        const { id, title, icon } = facility;
        return (
          <motion.div
            className="facility-card"
            key={id}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.4}}
          >
            <div className="facility-icon">
              <img src={icon} alt={title} />
            </div>
            <div className="facility-title">
              <p className="text-center py-2">{title}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FacilitiesCard;
