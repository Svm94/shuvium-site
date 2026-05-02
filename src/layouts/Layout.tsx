import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 rounded-md bg-shuvium-saffron px-4 py-2 text-shuvium-blue font-bold transition-transform duration-300 -translate-y-[200%] focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-gold focus-visible:ring-inset"
      >
        Skip to main content
      </a>

      {/* Main Content Container */}
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-grow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-gold focus-visible:ring-inset"
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
