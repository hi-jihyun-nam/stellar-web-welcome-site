
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-white px-4 lg:px-8 py-6 lg:py-8">
      <div className="container mx-auto max-w-7xl">
        {/* Location and Search Bar */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm lg:text-base">강남구 역삼동</span>
            </div>
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">4.8</span>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="어떤 서비스를 찾으시나요?"
              className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white rounded-full p-2 lg:p-3 hover:bg-purple-600 transition-colors">
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Main Hero Content */}
          <div className="space-y-4 lg:space-y-6">
            <div className="relative bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                    Real Review<br />
                    & Real Curation
                  </h2>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-medium text-gray-800 hover:bg-transparent text-sm lg:text-base"
                  >
                    Learn More <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1" />
                  </Button>
                </div>
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-pink-200 rounded-full"></div>
              </div>
            </div>

            {/* Beta Badge and Navigation */}
            <div className="flex flex-col space-y-3 lg:space-y-4">
              <span className="bg-purple-500 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium w-fit">
                Beta
              </span>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                <button className="px-3 lg:px-4 py-1.5 lg:py-2 bg-orange-200 rounded-full text-xs lg:text-sm font-medium hover:bg-orange-300 transition-colors">
                  🎨 Styling
                </button>
                <button className="px-3 lg:px-4 py-1.5 lg:py-2 bg-gray-100 rounded-full text-xs lg:text-sm hover:bg-gray-200 transition-colors">Home</button>
                <button className="px-3 lg:px-4 py-1.5 lg:py-2 bg-gray-100 rounded-full text-xs lg:text-sm hover:bg-gray-200 transition-colors">My location</button>
                <button className="px-3 lg:px-4 py-1.5 lg:py-2 bg-gray-100 rounded-full text-xs lg:text-sm hover:bg-gray-200 transition-colors">My page</button>
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="lg:flex lg:items-center">
            <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-4 lg:p-6 text-white relative w-full">
              <ChevronLeft className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:scale-110 transition-transform" />
              <div className="text-center px-6">
                <h3 className="text-lg lg:text-2xl font-bold">Every Monday 12p.m.!</h3>
                <p className="text-xs lg:text-sm mt-1 lg:mt-2 opacity-90">Special promotions and events</p>
              </div>
              <ChevronRight className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
