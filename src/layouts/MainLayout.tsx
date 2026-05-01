import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-[200%] bg-shuvium-saffron text-white px-4 py-2 rounded-md font-bold transition-transform duration-300 focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
      >
        Skip to main content
      </a>
      <main
        id="main-content"
        tabIndex={-1}
        className="h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-saffron focus-visible:ring-inset"
      >
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
