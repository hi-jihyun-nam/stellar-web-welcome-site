
import { Star, Heart } from "lucide-react";

const PopularSalons = () => {
  const salonData = {
    name: "Kim's Beauty Salon",
    rating: 4.8,
    reviews: 324,
    likes: 56,
    description: "Real Review의 The no.1 cosmetic beauty tips platform, check the hot reviews, the new trend, and get discounts!"
  };

  const SalonCard = ({ title, rank }: { title: string; rank: number }) => (
    <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <span className="bg-yellow-400 text-white rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center text-sm lg:text-base font-bold">
            {rank}
          </span>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-base lg:text-lg">{salonData.name}</h3>
            <div className="flex items-center mt-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{salonData.rating}</span>
              <span className="text-sm text-gray-400 ml-2">{salonData.reviews}개</span>
              <Heart className="w-4 h-4 text-red-400 ml-4" />
              <span className="text-sm text-gray-600 ml-1">{salonData.likes}</span>
            </div>
          </div>
        </div>
        <span className="bg-yellow-400 text-white rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center text-sm lg:text-base font-bold">
          {rank + 1}
        </span>
      </div>
      
      <p className="text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
        {salonData.description}
      </p>
      
      <div className="flex space-x-3">
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/4f67cf71-6a1b-4bf7-834c-2f3d6ad980f3.png" 
            alt="Salon" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-lg"></div>
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-lg"></div>
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-lg hidden lg:block"></div>
      </div>
    </div>
  );

  return (
    <div className="px-4 lg:px-8 py-8 lg:py-12 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* 쿠폰 다운로드 Top 3 */}
          <div className="space-y-6">
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
              📱 쿠폰 다운로드 Top 3
            </h2>
            <SalonCard title="쿠폰 다운로드를 가장 높은 매장 Top 3" rank={1} />
          </div>

          {/* 지금 당신 데모그래픽 Top 5 */}
          <div className="space-y-6">
            <h2 className="text-lg lg:text-xl font-bold text-gray-900">
              👥 데모그래픽 인기 매장 Top 5
            </h2>
            <SalonCard title="데모그래픽 인기 매장" rank={1} />
          </div>

          {/* 전체 가장 인기 많은 서비스 Top 5 */}
          <div className="space-y-6 lg:col-span-2 xl:col-span-1">
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center">
              🏆 전체 인기 서비스 Top 5
            </h2>
            <SalonCard title="전체 인기 서비스" rank={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSalons;
