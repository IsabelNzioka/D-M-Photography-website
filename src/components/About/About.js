import React from "react";

// import photographer from "../Images/couple1.jpg";
// import photographer from "../../../public/Images/couple1.jpg";
import SliderTestimonials from "../../containers/Slider/SliderTestimonials/SliderTestimonials";

import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div class="About1">
        <div class="grid">
          {/* <p>1</p> */}
          <img src="Images/dennis.jpg" alt="The Photographer" />
        </div>
      </div>

      <div class="About2">
        <div class="grid">
          <img src="Images/dennis2.jpg" alt="The Photographer" />
        </div>
      </div>

      <div class="About3">
        <div class="Photographer">
          <h2 className="Heading__primary">
            {" "}
            Meet your Photographer <span></span>
          </h2>

          <p className="Paragraph__important">
            Hello, I am <span> Dennis Mutembei</span>, A Photographer based in
            Nairobi.
          </p>
          <p className="Paragraph">
            I aspire to capture authentic, intimate, and organic moments that
            represent your personal story. My style is warm, rich, and often
            moody, while my images represent laughter, kisses, and genuine
            personality. It is an honor to document your story and I treat every
            single one with the love and respect you deserve. Let's be real for
            a second...life goes way too fast.
          </p>

          <p className="Paragraph">
            I am drawn to the beauty that each person adds to the world, and I
            would love to capture that beauty for you.
          </p>
        </div>
      </div>

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
    </div>
  );
};

export default About;
