import React from "react";

import SideMenu from "./SideMenu/SideMenu";
import Navbar from "./Navbar/Navbar";

import "./Layout.css";
import { AiOutlineMenu } from "react-icons/ai";

const Layout = (props) => {
  return (
    <div className="Main">
      <div className="Nav">
        <Navbar />
        {/* <div className="Menu"> */}
        <AiOutlineMenu className="Menu" />
        {/* </div> */}
      </div>
      <div className="SideMenu">
        <SideMenu />{" "}
      </div>
      <div className="Children">{props.children}</div>
    </div>
  );
};

export default Layout;
