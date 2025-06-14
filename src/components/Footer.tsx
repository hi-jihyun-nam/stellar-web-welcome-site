
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 via-purple-50/20 to-blue-50/30 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/4 left-1/5 w-40 h-40 bg-gradient-to-br from-cyan-100/25 to-blue-200/30 rounded-full blur-3xl animate-bounce [animation-duration:12s]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-100/30 to-pink-200/25 rounded-full blur-2xl animate-bounce [animation-duration:14s] [animation-delay:3s]"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-blue-100/20 to-cyan-200/30 rounded-full blur-xl animate-bounce [animation-duration:10s] [animation-delay:6s]"></div>
      
      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-footer" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" className="text-gray-300/20"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Brand Section */}
          <div className="text-selectable">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Kimio</h3>
            
            <div className="mb-8">
              <p className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Connecting Hearts, Healing Lives
              </p>
            </div>
            <p className="text-gray-600 mb-8 max-w-lg leading-relaxed font-medium text-lg">
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
                <span className="text-gray-600 font-medium">connect@kimio.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 leading-relaxed font-medium">Di Tower, 15, Teheran-ro 82-gil, Gangnam-gu, Seoul, Republic of Korea</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-300/40 text-center">
          <p className="text-gray-600 font-medium text-lg text-selectable">
            © 2024 Kimio. Crafting connections that transform lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
