
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";

const connectionPoints = [
  {
    icon: Heart,
    title: "Personalized Matching",
    description: "We carefully assess your unique needs and match you with Korea's most suitable medical institutions and aesthetic clinics.",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Cultural Bridge",
    description: "Our team provides seamless cultural and linguistic support, ensuring clear communication throughout your journey.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Trust & Excellence",
    description: "We maintain the highest standards of care coordination, from initial consultation to post-treatment follow-up.",
    color: "from-purple-500 to-indigo-500"
  }
];

const HowWeConnect = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            How We Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Our sophisticated approach transforms healthcare connections into meaningful relationships built on trust and understanding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {connectionPoints.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-gray-200/60 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-gray-300/60"
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
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200/60 rounded-full">
            <span className="text-teal-700 font-medium">Ready to begin your journey?</span>
            <ArrowRight className="w-5 h-5 text-teal-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeConnect;
