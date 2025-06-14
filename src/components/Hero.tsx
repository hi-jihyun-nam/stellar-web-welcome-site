
import { Sparkles } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-teal-600/20 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-600/40 rounded-full blur-3xl animate-bounce [animation-duration:6s]"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/40 to-pink-500/30 rounded-full blur-2xl animate-bounce [animation-duration:8s] [animation-delay:2s]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-teal-400/30 to-cyan-500/40 rounded-full blur-2xl animate-bounce [animation-duration:7s] [animation-delay:4s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-white/20"/>
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping [animation-duration:3s]"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping [animation-duration:4s]"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping [animation-duration:5s]"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping [animation-duration:6s]"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md border border-white/30 rounded-full mb-8 animate-fade-in shadow-xl">
          <Sparkles className="w-4 h-4 text-cyan-300" />
          <span className="text-sm font-medium text-white">Bridging Korea with the World</span>
        </div>

        {/* Highlighted Main Explanation */}
        <div className="bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 mb-16 animate-fade-in shadow-2xl">
          <p className="text-2xl md:text-3xl text-white font-semibold mb-6 leading-relaxed drop-shadow-lg">
            Connecting Korea's premier medical institutions and aesthetic clinics with the global community.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
            We transcend traditional boundaries to create personalized bridges of trust, cultural understanding, and medical excellence.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center mt-16 animate-fade-in">
          <div className="text-center group">
            <AnimatedCounter 
              end={500} 
              suffix="+"
              className="text-4xl md:text-5xl font-bold text-cyan-300 mb-3 group-hover:scale-105 transition-transform drop-shadow-lg"
            />
            <div className="text-gray-200 font-medium">Partner Clinics</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          <div className="text-center group">
            <AnimatedCounter 
              end={50} 
              suffix="+"
              className="text-4xl md:text-5xl font-bold text-cyan-300 mb-3 group-hover:scale-105 transition-transform drop-shadow-lg"
            />
            <div className="text-gray-200 font-medium">Countries Served</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-cyan-300 mb-3 group-hover:scale-105 transition-transform drop-shadow-lg">24/7</div>
            <div className="text-gray-200 font-medium">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
