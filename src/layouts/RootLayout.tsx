import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-[200%] transition-transform focus-visible:translate-y-0 rounded bg-shuvium-saffron px-4 py-2 font-bold text-shuvium-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-gold"
      >
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1} className="h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-shuvium-saffron">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
