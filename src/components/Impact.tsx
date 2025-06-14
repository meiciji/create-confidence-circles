
import { TrendingUp, Heart, Users, Target, Award, Globe } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Girls Empowered",
      description: "Across all our programs and initiatives"
    },
    {
      icon: Target,
      number: "12",
      label: "Cohorts Completed",
      description: "Virtual Creation Circles with measurable outcomes"
    },
    {
      icon: Heart,
      number: "95%",
      label: "Confidence Increase",
      description: "Participants report increased self-confidence"
    },
    {
      icon: Award,
      number: "200+",
      label: "Projects Created",
      description: "From blogs to prototypes to business ideas"
    },
    {
      icon: Globe,
      number: "25",
      label: "States Reached",
      description: "Virtual programming enables nationwide impact"
    },
    {
      icon: TrendingUp,
      number: "1000+",
      label: "Monthly Readers",
      description: "Engaged audience for podcast and newsletter"
    }
  ];

  const testimonials = [
    {
      quote: "CTC helped me realize that my voice matters and that I can create change through technology. I went from being afraid to speak up to leading my school's coding club.",
      name: "Maria S.",
      role: "Creation Circle Graduate, Age 16"
    },
    {
      quote: "The mentorship and community I found here gave me the confidence to apply for a summer internship at a tech startup. I got it!",
      name: "Aisha T.", 
      role: "Podcast Guest & Volunteer Mentor, Age 17"
    },
    {
      quote: "I never thought I could be an entrepreneur until CTC showed me that business isn't just for certain types of people. Now I'm launching my own sustainable fashion line.",
      name: "Jennifer L.",
      role: "Digital Zine Contributor, Age 15"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Measuring success through increased confidence, creative output, and systemic awareness among the girls we serve.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-sage-50 to-mint-50 rounded-xl p-6 text-center border border-sage-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-white rounded-lg p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-sage-600" />
                </div>
                <div className="text-3xl font-bold text-sage-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-sage-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-sage-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="bg-sage-50 rounded-xl p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-sage-900 text-center mb-12">
            Stories of Transformation
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-sage-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  <svg className="h-8 w-8 text-sage-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-sage-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-sage-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-sage-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sage-600 to-mint-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join our community of young creators and changemakers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sage-600 font-semibold py-3 px-6 rounded-lg hover:bg-cream-100 transition-colors">
                Apply for Programs
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-sage-600 transition-colors">
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
