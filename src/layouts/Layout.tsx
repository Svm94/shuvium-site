import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-0 z-50 -translate-y-full rounded-b-md bg-shuvium-gold px-4 py-2 text-shuvium-blue font-bold transition-transform focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <main
        id="main-content"
        tabIndex={-1}
        className="h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-shuvium-gold"
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
