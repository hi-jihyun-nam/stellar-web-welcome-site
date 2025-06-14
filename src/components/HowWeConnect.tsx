
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";

const connectionPoints = [
  {
    icon: Heart,
    title: "Personalized Matching",
    description: "We carefully assess your unique needs and match you with Korea's most suitable medical institutions and aesthetic clinics.",
    color: "from-rose-400 to-pink-500"
  },
  {
    icon: Users,
    title: "Cultural Bridge",
    description: "Our team provides seamless cultural and linguistic support, ensuring clear communication throughout your journey.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Trust & Excellence",
    description: "We maintain the highest standards of care coordination, from initial consultation to post-treatment follow-up.",
    color: "from-purple-400 to-indigo-500"
  }
];

const HowWeConnect = () => {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-gray-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/20 via-purple-100/30 to-pink-100/20 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-pink-200/30 to-rose-300/40 rounded-full blur-3xl animate-bounce [animation-duration:7s]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-cyan-200/40 to-blue-300/30 rounded-full blur-2xl animate-bounce [animation-duration:9s] [animation-delay:2s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-connect" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-connect)" className="text-gray-300/40"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            How We Connect
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Our sophisticated approach transforms healthcare connections into meaningful relationships built on trust and understanding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {connectionPoints.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-gray-300/70 shadow-lg"
            >
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

        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/60 to-white/80 backdrop-blur-md border border-gray-200/50 rounded-full shadow-lg">
            <span className="text-blue-600 font-medium">Ready to begin your journey?</span>
            <ArrowRight className="w-5 h-5 text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeConnect;
