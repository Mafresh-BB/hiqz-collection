import { PhoneCall, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-hiqz-dark min-h-screen">
      <section className="hiqz-veil">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-hiqz-gold uppercase tracking-[0.35em] text-xs font-semibold mb-4">
              Contact
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-white leading-tight mb-6">
              Reach us with respect, we respond with care.
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you need a gift recommendation, want to verify certification, or request a custom chain,
              our team is ready to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <PhoneCall className="text-hiqz-gold mb-4" size={26} />
              <h3 className="font-serif text-lg text-white mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-300 mb-4">Fastest response for orders and availability.</p>
              <a
                href="https://wa.me/2348085414578"
                target="_blank"
                rel="noreferrer"
                className="text-hiqz-gold text-sm font-semibold hover:text-white transition-colors"
              >
                +234 808 541 4578
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <Mail className="text-hiqz-gold mb-4" size={26} />
              <h3 className="font-serif text-lg text-white mb-2">Email</h3>
              <p className="text-sm text-gray-300 mb-4">For partnerships, press, or wholesale inquiries.</p>
              <span className="text-sm text-gray-400">hiqzcollection@email.com</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <MapPin className="text-hiqz-gold mb-4" size={26} />
              <h3 className="font-serif text-lg text-white mb-2">Service Area</h3>
              <p className="text-sm text-gray-300 mb-4">Nationwide delivery from Sango/Abeokuta.</p>
              <span className="text-sm text-gray-400">Nigeria</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
