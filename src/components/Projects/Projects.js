import React, { useState } from "react";
import Modal from "../../containers/Modal/Modal";
import images from "../../dev-data/data";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

import "./Projects.css";

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

const Projects = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  //next image
  const nextSlide = () => {
    slideNumber + 1 === images.length
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
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <motion.div
      className="Projects"
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
              src={images[slideNumber].image}
              alt={images[slideNumber].alt}
            />
            {/* <h1>HI</h1> */}
          </div>
        </Modal>
      )}
      {images.map((image, index) => {
        return (
          <div
            className={image.className}
            key={index}
            onClick={() => handleOpenModal(index)}
          >
            <div className="grid">
              <LazyLoadImage
                effect="blur"
                alt={image.alt}
                height="100%"
                src={image.image} // use normal <img> attributes as props
                width="100%"
              />
              {/* <img src={image.image} alt={image.alt} /> */}
              {/* <p>{image._id}</p> */}
            </div>
          </div>
        );
      })}

      {/* <div class="Project1">
        <div class="grid">
          <p>1</p>
        </div>
      </div>

      <div class="Project2">
        <div class="grid">
          <p> 2</p>
        </div>
      </div>

      <div class="Project3">
        <div class="grid">
          <p> 3</p>
        </div>
      </div>

      <div class="Project4">
        <div class="grid">
          <p> 4</p>
        </div>
      </div>

      <div class="Project5">
        <div class="grid">
          <p> 5</p>
        </div>
      </div>

      <div class="Project6">
        <div class="grid">
          <p> 6</p>
        </div>
      </div>

      <div class="Project7">
        <div class="grid">
          <p> 7</p>{" "}
        </div>
      </div>

      <div class="Project8">
        <div class="grid">
          <p>8 </p>
        </div>
      </div>

      <div class="Project9">
        <div class="grid">
          <p>9</p>
        </div>
      </div>

      <div class="Project10">
        <div class="grid">
          <p>10 </p>
        </div>
      </div>

      <div class="Project11">
        <div class="grid">
          <p>11 </p>
        </div>
      </div>

      <div class="Project12">
        <div class="grid">
          <p>12 </p>
        </div>
      </div>

      <div class="Project13">
        <div class="grid">
          <p> 13</p>{" "}
        </div>
      </div>

      <div class="Project14">
        <div class="grid">
          <p> 14</p>{" "}
        </div>
      </div>

      <div class="Project15">
        <div class="grid">
          <p> 13</p>{" "}
        </div>
      </div>

      <div class="Project16">
        <div class="grid">
          <p> 14</p>{" "}
        </div>
      </div> */}
    </motion.div>
  );
};

export default Projects;
