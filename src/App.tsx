import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="absolute transform -translate-y-full left-0 z-50 p-4 bg-shuvium-blue text-shuvium-gold focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-saffron transition-transform"
      >
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1} className="h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-saffron ring-inset">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
