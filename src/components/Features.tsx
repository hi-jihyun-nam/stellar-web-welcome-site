
import { Heart, Shield, Users, Globe, MessageCircle, Sparkles, Target, Brain, Lightbulb } from "lucide-react";

const philosophyPoints = [
  {
    icon: Target,
    title: "Marketing as Connection",
    description: "We don't see marketing as just exposure or advertising. We see it as the art of making the right connection. No matter how great a medical service is, it means nothing if it doesn't reach the person who truly needs it.",
    category: "Philosophy"
  },
  {
    icon: Heart,
    title: "People-Centered Approach",
    description: "We don't see our clients as consumers. We see them as individuals with real stories, hopes, and concerns. Our connections are built not on visibility, but on empathy and understanding.",
    category: "Philosophy"
  },
  {
    icon: Users,
    title: "Moving People, Not Numbers",
    description: "We believe that marketing is not about moving numbers. It is about moving people. What we create is more than advertising. We build relationships that truly make a difference.",
    category: "Philosophy"
  }
];

const servicePoints = [
  {
    icon: Globe,
    title: "Global Connector",
    description: "C&P Ventures is a global connector that introduces Korea's top medical institutions, beauty clinics, and cosmetic brands to the world. We help international clients access Korean services easily and safely.",
    category: "Service"
  },
  {
    icon: MessageCircle,
    title: "Beyond Information",
    description: "We go beyond simply providing information by developing personalized service models that close the gap in language, trust, and understanding between providers and people.",
    category: "Service"
  },
  {
    icon: Shield,
    title: "Trust & Confidence",
    description: "We help customers make confident choices and help clinics communicate their true value. Even the best services have little impact unless they reach people who genuinely need them.",
    category: "Service"
  }
];

const brandPoints = [
  {
    icon: Lightbulb,
    title: "Clinic & People, Crowd & Person",
    description: "C&P stands for Clinic and People, and it also stands for Crowd and Person. This name reflects both what we do and how we think. We look beyond the crowd to find the one person who truly needs to hear the message.",
    category: "Brand"
  },
  {
    icon: Brain,
    title: "AI-Enhanced, Human-Centered",
    description: "We are beginning to integrate AI technology, not to replace people, but to better understand them. For us, technology is simply a tool. What matters most is building trust and maintaining human connection.",
    category: "Brand"
  },
  {
    icon: Sparkles,
    title: "Meaningful Impact",
    description: "That is exactly why we exist. We are here not to push data, but to connect people. We respond more quickly, more precisely, and more personally to what people really need.",
    category: "Brand"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Philosophy & Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding how we connect Korea's medical excellence with the world
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => (
              <div
                key={index}
                className="group relative p-8 bg-teal-50 border border-teal-200 rounded-2xl hover:bg-teal-100 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {point.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePoints.map((point, index) => (
              <div
                key={index}
                className="group relative p-8 bg-cyan-50 border border-cyan-200 rounded-2xl hover:bg-cyan-100 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {point.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Identity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPoints.map((point, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {point.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
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
