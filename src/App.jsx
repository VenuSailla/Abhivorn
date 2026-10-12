import React from "react";
import "./App.css";
import "./index.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;