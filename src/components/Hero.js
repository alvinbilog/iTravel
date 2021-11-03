import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <video src="/videos/travel_1.mp4" autoPlay loop muted />
      <div className="hero-container">
        <div className="text-container">
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
        </div>
        <div className="button-container">
          <button>Travel Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
