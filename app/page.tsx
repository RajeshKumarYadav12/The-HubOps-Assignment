import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HotelHighlights from "@/components/HotelHighlights";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <HotelHighlights />
      <Events />
      <FAQ />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
