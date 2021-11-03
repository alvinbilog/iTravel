import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Trips from "./components/Trips";
import Testimony from "./components/Testimony";
import Choose from "./components/Choose";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Scrollspy from "react-scrollspy";

function App() {
  return (
    <div className="App">
      <Nav />

      <Hero />
      <section id="trips">
        <Trips />
      </section>
      <section id="testimonials">
        <Testimony />
      </section>
      <Choose />
      <Offers />
      <section id="contacts">
        <Footer />
      </section>
    </div>
  );
}

export default App;
