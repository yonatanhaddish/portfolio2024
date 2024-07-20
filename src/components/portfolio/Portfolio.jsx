import React, { useState } from "react";
import "./index.css";

function Portfolio() {
  const [selectedSingleProject, setSelectedSingleProject] = useState("");

  const portfolio_obj = [
    {
      name: "MetaFlix",
      url_link: `metaflix.test.com`,
    },
    {
      name: "Network Automation",
      url_link: `network_automation.test.com`,
    },
    {
      name: "Alpha Stream",
      url_link: `alpha_stream.test.com`,
    },
    {
      name: "XYZ Car Dealership",
      url_link: `xyz_cardealership.test.com`,
    },
  ];

  function handleSelectedProject(event) {
    setSelectedSingleProject(event.target.innerHTML);
  }
  return (
    <div className="portfolio-parent">
      <h1>Portfolio</h1>
      <div className="portfolio-list">
        {portfolio_obj.map((item, index) => (
          <div
            id="card"
            key={index}
            value={selectedSingleProject}
            onClick={handleSelectedProject}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Portfolio;
