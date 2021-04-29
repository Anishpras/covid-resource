import React from "react";
import DataCard from "../components/DataCard";
import FabiflueData from "../data/Fabiflue";
import "../Styles/Card.css";
const Fabiffue = () => {
  return (
    <div className="Main_card">
      {FabiflueData.map((medicine) => {
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

export default Fabiffue;
