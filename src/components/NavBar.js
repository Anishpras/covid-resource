import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" class="logo">
        Bihar Covid Resources
      </NavLink>
      <ul className="main-nav" id="js-menu">
        <li>
          <NavLink to="/beds" className="nav-links">
            Hospital Beds
          </NavLink>
        </li>
        <li>
          <NavLink to="/oxygen" className="nav-links">
            Oxygen
          </NavLink>
        </li>
        <li>
          <NavLink to="/plasma" className="nav-links">
            Plasma
          </NavLink>
        </li>
        <li>
          <NavLink to="/medicines" className="nav-links">
            Medicines
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className="nav-links">
            Doctors
          </NavLink>
        </li>
        <li>
          <NavLink to="/food" className="nav-links">
            Food
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
