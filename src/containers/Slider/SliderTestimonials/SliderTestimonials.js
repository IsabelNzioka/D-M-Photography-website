import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SliderTestimonials.css";

const SliderTestimonials = (props) => {
  return (
    <div className="Sliderr">
      <h1>Hello</h1>
      <p>{props.name}</p>
    </div>
  );
};

export default SliderTestimonials;
