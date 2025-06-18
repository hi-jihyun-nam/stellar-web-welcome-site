
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import PopularSalons from "@/components/PopularSalons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategorySection />
      <PopularSalons />
      <Footer />
    </div>
  );
};

export default Index;
