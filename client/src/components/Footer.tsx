import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Programs", href: "/#programs" },
    { label: "Impact", href: "/#impact" },
    { label: "Get Involved", href: "/#get-involved" },
    { label: "Contact", href: "/#contact" },
  ];

  const programs = [
    { label: "Creation Circles", href: "/#programs" },
    { label: "Podcast & Newsletter", href: "/#programs" },
    { label: "Digital Zine", href: "/#programs" },
    { label: "Youth Leadership", href: "/#get-involved" },
    { label: "Mentorship", href: "/#get-involved" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/confidencethroughcreation/",
      label: "Instagram",
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer id="contact" className="bg-sage-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              Confidence through Creation
            </h3>
            <p className="text-cream-200 leading-relaxed mb-6">
              Empowering girls from underrepresented communities to build
              self-worth and leadership through digital creation, tech, art,
              business, and media.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-sage-800 p-2 rounded-lg hover:bg-sage-700 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream-200 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-cream-200 hover:text-cream-100 transition-colors"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-sage-400" />
                <span className="text-cream-200">
                  confidencethroughcreation@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-sage-400" />
                <span className="text-cream-200">(404) 312-1515</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-sage-400 mt-1" />
                <span className="text-cream-200">
                  Serving communities nationwide
                  <br />
                  through virtual programming
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-sage-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-cream-200 mb-4">
              Get updates on our programs, impact stories, and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-sage-800 border border-sage-700 text-cream-100 placeholder-cream-300 focus:outline-none focus:border-sage-500"
              />
              <button className="bg-mint-600 hover:bg-mint-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sage-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-cream-300 text-sm mb-4 sm:mb-0">
            © 2025 Confidence through Creation. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-cream-300 hover:text-cream-100 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-cream-300 hover:text-cream-100 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-cream-300 hover:text-cream-100 transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
