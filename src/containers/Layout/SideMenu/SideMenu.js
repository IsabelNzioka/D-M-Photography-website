import React from "react";
import SideMenuItems from "./SideMenuItems/SideMenuItems";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div>
      <ul className="SideNavItems">
        <SideMenuItems link="/">Projects</SideMenuItems>
        {/* <SideMenuItems link="/gown">Projects</SideMenuItems> */}
        <SideMenuItems link="/wedding">Weddings</SideMenuItems>
        <SideMenuItems link="/babyshower">fashion</SideMenuItems>
        <SideMenuItems link="/children">children</SideMenuItems>
        <SideMenuItems link="/couple">About</SideMenuItems>
        <SideMenuItems link="/contact">Contact</SideMenuItems>
      </ul>
      <div className="Icons">
        <AiOutlineInstagram className="Icon" />
        <AiOutlineTwitter className="Icon" />
        <AiOutlineMail className="Icon" />
      </div>
    </div>
  );
};

export default SideMenu;
