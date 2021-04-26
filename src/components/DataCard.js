import React from "react";

const DataCard = ({ city, distributor, address, number, status }) => {
  return (
    <a href={"tel:" + { number }}>
      <div className={status ? "data-card" : "data-card-red"}>
        <h1>{city}</h1>
        <h2>{distributor}</h2>
        <h3>{address}</h3>
        <h4>{number}</h4>
        <h5>Click to call</h5>
      </div>
    </a>
  );
};

export default DataCard;
