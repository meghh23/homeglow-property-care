import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "../components/SiteLayout";
import PageHeader from "../components/PageHeader";
import CTABanner from "../components/CTABanner";
import {
  servicePricing,
  propertySizeTable,
  pricingNotes,
} from "../data/pricing";

export const metadata: Metadata = {
  title: "Pricing | HomeGlow Property Care",
  description:
    "Transparent cleaning prices by service and property size. Free quotes for domestic, deep, tenancy, gardening and more across Harrow and North West London.",
};

export default function PricingPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Simple, Transparent Pricing"
        subtitle="Estimated prices by service and property size. All quotes are free and tailored to you."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
      />

      <section className="inner-page">
        <div className="container">
          <p className="pricing-disclaimer pricing-disclaimer--center">
            All prices below are <strong>estimates</strong>. Final quotes vary
            depending on property size, condition, location, workload, access and
            level of soiling. Contact us for an accurate, no-obligation quote.
          </p>

          <h2 className="pricing-section-title">Pricing by Service</h2>

          <div className="pricing-services-grid">
            {servicePricing.map((item) => (
              <div className="pricing-service-card" key={item.slug}>
                <div className="pricing-service-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={260}
                  />
                </div>
                <div className="pricing-service-body">
                  <h3>{item.title}</h3>
                  <p className="pricing-service-desc">{item.shortDescription}</p>
                  <p className="pricing-service-price">{item.priceFrom}</p>

                  {item.pricingType === "bedroom" && item.bedroomPrices && (
                    <ul className="pricing-bedroom-list">
                      <li>Studio — {item.bedroomPrices.studio}</li>
                      <li>1 Bed — {item.bedroomPrices.oneBed}</li>
                      <li>2 Bed — {item.bedroomPrices.twoBed}</li>
                      <li>3 Bed — {item.bedroomPrices.threeBed}</li>
                      {item.bedroomPrices.fourBedPlus && (
                        <li>4+ Bed — {item.bedroomPrices.fourBedPlus}</li>
                      )}
                    </ul>
                  )}

                  {item.hourlyRate && (
                    <p className="pricing-service-note">{item.hourlyRate}</p>
                  )}
                  {item.perRoomRate && (
                    <p className="pricing-service-note">{item.perRoomRate}</p>
                  )}
                  {item.flatNote && (
                    <p className="pricing-service-note">{item.flatNote}</p>
                  )}

                  <Link
                    href={`/services/${item.slug}`}
                    className="text-link"
                  >
                    View service →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <h2 className="pricing-section-title">Property Size Guide</h2>
          <p className="pricing-section-subtitle">
            Quick reference for regular, deep and end of tenancy cleans
          </p>

          <div className="pricing-table-wrapper">
            <table className="pricing-table pricing-table--full">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Regular Clean</th>
                  <th>Deep Clean</th>
                  <th>End of Tenancy</th>
                </tr>
              </thead>
              <tbody>
                {propertySizeTable.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.regular}</td>
                    <td>{row.deep}</td>
                    <td>{row.tenancy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="pricing-notes">
            {pricingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>

          <div className="section-cta">
            <Link href="/contact" className="cta-primary btn">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
