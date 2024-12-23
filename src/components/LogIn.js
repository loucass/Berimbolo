"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AnimatedCard } from "./animated-card";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Sign in:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-wrapper">
      <main className="main-content">
        <section className="auth-section">
          <div className="container">
            <AnimatedCard>
              <div className="auth-card">
                <div className="auth-header">
                  <h1 className="auth-title">Sign In</h1>
                  <p className="auth-description">
                    Welcome back! Please sign in to your account.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="password-input">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5 " />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Remember me</span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Sign In
                  </button>

                  <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-primary hover:underline">
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </AnimatedCard>
          </div>
        </section>
      </main>
    </div>
  );
}
