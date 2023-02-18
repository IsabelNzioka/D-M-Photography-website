import React from "react";
import { Link, NavLink } from "react-router-dom";
import SideMenuItems from "./SideMenuItems/SideMenuItems";
import { motion } from "framer-motion";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import "./SideMenu.css";

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      //  duration: 1
      // delay: 0.1,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      // type: "spring",
      // bounce: 0.1,
      // delay: 0.1,

      duration: 0.8,
    },
  },
};
const SideMenu = () => {
  return (
    <div
      className="SideMItems"
      //  variants={childVariants} initial="hidden" animate="visible"
    >
      <ul className="SideNavI">
        <SideMenuItems link="/">Projects</SideMenuItems>
        <SideMenuItems link="/graduation">Graduation</SideMenuItems>{" "}
        <SideMenuItems link="/wedding">Weddings</SideMenuItems>{" "}
        <SideMenuItems link="/wedding">Portraits</SideMenuItems>{" "}
        <SideMenuItems link="/about">About</SideMenuItems>
        <SideMenuItems link="/contact">Contact</SideMenuItems>{" "}
      </ul>

      {/* <SideMenuItems link="/">Portraits</SideMenuItems>{" "}
        <SideMenuItems link="/wedding">Portraits</SideMenuItems>{" "}
        <li>
          {" "}
          <Link to="/work">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/checking">wedding</Link>
        </li> */}
      {/* </div> */}
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
