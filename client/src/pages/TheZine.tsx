import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, User, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const TheZine = () => {
  useEffect(() => {
    document.title = "Project Showcase | Confidence Through Creation";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover inspiring technology projects created by young women in our community. From mobile apps to AI chatbots and nonprofit platforms, see how girls are changing the world through creation.",
      );
    }
  }, []);

  const projects = [
    {
      title: "EdQuarium Mobile App",
      creator: "Mei, 16",
      description:
        "A mobile app that helps kids learn core subjects through mini games, interactive quizzes, and progress tracking in a fun underwater experience.",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "API Integration"],
      launchDate: "March 2025",
      impact: "5th Place FBLA Nationals 2025, 2nd place at Georgia FBLA SLC",
      gradientFrom: "from-mint-300",
      gradientTo: "to-sage-300",
      image: "/fbla.png",
      link: "https://github.com/meiciji/edquarium",
    },
    {
      title: "Financial Boost",
      creator: "Priya, 17",
      description:
        "An organization dedicated to hosting workshops about personal finance, financial literacy, and how to secure your money for immigrant families.",
      category: "Nonprofit",
      technologies: [
        "Workshop Facilitation",
        "Financial Education",
        "Community Building",
      ],
      launchDate: "July 2025",
      impact: "Empowering immigrant families with financial literacy",
      gradientFrom: "from-sage-300",
      gradientTo: "to-soft-300",
      image: "/financial.png",
      link: "https://www.financialboost.org",
    },
    {
      title: "Dreams to Business Hungary",
      creator: "Viktória, 16",
      description:
        "At Dreams to Business, we teach underprivileged children essential business skills through creative workshops, fairs, and resources.",
      category: "Nonprofit",
      technologies: [
        "Business Education",
        "Workshop Design",
        "Youth Mentoring",
      ],
      launchDate: "July 2025",
      impact: "Teaching business skills to underprivileged children",
      gradientFrom: "from-mint-400",
      gradientTo: "to-sage-400",
      image: "/dtb.png",
      link: "https://www.instagram.com/dtb.hungary/",
    },
    {
      title: "Steminist Study Hub",
      creator: "Oreoluwa, 17",
      description:
        "Platform for women in STEM with access to study materials, resources, and mentors.",
      category: "Community Platform",
      technologies: [
        "Platform Development",
        "Resource Curation",
        "Mentorship Matching",
      ],
      launchDate: "May 2025",
      impact: "Supporting women in STEM education and careers",
      gradientFrom: "from-sage-400",
      gradientTo: "to-mint-300",
      image: "/steminist.png",
      link: "https://www.steminststudyhub.com",
    },
    {
      title: "NeuroRest",
      creator: "Ivy, 16",
      description:
        "Platform addressing the increasing prevalence of burn-out in teens caused by issues like constant pressure from college admissions and juggling multiple commitments.",
      category: "Mobile Development",
      technologies: [
        "Student-led Research",
        "Mental Health",
        "Neuroscience Project",
      ],
      launchDate: "August 2025",
      impact:
        "Helping young people redefine how they rest and recover through research-based techniques.",
      gradientFrom: "from-mint-400",
      gradientTo: "to-sage-400",
      image: "/neurorest.png",
      link: "https://www.instagram.com/neuro_rest/",
    },
    {
      title: "Las Cincos Hermanas",
      creator: "Mia, 16",
      description:
        "NYC Community initiative to educate elementary schools on the importance of recycling and environmental problems.",
      category: "Nonprofit",
      technologies: [
        "Community Outreach",
        "Education",
        "Environmental Awareness",
      ],
      launchDate: "August 2025",
      impact:
        "Teaching elementary school students about environmental issues and ways to prevent them from worsening.",
      gradientFrom: "from-mint-400",
      gradientTo: "to-sage-400",
      image: "/cincos_hermanas.png",
      link: "",
    },
    {
      title: "Healing Hearts",
      creator: "Crystal, 16",
      description:
        "Bringing light and smiles to kids going through cancer through regular volunteer initiatives, so they know they’re not alone.",
      category: "Nonprofit",
      technologies: ["Community Outreach", "Volunteering", "Social Work"],
      launchDate: "August 2025",
      impact: "Offers comfort and hope to children facing illness.",
      gradientFrom: "from-mint-400",
      gradientTo: "to-sage-400",
      image: "/healing_hearts.png",
      link: "https://www.instagram.com/heal.inghearts1/",
    },
    {
      title: "",
      creator: "Shrividya, 17",
      description:
        "Educating youth and encouraging them to pursue STEM and wellness.",
      category: "EdTech",
      technologies: ["Education", "Resource Curation"],
      launchDate: "August 2025",
      impact:
        "Provides educational materials (books, board games) for elementary and middle school students.",
      gradientFrom: "from-mint-400",
      gradientTo: "to-sage-400",
      image: "/shrividya_stem.png",
      link: "https://drive.google.com/file/d/1Awb8rHqUT6rqs4g2L_NembpoMFZ3bLI1/view?usp=sharing",
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

  //category filter functionality
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filter, setFilter] = useState("All");

  const handleBtns = (e: React.MouseEvent<HTMLButtonElement>) => {
    let btnValue = (e.target as HTMLButtonElement).value;
    setFilter(btnValue);
  };

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === filter,
      );
      setFilteredProjects(filtered);
    }
  }, [filter]);

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
              Project{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600">
                Showcase
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
                onClick={handleBtns}
                value={category}
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
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover z-10"
                        onError={(e) => {
                          console.error(
                            `Failed to load image: ${project.image}`,
                            e,
                          );
                          e.currentTarget.style.display = "none";
                        }}
                        onLoad={() => {
                          console.log(
                            `Successfully loaded image: ${project.image}`,
                          );
                        }}
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} z-0`}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/10 z-20" />
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

                    {project.technologies && (
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
                    )}

                    <div className="border-t border-sage-100 pt-4">
                      <div className="text-sm font-semibold text-sage-800 mb-1">
                        Impact:
                      </div>
                      <div className="text-sm text-sage-600 mb-3">
                        {project.impact}
                      </div>

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </Button>
                        </a>
                      ) : (
                        <Button
                          className="w-full bg-sage-400 cursor-not-allowed text-white"
                          disabled
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Coming Soon
                        </Button>
                      )}
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
