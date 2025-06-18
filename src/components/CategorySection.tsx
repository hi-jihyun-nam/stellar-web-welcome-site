
import { Scissors, Users, MapPin, Calendar, UserCheck, Heart, Star, Clock } from "lucide-react";

const CategorySection = () => {
  const categories = [
    { icon: Scissors, label: "헤어", color: "bg-purple-100 text-purple-600" },
    { icon: Users, label: "네일", color: "bg-blue-100 text-blue-600" },
    { icon: MapPin, label: "왁싱", color: "bg-green-100 text-green-600" },
    { icon: Calendar, label: "눈썹&속눈썹", color: "bg-orange-100 text-orange-600" },
    { icon: UserCheck, label: "에스테틱", color: "bg-pink-100 text-pink-600" },
    { icon: Heart, label: "다이어트", color: "bg-red-100 text-red-600" },
    { icon: Star, label: "피부과", color: "bg-yellow-100 text-yellow-600" },
    { icon: Clock, label: "성형외과", color: "bg-indigo-100 text-indigo-600" },
  ];

  return (
    <div className="px-4 lg:px-8 py-8 lg:py-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">카테고리</h2>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                <category.icon className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <span className="text-xs lg:text-sm text-gray-700 text-center font-medium">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
