import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="absolute top-0 left-0 z-50 p-3 bg-shuvium-saffron text-white font-bold transition-transform -translate-y-full focus-visible:translate-y-0"
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