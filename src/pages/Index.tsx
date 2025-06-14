
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
      <Hero />
      
      <div 
        id="mission" 
        data-animate 
        className={`transition-all duration-1000 ${
          isVisible('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <Mission />
      </div>
      
      <div 
        id="philosophy" 
        data-animate 
        className={`transition-all duration-1000 delay-200 ${
          isVisible('philosophy') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <Philosophy />
      </div>
      
      <div 
        id="how-we-connect" 
        data-animate 
        className={`transition-all duration-1000 delay-300 ${
          isVisible('how-we-connect') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <HowWeConnect />
      </div>
      
      <div 
        id="pricing" 
        data-animate 
        className={`transition-all duration-1000 delay-400 ${
          isVisible('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <Pricing />
      </div>
      
      <div 
        id="contact" 
        data-animate 
        className={`transition-all duration-1000 delay-500 ${
          isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <ContactSection />
      </div>
      
      <Footer />
    </div>    
  );
};

export default Index;
