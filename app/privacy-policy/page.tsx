import type { Metadata } from "next";
import SiteLayout from "../components/SiteLayout";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | HomeGlow Property Care",
  description:
    "How HomeGlow Property Care collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: June 2026"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="inner-page">
        <div className="container">
          <div className="legal-content">
            <p>
              HomeGlow Property Care (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) is committed to protecting your privacy. This
              policy explains how we collect, use, and safeguard your personal
              information when you visit our website or use our cleaning
              services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following information when you contact us:</p>
            <ul>
              <li>Name and contact details (phone number, email address)</li>
              <li>Property address and cleaning requirements</li>
              <li>Messages sent via our contact form, phone, or WhatsApp</li>
              <li>Basic website usage data (e.g. pages visited, browser type)</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to enquiries and provide quotes</li>
              <li>Arrange and deliver cleaning services</li>
              <li>Communicate about bookings, changes, or follow-ups</li>
              <li>Improve our website and customer experience</li>
            </ul>

            <h2>Legal Basis for Processing</h2>
            <p>
              We process your personal data based on your consent (when you
              submit an enquiry), our legitimate business interests (providing
              and improving our services), and contractual necessity (when you
              book a cleaning service).
            </p>

            <h2>Sharing Your Information</h2>
            <p>
              We do not sell your personal data. We may share information only
              where necessary with service providers who help us operate our
              business (e.g. hosting providers), or where required by law.
            </p>

            <h2>Data Retention</h2>
            <p>
              We keep your information only for as long as needed to fulfil the
              purposes above, or as required by law. Enquiry data is typically
              retained for up to 2 years unless a service relationship is
              established.
            </p>

            <h2>Your Rights</h2>
            <p>Under UK data protection law, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (where applicable)</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:info@homeglowpropertycare.co.uk">
                info@homeglowpropertycare.co.uk
              </a>
              .
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use essential cookies required for basic
              functionality. If we add analytics or marketing tools in the
              future, we will update this policy and, where required, seek your
              consent.
            </p>

            <h2>Security</h2>
            <p>
              We take reasonable steps to protect your personal information
              against unauthorised access, loss, or misuse. However, no method
              of transmission over the internet is 100% secure.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or how we handle
              your data, please contact:
            </p>
            <p>
              <strong>HomeGlow Property Care</strong>
              <br />
              Email:{" "}
              <a href="mailto:info@homeglowpropertycare.co.uk">
                info@homeglowpropertycare.co.uk
              </a>
              <br />
              Phone: <a href="tel:07447935018">07447 935018</a>
              <br />
              Harrow, London
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
