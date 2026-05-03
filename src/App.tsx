import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-[200%] bg-shuvium-saffron text-white px-4 py-2 rounded font-medium shadow-lg transition-transform focus-visible:translate-y-0 focus-visible:ring-2 focus-visible:ring-white outline-none"
      >
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1} className="h-full w-full focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-shuvium-saffron outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
