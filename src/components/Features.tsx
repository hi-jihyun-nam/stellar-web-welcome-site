
import { Heart, Shield, Users, Globe, MessageCircle, Sparkles, Target, Brain, Lightbulb } from "lucide-react";

const philosophyPoints = [
  {
    icon: Target,
    title: "Strategic Connection, Not Just Marketing",
    description: "We redefine marketing as the sophisticated art of meaningful connection. Excellence in medical services achieves its true potential only when it reaches those who genuinely need it most.",
    category: "Philosophy"
  },
  {
    icon: Heart,
    title: "Human-Centered Excellence",
    description: "Our clients are valued individuals with unique narratives, aspirations, and concerns. We cultivate connections founded on empathy and deep understanding, not mere market visibility.",
    category: "Philosophy"
  },
  {
    icon: Users,
    title: "Transforming Lives, Not Metrics",
    description: "We believe authentic marketing transforms lives rather than manipulates statistics. Our approach transcends traditional advertising to forge relationships that create lasting, meaningful impact.",
    category: "Philosophy"
  }
];

const servicePoints = [
  {
    icon: Globe,
    title: "Global Healthcare Bridge",
    description: "C&P Ventures serves as a sophisticated global connector, introducing Korea's leading medical institutions, aesthetic clinics, and premium cosmetic brands to international markets with unparalleled expertise.",
    category: "Service"
  },
  {
    icon: MessageCircle,
    title: "Comprehensive Care Beyond Information",
    description: "We transcend basic information provision by developing bespoke service frameworks that seamlessly bridge linguistic barriers, cultural nuances, and trust gaps between healthcare providers and patients.",
    category: "Service"
  },
  {
    icon: Shield,
    title: "Building Confidence Through Trust",
    description: "We empower clients to make informed, confident healthcare decisions while enabling clinics to authentically communicate their distinctive value propositions to those who need them most.",
    category: "Service"
  }
];

const brandPoints = [
  {
    icon: Lightbulb,
    title: "Clinic & People, Crowd & Person",
    description: "C&P embodies our dual mission: connecting Clinics with People while recognizing the Person within every Crowd. This philosophy reflects our commitment to finding the individual who truly needs to hear our message.",
    category: "Brand"
  },
  {
    icon: Brain,
    title: "AI-Enhanced Human Connection",
    description: "We strategically integrate cutting-edge AI technology to enhance human understanding, not replace it. Technology serves as our sophisticated tool for building deeper trust and maintaining authentic human connections.",
    category: "Brand"
  },
  {
    icon: Sparkles,
    title: "Purpose-Driven Impact",
    description: "Our existence is defined by connecting people meaningfully. We respond with greater speed, precision, and personalization to address what individuals genuinely need, creating lasting transformation.",
    category: "Brand"
  }
];

const Features = () => {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background effects similar to Hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/20 to-teal-600/10 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-600/30 rounded-full blur-3xl animate-bounce [animation-duration:8s]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-2xl animate-bounce [animation-duration:6s] [animation-delay:3s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-features" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-features)" className="text-white/30"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">
            Our Philosophy & Approach
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
            Discover how we bridge Korea's medical excellence with global healthcare needs through sophisticated, human-centered innovation
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Our Philosophy</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full shadow-lg"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-cyan-300/50 shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4 leading-tight drop-shadow-lg">
                  {point.title}
                </h4>
                <p className="text-gray-200 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Our Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-lg"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePoints.map((point, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-300/50 shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4 leading-tight drop-shadow-lg">
                  {point.title}
                </h4>
                <p className="text-gray-200 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Our Identity</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full shadow-lg"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPoints.map((point, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-teal-300/50 shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4 leading-tight drop-shadow-lg">
                  {point.title}
                </h4>
                <p className="text-gray-200 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
