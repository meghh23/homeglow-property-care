export default function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Your Name" name="name" required />
      <input type="email" placeholder="Your Email" name="email" required />
      <input type="tel" placeholder="Phone Number" name="phone" />
      <select name="service" defaultValue="">
        <option value="" disabled>
          Select a service
        </option>
        <option value="domestic">Domestic Cleaning</option>
        <option value="office">Office Cleaning</option>
        <option value="deep">Deep Cleaning</option>
        <option value="tenancy">End of Tenancy</option>
        <option value="other">Other</option>
      </select>
      <textarea
        placeholder="Tell us about your cleaning requirements"
        rows={5}
        name="message"
        required
      />
      <button type="submit">Request Quote</button>
    </form>
  );
}
