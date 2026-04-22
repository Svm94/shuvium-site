import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="fixed left-0 top-0 -translate-y-full focus-visible:translate-y-0 transition-transform z-50 p-3 bg-shuvium-saffron text-white font-bold rounded-br-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shuvium-gold focus-visible:ring-inset"
      >
        Skip to content
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;