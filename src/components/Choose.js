import React from "react";
import "./Choose.css";

const Choose = () => {
  return (
    <div className="Choose">
      <h1>Why Choose Us?</h1>
      <div className="choose-container">
        <div className="choose-element">
          <i className="fas fa-globe-americas"></i>
          <h3>Over 100 Destinations</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="choose-element">
          <i className="fas fa-plane"></i>
          <h3>1 Million Trips Made</h3>
          <p>Lorem ipsum dolor sit amet ectetur adipisicing elit. </p>
        </div>
        <div className="choose-element">
          <i className="fas fa-clock"></i>
          <h3>Fastest Support</h3>
          <p>Lorem ipsum dolor sit amet conseur adipisicing elit. </p>
        </div>
        <div className="choose-element">
          <i class="fab fa-cc-visa"></i>
          <h3>Best Deals</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
