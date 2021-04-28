import React from "react";
import Resource from "../data/Resource";
import "../Styles/ExtraResource.css";
const ExtraResource = () => {
  return (
    <div className="resourcepage_Card">
      <div className="Resource_content">
        {Resource.map((resource) => {
          return (
            <div className="resourceMain__data">
              <a href={resource.link} target="_blank" rel="noreferrer">
                <div className="resource-data">
                  <h1 className="resource_h1">{resource.name}</h1>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExtraResource;
