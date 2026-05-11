import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 rounded-md bg-shuvium-saffron px-4 py-2 text-white font-medium shadow-md transition-transform duration-300 -translate-y-[200%] focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-gold focus-visible:ring-offset-2 focus-visible:ring-offset-shuvium-blue"
      >
        Skip to content
      </a>
      <Outlet />
    </>
  );
};

export default RootLayout;
