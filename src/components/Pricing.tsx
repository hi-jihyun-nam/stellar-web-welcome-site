
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
    <section className="py-32 px-6 relative bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Our Service Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            We empower clients to make confident healthcare decisions while helping clinics authentically communicate their distinctive value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-500 hover:scale-105 ${
                service.popular
                  ? "bg-white border-teal-300/60 shadow-2xl shadow-teal-200/50 ring-2 ring-teal-200/30"
                  : "bg-white border-gray-200/60 hover:border-teal-300/60 hover:shadow-xl"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-3">
                  {service.price}
                </div>
                <p className="text-gray-600 font-light">{service.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-light leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  service.popular
                    ? "bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200 hover:border-gray-300"
                }`}
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
