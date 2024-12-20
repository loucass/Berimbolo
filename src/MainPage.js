import React from "react";

import { AnimatedCard } from "./components/animated-card";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

// Lazy load sections
const Services = lazy(() => import("./components/Services"));
const Products = lazy(() => import("./components/Products"));
const Pricing = lazy(() => import("./components/Pricing"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const ContactForm = lazy(() => import("./components/ContactForm"));

export default function MainPage() {
  return (
    <div>
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <AnimatedCard>
              <h1 className="hero-title">Premium Security for Peace of Mind</h1>
              <p className="hero-description">
                Reliable security products with expert installation plans
                tailored to your needs
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  Get Started
                </a>
                <a href="#products" className="btn btn-secondary">
                  Explore Products
                </a>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Lazy loaded sections */}
        <Suspense
          fallback={<div className="loading-placeholder">Loading...</div>}
        >
          <Services />
        </Suspense>

        <Suspense
          fallback={<div className="loading-placeholder">Loading...</div>}
        >
          <Products />
        </Suspense>

        <Suspense
          fallback={<div className="loading-placeholder">Loading...</div>}
        >
          <Pricing />
        </Suspense>

        <Suspense
          fallback={<div className="loading-placeholder">Loading...</div>}
        >
          <Testimonials />
        </Suspense>

        <Suspense
          fallback={<div className="loading-placeholder">Loading...</div>}
        >
          <ContactForm />
        </Suspense>
      </main>
    </div>
  );
}
