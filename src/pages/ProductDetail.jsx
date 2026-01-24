import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, Check, Phone, ShieldCheck, Truck } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

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
        
        <Link to="/shop" className="inline-flex items-center text-gray-400 hover:text-hiqz-gold mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="aspect-[4/5] bg-white/5 rounded-xl overflow-hidden border border-white/10">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-hiqz-gold text-sm font-bold tracking-widest uppercase bg-hiqz-gold/10 px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-2xl text-white font-light mb-8 border-b border-white/10 pb-8 inline-block">
              ₦{product.price.toLocaleString()}
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
                  <ShieldCheck size={16} className="text-hiqz-gold mr-3" />
                  <span>Halal Luxury Guarantee</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Truck size={16} className="text-hiqz-gold mr-3" />
                  <span>Nationwide Delivery (From Sango/Abeokuta)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={handleOrder}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-900/20"
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
      </div>
    </div>
  );
};

export default ProductDetail;