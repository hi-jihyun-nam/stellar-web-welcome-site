
const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-gray-200/60 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">C&P Ventures</h3>
            <p className="text-gray-700 mb-6 max-w-md font-medium">
              <strong>Clinic & People</strong> | <strong>Crowd & Person</strong>
            </p>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed font-light">
              We connect Korea's premier medical institutions and aesthetic clinics with the global community, 
              building sophisticated bridges of trust, cultural understanding, and medical excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-6 text-lg">Connect With Us</h4>
            <p className="text-gray-600 mb-3 font-light">For partnerships and consultations</p>
            <p className="text-gray-600 font-light">Global support available 24/7</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200/60 text-center">
          <p className="text-gray-500 font-light">
            © 2024 C&P Ventures. Crafting connections that transform lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
