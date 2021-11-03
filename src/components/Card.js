import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./Card.css";

const Card = ({ name, comment, image }) => (
  <div className="Card">
    <Fade left>
      <Zoom>
        <div className="card-container">
          <img src={image} alt="portrait" />
          <h6>{name}</h6>
          <section>
            <p>{comment}</p>
          </section>
        </div>
      </Zoom>
    </Fade>
  </div>
);

export default Card;
