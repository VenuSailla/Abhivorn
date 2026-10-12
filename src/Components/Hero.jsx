import React from 'react';
import image from '../assets/abhivroon.imggg.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="title">
          Software, web & mobile apps built to grow your business.
        </span>

        <p>
          Abhivorn Technologies is a Hyderabad software company.
          We design, build and support custom software, websites,
          mobile apps, HRMS, healthcare and AI solutions for businesses across India.
        </p>

        <div className="btns">
          <button className="btn1">Get Free Quote</button>
          <button className="btn2">See Our Work</button>
        </div>

        <div className="hero-features">
          <h4>Free consultation</h4>
          <h4>Clear timelines</h4>
          <h4>You own the code</h4>
        </div>
      </div>
      <div className="hero-right">
        <img src={image} alt="Abhivroon Technologies" />
      </div>

    </section>
  );
};

export default Hero;