export default function Areas() {
  const areas = [
    "Harrow",
    "Wembley",
    "Pinner",
    "Ruislip",
    "Northwood",
    "Stanmore",
    "Edgware",
    "Watford",
    "Northolt",
    "Uxbridge",
  ];

  return (
    <section className="areas">
      <div className="container">
        <h2>Areas We Cover</h2>

        <div className="areas-grid">
          {areas.map((area) => (
            <div key={area} className="area-card">
              ✓ {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}