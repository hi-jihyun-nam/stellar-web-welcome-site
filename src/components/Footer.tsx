
const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">C&P Ventures</h3>
            <p className="text-white/70 mb-4 max-w-md">
              <strong>Clinic & People</strong> | <strong>Crowd & Person</strong>
            </p>
            <p className="text-white/70 mb-6 max-w-md">
              We connect Korea's top medical institutions and beauty clinics to the world, 
              building bridges of trust, understanding, and excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <p className="text-white/70 mb-2">For inquiries and partnerships</p>
            <p className="text-white/70">Available 24/7 worldwide</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            © 2024 C&P Ventures. Building connections that matter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
