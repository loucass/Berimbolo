import React from 'react';
import { Camera } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'HD Surveillance Camera',
      description: 'High definition 24/7 monitoring',
      price: 299,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Smart Doorbell',
      description: 'See and speak with visitors from anywhere',
      price: 199,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Motion Sensor Alarm',
      description: 'Detect intruders with advanced motion sensing',
      price: 149,
      image: '/placeholder.svg'
    }
  ];

  return (
    <section id="products" className="section bg-accent">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Featured Security Products
        </h2>
        <p className="section-description" data-aos="fade-up">
          Discover our range of high-quality security solutions designed to protect what matters most
        </p>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" data-aos="fade-up">
              <div className="product-image">
                <img src={product.image} alt={product.name} className="product-img" />
                <div className="product-icon">
                  <Camera className="icon" />
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button className="btn btn-primary">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .product-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .product-card {
          background-color: var(--background);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .product-image {
          position: relative;
          overflow: hidden;
        }

        .product-img {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.05);
        }

        .product-icon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: var(--primary);
          border-radius: 50%;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-icon .icon {
          width: 1.5rem;
          height: 1.5rem;
          color: var(--primary-foreground);
        }

        .product-content {
          padding: 1.5rem;
        }

        .product-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .product-description {
          color: var(--muted-foreground);
          margin-bottom: 1rem;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .product-price {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Products;

