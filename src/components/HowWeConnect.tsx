
import { Heart, MessageCircle, Shield, Users2, Globe, Star } from "lucide-react";

const connectionPoints = [
  {
    icon: Shield,
    title: "Trust & Safety First",
    description: "We help clients access Korean medical and beauty services safely, with verified partners and transparent processes.",
    color: "from-teal-400 to-cyan-500"
  },
  {
    icon: Users2,
    title: "Personalized Service Models",
    description: "We develop customized service experiences that meet both client expectations and provider capabilities.",
    color: "from-teal-400 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Global Connector",
    description: "We introduce Korea's top medical institutions, beauty clinics, and cosmetic brands to international markets.",
    color: "from-teal-400 to-cyan-500"
  },
  {
    icon: Star,
    title: "Meaningful Marketing",
    description: "Marketing isn't about moving numbers—it's about moving people. We create connections that truly make a difference.",
    color: "from-teal-400 to-cyan-500"
  }
];

const HowWeConnect = () => {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 via-slate-600/40 to-slate-800/30 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-cyan-300/30 rounded-full blur-3xl animate-bounce [animation-duration:6s]"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-slate-500/30 to-slate-400/20 rounded-full blur-2xl animate-bounce [animation-duration:8s] [animation-delay:2s]"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-teal-300/20 to-cyan-400/30 rounded-full blur-2xl animate-bounce [animation-duration:7s] [animation-delay:4s]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-teal-400 rounded-full animate-ping [animation-duration:3s]"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-ping [animation-duration:4s]"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-teal-300 rounded-full animate-ping [animation-duration:5s]"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyan-300 rounded-full animate-ping [animation-duration:6s]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-sm">
            How We Connect
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
            We don't see marketing as just exposure or advertising. We see it as the art of making the right connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {connectionPoints.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-800/60 backdrop-blur-xl border border-slate-600/50 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-teal-400/50 shadow-lg hover:bg-slate-700/60"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
                {point.title}
              </h3>
              <p className="text-slate-300 leading-relaxed font-light">
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
