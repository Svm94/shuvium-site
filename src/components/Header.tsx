import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10 rounded-none bg-shuvium-blue/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="font-cinzel text-2xl tracking-[0.1em] font-bold bg-gradient-to-r from-shuvium-gold to-white bg-clip-text text-transparent">
            SHUVIUM
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 font-inter text-sm text-gray-300">
          <Link href="#rituals" className="hover:text-shuvium-gold transition-colors">
            Rituals
          </Link>
          <Link href="#pricing" className="hover:text-shuvium-gold transition-colors">
            Prana Economy
          </Link>
        </nav>
      </div>
    </header>
  );
}
