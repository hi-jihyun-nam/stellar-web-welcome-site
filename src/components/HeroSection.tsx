
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-white px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Main Hero Content */}
        <div className="relative bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
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
            <div className="w-24 h-24 bg-pink-200 rounded-full"></div>
          </div>
        </div>

        {/* Beta Badge and Navigation */}
        <div className="flex items-center justify-between mb-6">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Beta
          </span>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-orange-200 rounded-full text-sm font-medium">
              🎨 Styling
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">Home</button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">My location</button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">My page</button>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-4 mb-6 text-white relative">
          <ChevronLeft className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6" />
          <div className="text-center">
            <h3 className="text-xl font-bold">Every Monday 12p.m.!</h3>
          </div>
          <ChevronRight className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
