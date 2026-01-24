import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Gem,
  MessageCircle,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { products } from '../data/products';

const Home = () => {
  const heroProducts = useMemo(() => products.slice(0, 5), []);
  const featured = products.slice(0, 4);
  const [heroIndex, setHeroIndex] = useState(0);

  const heroProduct = heroProducts[heroIndex] || products[0];

  useEffect(() => {
    if (heroProducts.length <= 1) return undefined;
    const interval = setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroProducts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroProducts.length]);

  const handlePrevHero = () => {
    setHeroIndex((current) => (current - 1 + heroProducts.length) % heroProducts.length);
  };

  const handleNextHero = () => {
    setHeroIndex((current) => (current + 1) % heroProducts.length);
  };

  return (
    <div className="bg-hiqz-dark min-h-screen">
      <section className="relative overflow-hidden hiqz-veil">
        <div className="absolute inset-0 opacity-25 hiqz-grid"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <div className="space-y-8">
              <p className="text-hiqz-gold uppercase tracking-[0.45em] text-xs font-semibold">
                Halal Luxury • Blessed with Barakah
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight animate-fade-up">
                Luxury jewelry with purpose, presence, and peace.
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl animate-fade-up-delay">
                HIQZ COLLECTION delivers refined statement chains, watches, and beads designed
                for confidence without compromise. Curated pieces. High perceived value. Faith-aligned.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center gap-2 bg-hiqz-gold text-black px-7 py-3 font-semibold rounded-full hover:bg-white transition-colors"
                >
                  Shop the Collection <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/2348085414578"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3 rounded-full hover:border-hiqz-gold hover:text-hiqz-gold transition-colors"
                >
                  Order on WhatsApp <PhoneCall size={18} />
                </a>
              </div>

              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
                <span className="border border-white/10 px-3 py-2 rounded-full">{heroProduct.category}</span>
                <span className="border border-white/10 px-3 py-2 rounded-full">
                  ₦{heroProduct.price.toLocaleString()}
                </span>
                <span className="border border-white/10 px-3 py-2 rounded-full">
                  {heroProduct.isNew ? 'New drop' : 'Signature pick'}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-6 h-32 w-32 rounded-full bg-hiqz-gold/20 blur-3xl"></div>
              <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-float-slow">
                <img
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-hiqz-purple/80 border border-white/10 text-white px-4 py-3 rounded-2xl text-sm">
                <p className="font-serif">{heroProduct.name}</p>
                <p className="text-xs text-hiqz-gold mt-1">₦{heroProduct.price.toLocaleString()}</p>
              </div>
              <div className="absolute -bottom-6 right-6 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevHero}
                  className="h-10 w-10 rounded-full border border-white/20 text-white hover:border-hiqz-gold hover:text-hiqz-gold transition-colors"
                >
                  <ArrowLeft size={16} className="mx-auto" />
                </button>
                <button
                  type="button"
                  onClick={handleNextHero}
                  className="h-10 w-10 rounded-full border border-white/20 text-white hover:border-hiqz-gold hover:text-hiqz-gold transition-colors"
                >
                  <ArrowRight size={16} className="mx-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/5 bg-hiqz-dark">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <ShieldCheck className="text-hiqz-gold mb-4" size={28} />
            <h3 className="font-serif text-xl text-white mb-2">Halal Luxury Guarantee</h3>
            <p className="text-sm text-gray-300">
              Faith-aligned pieces that balance modesty, confidence, and premium design.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <PackageCheck className="text-hiqz-gold mb-4" size={28} />
            <h3 className="font-serif text-xl text-white mb-2">Certification + Packaging</h3>
            <p className="text-sm text-gray-300">
              Every signature chain is delivered with a premium box and authenticity certificate.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Sparkles className="text-hiqz-gold mb-4" size={28} />
            <h3 className="font-serif text-xl text-white mb-2">High Perceived Value</h3>
            <p className="text-sm text-gray-300">
              Statement-first jewelry crafted to look luxurious without excess.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="text-hiqz-gold uppercase tracking-[0.35em] text-xs font-semibold mb-3">
                Featured Picks
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-white">
                Signature pieces, ready to order.
              </h2>
              <p className="text-gray-300 max-w-xl mt-4">
                A quick look at current highlights from our curated catalog. Request availability on WhatsApp.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-hiqz-gold font-semibold hover:text-white transition-colors"
            >
              View full catalog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-hiqz-gold/40 transition-colors"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-hiqz-gold mb-2">{product.category}</p>
                  <h3 className="font-serif text-lg text-white mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">{product.description}</p>
                  <span className="text-white font-semibold">₦{product.price.toLocaleString()}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-hiqz-gold uppercase tracking-[0.35em] text-xs font-semibold">
              Hero Category
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight">
              Chains & pendants that command presence.
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We focus on curated statement chains that elevate any outfit while honoring your values.
              Each piece is selected for brilliance, strength, and long-term wear.
            </p>
            <Link
              to={`/product/${heroProduct.id}`}
              className="inline-flex items-center gap-2 text-hiqz-gold font-semibold hover:text-white transition-colors"
            >
              View the signature chain <ArrowRight size={16} />
            </Link>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <img
              src={heroProduct.images?.[1] || heroProduct.image}
              alt={`${heroProduct.name} alternate view`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-hiqz-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-hiqz-gold uppercase tracking-[0.35em] text-xs font-semibold mb-3">
              Collections
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
              Curated, not crowded.
            </h2>
            <p className="text-gray-300">
              Explore the core categories and request availability directly via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Gem className="text-hiqz-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-white mb-2">Chains & Pendants</h3>
              <p className="text-sm text-gray-300 mb-4">
                Signature statement pieces with premium stone setting and certification.
              </p>
              <Link to="/shop?category=Chains" className="text-hiqz-gold text-sm font-semibold">
                Explore chains
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Gem className="text-hiqz-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-white mb-2">Men&apos;s Watches</h3>
              <p className="text-sm text-gray-300 mb-4">
                Sleek, refined timepieces selected for confidence and halal compliance.
              </p>
              <Link to="/shop?category=Watches" className="text-hiqz-gold text-sm font-semibold">
                Explore watches
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Gem className="text-hiqz-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-white mb-2">Rings & Bangles</h3>
              <p className="text-sm text-gray-300 mb-4">
                Sculpted ring and bangle pieces for refined, everyday elegance.
              </p>
              <Link to="/shop?category=Rings" className="text-hiqz-gold text-sm font-semibold">
                Explore rings
              </Link>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Gem className="text-hiqz-gold mb-4" size={28} />
              <h3 className="font-serif text-xl text-white mb-2">Premium Beads</h3>
              <p className="text-sm text-gray-300 mb-4">
                Acrylic and natural glass beads curated for culture, meaning, and style.
              </p>
              <Link to="/shop?category=Beads" className="text-hiqz-gold text-sm font-semibold">
                Explore beads
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div>
              <p className="text-hiqz-gold uppercase tracking-[0.35em] text-xs font-semibold mb-4">
                How to Order
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
                Fast, direct, and trust-led.
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We keep ordering simple: browse, message, confirm, and receive your full package.
                Our team responds quickly on WhatsApp to confirm availability and delivery options.
              </p>
              <Link
                to="/how-to-order"
                className="inline-flex items-center gap-2 text-hiqz-gold font-semibold mt-6 hover:text-white transition-colors"
              >
                See the full steps <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <MessageCircle size={22} className="text-hiqz-gold mb-3" />
                <p className="text-sm text-white font-semibold mb-2">Message us</p>
                <p className="text-xs text-gray-300">Send your item name and ref code.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <CheckCircle2 size={22} className="text-hiqz-gold mb-3" />
                <p className="text-sm text-white font-semibold mb-2">Confirm details</p>
                <p className="text-xs text-gray-300">We confirm price, delivery, and packaging.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <PackageCheck size={22} className="text-hiqz-gold mb-3" />
                <p className="text-sm text-white font-semibold mb-2">Receive delivery</p>
                <p className="text-xs text-gray-300">Premium box and certification included.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-3xl text-white mb-4">
            Ready to order your statement piece?
          </h3>
          <p className="text-gray-300 mb-8">
            Send a WhatsApp message and we will confirm availability, delivery, and pricing.
          </p>
          <a
            href="https://wa.me/2348085414578"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-hiqz-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors"
          >
            Start WhatsApp Order <PhoneCall size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
