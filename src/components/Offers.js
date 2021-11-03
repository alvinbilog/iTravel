import React from "react";
import "./Offers.css";
import image from "./Data/image/offer.jpg";

const Offers = () => {
  return (
    <div className="Offers">
      <div className="offer-container">
        <img src={image} alt="Boracay Beach" />
        <div className="text-container">
          <h1>Exclusive Offers</h1>
          <p>
            Sign up for our newsletter below to get $100 off to your first trip
          </p>
          <form action="submit">
            <input type="email" id="email" className="email"></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Offers;
