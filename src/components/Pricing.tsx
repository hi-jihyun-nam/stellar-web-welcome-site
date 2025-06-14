import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const b2cService = {
  name: "Complete Care",
  price: "Bespoke",
  description: "End-to-end journey management",
  features: ["Precision clinic matching", "Professional language facilitation", "Luxury travel coordination", "Seamless procedure management", "Comprehensive post-care support", "Cultural integration services", "24/7 dedicated concierge"],
  popular: true
};
const b2bService = {
  name: "Strategic Partnership",
  price: "Let's Connect",
  description: "For healthcare institutions",
  features: ["Global market expansion strategy", "International client acquisition", "Premium brand positioning", "Cultural adaptation expertise", "Sophisticated marketing campaigns", "Long-term partnership development", "Advanced analytics & insights"]
};
const Pricing = () => {
  const handleEmailContact = (subject: string) => {
    const emailBody = `Hello Kimio team,

I'm interested in learning more about your ${subject} service.

Please contact me to discuss how we can work together.

Best regards`;
    const mailtoLink = `mailto:info@cpventures.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };
  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-purple-50/20 via-gray-50 to-blue-50/30 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/20 via-blue-100/30 to-purple-100/20 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/5 left-1/5 w-72 h-72 bg-gradient-to-br from-teal-200/30 to-cyan-300/40 rounded-full blur-3xl animate-bounce [animation-duration:10s]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-br from-purple-200/40 to-blue-300/30 rounded-full blur-2xl animate-bounce [animation-duration:8s] [animation-delay:4s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-pricing" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pricing)" className="text-gray-300/40" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">Service Portfolio</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            We empower clients to make confident healthcare decisions while helping clinics authentically communicate their distinctive value
          </p>
        </div>

        {/* Side by side layout with equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* B2C Service - Left */}
          <div className="flex flex-col">
            <div className="text-center mb-8">
              <h3 className="font-bold text-gray-900 mb-4 text-2xl">For Individuals</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto rounded-full shadow-lg"></div>
            </div>
            <div className="relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:bg-cyan-50/50 shadow-lg bg-white/80 backdrop-blur-xl border border-gray-200/50 hover:border-cyan-300/60 hover:shadow-xl hover:shadow-cyan-200/20 flex-1 flex flex-col min-h-[600px]">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{b2cService.name}</h4>
                <div className="text-4xl font-bold text-cyan-600 mb-3">
                  {b2cService.price}
                </div>
                <p className="text-gray-600 font-light">{b2cService.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {b2cService.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => handleEmailContact("Complete Care Service")} className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0 shadow-lg hover:shadow-xl mt-auto">
                Begin Journey
              </Button>
            </div>
          </div>

          {/* B2B Service - Right */}
          <div className="flex flex-col">
            <div className="text-center mb-8">
              <h3 className="font-bold text-gray-900 mb-4 text-2xl">For Healthcare Institutions</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full shadow-lg"></div>
            </div>
            <div className="relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:bg-purple-50/50 shadow-lg bg-white/80 backdrop-blur-xl border border-gray-200/50 hover:border-purple-300/60 hover:shadow-xl hover:shadow-purple-200/20 flex-1 flex flex-col min-h-[600px]">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{b2bService.name}</h4>
                <div className="text-4xl font-bold text-purple-600 mb-3">
                  {b2bService.price}
                </div>
                <p className="text-gray-600 font-light">{b2bService.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {b2bService.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => handleEmailContact("Strategic Partnership Service")} className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl mt-auto">
                Start Partnership
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
