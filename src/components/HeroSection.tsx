
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-white px-4 lg:px-8 py-8 lg:py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Hero Content */}
          <div className="space-y-6">
            <div className="relative bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900 mb-4">
                    Real Review<br />
                    & Real Curation
                  </h2>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-medium text-gray-800 hover:bg-transparent"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-pink-200 rounded-full"></div>
              </div>
            </div>

            {/* Beta Badge and Navigation */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium w-fit">
                Beta
              </span>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-orange-200 rounded-full text-sm font-medium hover:bg-orange-300 transition-colors">
                  🎨 Styling
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">Home</button>
                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">My location</button>
                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">My page</button>
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="lg:flex lg:items-center">
            <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-6 lg:p-8 text-white relative w-full">
              <ChevronLeft className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <div className="text-center">
                <h3 className="text-xl lg:text-3xl font-bold">Every Monday 12p.m.!</h3>
                <p className="text-sm lg:text-base mt-2 opacity-90">Special promotions and events</p>
              </div>
              <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
