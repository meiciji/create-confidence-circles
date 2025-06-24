import { Users, Heart, Mic, HandHeart, DollarSign, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Join as a Participant",
      description:
        "Book a call with one of our mentors to help you start our program to confidence.",
      action: (
        <Button className="bg-sage-600 hover:bg-sage-700 text-white">
          <a
            href="https://calendly.com/confidencethroughcreation/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            Apply Now
          </a>
        </Button>
      ),
      color: "sage",
      eligibility: "Middle & High School Girls",
    },
    {
      icon: Heart,
      title: "Become a Mentor",
      description:
        "Guide younger girls through their creative journey and share your expertise",
      action: (
        <Button className="bg-mint text-white">
          <a
            href="https://tally.so/r/31zda4"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            Mentor Application
          </a>
        </Button>
      ),
      color: "mint",
      eligibility: "High School & College Students",
    },
    {
      icon: Mic,
      title: "Internship Opportunities",
      description:
        "Join our core team of ~15 student leaders helping run programs and create content",
      action: (
        <Button className="bg-soft text-white">
          <a
            href="https://form.typeform.com/to/zjHidOgm"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            Leadership Application
          </a>
        </Button>
      ),
      color: "soft",
      eligibility: "High School & College Students",
    },
    {
      icon: HandHeart,
      title: "Adult Volunteer",
      description:
        "Support our mission through skill-based volunteering, event support, or advisory roles",
      action: "Volunteer Sign-Up",
      color: "sage",
      eligibility: "Adults & Professionals",
    },
    {
      icon: DollarSign,
      title: "Financial Support",
      description:
        "Help us provide free programming and resources to girls from all backgrounds",
      action: "Donate",
      color: "mint",
      eligibility: "Anyone Who Believes in Our Mission",
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description:
        "Share our content, recommend girls for programs, or connect us with potential partners",
      action: (
        <Button className="bg-mint text-white">
          <a
            href="https://www.instagram.com/confidencethroughcreation/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            Share & Connect
          </a>
        </Button>
      ),
      color: "soft",
      eligibility: "Everyone",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "sage":
        return {
          bg: "bg-sage-100",
          border: "border-sage-300",
          icon: "text-sage-600",
          button: "bg-sage-600 hover:bg-sage-700",
        };
      case "mint":
        return {
          bg: "bg-mint-100",
          border: "border-mint-300",
          icon: "text-mint-600",
          button: "bg-mint-600 hover:bg-mint-700",
        };
      case "soft":
        return {
          bg: "bg-soft-100",
          border: "border-soft-300",
          icon: "text-soft-600",
          button: "bg-soft-600 hover:bg-soft-700",
        };
      default:
        return {
          bg: "bg-sage-100",
          border: "border-sage-300",
          icon: "text-sage-600",
          button: "bg-sage-600 hover:bg-sage-700",
        };
    }
  };

  return (
    <section
      id="get-involved"
      className="py-20 bg-gradient-to-br from-cream-200 to-sage-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            There are many ways to join our community and support our mission of
            empowering girls through creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            const colorClasses = getColorClasses(opportunity.color);

            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border-2 ${colorClasses.border} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div
                  className={`${colorClasses.bg} rounded-lg p-3 w-16 h-16 flex items-center justify-center mb-4`}
                >
                  <Icon className={`h-8 w-8 ${colorClasses.icon}`} />
                </div>

                <h3 className="text-xl font-bold text-sage-900 mb-3">
                  {opportunity.title}
                </h3>

                <p className="text-sage-700 leading-relaxed mb-4">
                  {opportunity.description}
                </p>

                <div className="mb-4">
                  <span className="text-sm font-medium text-sage-600 bg-sage-50 px-3 py-1 rounded-full">
                    {opportunity.eligibility}
                  </span>
                </div>

                <Button className={`w-full text-white ${colorClasses.button}`}>
                  {opportunity.action}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Partnership Opportunities */}
        <div className="bg-white rounded-xl p-8 border border-sage-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-sage-900 mb-4">
              Partnership Opportunities
            </h3>
            <p className="text-sage-700 max-w-3xl mx-auto">
              We're always looking for organizations that share our values and
              want to expand opportunities for girls in creation and leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-sage-100 rounded-lg p-4 mb-3">
                <h4 className="font-semibold text-sage-900">Nonprofits</h4>
              </div>
              <p className="text-sm text-sage-600">
                She's the First, Girls Who Code, Technovation Girls
              </p>
            </div>

            <div className="text-center">
              <div className="bg-mint-100 rounded-lg p-4 mb-3">
                <h4 className="font-semibold text-sage-900">Schools</h4>
              </div>
              <p className="text-sm text-sage-600">
                Teachers, counselors, and administrators
              </p>
            </div>

            <div className="text-center">
              <div className="bg-soft-100 rounded-lg p-4 mb-3">
                <h4 className="font-semibold text-sage-900">Government</h4>
              </div>
              <p className="text-sm text-sage-600">
                Local government and school boards
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sage-100 rounded-lg p-4 mb-3">
                <h4 className="font-semibold text-sage-900">Corporate</h4>
              </div>
              <p className="text-sm text-sage-600">
                Sponsorships and skill-based volunteering
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3"
            >
              Partnership Inquiries: confidencethroughcreation@gmail.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
