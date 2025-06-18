
import { Star, Heart, MapPin, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PopularSalons = () => {
  const salonData = {
    name: "Kim's Beauty Salon",
    rating: 4.8,
    reviews: 324,
    likes: 56,
    distance: "500m",
    time: "15분",
    description: "Real Review의 The no.1 cosmetic beauty tips platform, check the hot reviews, the new trend, and get discounts!"
  };

  const SalonCard = ({ title, rank, isPromoted = false }: { title: string; rank: number; isPromoted?: boolean }) => (
    <div className={`bg-white rounded-xl p-4 lg:p-5 shadow-sm border ${isPromoted ? 'border-yellow-200 bg-yellow-50' : 'border-gray-100'} hover:shadow-md transition-shadow duration-200`}>
      <div className="flex items-start justify-between mb-3 lg:mb-4">
        <div className="flex items-start space-x-3">
          <span className={`${isPromoted ? 'bg-yellow-500' : 'bg-purple-500'} text-white rounded-full w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center text-xs lg:text-sm font-bold`}>
            {rank}
          </span>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-1">{salonData.name}</h3>
            <div className="flex items-center text-xs lg:text-sm text-gray-500 mb-2">
              <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
              <span>{salonData.distance}</span>
              <Clock className="w-3 h-3 lg:w-4 lg:h-4 ml-3 mr-1" />
              <span>{salonData.time}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" />
              <span className="text-xs lg:text-sm text-gray-600 ml-1">{salonData.rating}</span>
              <span className="text-xs lg:text-sm text-gray-400 ml-2">({salonData.reviews})</span>
              <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-red-400 ml-3" />
              <span className="text-xs lg:text-sm text-gray-600 ml-1">{salonData.likes}</span>
            </div>
          </div>
        </div>
        {isPromoted && (
          <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            AD
          </span>
        )}
      </div>
      
      <p className="text-xs lg:text-sm text-gray-600 mb-3 lg:mb-4 leading-relaxed line-clamp-2">
        {salonData.description}
      </p>
      
      <div className="flex space-x-2 lg:space-x-3">
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src="/lovable-uploads/4f67cf71-6a1b-4bf7-834c-2f3d6ad980f3.png" 
            alt="Salon" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-lg flex-shrink-0 hidden lg:block"></div>
      </div>
    </div>
  );

  return (
    <div className="px-4 lg:px-8 py-6 lg:py-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* 쿠폰 다운로드 Top 3 - 캐러셀 형태 */}
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-base lg:text-lg font-bold text-gray-900 flex items-center">
              📱 쿠폰 다운로드 Top 3
            </h2>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <SalonCard title="쿠폰 다운로드 1위" rank={1} isPromoted={true} />
                </CarouselItem>
                <CarouselItem>
                  <SalonCard title="쿠폰 다운로드 2위" rank={2} />
                </CarouselItem>
                <CarouselItem>
                  <SalonCard title="쿠폰 다운로드 3위" rank={3} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex -left-4" />
              <CarouselNext className="hidden lg:flex -right-4" />
            </Carousel>
          </div>

          {/* 데모그래픽 인기 매장 Top 5 */}
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-base lg:text-lg font-bold text-gray-900">
              👥 데모그래픽 인기 매장 Top 5
            </h2>
            <div className="space-y-3 lg:space-y-4">
              <SalonCard title="데모그래픽 인기 매장" rank={1} />
              <SalonCard title="데모그래픽 인기 매장" rank={2} />
              <SalonCard title="데모그래픽 인기 매장" rank={3} />
            </div>
          </div>

          {/* 전체 인기 서비스 Top 5 */}
          <div className="space-y-4 lg:space-y-6 lg:col-span-2 xl:col-span-1">
            <h2 className="text-base lg:text-lg font-bold text-gray-900 flex items-center">
              🏆 전체 인기 서비스 Top 5
            </h2>
            <div className="space-y-3 lg:space-y-4">
              <SalonCard title="전체 인기 서비스" rank={1} />
              <SalonCard title="전체 인기 서비스" rank={2} />
              <SalonCard title="전체 인기 서비스" rank={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSalons;
