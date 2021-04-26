import React from "react";
import dataCard from "../style/data-card.css"
const DataCard = ({ city, distributor, address, number, status }) => {
  return (
    
    <div className="card">
   
    <a className="card-a" href={"tel:" + { number }}>
      <div className={status ? "data-card" : "data-card-red"}>
        <h1>{city}</h1>
        <h2>{distributor}</h2>
        <h3>{address}</h3>
        <h4 className="number">{number}</h4>
        <h5 className="call">Click to call</h5>
      </div>
    </a>
  
    </div>
   
  );
};

export default DataCard;
