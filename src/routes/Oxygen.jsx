import React from "react";
import DataCard from "../components/DataCard";
import OxygenData from "../data/Oxygen";
import "../Styles/Card.css";

const Oxygen = () => {
  return (
    <div className="Main_card">
      {OxygenData.map((oxygen) => {
        return (
          <DataCard
            city={oxygen.city}
            distributor={oxygen.distributor_name}
            number={oxygen.helpline}
            address={oxygen.address}
            status={oxygen.status}
          />
        );
      })}
    </div>
  );
};

export default Oxygen;
