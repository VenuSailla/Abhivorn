
import React from "react";

function Projects() {
  return (
    <section className="projects">
      <h2>Our Projects</h2>

      <p>
        We build digital solutions for businesses.
      </p>

      <div className="project-list">

        <div className="project-card">
          <h3>Web Development</h3>
          <p>
            We create modern websites.
          </p>
        </div>

        <div className="project-card">
          <h3>Mobile Applications</h3>
          <p>
            We build user-friendly mobile apps.
          </p>
        </div>

        <div className="project-card">
          <h3>Custom Software</h3>
          <p>
            We develop software for businesses.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;