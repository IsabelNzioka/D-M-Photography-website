import React from "react";
import images from "../../dev-data/data";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      {images.map((image) => {
        return (
          <div className={image.className} key={image._id}>
            <div className="grid">
              <img src={image.image} alt={image.alt} />
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
    </div>
  );
};

export default Projects;
