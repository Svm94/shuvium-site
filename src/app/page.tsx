import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] flex flex-col items-center justify-center">
      <Hero />
      <FeatureGrid />
      <Pricing />
      <Footer />
    </main>
  );
}
