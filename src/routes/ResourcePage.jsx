import React from "react";
import ResourceCard from "../components/ResourceCard";

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
      {resources.map((resource) => {
        return <ResourceCard name={resource.name} link={resource.link} />;
      })}
    </div>
  );
};

export default ResourcePage;
