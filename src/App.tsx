import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="absolute top-4 left-4 z-50 -translate-y-[200%] focus-visible:translate-y-0 transition-transform bg-shuvium-gold text-shuvium-blue font-bold py-2 px-4 rounded-md shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
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