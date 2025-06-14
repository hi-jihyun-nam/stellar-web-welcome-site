import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 relative overflow-hidden">
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0 animated-gradient"></div>
      <div className="absolute inset-0 animated-gradient-overlay"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/4 left-1/5 w-40 h-40 bg-gradient-to-br from-cyan-200/30 to-blue-300/40 rounded-full blur-3xl animate-bounce [animation-duration:10s]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-200/35 to-pink-300/30 rounded-full blur-2xl animate-bounce [animation-duration:12s] [animation-delay:3s]"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-teal-200/25 to-cyan-300/35 rounded-full blur-xl animate-bounce [animation-duration:8s] [animation-delay:6s]"></div>
      
      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-footer" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" className="text-gray-400/30"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Brand Section */}
          <div className="text-selectable">
            <h3 className="text-4xl font-bold text-gray-900 mb-8">Kimio</h3>
            
            <div className="mb-8">
              <p className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Connecting Hearts, Healing Lives
              </p>
            </div>
            <p className="text-gray-600 mb-8 max-w-lg leading-relaxed font-light text-lg">
              We connect Korea's premier medical institutions and aesthetic clinics with the global community, 
              building sophisticated bridges of trust, cultural understanding, and medical excellence.
            </p>
          </div>

          {/* Right Column - Quick Contact */}
          <div className="text-selectable">
            <h4 className="text-gray-900 font-semibold mb-6 text-xl">Quick Contact</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">connect@kimio.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 leading-relaxed">Di Tower, 15, Teheran-ro 82-gil, Gangnam-gu, Seoul, Republic of Korea</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-300/50 text-center">
          <p className="text-gray-600 font-light text-lg text-selectable">
            © 2024 Kimio. Crafting connections that transform lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
