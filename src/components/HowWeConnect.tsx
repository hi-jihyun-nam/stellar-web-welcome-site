
import { Heart, MessageCircle, Shield, Users2, Globe, Star } from "lucide-react";

const connectionPoints = [
  {
    icon: Shield,
    title: "Trust & Safety First",
    description: "We help clients access Korean medical and beauty services safely, with verified partners and transparent processes.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Users2,
    title: "Personalized Service Models", 
    description: "We develop customized service experiences that meet both client expectations and provider capabilities.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Globe,
    title: "Global Connector",
    description: "We introduce Korea's top medical institutions, beauty clinics, and cosmetic brands to international markets.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Star,
    title: "Meaningful Marketing",
    description: "Marketing isn't about moving numbers—it's about moving people. We create connections that truly make a difference.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Heart,
    title: "People-Centered Approach",
    description: "We see clients as individuals with real stories, hopes, and concerns. Our connections are built on empathy and understanding.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: MessageCircle,
    title: "Beyond Language Barriers",
    description: "We bridge the gap in language, trust, and cultural understanding between Korean medical providers and international clients.",
    color: "from-cyan-500 to-cyan-600"
  }
];

const HowWeConnect = () => {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-purple-50/30 to-cyan-50/40 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-cyan-200/40 rounded-full blur-3xl animate-bounce [animation-duration:8s]"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-pink-100/30 rounded-full blur-2xl animate-bounce [animation-duration:10s] [animation-delay:2s]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-cyan-100/30 to-blue-200/40 rounded-full blur-2xl animate-bounce [animation-duration:9s] [animation-delay:4s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-how-we-connect" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-how-we-connect)" className="text-gray-300/20"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            How We Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
            We don't see marketing as just exposure or advertising. We see it as the art of making the right connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {connectionPoints.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-gray-300/80 shadow-xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeConnect;
