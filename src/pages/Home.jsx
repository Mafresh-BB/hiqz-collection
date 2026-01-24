import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import { products } from '../data/products'; // Importing data to show Featured items

const Home = () => {
  // Filter only best sellers for the homepage
  const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 3);

  return (
    <div className="bg-hiqz-dark min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-10"></div>
        
        {/* Hero Image */}
        <img 
          src="https://images.unsplash.com/photo-1573408301185-a1d31e857b90?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Jewelry" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="inline-block px-3 py-1 mb-6 border border-hiqz-gold/30 rounded-full bg-black/30 backdrop-blur-sm">
              <p className="text-hiqz-gold text-xs tracking-[0.2em] uppercase font-sans font-semibold">
                Halal Luxury • Blessed with Barakah
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Elegance with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-hiqz-gold to-yellow-200">Values.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 font-sans font-light max-w-lg leading-relaxed">
              Discover bold statement pieces designed for confidence and spiritual alignment. 
              Quality you can trust, modesty you can wear.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="inline-flex justify-center items-center gap-2 bg-hiqz-gold text-black px-8 py-4 font-bold tracking-wide hover:bg-white transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                SHOP COLLECTION <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="inline-flex justify-center items-center gap-2 border border-white text-white px-8 py-4 font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                OUR STORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST SIGNALS (BARAKAH FACTOR) --- */}
      <section className="py-12 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-white/5 hover:border-hiqz-gold/30 transition-colors">
            <ShieldCheck className="w-10 h-10 text-hiqz-gold mb-4" />
            <h3 className="text-white font-serif text-xl mb-2">Premium Quality</h3>
            <p className="text-gray-400 text-sm">Non-tarnish materials (Steel, Silver, Gold Vermeil) aimed for longevity.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-white/5 hover:border-hiqz-gold/30 transition-colors">
            <Truck className="w-10 h-10 text-hiqz-gold mb-4" />
            <h3 className="text-white font-serif text-xl mb-2">Nationwide Delivery</h3>
            <p className="text-gray-400 text-sm">Fast, reliable shipping to Lagos, Abuja, and Port Harcourt.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-white/5 hover:border-hiqz-gold/30 transition-colors">
            <Star className="w-10 h-10 text-hiqz-gold mb-4" />
            <h3 className="text-white font-serif text-xl mb-2">Modest Packaging</h3>
            <p className="text-gray-400 text-sm">Discreet, elegant packaging ready for gifting to loved ones.</p>
          </div>
        </div>
      </section>

      {/* --- FEATURED COLLECTION PREVIEW --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Curated Favorites</h2>
          <div className="h-1 w-20 bg-hiqz-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
             <div key={product.id} className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-hiqz-gold/50 transition-all duration-300">
               <div className="aspect-square overflow-hidden">
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                 />
               </div>
               <div className="p-6">
                 <p className="text-xs text-hiqz-gold uppercase tracking-wider mb-2">{product.category}</p>
                 <h3 className="text-xl text-white font-serif mb-2">{product.name}</h3>
                 <p className="text-gray-400 mb-4 text-sm line-clamp-2">{product.description}</p>
                 <div className="flex justify-between items-center">
                   <span className="text-white font-bold text-lg">₦{product.price.toLocaleString()}</span>
                   <Link to={`/product/${product.id}`} className="text-hiqz-gold text-sm underline hover:text-white">View Details</Link>
                 </div>
               </div>
             </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <Link to="/shop" className="inline-block border border-white/20 text-white px-8 py-3 rounded-full hover:bg-hiqz-gold hover:text-black hover:border-hiqz-gold transition-all duration-300">
             View All Collections
           </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;