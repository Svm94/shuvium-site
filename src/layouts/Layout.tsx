import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 rounded-md bg-shuvium-gold px-4 py-2 font-bold text-shuvium-blue transition-transform duration-300 -translate-y-[200%] focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-shuvium-blue"
      >
        Skip to content
      </a>

      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-shuvium-gold"
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
