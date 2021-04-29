import React from "react";
import DataCard from "../components/DataCard";
import FoodData from "../data/Food";
import "../Styles/Card.css";
import ResourceNews from "./ResourceNews";
const Food = () => {
  return (
    <div className="color-main">
    <ResourceNews/>
      <div className="Main_card">
        {FoodData.map((food) => {
          return (
            <DataCard
              city={food.city}
              distributor={food.distibutor_name}
              number={food.helpline}
              address={food.address}
              status={food.status}
              comment={food.comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Food;
