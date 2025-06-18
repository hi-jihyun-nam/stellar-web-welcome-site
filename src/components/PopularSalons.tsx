
import { Star, Heart } from "lucide-react";

const PopularSalons = () => {
  const salonData = {
    name: "Kim's Beauty Salon",
    rating: 4.8,
    reviews: 324,
    likes: 56,
    description: "Real Review의 The no.1 cosmetic beauty tips platform, check the hot reviews, the new trend, and get discounts!"
  };

  const SalonCard = ({ title }: { title: string }) => (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <span className="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">
            1
          </span>
          <div>
            <h3 className="font-semibold text-gray-900">{salonData.name}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{salonData.rating}</span>
              <span className="text-sm text-gray-400 ml-2">{salonData.reviews}개</span>
              <Heart className="w-4 h-4 text-red-400 ml-3" />
              <span className="text-sm text-gray-600 ml-1">{salonData.likes}</span>
            </div>
          </div>
        </div>
        <span className="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
          2
        </span>
      </div>
      
      <p className="text-xs text-gray-600 mb-3 leading-relaxed">
        {salonData.description}
      </p>
      
      <div className="flex space-x-2">
        <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/4f67cf71-6a1b-4bf7-834c-2f3d6ad980f3.png" 
            alt="Salon" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );

  return (
    <div className="px-4 py-6 bg-gray-50">
      <div className="max-w-md mx-auto">
        {/* 쿠폰 다운로드 Top 3 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            📱 쿠폰 다운로드를 가장 높은 매장 Top 3
          </h2>
          <SalonCard title="쿠폰 다운로드를 가장 높은 매장 Top 3" />
        </div>

        {/* 지금 당신 데모그래픽 Top 5 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            지금 당신 데모그래픽(인종 및 나이대)에서 가장 인기 많은 매장 Top 5
          </h2>
          <SalonCard title="데모그래픽 인기 매장" />
        </div>

        {/* 전체 가장 인기 많은 서비스 Top 5 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            🏆 전체 가장 인기 많은 서비스 Top 5
          </h2>
          <SalonCard title="전체 인기 서비스" />
        </div>
      </div>
    </div>
  );
};

export default PopularSalons;
