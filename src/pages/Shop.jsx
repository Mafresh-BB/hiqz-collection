import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { products } from '../data/products';

const categories = ['All', 'Chains', 'Watches', 'Rings', 'Beads'];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter Logic
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="bg-hiqz-dark min-h-screen">
      <section className="hiqz-veil hiqz-grid">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-center mb-6">
            <Breadcrumbs
              items={[
                { label: 'Home', to: '/' },
                { label: 'Shop' },
              ]}
            />
          </div>
          <p className="text-hiqz-gold uppercase tracking-[0.35em] text-xs font-semibold mb-4">
            Premium Catalog
          </p>
          <h1 className="text-4xl font-display text-white mb-4">Our Collection</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light">
            Curated halal luxury jewelry, watches, and beads. Statement over volume.
          </p>
        </div>
      </section>

      <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 
                ${activeCategory === cat 
                  ? 'bg-hiqz-gold text-black shadow-lg shadow-hiqz-gold/20' 
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group bg-white/5 rounded-lg overflow-hidden border border-white/5 hover:border-hiqz-gold/30 transition-all duration-300">
            <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  {(product.isNew || product.isBestSeller) && (
                    <div className="absolute top-3 left-3 flex gap-2">
                      {product.isNew && (
                        <span className="bg-white/90 text-black text-[10px] font-semibold px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-hiqz-gold text-black text-[10px] font-semibold px-2 py-1 rounded-full">
                          Best Seller
                        </span>
                      )}
                    </div>
                  )}
                </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs text-hiqz-gold uppercase tracking-wider font-semibold">{product.category}</p>
                </div>
                <h3 className="text-lg text-white font-serif font-medium mb-2 group-hover:text-hiqz-gold transition-colors">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-white font-bold tracking-wide">₦{product.price.toLocaleString()}</p>
                  <span className="text-xs uppercase tracking-[0.3em] text-hiqz-gold border border-hiqz-gold/50 px-3 py-1 rounded-full">
                    View
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 mb-4">No products found in this category yet.</p>
            <a
              href="https://wa.me/2348085414578"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-hiqz-gold/60 text-hiqz-gold px-6 py-3 text-sm font-semibold hover:bg-hiqz-gold hover:text-black transition-colors"
            >
              Request availability via WhatsApp
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default Shop;
