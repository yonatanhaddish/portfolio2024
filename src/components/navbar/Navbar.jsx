import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/" id="link">
              Home
            </NavLink>
          </div>
          <div className="link-about" id="navlink-item">
            <NavLink to="/about" id="link">
              About
            </NavLink>
          </div>
          <div className="link-portfolio" id="navlink-item">
            <NavLink to="/portfolio" id="link">
              Portfolio
            </NavLink>
          </div>
          <div className="link-resume" id="navlink-item">
            <NavLink to="/resume" id="link">
              Resume
            </NavLink>
          </div>
          <div className="link-contact" id="navlink-item">
            <NavLink to="/contact" id="link">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
