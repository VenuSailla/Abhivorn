
import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>
        Have a project in mind? Let's talk
        about how we can help your business.
      </p>

      <div className="contact-details">
        <div>
          <h3>Email</h3>
          <p>info@abhivorn.com</p>
        </div>

        <div>
          <h3>Location</h3>
          <p>Hyderabad, Telangana</p>
        </div>
      </div>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
        ></textarea>

        <button type="button">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
