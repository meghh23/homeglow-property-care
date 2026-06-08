import SiteLayout from "./components/SiteLayout";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Areas from "./components/Areas";
import CTABanner from "./components/CTABanner";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <About compact />
      <Stats />
      <Services limit={6} />
      <Gallery limit={2} />
      <Reviews />
      <Areas limit={6} />
      <CTABanner />
    </SiteLayout>
  );
}
