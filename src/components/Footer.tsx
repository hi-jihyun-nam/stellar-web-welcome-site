
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CosmeticCare</h3>
                <p className="text-sm text-gray-400">Concierge Service</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in cosmetic surgery, providing personalized care and exceptional results for over 15 years.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-rose-500 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-rose-500 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-rose-500 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Facial Procedures</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Body Contouring</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Non-Surgical Treatments</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Reconstruction Surgery</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Consultation Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-rose-400 transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-rose-400 transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="hover:text-rose-400 transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Before & After</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Financing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400" />
                <span>info@cosmeticcare.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 mt-1" />
                <span>123 Beauty Boulevard<br />Beverly Hills, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 CosmeticCare Concierge Service. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Medical Disclaimer</a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose-400" />
            <span>for your beautiful journey</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
