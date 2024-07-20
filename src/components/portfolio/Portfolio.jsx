import React, { useState } from "react";
import BasicModal from "../utils/BasicModal";
import "./index.css";

function Portfolio() {
  const [selectedSingleProject, setSelectedSingleProject] = useState("");
  const [open, setOpen] = useState(false);

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
    setOpen(true);
  }
  function handleOpenModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
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
            onClick={(event) => {
              handleSelectedProject(event);
              handleOpenModal();
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div>
        <BasicModal
          selectedSingleProject={selectedSingleProject}
          open={open}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
}

export default Portfolio;
