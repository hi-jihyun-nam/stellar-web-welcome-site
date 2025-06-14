
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-purple-600/20 to-teal-600/10 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/4 left-1/5 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-500/30 rounded-full blur-3xl animate-bounce [animation-duration:10s]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/25 to-pink-500/20 rounded-full blur-2xl animate-bounce [animation-duration:12s] [animation-delay:3s]"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-teal-400/15 to-cyan-500/25 rounded-full blur-xl animate-bounce [animation-duration:8s] [animation-delay:6s]"></div>
      
      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-footer" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-footer)" className="text-white/20"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Brand Section */}
          <div>
            <h3 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">Kimlab</h3>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-cyan-300 font-bold text-lg">Clinic & People</span>
              <span className="text-gray-400">|</span>
              <span className="text-purple-300 font-bold text-lg">Crowd & Person</span>
            </div>
            <p className="text-gray-200 mb-8 max-w-lg leading-relaxed font-light text-lg">
              We connect Korea's premier medical institutions and aesthetic clinics with the global community, 
              building sophisticated bridges of trust, cultural understanding, and medical excellence.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-white/10 via-white/15 to-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/30 shadow-2xl">
            <h4 className="text-white font-bold mb-8 text-2xl drop-shadow-sm">Contact Information</h4>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1 text-lg drop-shadow-sm">Email</h5>
                  <p className="text-cyan-200 font-medium">info@cpventures.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1 text-lg drop-shadow-sm">Phone</h5>
                  <p className="text-purple-200 font-medium">+82 2-1234-5678</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1 text-lg drop-shadow-sm">Location</h5>
                  <p className="text-pink-200 font-medium">Seoul, South Korea</p>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30">
                <p className="text-white font-medium text-center">
                  Global support available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-gray-300 font-light text-lg">
            © 2024 Kimlab. Crafting connections that transform lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
