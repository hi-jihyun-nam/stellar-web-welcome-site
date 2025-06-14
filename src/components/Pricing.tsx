
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Consultation",
    price: "Free",
    description: "Perfect for initial exploration",
    features: [
      "Initial needs assessment",
      "Basic clinic recommendations",
      "General information about procedures",
      "Cultural guidance basics",
      "Initial trust-building consultation"
    ],
    popular: false
  },
  {
    name: "Full Service",
    price: "Custom",
    description: "Complete journey management",
    features: [
      "Personalized clinic matching",
      "Full language support",
      "Travel & accommodation assistance",
      "Procedure coordination",
      "Post-treatment follow-up",
      "Cultural bridge services",
      "24/7 support during stay"
    ],
    popular: true
  },
  {
    name: "Partnership",
    price: "Contact Us",
    description: "For clinics & institutions",
    features: [
      "Global market entry strategy",
      "International client acquisition",
      "Brand positioning & messaging",
      "Cultural adaptation consulting",
      "Marketing campaign development",
      "Long-term partnership support",
      "Performance analytics & insights"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-6 relative bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help customers make confident choices and help clinics communicate their true value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                service.popular
                  ? "bg-white border-teal-300 shadow-xl shadow-teal-200"
                  : "bg-white border-gray-200 hover:border-teal-300"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {service.price}
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-lg transition-all duration-300 ${
                  service.popular
                    ? "bg-teal-600 hover:bg-teal-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300"
                }`}
              >
                {service.price === "Contact Us" ? "Get In Touch" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
