import React from "react";
import { Link } from "react-router-dom";
import '../Styles/ResourceCard.css'
const ResourceCard = ({ name, link }) => {
  return (
    <div className="resource-main">
      <Link to={link}>
        <div className="resource_Card">
          <h1 className="recourceCard_head">{name}</h1>
        </div>
      </Link>
    </div>
  );
};

export default ResourceCard;
