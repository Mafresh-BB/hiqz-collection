import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import HowToOrder from './pages/HowToOrder';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-hiqz-dark min-h-screen text-hiqz-light font-sans selection:bg-hiqz-gold selection:text-black">
      
      {/* Navigation */}
      <Navbar /> 
      
      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/how-to-order" element={<HowToOrder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
