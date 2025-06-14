
import { TrendingUp, Heart, Users, Target, Award, Globe, Star, Sparkles } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Girls Empowered",
      description: "Across all our programs and initiatives",
      color: "sage"
    },
    {
      icon: Target,
      number: "12",
      label: "Cohorts Completed",
      description: "Virtual Creation Circles with measurable outcomes",
      color: "mint"
    },
    {
      icon: Heart,
      number: "95%",
      label: "Confidence Increase",
      description: "Participants report increased self-confidence",
      color: "soft"
    },
    {
      icon: Award,
      number: "200+",
      label: "Projects Created",
      description: "From blogs to prototypes to business ideas",
      color: "sage"
    },
    {
      icon: Globe,
      number: "25",
      label: "States Reached",
      description: "Virtual programming enables nationwide impact",
      color: "mint"
    },
    {
      icon: TrendingUp,
      number: "1000+",
      label: "Monthly Readers",
      description: "Engaged audience for podcast and newsletter",
      color: "soft"
    }
  ];

  const testimonials = [
    {
      quote: "CTC helped me realize that my voice matters and that I can create change through technology. I went from being afraid to speak up to leading my school's coding club.",
      name: "Maria S.",
      role: "Creation Circle Graduate, Age 16",
      color: "sage"
    },
    {
      quote: "The mentorship and community I found here gave me the confidence to apply for a summer internship at a tech startup. I got it!",
      name: "Aisha T.", 
      role: "Podcast Guest & Volunteer Mentor, Age 17",
      color: "mint"
    },
    {
      quote: "I never thought I could be an entrepreneur until CTC showed me that business isn't just for certain types of people. Now I'm launching my own sustainable fashion line.",
      name: "Jennifer L.",
      role: "Digital Zine Contributor, Age 15",
      color: "soft"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'sage':
        return {
          bg: 'from-sage-50 to-sage-100',
          border: 'border-sage-200',
          icon: 'from-sage-500 to-sage-600',
          accent: 'bg-sage-500'
        };
      case 'mint':
        return {
          bg: 'from-mint-50 to-mint-100',
          border: 'border-mint-200',
          icon: 'from-mint-500 to-mint-600',
          accent: 'bg-mint-500'
        };
      case 'soft':
        return {
          bg: 'from-soft-50 to-soft-100',
          border: 'border-soft-200',
          icon: 'from-soft-500 to-soft-600',
          accent: 'bg-soft-500'
        };
      default:
        return {
          bg: 'from-sage-50 to-sage-100',
          border: 'border-sage-200',
          icon: 'from-sage-500 to-sage-600',
          accent: 'bg-sage-500'
        };
    }
  };

  return (
    <section id="impact" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-sage-400 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-mint-400 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-soft-400 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-sage-100 to-mint-100 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Sparkles className="h-5 w-5 text-sage-600 mr-2 animate-pulse" />
            <span className="text-sage-800 font-medium">Measuring Success</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600">Impact</span>
          </h2>
          <p className="text-xl text-sage-700 max-w-4xl mx-auto leading-relaxed">
            Measuring success through increased confidence, creative output, and systemic awareness among the girls we serve.
          </p>
        </div>

        {/* Enhanced Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = getColorClasses(stat.color);
            const shapes = ['rounded-tl-3xl rounded-br-3xl', 'rounded-tr-3xl rounded-bl-3xl', 'rounded-2xl'];
            const shape = shapes[index % 3];
            
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colorClasses.bg} ${shape} p-8 text-center ${colorClasses.border} border-2 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Floating decorative element */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 ${colorClasses.accent} rounded-full opacity-20 group-hover:scale-150 transition-all duration-500`}></div>
                
                <div className={`bg-gradient-to-br ${colorClasses.icon} rounded-2xl p-4 w-20 h-20 mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <Icon className="h-12 w-12 text-white" />
                </div>
                <div className="text-4xl font-bold text-sage-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-sage-800 mb-3">
                  {stat.label}
                </div>
                <div className="text-sm text-sage-600 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Testimonials */}
        <div className="relative">
          {/* Curved background */}
          <div className="absolute inset-0 bg-gradient-to-r from-sage-50 via-mint-50 to-sage-50 rounded-[3rem] transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-sage-100 via-white to-mint-100 rounded-[3rem] p-12 lg:p-16 shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-sage-900 text-center mb-16">
              Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600">Transformation</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                const colorClasses = getColorClasses(testimonial.color);
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-8 border-2 ${colorClasses.border} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Quote decoration */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <svg className="h-12 w-12 text-sage-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    
                    <div className={`w-4 h-4 ${colorClasses.accent} rounded-full mb-6 group-hover:scale-150 transition-transform duration-300`}></div>
                    
                    <p className="text-sage-700 italic mb-8 leading-relaxed font-medium group-hover:text-sage-800 transition-colors">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-bold text-sage-900 text-lg mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-sage-600 font-medium">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-sage-600 via-mint-600 to-sage-600 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Make an Impact?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Join our community of young creators and changemakers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-sage-600 font-bold py-4 px-8 rounded-2xl hover:bg-cream-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Apply for Programs
                </button>
                <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-sage-600 transition-all duration-300 transform hover:scale-105">
                  Become a Mentor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
