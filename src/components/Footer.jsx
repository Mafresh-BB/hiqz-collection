import { Link } from 'react-router-dom';
import { PhoneCall, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-hiqz-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-xl tracking-[0.2em] text-hiqz-gold mb-3">
              HIQZ COLLECTION
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Halal luxury jewelry curated for confidence, modest elegance, and barakah.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck size={14} className="text-hiqz-gold" />
              Certification & premium packaging included on signature pieces.
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-hiqz-gold transition-colors">Home</Link>
              <Link to="/shop" className="hover:text-hiqz-gold transition-colors">Shop</Link>
              <Link to="/how-to-order" className="hover:text-hiqz-gold transition-colors">How to Order</Link>
              <Link to="/contact" className="hover:text-hiqz-gold transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
              Order Direct
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              Ready to order? Message us on WhatsApp for availability, delivery, and custom requests.
            </p>
            <a
              href="https://wa.me/2348085414578"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-hiqz-gold text-black px-5 py-2 text-sm font-semibold hover:bg-white transition-colors"
            >
              <PhoneCall size={16} />
              WhatsApp Order
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-xs text-gray-500 flex flex-col md:flex-row md:justify-between gap-2">
          <span>© {new Date().getFullYear()} HIQZ COLLECTION. All rights reserved.</span>
          <span>Halal Luxury • Blessed with Barakah</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
