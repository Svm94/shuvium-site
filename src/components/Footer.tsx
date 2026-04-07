import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full glass-card border-t border-x-0 border-b-0 border-white/10 rounded-t-3xl p-12 mt-16 z-10 bg-shuvium-blue/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center opacity-80">
        <Link href="/" className="relative w-[140px] h-[50px] mb-6 inline-block">
          <Image
            src="/shuvium-logo.png"
            alt="Shuvium Logo"
            fill
            className="w-auto h-8 md:h-10 object-contain"
          />
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
