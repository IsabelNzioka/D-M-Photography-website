import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="MyFooter">
      <div className="Header">Get In Touch</div>
      <div className="FooterIcons">
        <Link to="/contact">
          {" "}
          <AiOutlineInstagram className="FooterIcon" />
        </Link>
        <Link to="/contact">
          {" "}
          <AiOutlineTwitter className="FooterIcon" />
        </Link>

        <button className="ToContact">
          {" "}
          <Link to="/contact">Contact</Link>
        </button>
      </div>
      <div className="Mail">dennis@gmail.com</div>

      <div className="Copyright">
        <hr />
        <p>
          @copyright 2022 D<span>|</span>M Photography
        </p>
      </div>
    </div>
  );
};

export default Footer;
