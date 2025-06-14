
import { Sparkles, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/40 to-teal-100/30 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-300/50 rounded-full blur-3xl animate-bounce [animation-duration:6s]"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/50 to-pink-200/40 rounded-full blur-2xl animate-bounce [animation-duration:8s] [animation-delay:2s]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-teal-200/40 to-cyan-200/50 rounded-full blur-2xl animate-bounce [animation-duration:7s] [animation-delay:4s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-300/30"/>
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping [animation-duration:3s]"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping [animation-duration:4s]"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping [animation-duration:5s]"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping [animation-duration:6s]"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-7xl mx-auto py-16">
        {/* Main Title */}
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="text-lg text-blue-600 font-bold">Kimio</div>
            <div className="text-sm text-gray-500 font-medium italic">Keen to Trends, True to Aesthetic.</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight drop-shadow-sm">
            Global Healthcare
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Connection Hub
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed font-light px-4 sm:px-6 md:px-8">
            We provide innovative services that connect Korea's premier medical institutions and aesthetic clinics with the world. 
            <span className="block mt-4 sm:mt-5 md:mt-6">
              With a keen understanding of global trends and a dedication to aesthetic refinement, we craft services that resonate with today's global audience.
            </span>
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 group-hover:scale-105 transition-transform">4.8/5</div>
            <div className="text-gray-700 font-medium text-lg">Average Satisfaction Score</div>
            <div className="text-gray-500 text-sm mt-2">User Satisfaction</div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <AnimatedCounter 
              end={50} 
              suffix="+"
              className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 group-hover:scale-105 transition-transform"
            />
            <div className="text-gray-700 font-medium text-lg">Countries Served</div>
            <div className="text-gray-500 text-sm mt-2">Service Coverage Countries</div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 group-hover:scale-105 transition-transform animate-pulse">24/7</div>
            <div className="text-gray-700 font-medium text-lg">Global Support</div>
            <div className="text-gray-500 text-sm mt-2">Global Support Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
