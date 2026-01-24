import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter Logic
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const categories = ['All', 'Chains', 'Watches', 'Rings'];

  return (
    <div className="bg-hiqz-dark min-h-screen pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-serif text-white mb-4">Our Collection</h1>
        <p className="text-gray-400 max-w-2xl mx-auto font-light">
          Explore our curated selection of halal luxury essentials.
        </p>
      </div>

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
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-xs text-hiqz-gold uppercase tracking-wider font-semibold">{product.category}</p>
                </div>
                <h3 className="text-lg text-white font-serif font-medium mb-2 group-hover:text-hiqz-gold transition-colors">{product.name}</h3>
                <p className="text-white font-bold tracking-wide">₦{product.price.toLocaleString()}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No products found in this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;