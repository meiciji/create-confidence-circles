import {
  Mic,
  Users,
  BookOpen,
  Megaphone,
  Calendar,
  Award,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const programs = [
    {
      icon: Mic,
      title: "The Podcast",
      description:
        "Stories of teen girls and women in tech, business, and creation",
      features: [
        '"The Confident Creator" – honest stories of building confidence',
        "From leaders in technology to female content creators, we want to share examples of how anything is possible.",
      ],
      color: "sage",
      shape: "rounded-tl-3xl rounded-br-3xl",
    },
    {
      icon: Users,
      title: "1:1 Mentorship Program",
      description:
        "FREE calls where anyone with an idea or existing project can talk to a mentor",
      features: [
        "Brainstorming and ideation workshops",
        "Create something meaningful (blog, prototype, zine, product idea",
        "Join community of successful mentees/female founders",
        "Marketing and growth strategies for REAL IMPACT",
      ],
      color: "mint",
      shape: "rounded-tr-3xl rounded-bl-3xl",
    },
    {
      icon: BookOpen,
      title: "Digital Showcase",
      description: "Monthly publication featuring girls' creative work",
      features: [
        "Girls' creative work and stories",
        'Resource spotlights and "Confidence Reflections"',
        "Annual online Showcase Week with guest speakers",
        "Recognition and celebration of achievements",
      ],
      color: "soft",
      shape: "rounded-tl-3xl rounded-br-3xl",
    },
    {
      icon: Megaphone,
      title: "Resource & Curriculum Empowerment",
      description: "Connecting creation with education systems",
      features: [
        "Equipping girls the support and knowledge to start something of their own",
        "Advocacy and resources for individuals, clubs, and more",
        "Culturally responsive curricula promotion",
      ],
      color: "sage",
      shape: "rounded-tr-3xl rounded-bl-3xl",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "sage":
        return {
          bg: "bg-gradient-to-br from-sage-50 to-sage-100",
          border: "border-sage-300",
          icon: "from-sage-500 to-sage-600",
          iconText: "text-white",
          title: "text-sage-900",
          accent: "bg-sage-500",
        };
      case "mint":
        return {
          bg: "bg-gradient-to-br from-mint-50 to-mint-100",
          border: "border-mint-300",
          icon: "from-mint-500 to-mint-600",
          iconText: "text-white",
          title: "text-mint-900",
          accent: "bg-mint-500",
        };
      case "soft":
        return {
          bg: "bg-gradient-to-br from-soft-50 to-soft-100",
          border: "border-soft-300",
          icon: "from-soft-500 to-soft-600",
          iconText: "text-white",
          title: "text-soft-900",
          accent: "bg-soft-500",
        };
      default:
        return {
          bg: "bg-gradient-to-br from-sage-50 to-sage-100",
          border: "border-sage-300",
          icon: "from-sage-500 to-sage-600",
          iconText: "text-white",
          title: "text-sage-900",
          accent: "bg-sage-500",
        };
    }
  };

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-br from-cream-100 via-cream-200 to-sage-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-sage-400 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 bg-mint-400 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-soft-400 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 mb-6 shadow-lg">
            <Star className="h-5 w-5 text-sage-600 mr-2 animate-pulse" />
            <span className="text-sage-800 font-medium">Our Programs</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600">
              Comprehensive
            </span>{" "}
            Programming
          </h2>
          <p className="text-xl text-sage-700 max-w-4xl mx-auto leading-relaxed">
            Building confidence through hands-on creation, community support,
            and advocacy for systemic change.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {programs.map((program, index) => {
            const colorClasses = getColorClasses(program.color);
            const Icon = program.icon;

            return (
              <div
                key={index}
                className={`${colorClasses.bg} ${colorClasses.border} ${program.shape} border-2 p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 ${colorClasses.accent} opacity-10 rounded-bl-3xl`}
                ></div>

                <div className="flex items-start mb-6">
                  <div
                    className={`bg-gradient-to-br ${colorClasses.icon} rounded-2xl p-4 mr-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <Icon className={`h-8 w-8 ${colorClasses.iconText}`} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold ${colorClasses.title} mb-3 group-hover:text-opacity-80 transition-all`}
                    >
                      {program.title}
                    </h3>
                    <p className="text-sage-700 leading-relaxed font-medium">
                      {program.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {program.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                    >
                      <div
                        className={`${colorClasses.accent} rounded-full p-1 mt-2 mr-4 flex-shrink-0`}
                      >
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sage-700 text-sm leading-relaxed font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
