import React from 'react';
import { Check, Flame } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 0,
      period: 'Free',
      features: ['One Device', 'Basic support', 'Community access'],
      color: 'bg-gray-100',
      buttonColor: 'btn-secondary',
    },
    {
      name: 'Advanced',
      price: 30,
      period: '/month',
      features: ['3 Devices', 'Priority support', 'Access to Pro features'],
      color: 'bg-blue-100',
      buttonColor: 'btn-primary',
      isHot: true,
    },
    {
      name: 'Premium',
      price: 45,
      period: '/month',
      features: ['Unlimited Devices', '24/7 support', 'Custom solutions'],
      color: 'bg-purple-100',
      buttonColor: 'btn-primary',
    },
  ];

  return (
    <section id="pricing" className="section bg-gradient">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Tailored Installation Plans</h2>
        <p className="section-description" data-aos="fade-up">
          Choose the perfect plan that fits your security needs and budget
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.color}`} data-aos="fade-up" data-aos-delay={index * 100}>
              {plan.isHot && (
                <div className="hot-offer">
                  <Flame className="flame-icon" />
                  <span>Hot Offer</span>
                </div>
              )}
              <div className="pricing-header">
                <h3 className="pricing-title">{plan.name}</h3>
                <div className="pricing-price">
                  {plan.price === 0 ? 'Free' : `$${plan.price}`}
                  {plan.period !== 'Free' && <span className="pricing-period">{plan.period}</span>}
                </div>
              </div>
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Check className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`btn ${plan.buttonColor}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .pricing-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .pricing-card {
          background-color: var(--background);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          padding: 2rem;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .hot-offer {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: #ef4444;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          display: flex;
          align-items: center;
          font-size: 0.875rem;
        }

        .flame-icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.25rem;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .pricing-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .pricing-price {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .pricing-period {
          font-size: 1rem;
          font-weight: 400;
        }

        .pricing-features ul {
          list-style-type: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }

        .pricing-features li {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .check-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: var(--primary);
          margin-right: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default Pricing;

