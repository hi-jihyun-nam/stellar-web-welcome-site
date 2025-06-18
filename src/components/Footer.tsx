
import { Home, Search, Calendar, User, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 py-3 fixed bottom-0 left-0 right-0">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center p-2">
            <Home className="w-5 h-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">홈</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <Search className="w-5 h-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">검색</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <Calendar className="w-5 h-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">예약</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <Heart className="w-5 h-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">찜</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-xs text-gray-600 mt-1">마이</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
