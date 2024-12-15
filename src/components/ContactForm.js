import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section bg-gradient">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Contact Us</h2>
        <p className="section-description" data-aos="fade-up">
          Get in touch with our team for any inquiries or to schedule a consultation.
        </p>

        <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="(123) 456-7890"
              />
            </div>
            <div className="form-group col-span-full">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="form-textarea"
                placeholder="How can we help you?"
              ></textarea>
            </div>
          </div>
          <div className="form-submit">
            <button type="submit" className="btn btn-primary">
              <Send className="send-icon" />
              Send Message
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          background-color: var(--background);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .form-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(2, 1fr);
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.col-span-full {
          grid-column: span 2;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
          border: 1px solid var(--accent);
          border-radius: 0.25rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          resize: vertical;
        }

        .form-submit {
          margin-top: 1.5rem;
          text-align: center;
        }

        .send-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;

