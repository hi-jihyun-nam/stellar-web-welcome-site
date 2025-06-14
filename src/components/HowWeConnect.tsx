import { Heart, MessageCircle, Shield, Users2, Globe, Star } from "lucide-react";

const connectionPoints = [
  {
    icon: Shield,
    title: "Trust & Safety First",
    description: "We help clients access Korean medical and beauty services safely, with verified partners and transparent processes.",
    color: "from-purple-500 via-purple-600 to-purple-700"
  },
  {
    icon: Users2,
    title: "Personalized Service Models", 
    description: "We develop customized service experiences that meet both client expectations and provider capabilities.",
    color: "from-purple-400 via-purple-500 to-purple-600"
  },
  {
    icon: Globe,
    title: "Global Connector",
    description: "We introduce Korea's top medical institutions, beauty clinics, and cosmetic brands to international markets.",
    color: "from-purple-600 via-purple-700 to-purple-800"
  },
  {
    icon: Star,
    title: "Meaningful Marketing",
    description: "Marketing isn't about moving numbers, it's about moving people. We create connections that truly make a difference.",
    color: "from-purple-500 via-violet-600 to-purple-700"
  },
  {
    icon: Heart,
    title: "People-Centered Approach",
    description: "We see clients as individuals with real stories, hopes, and concerns. Our connections are built on empathy and understanding.",
    color: "from-purple-400 via-purple-600 to-violet-700"
  },
  {
    icon: MessageCircle,
    title: "Beyond Language Barriers",
    description: "We bridge the gap in language, trust, and cultural understanding between Korean medical providers and international clients.",
    color: "from-violet-500 via-purple-600 to-purple-700"
  }
];

const HowWeConnect = () => {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
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
            <pattern id="grid-how-we-connect" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-how-we-connect)" className="text-gray-300/30"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight drop-shadow-sm">
            How We Connect
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            We don't see marketing as just exposure or advertising. We see it as the art of making the right connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {connectionPoints.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-gray-300/70 shadow-lg"
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
      </div>
    </section>
  );
};

export default HowWeConnect;
