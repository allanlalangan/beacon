import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import MapPage from './pages/map';
export default function App() {
  return (
    <div className="min-h-screen bg-zinc-800 text-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
