import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-[200%] rounded-md bg-shuvium-saffron px-4 py-2 font-bold text-shuvium-blue transition-transform focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-gold focus-visible:ring-offset-2 focus-visible:ring-offset-shuvium-blue"
      >
        Skip to main content
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;