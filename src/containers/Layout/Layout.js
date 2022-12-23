import React from "react";

import SideMenu from "./SideMenu/SideMenu";

import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="Main">
      <div className="Nav">
        <h1 className="Logo">
          D<span>|</span>M Photography
        </h1>
      </div>
      <div className="SideMenu">
        <SideMenu />{" "}
      </div>
      <div className="Children">{props.children}</div>
    </div>
  );
};

export default Layout;
