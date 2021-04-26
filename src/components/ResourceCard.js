import React from "react";
import { Link } from "react-router-dom";

const ResourceCard = ({ name, link }) => {
  return (
    <>
      <Link to={link}>
        <div className="resource-card">
          <h1>{name}</h1>
        </div>
      </Link>
    </>
  );
};

export default ResourceCard;
