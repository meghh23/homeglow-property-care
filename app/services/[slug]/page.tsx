import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteLayout from "../../components/SiteLayout";
import PageHeader from "../../components/PageHeader";
import ServicePricingBlock from "../../components/ServicePricingBlock";
import CTABanner from "../../components/CTABanner";
import { services, getService } from "../../data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | HomeGlow Property Care`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <SiteLayout>
      <PageHeader
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="inner-page">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-image">
              <Image
                src={service.image}
                alt={service.title}
                width={700}
                height={480}
              />
            </div>

            <div className="detail-content">
              <p>{service.description}</p>

              <div className="detail-meta">
                <div className="detail-meta-item">
                  <strong>Ideal for</strong>
                  <span>{service.idealFor}</span>
                </div>
                <div className="detail-meta-item">
                  <strong>Starting from</strong>
                  <span className="detail-price">{service.priceFrom}</span>
                </div>
              </div>

              <Link href="/contact" className="cta-primary btn">
                Get a Free Quote
              </Link>
            </div>
          </div>

          <div className="detail-includes">
            <h2>What&apos;s Included</h2>
            <ul className="checklist">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <ServicePricingBlock service={service} />
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
