
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
    <div className="px-4 py-6 bg-white">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-2`}>
                <category.icon className="w-6 h-6" />
              </div>
              <span className="text-xs text-gray-700 text-center">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
