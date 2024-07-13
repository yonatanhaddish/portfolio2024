import React from "react";
import "./index.css";

function Portfolio() {
  return (
    <div className="portfolio-parent">
      <h1>Portfolio</h1>
      <div className="portfolio-list">
        <div className="card-01" id="card">
          MetaFlix
        </div>
        <div className="care-02" id="card">
          Network Automation
        </div>
        <div className="card-03" id="card">
          Alpha Stream
        </div>
        <div className="care-04" id="card">
          XYZ Car Dealer
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
