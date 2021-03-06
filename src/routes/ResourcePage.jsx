import React from "react";
import ResourceCard from "../components/ResourceCard";
import "../Styles/ResourcePage.css";
import ResourceNews from "./ResourceNews";

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
    {
      name: "Doctors",
      link: "/doctors",
    },
    {
      name: "Food",
      link: "/food",
    },
    {
      name: "Every Need For Covid +ve Patients",
      link: "/every",
      
    },
    {
      name: "Extra Resources",
      link: "/extra",
    },
  ];

  return (
    <div className="resource-page">
      <div className="resourcePage_content">
       <ResourceNews/>
        <div className="resourcePage_main">
          <div className="resourcePage_Card">
            {resources.map((resource) => {
              return <ResourceCard   name={resource.name} link={resource.link} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
