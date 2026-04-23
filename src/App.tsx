import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-50 -translate-y-full opacity-0 transition-all focus-visible:translate-y-0 focus-visible:opacity-100 bg-shuvium-saffron px-4 py-2 text-white font-medium rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-shuvium-blue"
      >
        Skip to main content
      </a>
      <main id="main-content" tabIndex={-1} className="h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-gold focus-visible:ring-inset">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
