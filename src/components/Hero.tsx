
import { Sparkles } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200/60 rounded-full mb-8 animate-fade-in shadow-sm">
          <Sparkles className="w-4 h-4 text-teal-600" />
          <span className="text-sm font-medium text-teal-700">Bridging Korea with the World</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in tracking-tight">
          C&P Ventures
          <br />
          <span className="text-teal-600 text-xl md:text-2xl font-semibold">
            Clinic & People
          </span>
        </h1>

        {/* Highlighted Main Explanation */}
        <div className="bg-gradient-to-r from-white via-teal-50/80 to-white border border-teal-200/50 rounded-3xl p-10 mb-16 animate-fade-in shadow-lg backdrop-blur-sm">
          <p className="text-2xl md:text-3xl text-gray-900 font-semibold mb-6 leading-relaxed">
            Connecting Korea's premier medical institutions and aesthetic clinics with the global community.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            We transcend traditional boundaries to create personalized bridges of trust, cultural understanding, and medical excellence.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center mt-16 animate-fade-in">
          <div className="text-center group">
            <AnimatedCounter 
              end={500} 
              suffix="+"
              className="text-4xl md:text-5xl font-bold text-teal-600 mb-3 group-hover:scale-105 transition-transform"
            />
            <div className="text-gray-600 font-medium">Partner Clinics</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          <div className="text-center group">
            <AnimatedCounter 
              end={50} 
              suffix="+"
              className="text-4xl md:text-5xl font-bold text-teal-600 mb-3 group-hover:scale-105 transition-transform"
            />
            <div className="text-gray-600 font-medium">Countries Served</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-3 group-hover:scale-105 transition-transform">24/7</div>
            <div className="text-gray-600 font-medium">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
