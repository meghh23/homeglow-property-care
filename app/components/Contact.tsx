import ContactForm from "./ContactForm";

export default function Contact({ hideHeading }: { hideHeading?: boolean }) {
  return (
    <section className="contact">
      <div className="container">
        {!hideHeading && <h2>Get Your Free Quote Today</h2>}

        {!hideHeading && (
          <p className="contact-subtitle">
            Contact HomeGlow Property Care for professional cleaning services
            across Harrow and surrounding areas.
          </p>
        )}

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>

            <p>
              <a href="tel:07447935018">07447 935018</a>
            </p>

            <p>
              <a href="mailto:info@homeglowpropertycare.co.uk">
                info@homeglowpropertycare.co.uk
              </a>
            </p>

            <p>Harrow, London</p>

            <p className="contact-hours">
              <strong>Hours:</strong> Mon–Sat, 8am–6pm
            </p>

            <a
              href="https://wa.me/447447935018"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn btn"
            >
              WhatsApp Us
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
