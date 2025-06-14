
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria González",
    role: "Healthcare Client, Spain",
    content: "C&P Ventures transcended traditional service delivery—they understood my deepest concerns and provided exceptional guidance throughout my entire journey. Their cultural expertise was truly invaluable.",
    rating: 5,
    avatar: "MG"
  },
  {
    name: "Dr. Kim Min-jun",
    role: "Seoul Aesthetic Institute",
    content: "Partnering with C&P Ventures revolutionized our international patient engagement. Their sophisticated understanding of both cultural contexts creates genuinely meaningful relationships.",
    rating: 5,
    avatar: "KM"
  },
  {
    name: "Sarah Johnson",
    role: "Healthcare Client, Canada",
    content: "What distinguished C&P Ventures was their exceptional human-centered approach. They recognized me as a unique individual with specific needs. The trust they cultivated was transformative.",
    rating: 5,
    avatar: "SJ"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Authentic Stories, Lasting Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            We believe that exceptional service transforms lives rather than manipulates statistics. Every connection we forge creates meaningful, lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200/60 rounded-3xl hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-teal-300/60"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-light">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 font-light">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
