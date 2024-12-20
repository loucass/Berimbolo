import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">Berimbolo</h3>
            <p className="footer-description">
              Providing top-notch security solutions for your peace of mind.
            </p>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="footer-link">
                  Products
                </a>
              </li>
              <li>
                <a href="#pricing" className="footer-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="footer-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="footer-link">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Connect With Us</h4>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Twitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Instagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} SecureGuard. All rights reserved.
          </p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--primary);
          color: var(--primary-foreground);
          padding: 3rem 0;
        }

        .footer-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        .footer-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .footer-description {
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .footer-links {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          color: var(--primary-foreground);
          text-decoration: none;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          display: inline-block;
        }

        .footer-link:hover {
          text-decoration: underline;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          color: var(--primary-foreground);
          text-decoration: none;
        }

        .social-icon:hover {
          color: var(--accent);
        }

        .footer-bottom {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-size: 0.875rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
