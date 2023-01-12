import React from "react";
import { Link } from "react-router-dom";
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
        <SideMenuItems link="/wedding">Portraits</SideMenuItems>
        <SideMenuItems link="/">Family</SideMenuItems>
        <SideMenuItems link="/about">About</SideMenuItems>
        <SideMenuItems link="/contact">Contact</SideMenuItems>
      </ul>
      <div className="Icons">
        <Link to="/contact">
          {" "}
          <AiOutlineInstagram className="Icon" />
        </Link>
        <Link to="/contact">
          {" "}
          <AiOutlineTwitter className="Icon" />
        </Link>
        <Link to="/contact">
          {" "}
          <AiOutlineMail className="Icon" />
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
