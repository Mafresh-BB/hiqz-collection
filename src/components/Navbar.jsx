import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-hiqz-purple text-white sticky top-0 z-50 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex flex-col group">
            <h1 className="font-serif text-2xl tracking-wider font-bold text-hiqz-gold group-hover:text-white transition-colors duration-300">
              HIQZ
            </h1>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-300">
              Collection
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-sans text-sm tracking-wide font-medium">
            <Link to="/" className="hover:text-hiqz-gold transition-colors duration-300">HOME</Link>
            <Link to="/shop" className="hover:text-hiqz-gold transition-colors duration-300">SHOP ALL</Link>
            <Link to="/about" className="hover:text-hiqz-gold transition-colors duration-300">OUR STORY</Link>
            
            {/* Visual Cart Icon */}
            <div className="relative cursor-pointer hover:scale-110 transition-transform duration-300">
              <ShoppingBag className="w-5 h-5 text-hiqz-gold" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-hiqz-gold focus:outline-none p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-hiqz-purple border-t border-white/10 absolute w-full left-0 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-4 rounded-md text-base font-medium hover:bg-white/5 hover:text-hiqz-gold" onClick={() => setIsOpen(false)}>HOME</Link>
            <Link to="/shop" className="block px-3 py-4 rounded-md text-base font-medium hover:bg-white/5 hover:text-hiqz-gold" onClick={() => setIsOpen(false)}>SHOP COLLECTION</Link>
            <Link to="/about" className="block px-3 py-4 rounded-md text-base font-medium hover:bg-white/5 hover:text-hiqz-gold" onClick={() => setIsOpen(false)}>OUR STORY</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;