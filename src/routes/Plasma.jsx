import React from "react";
import DataCard from "../components/DataCard";
import PlasmaData from "../data/Plasma";
import '../Styles/Card.css'

const Plasma = () => {
  return (
    <div className="Main_card">
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
