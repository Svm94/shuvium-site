import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-[200%] bg-shuvium-gold text-shuvium-blue px-4 py-2 font-bold rounded-md transition-transform focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-shuvium-blue"
      >
        Skip to content
      </a>
      <Outlet />
    </>
  );
};

export default RootLayout;
