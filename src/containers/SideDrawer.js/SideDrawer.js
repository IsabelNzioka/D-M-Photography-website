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

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 0.3,
      // duration: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
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

const childVariants = {
  hidden: {
    opacity: 0,

    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      // delay: 3,
      // duration: 0.4,
    },
  },
};

const SideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={props.open ? "visible" : "hidden"}
    >
      <Backdrop show={props.open} clicked={props.closed} />
      {/* <div className={attachedClasses.join(" ")} onClick={props.closed}> */}
      {/* <SideMenu /> */}
      {/* </div> */}
      <motion.div className={attachedClasses.join(" ")} onClick={props.closed}>
        <motion.ul className="SideNavItems">
          {" "}
          <motion.div variants={childVariants}>
            <SideMenuItems link="/">Projects</SideMenuItems>
          </motion.div>
          <motion.div variants={childVariants}>
            {" "}
            <SideMenuItems link="/wedding">Weddings</SideMenuItems>{" "}
          </motion.div>
          <motion.div variants={childVariants}>
            {" "}
            <SideMenuItems link="/wedding">Portraits</SideMenuItems>{" "}
          </motion.div>
          <motion.div variants={childVariants}>
            <SideMenuItems link="/">Family</SideMenuItems>
          </motion.div>
          <motion.div variants={childVariants}>
            <SideMenuItems link="/about">About</SideMenuItems>{" "}
          </motion.div>
          <motion.div variants={childVariants}>
            {" "}
            <SideMenuItems link="/contact">Contact</SideMenuItems>
          </motion.div>
        </motion.ul>
        <motion.div className="Icons" variants={childVariants}>
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
    </motion.div>
  );
};

export default SideDrawer;
