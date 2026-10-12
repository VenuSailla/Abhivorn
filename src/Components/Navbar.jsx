
import React from "react";


function Navbar() {
  return (
    <div className="nav-head">

      <div className="nav-logo">
        <img
          src="https://www.abhivorn.com/_next/image?url=%2F_next%2Fstatic%2Fimmutable%2Fmedia%2Flogo.062h4wad30idu.png&w=256&q=75"
          alt="Abhivroon Logo"
        />
      </div>

      <nav className="nav-link">

        <div className="dropdown">
          <a href="#about">About </a>
          <div className="dropdown-menu">
            <a href="#company">Our Company</a>
            <a href="#team">Our Team</a>
            <a href="#careers">Careers</a>
          </div>
        </div>

        <div className="dropdown">
          <a href="#services">Services </a>
          <div className="dropdown-menu">
            <a href="#web">Web Development</a>
            <a href="#app">App Development</a>
            <a href="#software">Software Development</a>
          </div>
        </div>

        <div className="dropdown">
          <a href="#products">Products </a>
          <div className="dropdown-menu">
            <a href="#our-products">Our Products</a>
            <a href="#solutions">Digital Solutions</a>
          </div>
        </div>

        <div className="dropdown">
          <a href="#projects">Projects </a>
          <div className="dropdown-menu">
            <a href="#web-projects">Web Projects</a>
            <a href="#portfolio">Our Portfolio</a>
          </div>
        </div>

        <div className="dropdown">
          <a href="#blog">Blog </a>
          <div className="dropdown-menu">
            <a href="#articles">Latest Articles</a>
            <a href="#news">News and Updates</a>
          </div>
        </div>

        <div className="dropdown">
          <a href="#contact">Contact </a>
          <div className="dropdown-menu">
            <a href="#contact-us">Contact Us</a>
            <a href="#support">Customer Support</a>
          </div>
        </div>

        <a href="#contact" className="quote-btn">
          Get a Free Quote
        </a>

      </nav>
    </div>
  );
}

export default Navbar;
