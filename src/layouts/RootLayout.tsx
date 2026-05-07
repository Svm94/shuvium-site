import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="h-full w-full relative">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 rounded-md bg-shuvium-blue px-4 py-2 text-white font-medium shadow-sm transition-transform duration-200 -translate-y-[200%] focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-saffron focus-visible:ring-inset"
      >
        Skip to content
      </a>
      <Outlet />
    </div>
  );
};

export default RootLayout;
