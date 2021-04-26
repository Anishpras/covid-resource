import React from "react";
import DataCard from "../components/DataCard";
import PlasmaData from "../data/Plasma";

const Plasma = () => {
  return (
    <div className="plasma">
      {PlasmaData.map((plasma) => {
        return (
          <DataCard
            city={plasma.city}
            distributor={plasma.distibutor_name}
            number={plasma.helpline}
            address={plasma.address}
            status={plasma.status}
          />
        );
      })}
    </div>
  );
};

export default Plasma;
