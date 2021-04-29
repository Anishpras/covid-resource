import React from "react";
import DataCard from "../components/DataCard";
import RemdesivirData from "../data/Remdesivir";
import "../Styles/Card.css";

const Remdesivir = () => {
  return (
    <div className="Main_card">
      {RemdesivirData.map((medicine) => {
        return (
          <DataCard
            city={medicine.city}
            distributor={medicine.distibutor_name}
            number={medicine.helpline}
            address={medicine.address}
            status={medicine.status}
          />
        );
      })}
    </div>
  );
};

export default Remdesivir;
