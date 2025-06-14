
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria González",
    role: "Client from Spain",
    content: "C&P Ventures didn't just help me find a clinic—they understood my concerns and guided me through every step. The cultural bridge they provided was invaluable.",
    rating: 5,
    avatar: "MG"
  },
  {
    name: "Dr. Kim Min-jun",
    role: "Seoul Beauty Clinic",
    content: "Working with C&P Ventures transformed how we connect with international patients. They truly understand both sides and create meaningful relationships.",
    rating: 5,
    avatar: "KM"
  },
  {
    name: "Sarah Johnson",
    role: "Client from Canada",
    content: "What impressed me most was their people-centered approach. They saw me as an individual, not just another client. The trust they built made all the difference.",
    rating: 5,
    avatar: "SJ"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Real Stories, Real Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that marketing is not about moving numbers. It is about moving people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:border-teal-300"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-teal-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-gray-800 font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">
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
