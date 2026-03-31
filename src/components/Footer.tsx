import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full glass-card border-t border-x-0 border-b-0 border-white/10 rounded-t-3xl p-12 mt-16 z-10 bg-shuvium-blue/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center opacity-80">
        <Link href="/">
          <span className="font-cinzel text-3xl tracking-[0.2em] font-bold bg-gradient-to-r from-shuvium-gold to-white bg-clip-text text-transparent uppercase mb-6 inline-block drop-shadow-lg">
            SHUVIUM
          </span>
        </Link>
        <p className="font-inter text-sm text-gray-400 mb-8 font-light tracking-wide">
          &copy; 2026 Shuvium | Spiritual Wellness Redefined.
        </p>
        <div className="flex justify-center gap-8 text-xs uppercase tracking-[0.15em] font-cinzel text-shuvium-gold">
          <Link href="/privacy" className="hover:text-white transition-colors duration-300">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors duration-300">
            Terms
          </Link>
          <Link href="/support" className="hover:text-white transition-colors duration-300">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
