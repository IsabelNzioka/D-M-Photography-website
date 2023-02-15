import React from "react";

// import photographer from "../Images/couple1.jpg";
// import photographer from "../../../public/Images/couple1.jpg";
import SliderTestimonials from "../../containers/Slider/SliderTestimonials/SliderTestimonials";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

import "./About.css";

const containerVariants = {
  hidden: {
    opacity: 0,
    // x: "100vw",
    x: 100,
  },
  visible: {
    opacity: 1,
    // x: 0,
    x: 0,
    transition: {
      type: "spring",
      mass: 1,
      damping: 25,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { duration: 1 },
    // transition={ease: [0.17, 0.67, 0.83, 0.67] },
  },
};

const About = () => {
  return (
    <motion.div
      className="About"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div class="About1">
        <div class="grid">
          {/* <p>1</p> */}
          <LazyLoadImage
            effect="blur"
            alt="The Photographer"
            height="100%"
            src="Images/dennis.jpg" // use normal <img> attributes as props
            width="100%"
          />

          {/* <img src="Images/dennis.jpg" alt="The Photographer" /> */}
        </div>
      </div>

      <div class="About2">
        <div class="grid">
          <LazyLoadImage
            effect="blur"
            alt="The Photographer"
            height="100%"
            src="Images/dennis2.jpg" // use normal <img> attributes as props
            width="100%"
          />
          {/* <img src="Images/dennis2.jpg" alt="The Photographer" /> */}
        </div>
      </div>

      <motion.div
        class="About3"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 1 }}
      >
        <motion.div class="Photographer">
          <motion.h2 className="Heading__primary" variants={childVariants}>
            {" "}
            Meet your Photographer <span></span>
          </motion.h2>

          <motion.p className="Paragraph__important" variants={childVariants}>
            Hello, I am <span> Dennis</span>, A Photographer based in Nairobi.
          </motion.p>
          <motion.p className="Paragraph" variants={childVariants}>
            I aspire to capture authentic, intimate, and organic moments that
            represent your personal story. My style is warm, rich, and often
            moody, while my images represent laughter, kisses, and genuine
            personality. It is an honor to document your story and I treat every
            single one with the love and respect you deserve. Let's be real for
            a second...life goes way too fast.
          </motion.p>

          <motion.p className="Paragraph" variants={childVariants}>
            I am drawn to the beauty that each person adds to the world, and I
            would love to capture that beauty for you.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* <div class="About4">
        <div class="grid">
          <img src="Images/wedding17.webp" alt="The Photographer" />
        </div>
      </div>
      <div class="About5">
        <div class="Events">
          <h4 className="Heading__secondary">Let's create magic together</h4>
          <p className="Paragraph">
            {" "}
            I appreciate the raw reality of everyday life and the fleeting
            beauty of those in between moments. I do my best to take every photo
            with that in mind.{" "}
          </p>
          <button className="Button">Book a shoot</button>
        </div> */}
      {/* </div>
      <div class="About6">
        <div class="Events">
          <h4 className="Heading__secondary">Contact Me</h4>
          <p className="Paragraph">
            {" "}
            I can't wait to hear from you! Let's start planning your special day{" "}
          </p>
          <button className="Button">Book a shoot</button>
        </div>
      </div>
      <div class="About7">
        <div class="grid">
          <img src="Images/fam1.jpg" alt="The Photographer" />
        </div>
      </div>
      <div class="About8">
        <div class="SliderT">
          {/* <img src="Images/fam1.jpg" alt="The Photographer" /> */}
      {/* <SliderTestimonials /> */}
      {/* </div>    </div>*/}
    </motion.div>
  );
};

export default About;
