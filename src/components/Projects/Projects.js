import React from "react";
import images from "../../dev-data/data";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      {images.map((image) => {
        return (
          <div class={image.className}>
            <div class="grid">
              <img src={image.image} alt={image.alt} />
            </div>
          </div>
        );
      })}

      {/* <div class="Project1">
        <div class="grid">
          <img src="./img/img12.jpg " alt="image1" />
          <p>1</p>
        </div>
      </div>

      <div class="Project2">
        <div class="grid">
          <img src="./img/img13.jpg " alt="image1" />
          <p> 2</p>
        </div>
      </div>

      <div class="Project3">
        <div class="grid">
          <img src="./img/img15.jpg " alt="image1" />
          <p> 3</p>
        </div>
      </div>

      <div class="Project4">
        <div class="grid">
          <img src="./img/img17.jpg " alt="image1" />
          <p> 4</p>
        </div>
      </div>

      <div class="Project5">
        <div class="grid">
          <img src="./img/img20.jpg " alt="image1" />
          <p> 5</p>
        </div>
      </div>

      <div class="Project6">
        <div class="grid">
          <img src="./img/img21.jpg " alt="image1" />
          <p> 6</p>
        </div>
      </div>

      <div class="Project7">
        <div class="grid">
          <img src="./img/pic9.jpg " alt="image1" />
          <p> 7</p>{" "}
        </div>
      </div> */}
      {/* 
      <div class="Project8">
        <div class="grid">
          <img src="./img/pic13.jpg " alt="image1" />
          <p>8 </p>
        </div>
      </div>

      <div class="Project9">
        <div class="grid">
          <img src="./img/pic12.jpg " alt="image1" />
          <p>9</p>
        </div>
      </div>

      <div class="Project10">
        <div class="grid">
          <img src="./img/pic14.jpg " alt="image1" />
          <p>10 </p>
        </div>
      </div> */}

      {/* <div class="Project11">
        <div class="grid">
          <img src="./img/pic15.jpg " alt="image1" />
          <p>11 </p>
        </div>
      </div>

      <div class="Project12">
        <div class="grid">
          <img src="./img/pic14.jpg " alt="image1" />
          <p>12 </p>
        </div>
      </div>

      <div class="Project13">
        <div class="grid">
          <img src="./img/pic5.jpg " alt="image1" />
          <p> 13</p>{" "}
        </div>
      </div>

      <div class="Project14">
        <div class="grid">
          <img src="./img/pic6.jpg " alt="image1" />
          <p> 14</p>{" "}
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
