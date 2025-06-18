
import { Calendar, Search, UserCheck, Heart, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Free Consultation",
    description: "Schedule a complimentary consultation to discuss your goals and expectations with our expert team."
  },
  {
    icon: Search,
    number: "02", 
    title: "Surgeon Matching",
    description: "We match you with the perfect board-certified surgeon based on your specific needs and preferences."
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Personalized Plan",
    description: "Receive a detailed treatment plan with transparent pricing and timeline for your procedure."
  },
  {
    icon: Heart,
    number: "04",
    title: "Surgery & Care",
    description: "Experience world-class care during your procedure with our premium facilities and expert staff."
  },
  {
    icon: CheckCircle,
    number: "05",
    title: "Recovery Support",
    description: "Enjoy comprehensive aftercare and support throughout your healing journey to ensure optimal results."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Journey to Beauty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step process ensures you receive the highest quality care and achieve your desired results
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your free consultation today and take the first step towards your dream transformation.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('booking');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
