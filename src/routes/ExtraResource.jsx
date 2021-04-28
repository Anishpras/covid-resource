import React from "react";
import Resource from "../data/Resource";
const ExtraResource = () => {
  return (
    <div className="resourcePage_Card">
      {Resource.map((resource) => {
        return (
          <a href={resource.link} target="_blank" rel="noreferrer">
            <div>
              <h1>{resource.name}</h1>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ExtraResource;
