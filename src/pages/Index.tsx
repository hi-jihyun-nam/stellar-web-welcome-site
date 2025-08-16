
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BeautyPlatform } from "@/components/BeautyPlatform";
import { MobileNavigation } from "@/components/MobileNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <BeautyPlatform />
      </main>
      <MobileNavigation />
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
