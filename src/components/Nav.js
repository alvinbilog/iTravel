import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import "./Nav.css";

const Nav = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <nav className="Nav">
      <div className="nav-container">
        <h1 className="nav-logo">iTravel</h1>
      </div>
      <div className="menu-icon">
        <i
          className={click ? "fas fa-times" : "fas fa-bars"}
          onClick={clickHandler}
        ></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* <Scrollspy items={["section-1", "section-2", "section-3"]}> */}
        <a href="#trips">
          <li className="nav-item">Trips</li>{" "}
        </a>
        <a href="#contacts">
          <li className="nav-item">Contact</li>
        </a>
        <a href="#testimonials">
          <li className="nav-item">Testimonials</li>
        </a>
        {/* </Scrollspy> */}
      </ul>
    </nav>
  );
};

export default Nav;
