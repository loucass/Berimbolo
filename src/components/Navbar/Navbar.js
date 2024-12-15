import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="/" className="navbar-brand">
            SecureGuard
          </a>

          <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <a href="/" className="navbar-link">Home</a>
            <a href="#services" className="navbar-link">Services</a>
            <a href="#products" className="navbar-link">Products</a>
            <a href="#pricing" className="navbar-link">Pricing</a>
            <a href="#contact" className="navbar-link">Contact</a>
            <div className="navbar-buttons">
              <a href="/signin" className="btn btn-secondary">Sign in</a>
              <a href="/signup" className="btn btn-primary">Sign up</a>
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
    </nav>
  );
};

export default Navbar;

