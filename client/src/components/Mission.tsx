import {
  Quote,
  TrendingUp,
  Users2,
  Lightbulb,
  Heart,
  Target,
} from "lucide-react";

const Mission = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-sage-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-mint-300 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The Problem */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-sage-100 rounded-full px-6 py-2 mb-6">
            <Target className="h-4 w-4 text-sage-600 mr-2" />
            <span className="text-sage-800 text-sm font-medium">
              The Challenge
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-sage-900 mb-8 animate-fade-in">
            The Challenge We're{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600">
              Addressing
            </span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-sage-50 to-mint-50 rounded-3xl p-8 border border-sage-200 mb-12 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Quote className="h-12 w-12 text-sage-600 mb-6 mx-auto animate-pulse" />
              <p className="text-xl text-sage-800 italic leading-relaxed font-medium">
                "Despite progress in gender equality, leadership in business and
                tech remains overwhelmingly male-dominated—even in industries
                designed for and driven by women."
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-l-4 border-sage-500">
                    <div className="bg-gradient-to-br from-sage-500 to-sage-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-sage-900 mb-3 group-hover:text-sage-700 transition-colors">
                      10%
                    </div>
                    <p className="text-sage-700 font-medium">
                      of Fortune 500 CEOs are women
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-l-4 border-mint-500"
                    style={{ transitionDelay: "0.1s" }}
                  >
                    <div className="bg-gradient-to-br from-mint-500 to-mint-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <Users2 className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-mint-900 mb-3 group-hover:text-mint-700 transition-colors">
                      &lt;2%
                    </div>
                    <p className="text-mint-700 font-medium">
                      of VC funding goes to women-led startups
                    </p>
                  </div>
                </div>

                <div className="group md:col-span-2">
                  <div
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-l-4 border-soft-500"
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <div className="bg-gradient-to-br from-soft-500 to-soft-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-soft-900 mb-3 group-hover:text-soft-700 transition-colors">
                      Leadership Gap
                    </div>
                    <p className="text-soft-700 font-medium">
                      Even in female-driven industries, leadership remains
                      male-dominated
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Photo Collage */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-sage-50 to-mint-50 rounded-3xl p-8 shadow-xl">
                  <h4 className="text-2xl font-bold text-sage-900 text-center mb-6">
                    Our Community
                  </h4>

                  {/* Photo Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                        <img
                          src="/Alyssa_Photo.jpg"
                          alt="Community member Alyssa"
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                        <img
                          src="/angela.png"
                          alt="Community member Amrutha"
                          className="w-full h-24 object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                        <img
                          src="/Bryleigh_Photo.jpg"
                          alt="Community member Bryleigh"
                          className="w-full h-24 object-cover"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                        <img
                          src="/mia.png"
                          alt="Community member Zainab"
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-sage-700 text-center mt-6 font-medium">
                    Empowering the next generation of female leaders
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-sage-300/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-mint-300/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solution with creative layout */}
        <div className="relative">
          {/* Curved background */}
          <div className="absolute inset-0 bg-gradient-to-r from-sage-100 via-mint-100 to-sage-100 rounded-[3rem] transform -rotate-1"></div>
          <div className="relative bg-gradient-to-r from-sage-50 via-white to-mint-50 rounded-[3rem] p-12 lg:p-16 shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-3 mb-8 shadow-lg">
                <Heart className="h-5 w-5 text-sage-600 mr-2 animate-pulse" />
                <span className="text-sage-800 font-medium">
                  Our Origin Story
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-8 leading-tight">
                From{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600">
                  Discovery
                </span>{" "}
                to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-600 to-soft-600">
                  Empowerment
                </span>
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Photo Section - Staggered Founder Images */}
                <div className="relative">
                  <div className="space-y-8">
                    {/* Main Founder Photo */}
                    <div className="relative w-4/5 ml-auto">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                        <img
                          src="/MeiYing_Tham_Photo.jpg"
                          alt="Mei Ying Tham, Founder of Confidence Through Creation"
                          className="w-full h-48 sm:h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-xs font-medium opacity-90">Founder</p>
                          <p className="text-sm font-bold">Mei Ying Tham</p>
                        </div>
                      </div>
                    </div>

                    {/* Second Founder Photo */}
                    <div className="relative w-4/5 mr-auto">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                        <img
                          src="/interview.png"
                          alt="Mei Ying Tham in interview setting"
                          className="w-full h-48 sm:h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-mint-900/30 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-xs font-medium opacity-90">Interview</p>
                          <p className="text-sm font-bold">Featured Story</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-200 rounded-full blur-2xl opacity-60"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-mint-200 rounded-full blur-3xl opacity-40"></div>
                </div>

                {/* Text Section */}
                <div className="space-y-6 text-lg text-sage-800 leading-relaxed">
                  <p className="bg-white/80 rounded-2xl p-6 shadow-md">
                    After discovering her voice through social media creation
                    and being featured on the New York Post,{" "}
                    <span className="font-bold text-sage-900">Mei</span> founded{" "}
                    <span className="font-bold text-sage-900">
                      Confidence Through Creation
                    </span>{" "}
                    to help girls—especially those from underrepresented or
                    underserved communities—build self-worth and leadership
                    through digital creation.
                  </p>
                  <p className="bg-white/80 rounded-2xl p-6 shadow-md">
                    Whether through{" "}
                    <span className="font-semibold text-sage-700">tech</span>,{" "}
                    <span className="font-semibold text-mint-700">art</span>,{" "}
                    <span className="font-semibold text-soft-700">
                      business
                    </span>
                    , or{" "}
                    <span className="font-semibold text-sage-700">media</span>,
                    CTC helps young creators turn ideas into real-world impact
                    and connects that process to access, equity, and systemic
                    change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Message with animated elements */}
        <div className="text-center mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sage-100 to-transparent rounded-full blur-3xl opacity-30"></div>
          <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-sage-200">
            <p className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sage-700 via-mint-700 to-sage-700 max-w-4xl mx-auto leading-relaxed font-bold">
              We believe that when girls see themselves as creators and leaders,
              they don't just change their own lives—they change the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
