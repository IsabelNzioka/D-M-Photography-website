import React, { useState } from "react";

import SideMenu from "./SideMenu/SideMenu";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "../SideDrawer.js/SideDrawer";
import Footer from "./Footer/Footer";

import "./Layout.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import SideMenuItems from "./SideMenu/SideMenuItems/SideMenuItems";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    // x: "100vw",
    y: "10vh",
  },
  visible: {
    opacity: 1,
    // x: 0,
    y: 0,
    transition: {
      type: "spring",
      mass: 1,
      damping: 25,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const Layout = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const [menu, setMenu] = useState(true);

  const closeSideDrawer = () => {
    setShowDrawer(false);
    setMenu(!menu);
  };

  const sideDrawerToggleHandler = () => {
    // this.setState( (prevState ) => { return { showDrawer: !prevState.showDrawer };});
    setShowDrawer(!showDrawer);
    setMenu(!menu);
  };

  return (
    <div className="Main">
      <div className="Nav">
        <Navbar />
        <div className="Menu" onClick={sideDrawerToggleHandler}>
          {menu ? <AiOutlineMenu /> : <BiMenuAltRight />}
        </div>
      </div>

      <div className="SideMenu">
        <SideMenu />
      </div>
      <div
        className="Children"
        // variants={containerVariants}
        // initial="hidden"
        // animate="visible"
      >
        {props.children}
      </div>
      <SideDrawer open={showDrawer} closed={closeSideDrawer} />

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
