import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1E368D] to-[#09112C] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Soft, ambient glow effect in the top corner / behind hero */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C96615] rounded-full blur-[120px] opacity-20 pointer-events-none z-0 mix-blend-screen" />
      <Hero />
      <FeatureGrid />
      <Pricing />
      <Footer />
    </main>
  );
}
