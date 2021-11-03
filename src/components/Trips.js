import React from "react";
import Data from "./Data/Data.json";
import "./Trips.css";
import Zoom from "react-reveal/Zoom";

const Trips = () => {
  return (
    <div className="Trips">
      <h1>Our Favorite Destinations</h1>
      <div className="trips-container">
        <div className="trips-element">
          {Data.map((postDetail, index) => {
            return (
              <div className="img-container" key={postDetail.id}>
                <Zoom>
                  <img
                    src={postDetail.image}
                    width="100px"
                    key={postDetail.id}
                    // key={postDetail.key}
                    alt={postDetail.alt}
                  />
                </Zoom>
                <div className="image-text">
                  <p>
                    <br />
                    <i className="fas fa-map-marker-alt"></i> &nbsp;
                    {postDetail.alt}
                  </p>
                  <button>{postDetail.button}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trips;
