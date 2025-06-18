
import { Bell, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-900">Kim's Beauty Pass</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">E-learning</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Medical</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Professionals</a>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <Search className="w-5 h-5 text-gray-600" />
          <Bell className="w-5 h-5 text-gray-600" />
          <User className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;
