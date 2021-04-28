import React from "react";

import DataCard from "../components/DataCard";
import EveryData from "../data/Every";
import "../Styles/Card.css";
const Every = () => {
  return (
    <div className="color-main">
      <div className="Main_card">
        {EveryData.map((every) => {
          return (
            <DataCard
              city={every.city}
              distributor={every.distibutor_name}
              number={every.helpline}
              address={every.address}
              status={every.status}
              comment={every.comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Every;
