import React from "react";
import DataCard from "../components/DataCard";
import Bed from "../data/Bed";
const HospitalBed = () => {
  return (
    <div className="hospital-bed">
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
  );
};

export default HospitalBed;
