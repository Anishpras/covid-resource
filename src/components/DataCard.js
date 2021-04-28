import React from "react";
import "../Styles/data-card.css";
const DataCard = ({ city, distributor, address, number, status, comment }) => {
  return (
    <div className="card_main">
      <div className="card">
        <div className="dataCard_main">
          <a href={`tel:${number}`}>
            <div className="card-content">
              <h1 className="city">{city}</h1>
              <h2 className="distributor">{distributor}</h2>
              <h3 className="address">{address}</h3>
              <h4 className="number">{number}</h4>
              <div className={status ? "data-card" : "data-card-red"}>
                <h3 className="comment">{comment}</h3>
              </div>
              <h5 className="call">Click to call</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
