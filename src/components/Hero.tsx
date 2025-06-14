
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 blur-3xl"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-white/90">Connecting Korea to the World</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-yellow-200 to-amber-200 bg-clip-text text-transparent mb-6 animate-fade-in">
          C&P Ventures
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent text-4xl md:text-5xl">
            Clinic & People
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          We connect Korea's top medical institutions and beauty clinics to the world. 
          Beyond information, we build personalized bridges of trust, understanding, and excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-navy-900 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/25">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/60">Partner Clinics</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/60">Countries Served</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/60">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
