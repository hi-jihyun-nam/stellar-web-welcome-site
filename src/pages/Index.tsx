
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import PopularSalons from "@/components/PopularSalons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto max-w-7xl">
        <HeroSection />
        <CategorySection />
        <PopularSalons />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
