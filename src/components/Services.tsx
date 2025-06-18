
import { Heart, User, Sparkles, Shield, Clock, Award } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Facial Procedures",
    description: "Rhinoplasty, Facelifts, Blepharoplasty, and more advanced facial surgeries",
    features: ["Expert surgeon matching", "3D simulation", "Recovery planning"]
  },
  {
    icon: User,
    title: "Body Contouring",
    description: "Liposuction, Tummy tucks, Brazilian butt lifts, and body sculpting procedures",
    features: ["Personalized treatment", "Safe techniques", "Aftercare support"]
  },
  {
    icon: Sparkles,
    title: "Non-Surgical Treatments",
    description: "Botox, Fillers, Laser treatments, and minimally invasive procedures",
    features: ["Quick procedures", "Natural results", "Minimal downtime"]
  },
  {
    icon: Shield,
    title: "Reconstruction Surgery",
    description: "Post-cancer reconstruction, trauma repair, and corrective procedures",
    features: ["Insurance guidance", "Specialized care", "Emotional support"]
  },
  {
    icon: Clock,
    title: "Consultation Services",
    description: "Virtual and in-person consultations with board-certified surgeons",
    features: ["Expert opinions", "Treatment planning", "Cost estimates"]
  },
  {
    icon: Award,
    title: "Premium Care",
    description: "Concierge-level service throughout your entire surgical journey",
    features: ["24/7 support", "Luxury facilities", "Personal coordinator"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Cosmetic Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From consultation to recovery, we provide end-to-end support for all your cosmetic surgery needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
