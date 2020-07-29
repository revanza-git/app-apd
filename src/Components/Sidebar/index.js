import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const sidebar = ({ props }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="E-Sertifikat"></li>
          <li className="Poin"></li>
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
