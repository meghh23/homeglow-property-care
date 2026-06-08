import type { Metadata } from "next";
import SiteLayout from "../components/SiteLayout";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | HomeGlow Property Care",
  description:
    "Get a free cleaning quote. Call 07447 935018, WhatsApp us, or fill in our contact form.",
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Get Your Free Quote"
        subtitle="We respond within 24 hours. No obligation, no hidden fees."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Contact hideHeading />
    </SiteLayout>
  );
}
