import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-[200%] bg-shuvium-saffron px-4 py-2 text-shuvium-blue font-bold transition-transform focus-visible:translate-y-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Skip to content
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

export default RootLayout;
