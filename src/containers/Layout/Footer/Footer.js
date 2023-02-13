import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import { motion } from "framer-motion";

import "./Footer.css";

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { duration: 1 },
    // transition={ease: [0.17, 0.67, 0.83, 0.67] },
  },
};
const Footer = () => {
  return (
    <motion.div
      className="MyFooter"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="Header" variants={childVariants}>
        Get In Touch
      </motion.div>
      <motion.div className="FooterIcons" variants={childVariants}>
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
      </motion.div>
      <motion.div className="Mail" variants={childVariants}>
        dennis@gmail.com
      </motion.div>

      <div className="Copyright">
        <hr />
        <p>
          @copyright 2022 D<span>|</span>M Photography
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
