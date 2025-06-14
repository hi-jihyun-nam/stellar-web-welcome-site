
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-cyan-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-teal-600" />
          <span className="text-sm text-teal-700">Connecting Korea to the World</span>
        </div>

        {/* Main Headline - Small Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 animate-fade-in">
          C&P Ventures
          <br />
          <span className="text-teal-600 text-lg md:text-xl">
            Clinic & People
          </span>
        </h1>

        {/* Highlighted Main Explanation */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl p-8 mb-12 animate-fade-in">
          <p className="text-2xl md:text-3xl text-gray-800 font-semibold mb-4 leading-relaxed">
            We connect Korea's top medical institutions and beauty clinics to the world.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Beyond information, we build personalized bridges of trust, understanding, and excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">500+</div>
            <div className="text-gray-600">Partner Clinics</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-gray-600">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
