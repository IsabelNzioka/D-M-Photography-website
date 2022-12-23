import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenuItems.css";

const SideMenuItems = (props) => {
  return (
    <li className="SideMenuItem">
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default SideMenuItems;
