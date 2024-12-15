import React from 'react';

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
      <style jsx>{`
        .hero-section {
          padding-top: 8rem;
          padding-bottom: 4rem;
          background-color: var(--background);
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-align: center;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--muted-foreground);
          margin-bottom: 2rem;
          text-align: center;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Hero;

