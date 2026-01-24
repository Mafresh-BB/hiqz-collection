import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, Check, Phone, ShieldCheck, Sparkles, PackageCheck } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  const [activeImage, setActiveImage] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryImages = useMemo(() => {
    if (!product) return [];
    return product.images && product.images.length > 0 ? product.images : [product.image];
  }, [product]);

  useEffect(() => {
    if (product?.image) {
      setActiveImage(product.image);
    }
  }, [product]);

  useEffect(() => {
    if (galleryImages.length <= 1) {
      return undefined;
    }
    const interval = setInterval(() => {
      setActiveImage((current) => {
        const currentIndex = galleryImages.indexOf(current);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % galleryImages.length;
        return galleryImages[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const sameCategory = products.filter(
      (item) => item.id !== product.id && item.category === product.category
    );
    const fallback = products.filter((item) => item.id !== product.id);
    return [...sameCategory, ...fallback].slice(0, 3);
  }, [product]);

  // Handle Order on WhatsApp Logic
  const handleOrder = () => {
    // Cousin's real number
    const phoneNumber = "2348085414578"; 
    
    // Culturally polite message
    const message = `As-salamu alaykum Hiqz Collection, I am interested in ordering this item:

*Item:* ${product.name}
*Price:* ₦${product.price.toLocaleString()}
*Ref Code:* #${product.id}

Is it available for delivery?`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!product) {
    return <div className="text-white text-center pt-20">Product not found. <Link to="/shop" className="text-hiqz-gold underline">Go back</Link></div>;
  }

  return (
    <div className="bg-hiqz-dark min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col gap-4 mb-8">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Shop', to: '/shop' },
              { label: product.name },
            ]}
          />
          <Link to="/shop" className="inline-flex items-center text-gray-400 hover:text-hiqz-gold transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
              <img 
                src={activeImage || product.image} 
                alt={product.name} 
                className="w-full h-full object-cover cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              />
            </div>
            {galleryImages.length > 1 && (
              <div className="flex gap-3">
                {galleryImages.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={`h-20 w-20 overflow-hidden rounded-xl border transition-colors ${
                      activeImage === image ? 'border-hiqz-gold' : 'border-white/10'
                    }`}
                  >
                    <img src={image} alt={`${product.name} preview`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-hiqz-gold text-sm font-bold tracking-widest uppercase bg-hiqz-gold/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="text-xs uppercase tracking-[0.3em] text-white bg-white/10 px-3 py-1 rounded-full">
                    New
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="text-xs uppercase tracking-[0.3em] text-black bg-hiqz-gold px-3 py-1 rounded-full">
                    Best Seller
                  </span>
                )}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display text-white mb-4 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-2xl text-white font-light mb-4">
              ₦{product.price.toLocaleString()}
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-8">
              Ref Code: {product.sku || `HC-${product.id}`}
            </p>

            <div className="space-y-6 mb-10">
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                {product.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 text-sm">
                  <Check size={16} className="text-hiqz-gold mr-3" />
                  <span>Material: <span className="text-white">{product.material || "Premium Quality"}</span></span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Sparkles size={16} className="text-hiqz-gold mr-3" />
                  <span>Stone Grade: <span className="text-white">VVS1 Moissanite</span></span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <PackageCheck size={16} className="text-hiqz-gold mr-3" />
                  <span>{product.packaging}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <ShieldCheck size={16} className="text-hiqz-gold mr-3" />
                  <span>Halal Luxury Guarantee</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Check size={16} className="text-hiqz-gold mr-3" />
                  <span>Nationwide delivery from Sango/Abeokuta.</span>
                </div>
              </div>

              {product.highlights && (
                <div className="border-t border-white/10 pt-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Highlights</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <Check size={16} className="text-hiqz-gold mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={handleOrder}
                className="flex-1 bg-hiqz-gold hover:bg-white text-black font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-black/30"
              >
                <Phone size={20} />
                ORDER VIA WHATSAPP
              </button>
            </div>
            
            <p className="mt-4 text-xs text-center text-gray-500">
              You will be redirected to WhatsApp to complete your purchase securely.
            </p>

          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-16 border-t border-white/10 pt-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-display text-white">You may also like</h2>
              <Link to="/shop" className="text-hiqz-gold text-sm font-semibold hover:text-white transition-colors">
                View all products
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-hiqz-gold/40 transition-colors"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-hiqz-gold mb-2">{item.category}</p>
                    <h3 className="font-serif text-lg text-white mb-2">{item.name}</h3>
                    <span className="text-white font-semibold">₦{item.price.toLocaleString()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-gray-300 hover:text-white"
            onClick={() => setIsLightboxOpen(false)}
          >
            Close
          </button>
          <img
            src={activeImage || product.image}
            alt={product.name}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
