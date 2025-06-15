
import { Sparkles, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "./AnimatedCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* Enhanced 3D Background - Always visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Animated gradient overlay - Always visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/40 to-teal-100/30 animate-pulse"></div>
      
      {/* 3D floating elements - Always visible */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-300/50 rounded-full blur-3xl animate-bounce [animation-duration:6s]"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/50 to-pink-200/40 rounded-full blur-2xl animate-bounce [animation-duration:8s] [animation-delay:2s]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-teal-200/40 to-cyan-200/50 rounded-full blur-2xl animate-bounce [animation-duration:7s] [animation-delay:4s]"></div>
      
      {/* Content with fade-in effect */}
      <div ref={ref} className={`relative z-10 text-center max-w-7xl mx-auto py-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Main Title */}
        <div className="mb-20 animate-fade-in">
          {/* Bridging Korea with the World - positioned above main title */}
          <div className="mb-12 flex justify-center">
            <div className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full shadow-lg flex items-center gap-3 px-[19px] py-[13px]">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-gray-800 font-semibold text-sm">Bridging Korea with the World</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-16 tracking-tight drop-shadow-sm font-poppins">
            <span className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent bg-[length:400%_400%] animate-[gradient-shift_6s_ease-in-out_infinite]">
              Global Gateway
            </span> to
            <br />
            Korea's Leading
            <br />
            <span className="text-black">
              Beauty & Medicine
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-6xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8 text-slate-500 font-medium md:text-2xl font-poppins">
            We connect Korea's premier medical institutions and aesthetic clinics with the world. 
            <span className="block mt-4 sm:mt-5 md:mt-6">
              With a keen understanding of global trends and a dedication to aesthetic refinement, we craft services that resonate with today's global audience.
            </span>
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 group-hover:scale-105 transition-transform">
              <AnimatedCounter end={4.8} suffix="/5" className="inline" />
            </div>
            <div className="text-gray-700 font-medium text-lg">User Satisfaction</div>
            <div className="text-gray-500 text-sm mt-2">User Satisfaction</div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <AnimatedCounter end={70} suffix="+" className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 group-hover:scale-105 transition-transform" />
            <div className="text-gray-700 font-medium text-lg">Countries Served</div>
            <div className="text-gray-500 text-sm mt-2">Service Coverage Countries</div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3 group-hover:scale-105 transition-transform">
              <AnimatedCounter end={24} suffix="/7" className="inline" />
            </div>
            <div className="text-gray-700 font-medium text-lg">Global Support</div>
            <div className="text-gray-500 text-sm mt-2">Global Support Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
