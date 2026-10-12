
import React from "react";

function Achievements() {
  return (
    <section className="achievements">
      <h2>Why Choose Us</h2>
      <p>We focus on quality, teamwork and customer satisfaction.</p>

      <div className="achievement-list">

        <div className="achievement-card">
          <h3>Quality Work</h3>
          <p>We build reliable solutions for businesses.</p>
        </div>

        <div className="achievement-card">
          <h3>Our Team</h3>
          <p>We work together to deliver better results.</p>
        </div>

        <div className="achievement-card">
          <h3>Customer Support</h3>
          <p>We help our clients with their requirements.</p>
        </div>

      </div>
    </section>
  );
}

export default Achievements;