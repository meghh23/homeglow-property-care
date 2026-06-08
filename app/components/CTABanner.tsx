import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>Ready for a Spotless Property?</h2>
        <p>Get a free, no-obligation quote today. We respond within 24 hours.</p>
        <div className="cta-banner-buttons">
          <Link href="/contact" className="cta-primary btn">
            Get Free Quote
          </Link>
          <a href="tel:07447935018" className="cta-secondary btn">
            Call 07447 935018
          </a>
        </div>
      </div>
    </section>
  );
}
