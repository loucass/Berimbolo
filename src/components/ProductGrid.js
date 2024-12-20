"use client";

import { Link } from "react-router-dom";
import { products } from "../lib/products";
import { AnimatedCard } from "./animated-card";

export default function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <AnimatedCard key={product.id}>
          <div className="product-card">
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="product-img"
              />
            </div>
            <div className="product-content">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.shortDescription}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <div className="product-buttons">
                  <button className="btn btn-primary">Add to Cart</button>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-secondary"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );
}
