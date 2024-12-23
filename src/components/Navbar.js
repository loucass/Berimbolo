import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            Berimbolo
          </Link>

          <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <a href="#services" className="navbar-link">
              Services
            </a>
            <Link to="/products" className="navbar-link">
              Products
            </Link>
            <a href="#pricing" className="navbar-link">
              Pricing
            </a>
            <a href="#contact" className="navbar-link">
              Contact
            </a>
            <div className="navbar-buttons">
              <Link to="/signin" className="btn btn-secondary">
                Sign in
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign up
              </Link>
            </div>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(4px);
          z-index: 50;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
        }

        .navbar-brand {
          font-size: 1.25rem;
          font-weight: bold;
          color: var(--primary);
          text-decoration: none;
        }

        .navbar-menu {
          display: none;
        }

        .navbar-menu.open {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--background);
          padding: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .navbar-link {
          font-size: 0.875rem;
          color: var(--foreground);
          text-decoration: none;
          padding: 0.5rem 0;
        }

        .navbar-link:hover {
          color: var(--primary);
        }

        .navbar-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .mobile-menu-button {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .navbar-menu {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          .navbar-menu.open {
            position: static;
            flex-direction: row;
            padding: 0;
            box-shadow: none;
          }

          .navbar-buttons {
            margin-top: 0;
          }

          .mobile-menu-button {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
