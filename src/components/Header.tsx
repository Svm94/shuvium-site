import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10 rounded-none bg-shuvium-blue/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center ml-2 md:ml-4 relative w-[140px] h-[50px]"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
          }}
        >
          <Image
            src="/logo.jpg"
            alt="Shuvium Logo"
            fill
            className="object-cover"
            priority
          />
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
