import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-[200%] bg-shuvium-gold text-shuvium-blue px-4 py-2 font-bold transition-transform duration-200 focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-shuvium-blue rounded shadow-lg"
      >
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1} className="h-full w-full focus-visible:outline-none">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
