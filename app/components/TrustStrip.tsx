
export default function TrustStrip() {
  const items = [
    "Fully Insured",
    "Reliable & Professional",
    "Eco-Friendly Products",
    "Affordable Pricing",
  ];

  return (
    <section className="trust-strip">
      <div className="container">
        {items.map((item) => (
          <div key={item} className="trust-item">
            ✓ {item}
          </div>
        ))}
      </div>
    </section>
  );
}