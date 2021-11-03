import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="elem logo-container">
          <h1>iTravel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ut consequuntur.
          </p>
        </div>
        <div className="elem contact-container">
          <h4>Contact Us</h4>
          <ul>
            <li>Contact</li>
            <li>Support</li>
            <li>Destinations</li>
            <li>Sponsorships</li>
          </ul>
        </div>
        <div className="elem videos-container">
          <h4>Contact Us</h4>
          <ul>
            <li>Submit Video</li>
            <li>Ambassadors</li>
            <li>Agency</li>
            <li>Influencer</li>
          </ul>
        </div>
        <div className="elem social-container">
          <h4>Contact Us</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="copyright-container">
        <p>&#169; Designed & Built by</p>
        <p>Alvin Patrick Bilog</p>
      </div>
    </div>
  );
};

export default Footer;
