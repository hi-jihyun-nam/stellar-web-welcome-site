import { MessageCircle, Shield, Zap } from "lucide-react";
const Philosophy = () => {
  return <section className="py-32 px-6 relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/30 via-blue-100/40 to-purple-100/30 animate-pulse"></div>
      
      {/* 3D floating elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-200/40 to-blue-300/50 rounded-full blur-3xl animate-bounce [animation-duration:6s]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/50 to-purple-200/40 rounded-full blur-2xl animate-bounce [animation-duration:8s] [animation-delay:2s]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid-philosophy" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-philosophy)" className="text-gray-300/30" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight drop-shadow-sm font-poppins">Philosophy</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-poppins">
            Marketing as the Art of Connection
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-left font-poppins">
            Connection Over Exposure
          </h3>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-poppins">
            <p>
              We don't see marketing as just exposure or advertising. We see it as the art of making the right connection. No matter how great a medical service is, it means nothing if it doesn't reach the person who truly needs it.
            </p>
            <p>
              At Kimio, our mission is to find those people and deliver experiences that meet both their expectations and their trust.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  People-Centered Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We see clients as individuals with real stories, hopes, and concerns, not just consumers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green-500" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  Trust & Understanding
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our connections are built on empathy and understanding, not just visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  Technology with Purpose
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We integrate AI to understand people better, not to replace human connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Philosophy;
