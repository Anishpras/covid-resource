import React from "react";
import ResourceCard from "../components/ResourceCard";
import "../Styles/ResourcePage.css";

const ResourcePage = () => {
  const resources = [
    {
      name: "Hospital Beds",
      link: "/beds",
    },
    {
      name: "Oxygen",
      link: "/oxygen",
    },
    {
      name: "Plasma",
      link: "/plasma",
    },
    {
      name: "Medicines",
      link: "/medicines",
    },
  ];

  return (
    <div className="resource-page">
      <div className="resourcePage_content">
        <h1> COVID-19 Data </h1>
        <div className="resourcePage_main">
          <div className="resourcePage_Card">
            {resources.map((resource) => {
              return <ResourceCard name={resource.name} link={resource.link} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
