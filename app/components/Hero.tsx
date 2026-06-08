import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo-box">
          <Image
            src="/images/logo.png"
            alt="HomeGlow Property Care"
            width={180}
            height={180}
            className="hero-logo"
            priority
          />
        </div>

        <h1 className="hero-title">HomeGlow Property Care</h1>

        <p className="hero-subtitle">
          Professional Cleaning Services Across Harrow,
          North West London &amp; Surrounding Areas
        </p>

        <div className="hero-buttons">
          <a href="tel:07447935018" className="call-btn btn">
            Call Now
          </a>

          <a
            href="https://wa.me/447447935018"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn btn"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
