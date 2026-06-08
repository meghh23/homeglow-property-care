import type { Metadata } from "next";
import SiteLayout from "../components/SiteLayout";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "About Us | HomeGlow Property Care",
  description:
    "Learn about HomeGlow Property Care — fully insured, professional cleaning across Harrow and North West London.",
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="About HomeGlow Property Care"
        subtitle="Reliable, affordable cleaning you can trust."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <About hideHeading />
      <CTABanner />
    </SiteLayout>
  );
}
