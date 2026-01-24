import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-hiqz-dark via-hiqz-purple/60 to-hiqz-dark text-white sticky top-0 z-50 border-b border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex flex-col group">
            <h1 className="font-display text-2xl tracking-[0.25em] font-bold text-hiqz-gold group-hover:text-white transition-colors duration-300">
              HIQZ
            </h1>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-300 font-sans">
              Collection
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-sans text-sm tracking-wide font-medium">
            <Link to="/" className="hover:text-hiqz-gold transition-colors duration-300">HOME</Link>
            <Link to="/shop" className="hover:text-hiqz-gold transition-colors duration-300">SHOP</Link>
            <Link to="/how-to-order" className="hover:text-hiqz-gold transition-colors duration-300">HOW TO ORDER</Link>
            <Link to="/contact" className="hover:text-hiqz-gold transition-colors duration-300">CONTACT</Link>
            <a
              href="https://wa.me/2348085414578"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hiqz-gold/60 px-4 py-2 text-hiqz-gold hover:bg-hiqz-gold hover:text-black transition-colors duration-300"
            >
              <PhoneCall size={16} />
              WhatsApp
            </a>
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
        <div className="md:hidden bg-hiqz-dark border-t border-white/10 absolute w-full left-0 animate-fade-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-4 rounded-md text-base font-medium hover:bg-white/5 hover:text-hiqz-gold" onClick={() => setIsOpen(false)}>HOME</Link>
            <Link to="/shop" className="block px-3 py-4 rounded-md text-base font-medium hover:bg-white/5 hover:text-hiqz-gold" onClick={() => setIsOpen(false)}>SHOP</Link>
            <Link to="/how-to-order" className="block px-3 py-4 rounded-md text-base font-medium hover:bg-white/5 hover:text-hiqz-gold" onClick={() => setIsOpen(false)}>HOW TO ORDER</Link>
            <Link to="/contact" className="block px-3 py-4 rounded-md text-base font-medium hover:bg-white/5 hover:text-hiqz-gold" onClick={() => setIsOpen(false)}>CONTACT</Link>
            <a
              href="https://wa.me/2348085414578"
              target="_blank"
              rel="noreferrer"
              className="block px-3 py-4 rounded-md text-base font-medium text-hiqz-gold border border-hiqz-gold/50 text-center"
              onClick={() => setIsOpen(false)}
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
