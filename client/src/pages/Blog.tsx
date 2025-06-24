import Navigation from "@/components/Navigation";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "Empowering Young Women in STEM: Our Journey So Far",
      excerpt:
        "Reflecting on the incredible growth and achievements of our participants over the past year, and the impact of hands-on learning in technology education.",
      author: "Sarah Johnson",
      date: "December 10, 2024",
      category: "Impact Stories",
      readTime: "5 min read",
      url: "https://medium.com/@confidencethroughcreation",
    },
    {
      title: "Building Confidence Through Creative Coding",
      excerpt:
        "How our innovative approach to teaching programming through art and storytelling is helping girls discover their potential in technology.",
      author: "Maria Rodriguez",
      date: "November 28, 2024",
      category: "Education",
      readTime: "7 min read",
      url: "https://medium.com/@confidencethroughcreation",
    },
    {
      title: "Community Partnerships: Expanding Our Reach",
      excerpt:
        "Announcing new collaborations with local schools and organizations to bring our programs to more underrepresented communities.",
      author: "Ashley Williams",
      date: "November 15, 2024",
      category: "Community",
      readTime: "4 min read",
      url: "https://medium.com/@confidencethroughcreation",
    },
    {
      title: "The Importance of Mentorship in Tech Education",
      excerpt:
        "Why having role models and mentors is crucial for young women entering STEM fields, and how our mentorship program is making a difference.",
      author: "Dr. Jennifer Chen",
      date: "October 30, 2024",
      category: "Mentorship",
      readTime: "6 min read",
      url: "https://medium.com/@confidencethroughcreation",
    },
    {
      title: "Celebrating Student Achievements: Fall Showcase Highlights",
      excerpt:
        "A recap of our recent student showcase, featuring incredible projects from web applications to digital art installations created by our participants.",
      author: "Sarah Johnson",
      date: "October 15, 2024",
      category: "Events",
      readTime: "8 min read",
      url: "https://medium.com/@confidencethroughcreation",
    },
    {
      title: "Breaking Barriers: Addressing the Gender Gap in Technology",
      excerpt:
        "Exploring the systemic challenges that keep young women out of tech careers and how grassroots education programs can create lasting change.",
      author: "Maria Rodriguez",
      date: "September 28, 2024",
      category: "Research",
      readTime: "10 min read",
      url: "https://medium.com/@confidencethroughcreation",
    },
  ];

  const categories = [
    "All",
    "Impact Stories",
    "Education",
    "Community",
    "Mentorship",
    "Events",
    "Research",
  ];

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-300 to-sage-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-sage-200">
              <BookOpen className="h-5 w-5 text-sage-600 mr-2" />
              <span className="text-sage-800 text-sm font-medium">
                Stories, insights, and updates
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-900 mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600">
                Blog
              </span>
            </h1>

            <p className="text-xl text-sage-700 mb-8 max-w-3xl mx-auto">
              Stay updated with our latest news, success stories, and insights
              from the world of youth empowerment and technology education.
            </p>
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
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-sage-600 hover:bg-sage-700 text-white"
                    : "border-sage-300 text-sage-700 hover:bg-sage-50"
                } transition-all duration-200`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={index}
                onClick={() => window.open(post.url, "_blank")}
                className="bg-white/90 backdrop-blur-sm border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-sage-200 to-mint-200 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-sage-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-mint-100 text-mint-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sage-500 text-sm">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-sage-900 mb-3 group-hover:text-sage-700 transition-colors duration-200">
                      {post.title}
                    </h3>

                    <p className="text-sage-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-sage-100">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center text-sage-500 text-sm">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center text-sage-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                      </div>

                      <ArrowRight className="h-5 w-5 text-sage-400 group-hover:text-sage-600 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
