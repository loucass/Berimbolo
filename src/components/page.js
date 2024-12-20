import ProductGrid from "./ProductGrid";

export default function ProductsPage() {
  return (
    <div className="page-wrapper">
      <main className="main-content">
        <section className="section">
          <div className="container">
            <h1 className="section-title">Our Products</h1>
            <p className="section-description">
              Discover our range of high-quality security solutions designed to
              protect what matters most
            </p>
            <ProductGrid />
          </div>
        </section>
      </main>
    </div>
  );
}
