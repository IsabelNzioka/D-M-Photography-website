import React, { useState } from "react";

import weddingdata from "../../dev-data/weddingdata";

import Modal from "../../containers/Modal/Modal";

import "./Weddings.css";

const Weddings = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  //next image
  const nextSlide = () => {
    slideNumber + 1 === weddingdata.length
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
      ? setSlideNumber(weddingdata.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="Weddings">
      {openModal && (
        <Modal
          show={showModal}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          closeModal={closeModal}
        >
          <div className="FullImage">
            <img
              src={weddingdata[slideNumber].image}
              alt={weddingdata[slideNumber].alt}
            />
          </div>
        </Modal>
      )}
      {weddingdata.map((image, index) => {
        return (
          <div
            className={image.className}
            key={index}
            onClick={() => handleOpenModal(index)}
          >
            <div className="grid">
              <img src={image.image} alt={image.alt} />
              {/* <p>{image._id}</p> */}
            </div>
          </div>
        );
      })}
      {/* <div class="Wedding1">
        <div class="grid">
          <p>1</p>
        </div>
      </div>

      <div class="Wedding2">
        <div class="grid">
          <p> 2</p>
        </div>
      </div>

      <div class="Wedding3">
        <div class="grid">
          <p> 3</p>
        </div>
      </div>

      <div class="Wedding4">
        <div class="grid">
          <p> 4</p>
        </div>
      </div>

      <div class="Wedding5">
        <div class="grid">
          <p> 5</p>
        </div>
      </div>

      <div class="Wedding6">
        <div class="grid">
          <p> 6</p>
        </div>
      </div>

      <div class="Wedding7">
        <div class="grid">
          <p> 7</p>{" "}
        </div>
      </div>

      <div class="Wedding8">
        <div class="grid">
          <p>8 </p>
        </div>
      </div>

      <div class="Wedding9">
        <div class="grid">
          <p>9</p>
        </div>
      </div>

      <div class="Wedding10">
        <div class="grid">
          <p>10 </p>
        </div>
      </div>

      <div class="Wedding11">
        <div class="grid">
          <p>11 </p>
        </div>
      </div>

      <div class="Wedding12">
        <div class="grid">
          <p>12 </p>
        </div>
      </div> */}

      {/* <div class="Project13">
        <div class="grid">
        
          <p> 13</p>{" "}
        </div>
      </div>

      <div class="Project14">
        <div class="grid">
 
          <p> 14</p>{" "}
        </div>
      </div> */}
    </div>
  );
};

export default Weddings;
