
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Philosophy from "@/components/Philosophy";
import HowWeConnect from "@/components/HowWeConnect";
import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MouseEffect from "@/components/MouseEffect";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const { isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 cursor-none">
      <MouseEffect />
      <Header />
      
      <div 
        id="hero" 
        data-animate 
        className={`transition-all duration-600 ${
          isVisible('hero') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        <Hero />
      </div>
      
      <div 
        id="mission" 
        data-animate 
        className={`transition-all duration-600 ${
          isVisible('mission') ? 'opacity-100 translate-y-0 scale-100 shadow-lg' : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <Mission />
      </div>
      
      <div 
        id="philosophy" 
        data-animate 
        className={`transition-all duration-600 delay-100 ${
          isVisible('philosophy') ? 'opacity-100 translate-y-0 scale-100 shadow-lg' : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <Philosophy />
      </div>
      
      <div 
        id="how-we-connect" 
        data-animate 
        className={`transition-all duration-600 delay-200 ${
          isVisible('how-we-connect') ? 'opacity-100 translate-y-0 scale-100 shadow-lg' : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <HowWeConnect />
      </div>
      
      <div 
        id="pricing" 
        data-animate 
        className={`transition-all duration-600 delay-300 ${
          isVisible('pricing') ? 'opacity-100 translate-y-0 scale-100 shadow-lg' : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <Pricing />
      </div>
      
      <div 
        id="contact" 
        data-animate 
        className={`transition-all duration-600 delay-400 ${
          isVisible('contact') ? 'opacity-100 translate-y-0 scale-100 shadow-lg' : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <ContactSection />
      </div>
      
      <Footer />
    </div>    
  );
};

export default Index;
