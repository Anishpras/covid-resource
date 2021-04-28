import React from "react";
import "../style/data-card.css";
const DoctorCard = ({ name, speciality, number, time }) => {
  return (
    <div className="card">
      <a className="card-a" href={`tel:${number}`}>
        <div>
          <h2>{name}</h2>
          <h2>{speciality}</h2>
          <h3>{time}</h3>
          <h4 className="number">{number}</h4>
          <h5 className="call">Click to call</h5>
        </div>
      </a>
    </div>
  );
};

export default DoctorCard;
