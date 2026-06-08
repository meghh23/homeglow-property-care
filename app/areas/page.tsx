import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "../components/SiteLayout";
import PageHeader from "../components/PageHeader";
import CTABanner from "../components/CTABanner";
import { areas } from "../data/areas";

export const metadata: Metadata = {
  title: "Areas We Cover | HomeGlow Property Care",
  description:
    "Professional cleaning services in Harrow, Wembley, Pinner, Ruislip, Stanmore and surrounding North West London areas.",
};

export default function AreasPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Areas We Cover"
        subtitle="Local cleaning services across North West London and surrounding areas."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas" },
        ]}
      />

      <section className="inner-page">
        <div className="container">
          <div className="areas-grid">
            {areas.map((area) => (
              <Link
                href={`/areas/${area.slug}`}
                className="area-card"
                key={area.slug}
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
