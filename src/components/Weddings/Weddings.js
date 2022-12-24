import React from "react";

import weddingdata from "../../dev-data/weddingdata";

import "./Weddings.css";

const Weddings = () => {
  return (
    <div className="Weddings">
      {weddingdata.map((image) => {
        return (
          <div className={image.className} key={image._id}>
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
