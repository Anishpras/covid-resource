import React from "react";
import "../Styles/data-card.css";
const DoctorCard = ({ name, speciality, number, time }) => {
  return (
    <div className="card_main">
      <div className="card">
        <div className="dataCard_main">
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
      </div>
    </div>
  );
};

export default DoctorCard;
