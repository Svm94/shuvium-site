import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="absolute left-4 z-50 -translate-y-[200%] transition-transform focus-visible:translate-y-4 bg-shuvium-saffron text-white px-4 py-2 rounded-md font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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