import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenuItems.css";

const SideMenuItems = (props) => {
  return (
    <div className="SideMenuItem">
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {props.children}
      </NavLink>
    </div>
  );
};

export default SideMenuItems;
