
import { Sparkles, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"></div>
      
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
      
      <div className="relative z-10 text-center max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-md border border-white/30 rounded-full mb-12 animate-fade-in shadow-xl hover:shadow-2xl transition-all duration-300">
          <Globe className="w-5 h-5 text-cyan-300" />
          <span className="text-base font-medium text-white">Bridging Korea with the World</span>
        </div>

        {/* Main Title */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            Global Healthcare
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connection Hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
            We provide innovative services that connect Korea's premier medical institutions
            <br className="hidden md:block" />
            and aesthetic clinics with the world.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <div className="text-4xl md:text-5xl font-bold text-cyan-300 mb-3 group-hover:scale-105 transition-transform drop-shadow-lg">4.8/5</div>
            <div className="text-gray-200 font-medium text-lg">Average Satisfaction Score</div>
            <div className="text-gray-300 text-sm mt-2">User Satisfaction</div>
          </div>

          <div className="bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <AnimatedCounter 
              end={50} 
              suffix="+"
              className="text-4xl md:text-5xl font-bold text-cyan-300 mb-3 group-hover:scale-105 transition-transform drop-shadow-lg"
            />
            <div className="text-gray-200 font-medium text-lg">Countries Served</div>
            <div className="text-gray-300 text-sm mt-2">Service Coverage Countries</div>
          </div>

          <div className="bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <div className="text-4xl md:text-5xl font-bold text-cyan-300 mb-3 group-hover:scale-105 transition-transform drop-shadow-lg animate-pulse">24/7</div>
            <div className="text-gray-200 font-medium text-lg">Global Support</div>
            <div className="text-gray-300 text-sm mt-2">Global Support Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
