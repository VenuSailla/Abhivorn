import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <h2>Have a project in mind?</h2>
        <p>
          Tell us what you want to build. We'll reply within one
          business day with a clear plan.
        </p>

        <a href="/contact" className="footer-btn">
          Start a Project
        </a>

        <a href="https://wa.me/919966629766" className="whatsapp">
          Chat on WhatsApp
        </a>
      </div>

      <div className="footer-content">

        <div>
          <h3>Abhivorn Technologies</h3>
          <p>
            We build software, websites, mobile apps, HRMS,
            healthcare and AI solutions in Hyderabad.
          </p>
          <p>hello@abhivorn.com</p>
          <p>+91 99666 29766</p>
        </div>

        <div>
          <h3>Services</h3>
          <p>Custom Software</p>
          <p>Web Development</p>
          <p>Mobile Apps</p>
          <p>HRMS Development</p>
          <p>Healthcare Software</p>
          <p>AI Development</p>
        </div>

        <div>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Services</p>
          <p>Products</p>
          <p>Projects</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        <div>
          <h3>Products</h3>
          <p>VORN HR</p>
          <p>VORQARD</p>
        </div>

      </div>

      <div className="footer-offices">
        <h3>Our Offices</h3>
        <p>HITEC City · Head Office</p>
        <p>Cyber Towers, HITEC City, Hyderabad, Telangana</p>
        <p>KPHB · Branch Office</p>
        <p>KPHB Colony, Kukatpally, Hyderabad, Telangana 500072</p>
        <p>Karimnagar · Branch Office</p>
        <p>Karimnagar, Telangana</p>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Abhivorn Technologies Pvt Ltd. All rights reserved.
        </p>
        <p>Startup India certified.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>

    </footer>
  );
}

export default Footer;