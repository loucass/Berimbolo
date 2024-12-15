import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Homeowner',
      content: 'The security system has given me peace of mind. The installation was quick and professional.',
      avatar: '/placeholder.svg',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      role: 'Business Owner',
      content: 'Our store has never been safer. The 24/7 monitoring is a game-changer for our business.',
      avatar: '/placeholder.svg',
      rating: 4,
    },
    {
      name: 'Mike Johnson',
      role: 'Property Manager',
      content: 'Implementing this security system across our properties has significantly reduced incidents. Highly recommended!',
      avatar: '/placeholder.svg',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section bg-gradient">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">What Our Customers Say</h2>
        <p className="section-description" data-aos="fade-up">
          Don't just take our word for it. Here's what our satisfied customers have to say about our services.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="testimonial-content">
                <Quote className="quote-icon" />
                <p className="testimonial-text">{testimonial.content}</p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`star-icon ${i < testimonial.rating ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .testimonial-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .testimonial-card {
          background-color: var(--background);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .testimonial-content {
          padding: 2rem;
          flex-grow: 1;
          position: relative;
        }

        .quote-icon {
          position: absolute;
          top: 1rem;
          left: 1rem;
          width: 2rem;
          height: 2rem;
          color: var(--primary);
          opacity: 0.2;
        }

        .testimonial-text {
          font-style: italic;
          color: var(--foreground);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .testimonial-footer {
          display: flex;
          align-items: center;
          padding: 1rem 2rem;
          background-color: var(--accent);
        }

        .testimonial-avatar {
          margin-right: 1rem;
        }

        .testimonial-avatar img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        .testimonial-info {
          flex-grow: 1;
        }

        .testimonial-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .testimonial-role {
          color: var(--muted-foreground);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .testimonial-rating {
          display: flex;
          align-items: center;
        }

        .star-icon {
          width: 1rem;
          height: 1rem;
          color: var(--muted);
          margin-right: 0.25rem;
        }

        .star-icon.filled {
          color: #fbbf24;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

