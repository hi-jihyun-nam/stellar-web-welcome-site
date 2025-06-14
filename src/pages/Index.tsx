
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Philosophy from "@/components/Philosophy";
import HowWeConnect from "@/components/HowWeConnect";
import Pricing from "@/components/Pricing";
import EmailCollection from "@/components/EmailCollection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
      <Header />
      <Hero />
      <Mission />
      <Philosophy />
      <HowWeConnect />
      <Pricing />
      <EmailCollection />
      <Footer />
    </div>    
  );
};

export default Index;
