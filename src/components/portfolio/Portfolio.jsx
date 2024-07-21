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
  function handleSelectedProject(item) {
    setSelectedSingleProject(item);
  }
  function handleOpenModal() {
    setOpen(true);
  }
  function handleCloseModal() {
    setOpen(false);
    setSelectedSingleProject("");
  }
  // console.log("selectedSingleProject", selectedSingleProject);
  return (
    <div className="portfolio-parent">
      <h1>Portfolio</h1>
      <div className="portfolio-list">
        {portfolio_obj.map((item, index) => (
          <div
            id="card"
            key={index}
            value={selectedSingleProject}
            onClick={() => {
              handleSelectedProject(item);
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
          closeModal={handleCloseModal}
        />
      </div>
    </div>
  );
}

export default Portfolio;
