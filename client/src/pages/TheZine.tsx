import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, User, Sparkles } from "lucide-react";

const TheZine = () => {
  const projects = [
    {
      title: "EdQuarium Mobile App",
      creator: "Mei, 16",
      description:
        "A mobile app that helps kids learn core subjects through mini games, interactive quizzes, and progress tracking in a fun underwater experience.",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "API Integration"],
      launchDate: "March 2025",
      impact: "2nd place at Georgia FBLA SLC",
      gradientFrom: "from-mint-300",
      gradientTo: "to-sage-300",
      image: "/fbla.png",
    },
    {
      title: "Kamal",
      creator: "Nanditha, 16",
      description:
        "An organization dedicated to promoting the education of the Hindi culture through childrens books.",
      category: "Nonprofit",
      technologies: ["HTML/CSS", "JavaScript", "Stripe API"],
      launchDate: "June 2025",
      impact: "",
      gradientFrom: "from-soft-300",
      gradientTo: "to-mint-300",
      image: "/kamal.png",
    },
    {
      title: "Mental Health Bot",
      creator: "Priya, 15",
      description:
        "A Discord bot that provides mental health resources, daily affirmations, and connects users with crisis hotlines when needed.",
      category: "AI/Chatbot",
      technologies: ["Python", "Discord.py", "Natural Language Processing"],
      launchDate: "February 2024",
      impact: "Used in 50+ Discord servers",
      gradientFrom: "from-sage-300",
      gradientTo: "to-soft-300",
    },
    {
      title: "Study Buddy Marketplace",
      creator: "Chen & Fatima, 16",
      description:
        "Platform connecting students for peer tutoring sessions with built-in video chat, scheduling, and payment processing.",
      category: "Full-Stack Platform",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      launchDate: "April 2024",
      impact: "200+ students connected",
      gradientFrom: "from-mint-400",
      gradientTo: "to-sage-400",
    },
    {
      title: "Community Garden Network",
      creator: "Isabella, 17",
      description:
        "Digital platform mapping local community gardens, sharing growing tips, and organizing neighborhood gardening events.",
      category: "Community Platform",
      technologies: ["Vue.js", "Google Maps API", "PWA"],
      launchDate: "May 2024",
      impact: "15 gardens registered, 100+ members",
      gradientFrom: "from-sage-400",
      gradientTo: "to-mint-300",
    },
    {
      title: "Coding Bootcamp for Kids",
      creator: "Zara, 16",
      description:
        "Online learning platform teaching basic programming to elementary school children through games and interactive exercises.",
      category: "EdTech",
      technologies: [
        "Scratch Integration",
        "Gamification",
        "Progress Tracking",
      ],
      launchDate: "June 2024",
      impact: "300+ kids enrolled",
      gradientFrom: "from-soft-400",
      gradientTo: "to-sage-300",
    },
  ];

  const categories = [
    "All",
    "Mobile Development",
    "Nonprofit",
    "AI/Chatbot",
    "Full-Stack Platform",
    "Community Platform",
    "EdTech",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-300 to-sage-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-sage-200">
              <Sparkles className="h-5 w-5 text-sage-600 mr-2" />
              <span className="text-sage-800 text-sm font-medium">
                Celebrating young innovators
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-900 mb-6">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600">
                Zine
              </span>
            </h1>

            <p className="text-xl text-sage-700 mb-8 max-w-3xl mx-auto">
              Showcasing the incredible projects and innovations launched by the
              girls in our programs. From apps that change communities to
              platforms that solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-sage-200 text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-sage-900 mb-2">25+</div>
                <div className="text-sage-600">Projects Launched</div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-sage-200 text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-sage-900 mb-2">
                  5,000+
                </div>
                <div className="text-sage-600">Lives Impacted</div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-sage-200 text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-sage-900 mb-2">15</div>
                <div className="text-sage-600">Awards Won</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`${
                  index === 0
                    ? "bg-sage-600 hover:bg-sage-700 text-white"
                    : "border-sage-300 text-sage-700 hover:bg-sage-50"
                } transition-all duration-200`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="h-48 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                    {index === 0 && project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="outline"
                        className="border-mint-300 text-mint-700 bg-mint-50"
                      >
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-sage-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.launchDate}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-sage-900 mb-2 group-hover:text-sage-700 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <div className="flex items-center text-sage-600 text-sm mb-3">
                      <User className="h-4 w-4 mr-1" />
                      Created by {project.creator}
                    </div>

                    <p className="text-sage-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-sm font-semibold text-sage-800 mb-2">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-sage-100 pt-4">
                      <div className="text-sm font-semibold text-sage-800 mb-1">
                        Impact:
                      </div>
                      <div className="text-sm text-sage-600 mb-3">
                        {project.impact}
                      </div>

                      <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-sage-200 shadow-xl">
            <CardContent className="p-12">
              <Sparkles className="h-12 w-12 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-sage-900 mb-4">
                Ready to Launch Your Project?
              </h2>
              <p className="text-lg text-sage-700 mb-8">
                Join our programs and turn your ideas into reality. Get
                mentorship, technical support, and the resources you need to
                make an impact in your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/confidencethroughcreation/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3">
                    Meet a Mentor
                  </Button>
                </a>

                <a href="/#programs">
                  <Button
                    variant="outline"
                    className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheZine;
