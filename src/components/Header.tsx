
import { Bell, Search, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm px-4 lg:px-8 py-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Kim's Beauty Pass</h1>
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">E-learning</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Medical</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Professionals</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors" />
            <Menu className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors lg:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
