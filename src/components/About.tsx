
import { Users, Award, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our
              <span className="block text-rose-500">Concierge Service?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We believe that your cosmetic surgery journey should be as beautiful as your desired results. 
              Our dedicated team of experts ensures every detail is perfect.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Network</h3>
                  <p className="text-gray-600">Access to board-certified surgeons with proven track records and specializations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Experience</h3>
                  <p className="text-gray-600">Luxury facilities, personalized care, and white-glove service throughout your journey</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
                  <p className="text-gray-600">Rigorous safety protocols, accredited facilities, and comprehensive aftercare support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Care</h3>
                  <p className="text-gray-600">Dedicated coordinators who understand your goals and guide you every step of the way</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl p-8 text-white">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-rose-100">Years of Excellence</div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">1000+</div>
                    <div className="text-rose-100 text-sm">Successful Procedures</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <div className="text-rose-100 text-sm">Expert Surgeons</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-rose-100">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
