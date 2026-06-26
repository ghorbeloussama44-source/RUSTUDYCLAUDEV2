import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Benefits from "@/components/Benefits";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonial from "@/components/Testimonial";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <TrustStrip />
        <Benefits />
        <ProductShowcase />
        <Testimonial />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
