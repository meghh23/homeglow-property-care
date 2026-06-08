import type { Metadata } from "next";
import SiteLayout from "../components/SiteLayout";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Our Services | HomeGlow Property Care",
  description:
    "Domestic, office, deep, end of tenancy, after-builders, carpet, gardening and emergency cleaning across Harrow and North West London.",
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Our Cleaning Services"
        subtitle="Professional, reliable services for homes, offices and gardens — with clear pricing from the start."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <Services />

      <CTABanner />
    </SiteLayout>
  );
}
