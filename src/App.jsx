import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CartaPage from './pages/CartaPage';
import CotizarPage from './pages/CotizarPage';

export default function App() {
  return (
    <div style={{ background: 'var(--bg-1)', minHeight: '100vh', color: 'var(--text-1)' }}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/carta"   element={<CartaPage />} />
        <Route path="/cotizar" element={<CotizarPage />} />
      </Routes>
      <Footer />
    </div>
  );
}