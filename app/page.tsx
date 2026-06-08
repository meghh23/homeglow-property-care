import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import Areas from "./components/Areas";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Stats />
      <Services />
      <Gallery />
      <Reviews />
      <Areas />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
