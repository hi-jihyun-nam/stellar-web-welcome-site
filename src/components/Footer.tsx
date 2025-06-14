
const Footer = () => {
  return (
    <footer className="py-20 px-6 relative bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 via-slate-600/20 to-gray-600/10 animate-pulse"></div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-400/10 to-slate-500/20 rounded-full blur-2xl animate-bounce [animation-duration:12s]"></div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-slate-400/20 to-gray-500/10 rounded-full blur-xl animate-bounce [animation-duration:14s] [animation-delay:5s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-footer" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" className="text-white/20"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">C&P Ventures</h3>
            <p className="text-cyan-300 mb-6 max-w-md font-medium">
              <strong>Clinic & People</strong> | <strong>Crowd & Person</strong>
            </p>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed font-light">
              We connect Korea's premier medical institutions and aesthetic clinics with the global community, 
              building sophisticated bridges of trust, cultural understanding, and medical excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg drop-shadow-sm">Connect With Us</h4>
            <p className="text-gray-300 mb-3 font-light">For partnerships and consultations</p>
            <p className="text-gray-300 font-light">Global support available 24/7</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400 font-light">
            © 2024 C&P Ventures. Crafting connections that transform lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
