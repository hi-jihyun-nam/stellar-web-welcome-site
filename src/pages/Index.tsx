
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Philosophy from "@/components/Philosophy";
import Features from "@/components/Features";
import HowWeConnect from "@/components/HowWeConnect";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
      <Header />
      <Hero />
      <Mission />
      <Philosophy />
      <Features />
      <HowWeConnect />
      <Pricing />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
