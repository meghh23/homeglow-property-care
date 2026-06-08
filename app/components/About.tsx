import Image from "next/image";
import Link from "next/link";

export default function About({
  compact,
  hideHeading,
}: {
  compact?: boolean;
  hideHeading?: boolean;
}) {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <Image
              src="/images/about-team.jpg"
              alt="Professional Cleaning Team"
              width={700}
              height={500}
            />
          </div>

          <div className="about-content">
            {!hideHeading && (
              <span className="about-tag">ABOUT HOMEGLOW</span>
            )}

            {!hideHeading && (
              <h2>Professional Cleaning Services You Can Trust</h2>
            )}

            <p>
              HomeGlow Property Care provides reliable and affordable
              cleaning services across Harrow, North West London and
              surrounding areas.
            </p>

            {!compact && (
              <>
                <p>
                  Our experienced cleaning professionals deliver exceptional
                  results for homes, offices, end of tenancy properties,
                  deep cleans and regular domestic cleaning.
                </p>

                <p>
                  We are fully insured, use eco-friendly products where
                  possible, and pride ourselves on flexible scheduling and
                  100% customer satisfaction.
                </p>
              </>
            )}

            <div className="about-features">
              <div className="feature">Fully Insured</div>
              <div className="feature">Professional Team</div>
              <div className="feature">Reliable Service</div>
              <div className="feature">Affordable Prices</div>
              {!compact && (
                <>
                  <div className="feature">Flexible Scheduling</div>
                  <div className="feature">100% Satisfaction</div>
                </>
              )}
            </div>

            {compact && (
              <div className="section-cta section-cta--left">
                <Link href="/about" className="text-link">
                  Learn more about us →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
