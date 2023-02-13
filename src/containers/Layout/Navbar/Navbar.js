import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Navbar.css";

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { duration: 0.5 },
    // transition={ease: [0.17, 0.67, 0.83, 0.67] },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      // type: "spring",
      // bounce: 0.1,
      // delay: 0.1,
      duration: 1,
    },
  },
};

const Navbar = () => {
  return (
    <motion.div className="Navbar">
      <motion.div
        className="DMLogo"
        variants={childVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="Logo">
          D<span>|</span>M Photography
        </motion.h1>{" "}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
