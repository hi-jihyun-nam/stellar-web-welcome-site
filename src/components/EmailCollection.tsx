
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EmailCollection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setEmail("");
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section ref={ref} className={`py-32 px-6 relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/20 via-purple-100/30 to-blue-100/20 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-purple-300/50 rounded-full blur-3xl animate-bounce [animation-duration:8s]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-blue-200/40 rounded-full blur-2xl animate-bounce [animation-duration:10s] [animation-delay:3s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-email" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-email)" className="text-gray-300/30"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full shadow-lg flex items-center gap-3 px-6 py-3">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-gray-800 font-semibold text-sm">AI-Powered Innovation</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Want to hear about our
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI-Enhanced Next Journey?
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Be the first to discover how artificial intelligence is revolutionizing healthcare connections. 
            Join our exclusive community and stay ahead of the curve.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">We'll keep you updated on our AI-powered innovations.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-left">
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="h-12 text-lg bg-white/50 border-gray-300/50 focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-poppins"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Early Access
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailCollection;
