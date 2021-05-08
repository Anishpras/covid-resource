import React from "react";
import "../Styles/ResourcePage.css";
import "../Styles/Card.css"
const ResourceNews = () => {
  return (
    <div className="color-main">
      <div className="resourcePage_news">
        <h2 className="resourcePage_h2">
          Follow for more details:
          <a
            href="https://instagram.com/covidkit2021?igshid=1rdbpdbiuyky9"
            target="_blank"
            rel="noreferrer"
          >
            @covidkit2021
          </a>
        </h2>
        <h4 className="resourcepage-h4" style={{ color: "black" }}>
          NOTE-{" "}
          <strong style={{ color: "black" }}>
            If any link or number is not working inform us at
            biharcovid428@gmail.com mob: 9162248329
          </strong>
        </h4>
      </div>
    </div>
  );
};

export default ResourceNews;
