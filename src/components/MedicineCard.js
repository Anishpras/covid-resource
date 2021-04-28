import React from "react";
import { Link } from "react-router-dom";
import "../Styles/MedicineCard.css";
const MedicineCard = ({ name, link }) => {
  return (
    <div className="medicineCard_main">
      <div className="MedicineCard_content">
        <Link to={link}>
          <div className="medicine-card">
            <h1>{name}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MedicineCard;
