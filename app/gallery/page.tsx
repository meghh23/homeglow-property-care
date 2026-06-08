import type { Metadata } from "next";
import SiteLayout from "../components/SiteLayout";
import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Gallery | HomeGlow Property Care",
  description:
    "Before and after cleaning results from HomeGlow Property Care across Harrow and North West London.",
};

export default function GalleryPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Before & After Results"
        subtitle="See the difference our professional cleaning makes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />
      <Gallery hideHeading />
      <CTABanner />
    </SiteLayout>
  );
}
