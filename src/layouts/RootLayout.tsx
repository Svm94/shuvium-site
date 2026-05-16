import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <a
        href="#main-content"
        className="absolute top-0 left-0 z-50 p-4 bg-shuvium-gold text-shuvium-blue font-bold transition-transform duration-200 -translate-y-[200%] focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-shuvium-gold"
      >
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
