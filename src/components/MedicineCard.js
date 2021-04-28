import React from "react";
import { Link } from "react-router-dom";
import "../style/medicine.css";
const MedicineCard = ({ name, link }) => {
  return (
    <Link to={link}>
      <div className="medicine-card">
        <h1>{name}</h1>
      </div>
    </Link>
  );
};

export default MedicineCard;
