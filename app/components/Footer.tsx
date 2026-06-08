import Link from "next/link";
import { services } from "../data/services";
import { areas } from "../data/areas";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>HomeGlow Property Care</h3>
            <p>
              Professional cleaning services across Harrow,
              North West London and surrounding areas.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Areas Covered</h4>
            <ul>
              {areas.slice(0, 5).map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`}>{a.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/areas">View all areas →</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <p>
              <a href="tel:07447935018">07447 935018</a>
            </p>
            <p>
              <a href="mailto:info@homeglowpropertycare.co.uk">
                info@homeglowpropertycare.co.uk
              </a>
            </p>
            <p>Harrow, London</p>
            <p>
              <Link href="/faq">FAQ</Link>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 HomeGlow Property Care. All Rights Reserved.{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
