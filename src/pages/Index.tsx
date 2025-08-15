
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopContentManager from "@/components/ShopContentManager";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <ShopContentManager />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
