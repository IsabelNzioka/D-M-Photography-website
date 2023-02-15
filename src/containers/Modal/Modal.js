import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import Backdrop from "../Backdrop/Backdrop";
import Aux from "../hoc/Auxiliary";

import "./Modal.css";

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closeModal} />

      <div
        className="Modal"
        style={{
          transform: props.show ? "translateX(0)" : "translateX(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="CloseBtn">
          <AiOutlineClose onClick={props.closeModal} />
        </div>
        <div className="NextSlide">
          <AiOutlineArrowRight onClick={props.nextSlide} />
        </div>
        <div className="PrevSlide">
          <AiOutlineArrowLeft onClick={props.prevSlide} />
        </div>
        <div className="Modalbottom"></div>

        <div className="CurrentImage">
          <div className="TheImage">{props.children}</div>
        </div>
      </div>
    </Aux>
  );
};

export default Modal;
