import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <>
      <div className="navbar-parent">
        <div className="navbar-logo">
          <h3>Yonatan</h3>
        </div>
        <div className="navbar-list">
          <div className="link-home" id="navlink-item">
            <Link to="/">Home</Link>
          </div>
          <div className="link-about" id="navlink-item">
            <Link to="/about">About</Link>
          </div>
          <div className="link-portfolio" id="navlink-item">
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="link-resume" id="navlink-item">
            <Link to="/resume">Resume</Link>
          </div>
          <div className="link-contact" id="navlink-item">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
