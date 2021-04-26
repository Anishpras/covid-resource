import React from "react";
import DataCard from "../components/DataCard";
import TocilizumabData from "../data/Tocilizumab";

const Tocilizumab = () => {
  return (
    <div className="tocilizumab">
      {TocilizumabData.map((medicine) => {
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

export default Tocilizumab;
