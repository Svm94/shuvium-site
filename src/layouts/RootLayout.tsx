import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-[200%] rounded bg-shuvium-gold px-4 py-2 text-shuvium-blue font-bold transition-transform focus-visible:translate-y-0"
      >
        Skip to main content
      </a>
      <Outlet />
    </>
  );
}
