
import React from 'react';

function Services() {
  return (
    <section className="services">
      <h2>What we do</h2>
      <h1>End-to-end software development</h1>
      <p>
        We help businesses build websites, apps and software
        with one team from start to finish.
      </p>

      <div className="services-container">

        <div className="service-card">
          <h3>Custom Software Development</h3>
          <p>Software designed for your business needs.</p>
          <a href="/services">Learn more</a>
        </div>

        <div className="service-card">
          <h3>Web Development</h3>
          <p>Fast and modern websites for your business.</p>
          <a href="/services">Learn more</a>
        </div>

        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>Mobile apps for Android and iOS devices.</p>
          <a href="/services">Learn more</a>
        </div>

        <div className="service-card">
          <h3>HRMS Development</h3>
          <p>Manage employees, attendance and payroll easily.</p>
          <a href="/services">Learn more</a>
        </div>

        <div className="service-card">
          <h3>Healthcare Software</h3>
          <p>Digital solutions for doctors and patients.</p>
          <a href="/services">Learn more</a>
        </div>

        <div className="service-card">
          <h3>AI Development</h3>
          <p>AI tools and chatbots to simplify daily work.</p>
          <a href="/services">Learn more</a>
        </div>

      </div>
    </section>
  );
}

export default Services;
