import Image from "next/image";
import Link from "next/link";
import { services } from "../data/services";

export default function Services({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>

        <div className="services-grid">
          {items.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              className="service-card"
              key={service.slug}
            >
              <div className="service-card-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={350}
                />
              </div>
              <h3>{service.title}</h3>
              <p className="service-card-desc">{service.shortDescription}</p>
              <span className="service-card-price">{service.priceFrom}</span>
              <span className="card-link">Learn more →</span>
            </Link>
          ))}
        </div>

        {limit && limit < services.length && (
          <div className="section-cta">
            <Link href="/services" className="text-link">
              View all {services.length} services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
