import type { Metadata } from "next";
import SiteLayout from "../components/SiteLayout";
import PageHeader from "../components/PageHeader";
import CTABanner from "../components/CTABanner";
import { faqs } from "../data/faq";

export const metadata: Metadata = {
  title: "FAQ | HomeGlow Property Care",
  description:
    "Frequently asked questions about our cleaning services, pricing, booking and areas covered.",
};

export default function FAQPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section className="inner-page">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
