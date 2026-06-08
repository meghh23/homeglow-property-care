import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about-section">
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
            <span className="about-tag">ABOUT HOMEGLOW</span>

            <h2>Professional Cleaning Services You Can Trust</h2>

            <p>
              HomeGlow Property Care provides reliable and affordable
              cleaning services across Harrow, North West London and
              surrounding areas.
            </p>

            <p>
              Our experienced cleaning professionals deliver exceptional
              results for homes, offices, end of tenancy properties,
              deep cleans and regular domestic cleaning.
            </p>

            <div className="about-features">
              <div className="feature">Fully Insured</div>
              <div className="feature">Professional Team</div>
              <div className="feature">Reliable Service</div>
              <div className="feature">Affordable Prices</div>
              <div className="feature">Flexible Scheduling</div>
              <div className="feature">100% Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
