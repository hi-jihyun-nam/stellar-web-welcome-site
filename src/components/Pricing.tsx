import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Consultation",
    price: "Complimentary",
    description: "Comprehensive initial assessment",
    features: [
      "Personalized needs evaluation",
      "Curated clinic recommendations",
      "Detailed procedure information",
      "Cultural guidance & support",
      "Strategic planning consultation"
    ],
    popular: false
  },
  {
    name: "Complete Care",
    price: "Bespoke",
    description: "End-to-end journey management",
    features: [
      "Precision clinic matching",
      "Professional language facilitation",
      "Luxury travel coordination",
      "Seamless procedure management",
      "Comprehensive post-care support",
      "Cultural integration services",
      "24/7 dedicated concierge"
    ],
    popular: true
  },
  {
    name: "Strategic Partnership",
    price: "Let's Connect",
    description: "For healthcare institutions",
    features: [
      "Global market expansion strategy",
      "International client acquisition",
      "Premium brand positioning",
      "Cultural adaptation expertise",
      "Sophisticated marketing campaigns",
      "Long-term partnership development",
      "Advanced analytics & insights"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-blue-600/20 to-purple-600/10 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/5 left-1/5 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-cyan-500/30 rounded-full blur-3xl animate-bounce [animation-duration:10s]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-br from-purple-400/30 to-blue-500/20 rounded-full blur-2xl animate-bounce [animation-duration:8s] [animation-delay:4s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-pricing" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pricing)" className="text-white/20"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">
            Our Service Portfolio
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg">
            We empower clients to make confident healthcare decisions while helping clinics authentically communicate their distinctive value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 shadow-xl bg-gradient-to-br from-white/10 via-white/20 to-white/10 backdrop-blur-xl border border-white/30 hover:border-cyan-300/60 hover:from-cyan-500/10 hover:via-blue-500/20 hover:to-purple-500/10 hover:shadow-2xl hover:shadow-cyan-300/20"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{service.name}</h3>
                <div className="text-4xl font-bold text-cyan-300 mb-3 drop-shadow-lg">
                  {service.price}
                </div>
                <p className="text-gray-200 font-light">{service.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 font-light leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-white/20 to-white/30 hover:from-cyan-500/30 hover:to-blue-500/40 text-white border border-white/30 hover:border-cyan-300/50 backdrop-blur-sm hover:shadow-lg"
              >
                {service.price === "Let's Connect" ? "Start Partnership" : "Begin Journey"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
