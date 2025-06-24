import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Pause,
  Calendar,
  Clock,
  Download,
  Share2,
  Mic,
  Headphones,
  Users,
} from "lucide-react";
import { useState } from "react";

const Podcast = () => {
  const [playingEpisode, setPlayingEpisode] = useState<number | null>(null);

  const episodes = [
    {
      id: 1,
      title: "Breaking Barriers: Girls in Tech Leadership",
      description:
        "A powerful conversation with three young women who started their own tech companies before turning 20. We explore their journeys, challenges, and advice for the next generation.",
      host: "Sarah Chen",
      guest: "Maya Patel, Zoe Williams, Alex Rodriguez",
      duration: "42 min",
      publishDate: "December 15, 2024",
      category: "Leadership",
      plays: "2.3k",
      audioUrl: "#",
      transcript: true,
      featured: true,
    },
    {
      id: 2,
      title: "From Idea to App Store: A Teen Developer's Journey",
      description:
        "Follow Aisha's incredible story of building and launching her environmental app that now has over 10,000 downloads. Learn about the technical challenges and business lessons.",
      host: "Maria Santos",
      guest: "Aisha Johnson",
      duration: "35 min",
      publishDate: "December 8, 2024",
      category: "Success Stories",
      plays: "1.8k",
      audioUrl: "#",
      transcript: true,
      featured: false,
    },
    {
      id: 3,
      title: "AI Ethics and Young Voices",
      description:
        "Our youngest guests yet discuss their research on AI bias and how they're working to make artificial intelligence more inclusive and representative.",
      host: "Dr. Jennifer Liu",
      guest: "Priya Singh, Emma Thompson",
      duration: "38 min",
      publishDate: "December 1, 2024",
      category: "Tech Talk",
      plays: "1.5k",
      audioUrl: "#",
      transcript: true,
      featured: false,
    },
    {
      id: 4,
      title: "Building Community Through Code",
      description:
        "How our program alumni are creating coding clubs and tech meetups in their communities, spreading digital literacy and confidence to other girls.",
      host: "Sarah Chen",
      guest: "Various Alumni",
      duration: "29 min",
      publishDate: "November 24, 2024",
      category: "Community",
      plays: "1.2k",
      audioUrl: "#",
      transcript: true,
      featured: false,
    },
    {
      id: 5,
      title: "Overcoming Imposter Syndrome in STEM",
      description:
        "An honest discussion about self-doubt, confidence building, and the strategies that help young women thrive in technical environments.",
      host: "Dr. Jennifer Liu",
      guest: "Panel Discussion",
      duration: "45 min",
      publishDate: "November 17, 2024",
      category: "Mental Health",
      plays: "2.1k",
      audioUrl: "#",
      transcript: true,
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Leadership",
    "Success Stories",
    "Tech Talk",
    "Community",
    "Mental Health",
    "Family",
  ];
  const hosts = [
    {
      name: "Mei Tham",
      role: "Program Director",
      bio: "Founder, TikTok creator, and advocate for girls confidence",
    },
    {
      name: "Maria Santos",
      role: "Community Manager",
      bio: "Educator and advocate for underrepresented communities in STEM",
    },
    {
      name: "Dr. Jennifer Liu",
      role: "Tech Ethics Researcher",
      bio: "PhD in Computer Science, specializing in AI ethics and bias",
    },
  ];

  const togglePlay = (episodeId: number) => {
    setPlayingEpisode(playingEpisode === episodeId ? null : episodeId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-300 to-sage-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-sage-200">
              <Mic className="h-5 w-5 text-sage-600 mr-2" />
              <span className="text-sage-800 text-sm font-medium">
                Stories that inspire change
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-900 mb-6">
              Confidence{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-mint-600">
                Conversations
              </span>
            </h1>

            <p className="text-xl text-sage-700 mb-8 max-w-3xl mx-auto">
              Our podcast features inspiring conversations with young women
              breaking barriers in technology, sharing their journeys,
              challenges, and victories in creating a more inclusive digital
              world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3">
                <Headphones className="h-5 w-5 mr-2" />
                Listen on Spotify
              </Button>
              <Button
                variant="outline"
                className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3"
              >
                <Download className="h-5 w-5 mr-2" />
                Subscribe on Apple Podcasts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm border-sage-200 text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-sage-900 mb-1">25+</div>
                <div className="text-sage-600 text-sm">Episodes</div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-sage-200 text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-sage-900 mb-1">
                  50k+
                </div>
                <div className="text-sage-600 text-sm">Monthly Listeners</div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-sage-200 text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-sage-900 mb-1">
                  100+
                </div>
                <div className="text-sage-600 text-sm">Featured Guests</div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border-sage-200 text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-sage-900 mb-1">
                  4.8★
                </div>
                <div className="text-sage-600 text-sm">Average Rating</div>
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

      {/* Featured Episode */}
      {episodes
        .filter((ep) => ep.featured)
        .map((episode) => (
          <section key={episode.id} className="pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="bg-mint-100 text-mint-800 border-mint-300 mb-4">
                  Featured Episode
                </Badge>
                <h2 className="text-2xl font-bold text-sage-900">
                  Latest Episode
                </h2>
              </div>

              <Card className="bg-white/90 backdrop-blur-sm border-sage-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge
                          variant="outline"
                          className="border-sage-300 text-sage-700"
                        >
                          {episode.category}
                        </Badge>
                        <div className="flex items-center text-sage-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {episode.publishDate}
                        </div>
                        <div className="flex items-center text-sage-500 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {episode.duration}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-sage-900 mb-3">
                        {episode.title}
                      </h3>
                      <p className="text-sage-600 mb-4">
                        {episode.description}
                      </p>

                      <div className="text-sm text-sage-600 mb-4">
                        <strong>Host:</strong> {episode.host} •{" "}
                        <strong>Guest:</strong> {episode.guest}
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          onClick={() => togglePlay(episode.id)}
                          className="bg-sage-600 hover:bg-sage-700 text-white"
                        >
                          {playingEpisode === episode.id ? (
                            <Pause className="h-4 w-4 mr-2" />
                          ) : (
                            <Play className="h-4 w-4 mr-2" />
                          )}
                          {playingEpisode === episode.id ? "Pause" : "Play"}
                        </Button>
                        <Button
                          variant="outline"
                          className="border-sage-300 text-sage-700"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button
                          variant="outline"
                          className="border-sage-300 text-sage-700"
                        >
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-sage-300 to-mint-300 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Mic className="h-16 w-16 text-sage-700 mx-auto mb-4" />
                        <div className="text-sage-700 font-semibold">
                          Episode {episode.id}
                        </div>
                        <div className="text-sage-600 text-sm">
                          {episode.plays} plays
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        ))}

      {/* All Episodes */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-sage-900 mb-8 text-center">
            All Episodes
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {episodes
              .filter((ep) => !ep.featured)
              .map((episode, index) => (
                <Card
                  key={episode.id}
                  className="bg-white/90 backdrop-blur-sm border-sage-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-sage-300 to-mint-300 rounded-lg w-20 h-20 flex items-center justify-center flex-shrink-0">
                        <Mic className="h-8 w-8 text-sage-700" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge
                            variant="outline"
                            className="border-sage-300 text-sage-700 text-xs"
                          >
                            {episode.category}
                          </Badge>
                          <div className="flex items-center text-sage-500 text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {episode.duration}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-sage-900 mb-2 line-clamp-2">
                          {episode.title}
                        </h3>
                        <p className="text-sage-600 text-sm mb-3 line-clamp-2">
                          {episode.description}
                        </p>

                        <div className="text-xs text-sage-500 mb-3">
                          <div>
                            <strong>Host:</strong> {episode.host}
                          </div>
                          <div>
                            <strong>Guest:</strong> {episode.guest}
                          </div>
                          <div className="flex items-center mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            {episode.publishDate} • {episode.plays} plays
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            onClick={() => togglePlay(episode.id)}
                            className="bg-sage-600 hover:bg-sage-700 text-white text-xs px-3 py-1"
                          >
                            {playingEpisode === episode.id ? (
                              <Pause className="h-3 w-3 mr-1" />
                            ) : (
                              <Play className="h-3 w-3 mr-1" />
                            )}
                            {playingEpisode === episode.id ? "Pause" : "Play"}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-sage-300 text-sage-700 text-xs px-3 py-1"
                          >
                            <Share2 className="h-3 w-3 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Hosts Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-sage-900 mb-8 text-center">
            Meet Our Hosts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hosts.map((host, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-sage-200 text-center"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-sage-300 to-mint-300 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-sage-700" />
                  </div>
                  <h3 className="text-xl font-bold text-sage-900 mb-2">
                    {host.name}
                  </h3>
                  <div className="text-sage-600 text-sm mb-3">{host.role}</div>
                  <p className="text-sage-600 text-sm">{host.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-sage-200 shadow-xl">
            <CardContent className="p-12">
              <Headphones className="h-12 w-12 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-sage-900 mb-4">
                Never Miss an Episode
              </h2>
              <p className="text-lg text-sage-700 mb-8">
                Subscribe to Confidence Conversations and get notified when new
                episodes drop. Join thousands of listeners who are inspired by
                stories of young women changing the world through technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3">
                  <Headphones className="h-5 w-5 mr-2" />
                  Subscribe on Spotify
                </Button>
                <Button
                  variant="outline"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Apple Podcasts
                </Button>
                <Button
                  variant="outline"
                  className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3"
                >
                  RSS Feed
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Podcast;
