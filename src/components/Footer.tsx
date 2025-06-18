
import { Home, Search, Calendar, User, Heart } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden lg:block bg-white border-t border-gray-200 px-8 py-12 mt-auto">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">Kim's Beauty Pass</h3>
              <p className="text-gray-600 text-sm">최고의 뷰티 서비스를 경험해보세요</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">헤어</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">네일</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">에스테틱</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">성형외과</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">공지사항</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">고객센터</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">이용약관</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">연결</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 Kim's Beauty Pass. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <footer className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 fixed bottom-0 left-0 right-0 z-50">
        <div className="max-w-md mx-auto">
          <div className="flex justify-around items-center">
            <button className="flex flex-col items-center p-2 group">
              <Home className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
              <span className="text-xs text-gray-600 mt-1 group-hover:text-purple-600 transition-colors">홈</span>
            </button>
            <button className="flex flex-col items-center p-2 group">
              <Search className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
              <span className="text-xs text-gray-600 mt-1 group-hover:text-purple-600 transition-colors">검색</span>
            </button>
            <button className="flex flex-col items-center p-2 group">
              <Calendar className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
              <span className="text-xs text-gray-600 mt-1 group-hover:text-purple-600 transition-colors">예약</span>
            </button>
            <button className="flex flex-col items-center p-2 group">
              <Heart className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
              <span className="text-xs text-gray-600 mt-1 group-hover:text-purple-600 transition-colors">찜</span>
            </button>
            <button className="flex flex-col items-center p-2 group">
              <User className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
              <span className="text-xs text-gray-600 mt-1 group-hover:text-purple-600 transition-colors">마이</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile content padding to prevent overlap with fixed footer */}
      <div className="lg:hidden h-20"></div>
    </>
  );
};

export default Footer;
