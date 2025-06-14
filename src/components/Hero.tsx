
import { ArrowRight, Heart, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream-400 via-cream-300 to-sage-100 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-mint-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-soft-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Mission Statement */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-sage-100 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-sage-600 mr-2" />
              <span className="text-sage-800 text-sm font-medium">Empowering the next generation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-900 mb-6 leading-tight">
              Building <span className="text-sage-600">Confidence</span>
              <br />
              through <span className="text-sage-600">Creation</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-sage-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Helping girls—especially from underrepresented communities—build self-worth and leadership through digital creation, tech, art, business, and media.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-cream-100 px-8 py-3 text-lg group">
              Join Our Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50 px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm border border-sage-200">
                <Users className="h-8 w-8 text-sage-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-sage-900 mb-2">500+</div>
                <div className="text-sage-700 text-sm">Girls Empowered</div>
              </div>
            </div>
            
            <div className="text-center animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm border border-sage-200">
                <Target className="h-8 w-8 text-sage-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-sage-900 mb-2">12</div>
                <div className="text-sage-700 text-sm">Cohorts Completed</div>
              </div>
            </div>
            
            <div className="text-center animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm border border-sage-200">
                <Heart className="h-8 w-8 text-sage-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-sage-900 mb-2">95%</div>
                <div className="text-sage-700 text-sm">Confidence Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
