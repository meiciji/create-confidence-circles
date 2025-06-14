
import { Mic, Users, BookOpen, Megaphone, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const programs = [
    {
      icon: Mic,
      title: "The Podcast & Newsletter",
      description: "Stories of teen girls and women in tech, business, and creation",
      features: [
        "\"The Messy Middle\" – honest stories of building confidence",
        "\"Policy Pulse\" – micro-spotlights on access gaps in education",
        "Goal: 1,000 monthly listeners/readers in Year 1"
      ],
      color: "sage"
    },
    {
      icon: Users,
      title: "Virtual Creation Circles",
      description: "4-week online cohorts for middle/high school girls",
      features: [
        "Virtual workshops (branding, building, storytelling)",
        "Create something meaningful (blog, prototype, zine, product idea)",
        "Present in virtual showcases with peer support",
        "Mentorship from teen/college volunteers"
      ],
      color: "mint"
    },
    {
      icon: BookOpen,
      title: "Digital Zine + Showcase",
      description: "Monthly publication featuring girls' creative work",
      features: [
        "Girls' creative work and stories",
        "Resource spotlights and \"Confidence Reflections\"",
        "Annual online Showcase Week with guest speakers",
        "Recognition and celebration of achievements"
      ],
      color: "soft"
    },
    {
      icon: Megaphone,
      title: "Policy + Access Advocacy",
      description: "Connecting creation with systemic change",
      features: [
        "Focus on digital divide and girls in STEM",
        "Real-world stats and actionable campaigns",
        "Title I school funding advocacy",
        "Culturally responsive curricula promotion"
      ],
      color: "sage"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'sage':
        return {
          bg: 'bg-sage-50',
          border: 'border-sage-200',
          icon: 'text-sage-600',
          title: 'text-sage-900'
        };
      case 'mint':
        return {
          bg: 'bg-mint-50',
          border: 'border-mint-200',
          icon: 'text-mint-600',
          title: 'text-mint-900'
        };
      case 'soft':
        return {
          bg: 'bg-soft-50',
          border: 'border-soft-200',
          icon: 'text-soft-600',
          title: 'text-soft-900'
        };
      default:
        return {
          bg: 'bg-sage-50',
          border: 'border-sage-200',
          icon: 'text-sage-600',
          title: 'text-sage-900'
        };
    }
  };

  return (
    <section id="programs" className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Comprehensive programming that builds confidence through hands-on creation, community support, and advocacy for systemic change.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const colorClasses = getColorClasses(program.color);
            const Icon = program.icon;
            
            return (
              <div
                key={index}
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start mb-6">
                  <div className={`${colorClasses.icon} bg-white rounded-lg p-3 mr-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${colorClasses.title} mb-2`}>
                      {program.title}
                    </h3>
                    <p className="text-sage-700 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`${colorClasses.icon} mt-1 mr-3`}>
                        <div className="h-2 w-2 bg-current rounded-full"></div>
                      </div>
                      <span className="text-sage-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Components */}
        <div className="bg-white rounded-xl p-8 border border-sage-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-sage-600 mr-3" />
                <h3 className="text-xl font-bold text-sage-900">
                  Volunteer + Youth Leadership Team
                </h3>
              </div>
              <ul className="space-y-2 text-sage-700">
                <li>• ~15 high school/college student leaders</li>
                <li>• Interview scouts and editors (podcast/audio, blog/newsletter)</li>
                <li>• Zine designers and peer mentors for cohorts</li>
                <li>• Monthly leadership meetings and training</li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-sage-600 mr-3" />
                <h3 className="text-xl font-bold text-sage-900">
                  Partnerships & Collaborations
                </h3>
              </div>
              <ul className="space-y-2 text-sage-700">
                <li>• Partner with nonprofits like She's the First, Girls Who Code</li>
                <li>• Collaborate with schools and teachers</li>
                <li>• Work with local government & school boards</li>
                <li>• Joint events and resource sharing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-cream-100 px-8 py-3">
            Apply to Join a Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
