import React from "react";
import DataCard from "../components/DataCard";
import OxygenData from "../data/Oxygen";
const Oxygen = () => {
  return (
    <div className="oxygen">
      {OxygenData.map((oxygen) => {
        return (
          <DataCard
            city={oxygen.city}
            distributor={oxygen.distibutor_name}
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
