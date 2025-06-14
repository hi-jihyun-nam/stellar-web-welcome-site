
import { Heart, Globe, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">C&P Ventures</h3>
            <p className="text-white/70 mb-4 max-w-md">
              <strong>Clinic & People</strong> | <strong>Crowd & Person</strong>
            </p>
            <p className="text-white/70 mb-6 max-w-md">
              We connect Korea's top medical institutions and beauty clinics to the world, 
              building bridges of trust, understanding, and excellence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Globe className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Heart className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Medical Tourism</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Beauty Clinics</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Cultural Bridge</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Partnership</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Partners</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60">
            © 2024 C&P Ventures. Building connections that matter.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
