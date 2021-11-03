import React from "react";
import "./Testimony.css";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import Fade from "react-reveal/Fade";
import image1 from "./Data/image/portrait-1.png";
import image2 from "./Data/image/portrait-2.png";
import image3 from "./Data/image/portrait-3.png";
import image4 from "./Data/image/portrait-4.png";
import image5 from "./Data/image/portrait-5.png";

const Testimony = () => {
  return (
    <div className="Testimony">
      <Fade right>
        <h1>Testimonials</h1>
      </Fade>

      <Carousel className="carousel">
        <Card
          name="Palmary Ballesteros"
          id="01"
          image={image2}
          comment="Lorem ipsum dolor, sit amet consectetur adipisicing eonsectetur adipisicing elit. PosLorem ipsum dolor, sit amet consectetur adipisicing el"
        />
        <Card
          name="Albert Prince Bilog"
          id="02"
          image={image3}
          comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Poss"
        />
        <Card
          name="Stefani Dan Rae Belga"
          id="03"
          image={image4}
          comment="Lorem ipsum dolor, sit"
        />
        <Card
          name="Chrysolyte Prieto Bilog"
          id="01"
          image={image5}
          comment="Lorem ipsum dolor, sit amet consectetur adipisicing elonsectetur adipisicing elit. PosLorem ipsum dolor, sit amet "
        />
        <Card
          name="Rey Glenn Besuayan"
          id="01"
          image={image1}
          comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. PosLorem ipsum dolor, sit amet "
        />
      </Carousel>
    </div>
  );
};
export default Testimony;
