import React from "react";
import SideMenu from "../Layout/SideMenu/SideMenu";

import Backdrop from "../Backdrop/Backdrop";

import { motion } from "framer-motion";

import "./SideDrawer.css";
import SideMenuItems from "../Layout/SideMenu/SideMenuItems/SideMenuItems";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      //  duration: 1
      // delay: 0.1,
      // duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      // delay: 0.1,
      // duration: 1,
    },
  },
};

const SideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      {/* <div className={attachedClasses.join(" ")} onClick={props.closed}> */}
      {/* <SideMenu /> */}
      {/* </div> */}
      <motion.div
        className={attachedClasses.join(" ")}
        onClick={props.closed}
        // variants={childVariants}
        initial="hidden"
        animate={props.open ? "visible" : "hidden"}
      >
        <motion.ul className="SideNavItems" variants={sectionVariants}>
          {" "}
          <SideMenuItems link="/">Projects</SideMenuItems>
          <SideMenuItems link="/wedding">Weddings</SideMenuItems>{" "}
          <SideMenuItems link="/wedding">Portraits</SideMenuItems>{" "}
          <SideMenuItems link="/">Family</SideMenuItems>
          <SideMenuItems link="/about">About</SideMenuItems>{" "}
          <SideMenuItems link="/contact">Contact</SideMenuItems>
        </motion.ul>
        <motion.div className="Icons">
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
        </motion.div>
      </motion.div>

      {/* //////////////////////////////////////////////////////////////////////// */}
    </div>
  );
};

export default SideDrawer;
