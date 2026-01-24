import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="bg-hiqz-dark min-h-screen text-white font-sans selection:bg-hiqz-gold selection:text-black">
      
      {/* Navigation */}
      <Navbar /> 
      
      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        
        {/* Placeholder for About page to prevent errors if clicked */}
        <Route path="/about" element={<div className="pt-24 text-center">Our Story - Coming Soon</div>} />
      </Routes>

    </div>
  )
}

export default App