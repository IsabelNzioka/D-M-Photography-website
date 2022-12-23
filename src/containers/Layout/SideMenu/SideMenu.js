import React from "react";
import SideMenuItems from "./SideMenuItems/SideMenuItems";

import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div>
      <ul className="SideNavItems">
        <SideMenuItems link="/"></SideMenuItems>
        <SideMenuItems link="/gown">Projects</SideMenuItems>
        <SideMenuItems link="/babybump">Weddings</SideMenuItems>
        <SideMenuItems link="/babyshower">fashion</SideMenuItems>
        <SideMenuItems link="/children">children</SideMenuItems>
        <SideMenuItems link="/couple">About</SideMenuItems>
        <SideMenuItems link="/contact">Contact</SideMenuItems>
      </ul>
    </div>
  );
};

export default SideMenu;
