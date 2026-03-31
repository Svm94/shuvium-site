export default function Support() {
  return (
    <main className="min-h-screen pt-32 px-6 flex flex-col items-center bg-shuvium-blue">
      <div className="max-w-3xl w-full glass-card p-12 rounded-3xl text-center">
        <h1 className="font-cinzel text-4xl mb-8 text-shuvium-gold tracking-widest uppercase text-glow-gold">Support Sanctuary</h1>
        <p className="font-inter text-gray-300 font-light leading-relaxed mb-6">
          Reach out to our guides for assistance with your spiritual journey.
        </p>
        <a href="mailto:info@shuvium.com" className="inline-block px-8 py-3 rounded-full border border-shuvium-gold text-shuvium-gold font-cinzel tracking-wider hover:bg-shuvium-gold hover:text-shuvium-blue transition-colors duration-300 uppercase mt-4">
          Contact Us
        </a>
      </div>
    </main>
  );
}
