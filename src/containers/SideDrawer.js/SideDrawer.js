import React from "react";
import SideMenu from "../Layout/SideMenu/SideMenu";

import Backdrop from "../Backdrop/Backdrop";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <SideMenu />
      </div>
    </div>
  );
};

export default SideDrawer;
