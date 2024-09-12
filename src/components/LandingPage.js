import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section id="home">
        <h1>Welcome to Our Landing Page</h1>
        <p>Your journey starts here.</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>Learn more about what we do.</p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <p>Explore the services we offer.</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us.</p>
      </section>
    </div>
  );
};

export default LandingPage;
