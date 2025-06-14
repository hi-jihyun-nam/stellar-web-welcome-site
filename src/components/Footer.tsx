
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">YourBrand</h3>
            <p className="text-white/70 mb-6 max-w-md">
              Building the future of web development with innovative tools and technologies 
              that empower developers worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">API Reference</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60">
            © 2024 YourBrand. All rights reserved.
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
