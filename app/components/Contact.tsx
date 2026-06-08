export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get Your Free Quote Today</h2>

        <p className="contact-subtitle">
          Contact HomeGlow Property Care for professional cleaning services
          across Harrow and surrounding areas.
        </p>

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

            <a
              href="https://wa.me/447447935018"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn btn"
            >
              WhatsApp Us
            </a>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" name="name" required />

            <input type="email" placeholder="Your Email" name="email" required />

            <input type="tel" placeholder="Phone Number" name="phone" />

            <textarea
              placeholder="Tell us about your cleaning requirements"
              rows={5}
              name="message"
              required
            />

            <button type="submit">Request Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
}
