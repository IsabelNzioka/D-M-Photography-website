import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SliderTestimonials.css";

const SliderTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Sliderr">
      <Slider {...settings}>
        <div className="One">
          <div className="OneOne">
            <img src="Images/fam1.jpg" alt="The Photographer" />
          </div>
          <div className="OneTwo">
            <h4 className="Heading__secondary">Contact Me</h4>
            <p className="Paragraph">
              {" "}
              I can't wait to hear from you! Let's start planning your special
              day{" "}
            </p>
            <button className="Button">Book a shoot</button>
          </div>
        </div>
        <div className="Two">
          <h3>2</h3>
        </div>
        <div className="Three">
          <h3>3</h3>
        </div>
        <div className="Four">
          <h3>4</h3>
        </div>
        <div className="Five">
          <h3>5</h3>
        </div>
        <div className="Six">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderTestimonials;
