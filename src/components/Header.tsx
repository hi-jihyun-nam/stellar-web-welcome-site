
import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CosmeticCare</h1>
              <p className="text-xs text-gray-500">Concierge Service</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-rose-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Reviews
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
            <Button onClick={() => scrollToSection('booking')} className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 hover:text-rose-500">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-rose-500">
                About
              </button>
              <button onClick={() => scrollToSection('process')} className="text-left text-gray-600 hover:text-rose-500">
                Process
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-600 hover:text-rose-500">
                Reviews
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="flex items-center gap-2 justify-center">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
                <Button onClick={() => scrollToSection('booking')} className="bg-gradient-to-r from-rose-500 to-pink-500 flex items-center gap-2 justify-center">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
