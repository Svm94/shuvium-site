import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="relative h-full w-full">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 rounded-md bg-shuvium-saffron px-4 py-2 font-bold text-white transition-transform duration-300 -translate-y-[200%] focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Skip to main content
      </a>

      <main id="main-content" tabIndex={-1} className="h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-shuvium-saffron">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
