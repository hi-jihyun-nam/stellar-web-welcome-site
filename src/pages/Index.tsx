
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowWeConnect from "@/components/HowWeConnect";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowWeConnect />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
