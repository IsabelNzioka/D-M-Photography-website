import React, { useState } from "react";

// import GradImages from "../../containers/dev-data/weddingdata";

import GradImages from "../../containers/dev-data/graduation";

import Modal from "../../containers/Modal/Modal";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { motion, useScroll, useTransform } from "framer-motion";

import "./Graduation.css";

const containerVariants = {
  hidden: {
    opacity: 0,
    // x: "100vw",
    x: 200,
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

const Graduation = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  //next image
  const nextSlide = () => {
    slideNumber + 1 === GradImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  // showmodal to constrol backdrop
  const showModal = () => {
    setOpenModal(!openModal);
  };

  //previous image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(GradImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      className="Graduation"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {openModal && (
        <Modal
          show={showModal}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          closeModal={closeModal}
        >
          <div className="FullImage">
            <img
              src={GradImages[slideNumber].image}
              alt={GradImages[slideNumber].alt}
            />
            {/* <h1>HI</h1> */}
          </div>
        </Modal>
      )}
      {GradImages.map((image, index) => {
        return (
          <motion.div
            className={image.className}
            key={index}
            onClick={() => handleOpenModal(index)}
            style={{ y }}
          >
            <div className="grid">
              {/* <LazyLoadImage
                effect="blur"
                alt={image.alt}
                height="100%"
                src={image.image} // use normal <img> attributes as props
                width="100%"
              /> */}
              <img src={image.image} alt={image.image} />

              {/* <h1>{image._id}</h1> */}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Graduation;
