import React from "react";
import DataCard from "../components/DataCard";
import Bed from "../data/Bed";
import "../Styles/Card.css";
const HospitalBed = () => {
  return (
    <div className="color-main">
      <div className="Main_card">
        {Bed.map((bed) => {
          return (
            <DataCard
              city={bed.city}
              distributor={bed.distibutor_name}
              number={bed.helpline}
              address={bed.address}
              status={bed.status}
              comment={bed.comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HospitalBed;
