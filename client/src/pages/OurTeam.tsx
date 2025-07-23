import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Star } from "lucide-react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Mei Tham",
      role: "Founder & Executive Director",
      bio: "Mei is a content creator on TikTok and a proponent for equality in STEM education. She founded Confidence through Creation to empower young girls through technology and creative arts.",
      image: "/MeiYing_Tham_Photo.jpg",
      gradientFrom: "from-sage-300",
      gradientTo: "to-mint-300",
    },
    {
      name: "Maria Rodriguez",
      role: "Program Director",
      bio: "Maria leads our educational programs with expertise in STEM education and community outreach. She holds a Master's in Education and is passionate about closing the gender gap in tech.",
      gradientFrom: "from-mint-300",
      gradientTo: "to-soft-300",
    },
    {
      name: "Dr. Jennifer Chen",
      role: "Technical Advisor",
      bio: "Dr. Chen brings her experience as a software engineer and computer science professor to guide our technical curriculum and mentor our participants.",
      gradientFrom: "from-soft-300",
      gradientTo: "to-sage-300",
    },
    {
      name: "Ashley Williams",
      role: "Community Outreach Coordinator",
      bio: "Ashley connects with schools and community organizations to expand our reach and ensure we're serving girls from all backgrounds and communities.",
      gradientFrom: "from-sage-400",
      gradientTo: "to-mint-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-300 to-sage-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-sage-200">
              <Users className="h-5 w-5 text-sage-600 mr-2" />
              <span className="text-sage-800 text-sm font-medium">
                Meet our dedicated team
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-900 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600">
                Team
              </span>
            </h1>

            <p className="text-xl text-sage-700 mb-8 max-w-3xl mx-auto">
              Passionate educators, mentors, and advocates working together to
              empower the next generation of female leaders through creativity
              and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    {member.image ? (
                      <div className="w-32 h-32 rounded-full mb-6 overflow-hidden shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-32 h-32 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-full mb-6 flex items-center justify-center shadow-lg`}>
                        <Users className="h-16 w-16 text-sage-600" />
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-sage-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-mint-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-sage-700 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="flex items-center mt-6 space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 text-mint-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-sage-200 shadow-xl">
            <CardContent className="p-12">
              <Heart className="h-12 w-12 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-sage-900 mb-6">
                Our Commitment
              </h2>
              <p className="text-lg text-sage-700 leading-relaxed">
                Together, we're dedicated to creating safe, inclusive spaces
                where young girls can explore technology, express their
                creativity, and build the confidence they need to become
                tomorrow's leaders. Every member of our team brings unique
                expertise and passion to this mission.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;
