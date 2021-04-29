import React from "react";
import DataCard from "../components/DataCard";
import PlasmaData from "../data/Plasma";
import "../Styles/Card.css";
import ResourceNews from "./ResourceNews";

const Plasma = () => {
  return (
    <div className="color-main">
    <ResourceNews/>
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
    </div>
  );
};

export default Plasma;
