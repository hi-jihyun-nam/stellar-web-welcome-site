
import { Heart, Shield, Users, Globe, MessageCircle, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "People-Centered Approach",
    description: "We see clients as individuals with real stories, hopes, and concerns. Our connections are built on empathy and understanding, not just visibility."
  },
  {
    icon: MessageCircle,
    title: "Beyond Language Barriers",
    description: "We bridge the gap in language, trust, and cultural understanding between Korean medical providers and international clients."
  },
  {
    icon: Shield,
    title: "Trust & Safety First",
    description: "We help clients access Korean medical and beauty services safely, with verified partners and transparent processes."
  },
  {
    icon: Users,
    title: "Personalized Service Models",
    description: "We develop customized service experiences that meet both client expectations and provider capabilities."
  },
  {
    icon: Globe,
    title: "Global Connector",
    description: "We introduce Korea's top medical institutions, beauty clinics, and cosmetic brands to international markets."
  },
  {
    icon: Sparkles,
    title: "Meaningful Marketing",
    description: "Marketing isn't about moving numbers—it's about moving people. We create connections that truly make a difference."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How We Connect
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We don't see marketing as just exposure or advertising. We see it as the art of making the right connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-yellow-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-amber-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
