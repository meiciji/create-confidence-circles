import { ArrowRight, Heart, Users, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream-400 via-cream-300 to-sage-100 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage-300 rounded-full blur-xl animate-pulse opacity-30"></div>
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-mint-300 rounded-full blur-2xl animate-bounce opacity-20"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-soft-300 rounded-full blur-3xl animate-pulse opacity-25"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Floating Elements */}
        <div
          className="absolute top-1/4 right-1/4 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "4s" }}
        >
          <Sparkles className="h-8 w-8 text-sage-400 opacity-60" />
        </div>
        <div
          className="absolute bottom-1/3 left-1/4 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        >
          <Heart className="h-6 w-6 text-mint-500 opacity-50" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Mission Statement with enhanced animations */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-sage-200 hover:shadow-xl transition-all duration-300 hover:scale-105 mt-5">
              <Heart className="h-5 w-5 text-sage-600 mr-2 animate-pulse" />
              <span className="text-sage-800 text-sm font-medium">
                Empowering the next generation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-sage-900 mb-6 leading-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600 animate-pulse">
                Confidence
              </span>
              <br />
              through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-600 to-soft-600">
                Creation
              </span>
            </h1>

            <div className="relative">
              <p
                className="text-xl sm:text-2xl text-sage-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Empowering girls to lead with confidence through
                <span className="font-semibold text-sage-800"> creation</span>—
                <span className="font-semibold text-mint-700"> one</span>
                <span className="font-semibold text-soft-700"> project</span>
                <span className="font-semibold text-sage-800"> at</span> a
                <span className="font-semibold text-mint-700"> time</span>.
              </p>

              {/* Decorative wave */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-sage-400 to-mint-400 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-cream-100 px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group w-full"
              >
                Join Our Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>

            <a
              href="https://join.slack.com/t/confidencethr-chy7642/shared_invite/zt-3cbso9vb4-4C0gPcnTb5um568eZ7XpaQ"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-cream-100 px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group w-full"
              >
                Join Our Slack Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>

            <a
              href="https://calendly.com/confidencethroughcreation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-sage-600 text-sage-600 hover:bg-sage-50 px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-white/90 backdrop-blur-sm w-full sm:w-auto"
              >
                Book a Call with a Mentor
              </Button>
            </a>
          </div>
          {/* Enhanced Quick Stats with staggered animations */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className="text-center animate-slide-in-up transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="bg-gradient-to-br from-white/90 to-sage-50/90 rounded-2xl p-8 backdrop-blur-sm border border-sage-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="bg-gradient-to-br from-sage-500 to-sage-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-sage-900 mb-2 group-hover:text-sage-700 transition-colors">
                  500+
                </div>
                <div className="text-sage-700 text-sm font-medium">
                  Girls Empowered
                </div>
              </div>
            </div>

            <div
              className="text-center animate-slide-in-up transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "1s" }}
            >
              <div className="bg-gradient-to-br from-white/90 to-mint-50/90 rounded-2xl p-8 backdrop-blur-sm border border-mint-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="bg-gradient-to-br from-mint-500 to-mint-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-mint-900 mb-2 group-hover:text-mint-700 transition-colors">
                  25+
                </div>
                <div className="text-mint-700 text-sm font-medium">
                  Projects Launched
                </div>
              </div>
            </div>

            <div
              className="text-center animate-slide-in-up transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="bg-gradient-to-br from-white/90 to-soft-50/90 rounded-2xl p-8 backdrop-blur-sm border border-soft-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="bg-gradient-to-br from-soft-500 to-soft-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white animate-pulse" />
                </div>
                <div className="text-3xl font-bold text-soft-900 mb-2 group-hover:text-soft-700 transition-colors">
                  95%
                </div>
                <div className="text-soft-700 text-sm font-medium">
                  Confidence Increase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 text-white">
          <path
            fill="currentColor"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
