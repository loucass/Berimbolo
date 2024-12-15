import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div data-aos="fade-up">
          <h1 className="hero-title">
            Premium Security for Peace of Mind
          </h1>
          <p className="hero-description">
            Reliable security products with expert installation plans tailored to your needs
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
            <a href="#products" className="btn btn-secondary">
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

