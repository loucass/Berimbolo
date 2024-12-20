"use client";

import { useState } from "react";

import { products } from "../lib/products";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  console.log(useParams());

  const { id } = useParams();
  const product = products.find((p) => p.idN === +id[7]);
  console.log(product, id[7]);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <div>Product not found</div>;
  }

  const thumbnails = [
    product.image,
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ];

  return (
    <div className="page-wrapper">
      <main className="main-content">
        <section className="section">
          <div className="container">
            <div className="product-detail-grid">
              <div className="product-gallery">
                <div className="product-main-image">
                  <img
                    src={thumbnails[selectedImage]}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
                <div className="product-thumbnails">
                  {thumbnails.map((thumb, index) => (
                    <button
                      key={index}
                      className={`thumbnail-button ${
                        selectedImage === index ? "active" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={thumb}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        width={100}
                        height={100}
                        className="rounded-md"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="product-info">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>

                <div className="product-options">
                  <h3 className="options-title">Color</h3>
                  <div className="color-options">
                    <button
                      className={`color-button blue ${
                        selectedColor === "blue" ? "active" : ""
                      }`}
                      onClick={() => setSelectedColor("blue")}
                      aria-label="Blue"
                    />
                    <button
                      className={`color-button white ${
                        selectedColor === "white" ? "active" : ""
                      }`}
                      onClick={() => setSelectedColor("white")}
                      aria-label="White"
                    />
                    <button
                      className={`color-button black ${
                        selectedColor === "black" ? "active" : ""
                      }`}
                      onClick={() => setSelectedColor("black")}
                      aria-label="Black"
                    />
                  </div>
                </div>

                <button className="btn btn-primary w-full">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
