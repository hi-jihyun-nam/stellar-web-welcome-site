
import { Heart, Users, Globe } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const missionPoints = [{
  icon: Heart,
  title: "Medical Excellence",
  description: "Connecting you with Korea's leading medical institutions and healthcare providers.",
  color: "from-red-400 to-red-500"
}, {
  icon: Users,
  title: "Beauty & Wellness",
  description: "Access to top beauty clinics and cosmetic brands that define Korean beauty standards.",
  color: "from-purple-400 to-purple-500"
}, {
  icon: Globe,
  title: "Global Bridge",
  description: "Bridging cultures and languages to make Korean services accessible worldwide.",
  color: "from-blue-400 to-blue-500"
}];

const Mission = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated gradient overlay - Always visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/40 to-teal-100/30 animate-pulse"></div>
      
      {/* 3D floating elements - Always visible */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-cyan-300/50 rounded-full blur-3xl animate-bounce [animation-duration:6s]"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/50 to-pink-200/40 rounded-full blur-2xl animate-bounce [animation-duration:8s] [animation-delay:2s]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-teal-200/40 to-cyan-200/50 rounded-full blur-2xl animate-bounce [animation-duration:7s] [animation-delay:4s]"></div>
      
      {/* Grid pattern overlay - Always visible */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-mission" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-mission)" className="text-gray-300/30" />
        </svg>
      </div>

      {/* Content with fade-in effect */}
      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight drop-shadow-sm font-poppins">Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed font-poppins">
            We go beyond traditional travel coordination by crafting bespoke treatment pathways built around individual beauty aspirations.
            <br />
            We break cultural barriers and build heartfelt connections across people and cultures through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <div key={index} className="group relative p-8 bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-gray-300/70 shadow-lg">
              <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
