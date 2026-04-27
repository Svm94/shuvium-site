import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="absolute left-4 z-50 -translate-y-[200%] bg-shuvium-saffron px-4 py-2 text-shuvium-blue font-bold transition-transform focus-visible:translate-y-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-gold focus-visible:ring-inset rounded-md"
      >
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1} className="h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-shuvium-gold focus-visible:ring-inset">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;