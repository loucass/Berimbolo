import React from 'react';
import { Shield, Camera, Bell } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Home Security Systems',
      description: 'Advanced systems for complete home protection and monitoring solutions.',
    },
    {
      icon: Camera,
      title: 'Video Surveillance',
      description: 'High-definition cameras and smart monitoring for 24/7 visual security.',
    },
    {
      icon: Bell,
      title: 'Alarm Systems',
      description: 'Responsive alarm systems to alert you of potential security breaches.',
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Our Services</h2>
        <p className="section-description" data-aos="fade-up">
          We offer a range of comprehensive security solutions to keep you, your family, and your property safe.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="btn btn-outline">Learn more</button>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .services-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .service-card {
          background-color: var(--background);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .service-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background-color: var(--primary);
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .service-icon {
          width: 32px;
          height: 32px;
          color: white;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .service-description {
          color: var(--muted-foreground);
          margin-bottom: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default Services;

