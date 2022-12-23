import React, { useState } from "react";

import SideMenu from "./SideMenu/SideMenu";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "../SideDrawer.js/SideDrawer";

import "./Layout.css";
import { AiOutlineMenu } from "react-icons/ai";

const Layout = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const closeSideDrawer = () => {
    setShowDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    // this.setState( (prevState ) => { return { showDrawer: !prevState.showDrawer };});
    setShowDrawer(!showDrawer);
  };

  return (
    <div className="Main">
      <div className="Nav">
        <Navbar />
        {/* <div className="Menu"> */}
        <AiOutlineMenu className="Menu" onClick={sideDrawerToggleHandler} />
        {/* </div> */}
      </div>

      <div className="SideMenu">
        <SideMenu />{" "}
      </div>
      <div className="Children">{props.children}</div>
      <SideDrawer open={showDrawer} closed={closeSideDrawer} />
    </div>
  );
};

export default Layout;
