import Link from "next/link";
import { areas } from "../data/areas";

export default function Areas({ limit }: { limit?: number }) {
  const items = limit ? areas.slice(0, limit) : areas;

  return (
    <section className="areas">
      <div className="container">
        <h2>Areas We Cover</h2>

        <div className="areas-grid">
          {items.map((area) => (
            <Link
              href={`/areas/${area.slug}`}
              className="area-card"
              key={area.slug}
            >
              {area.name}
            </Link>
          ))}
        </div>

        {limit && (
          <div className="section-cta">
            <Link href="/areas" className="text-link">
              View all areas →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
