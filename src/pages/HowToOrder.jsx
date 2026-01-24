import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, PackageCheck, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: "Browse the catalog",
    description: "Visit the Shop page to view curated pieces and take note of the product name or ref code.",
    icon: PackageCheck,
  },
  {
    title: "Send a WhatsApp message",
    description: "Tap the WhatsApp order button to start a chat with your preferred product details.",
    icon: MessageCircle,
  },
  {
    title: "Confirm availability & delivery",
    description: "We confirm availability, pricing, delivery cost, and share payment instructions.",
    icon: CheckCircle2,
  },
  {
    title: "Receive your full package",
    description: "Your order arrives with premium packaging and certification for peace of mind.",
    icon: ShieldCheck,
  },
];

const HowToOrder = () => {
  return (
    <div className="bg-hiqz-dark min-h-screen">
      <section className="hiqz-veil hiqz-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-hiqz-gold uppercase tracking-[0.35em] text-xs font-semibold mb-4">
              Order Flow
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-white leading-tight mb-6">
              Simple, direct, and secure.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              HIQZ COLLECTION is a premium catalog. We focus on trust, clarity, and halal luxury.
              Orders are finalized via WhatsApp for fast response and personalized support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {steps.map((step) => (
              <div key={step.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <step.icon className="text-hiqz-gold mb-4" size={28} />
                <h3 className="font-serif text-xl text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/2348085414578"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-hiqz-gold text-black px-6 py-3 font-semibold hover:bg-white transition-colors"
            >
              Message on WhatsApp
            </a>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 hover:border-hiqz-gold hover:text-hiqz-gold transition-colors"
            >
              Browse the collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToOrder;
