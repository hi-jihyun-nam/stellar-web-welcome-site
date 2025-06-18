
import { Bell, Search, User, Menu, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm px-4 lg:px-8 py-3 lg:py-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 lg:space-x-8">
            <h1 className="text-lg lg:text-2xl font-bold text-gray-900">Kim's Beauty Pass</h1>
            
            {/* PC Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">홈</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">검색</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">예약</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">찜</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">마이페이지</a>
            </nav>
          </div>
          
          {/* PC Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <MapPin className="w-4 h-4" />
              <span>강남구</span>
            </div>
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
          </div>
          
          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center space-x-3">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
            <Menu className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
