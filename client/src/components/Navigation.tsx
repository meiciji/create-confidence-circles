import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#programs", label: "Programs" },
    { href: "/#impact", label: "Impact" },
    { href: "/our-team", label: "Our Team" },
    { href: "/the-zine", label: "The Zine" },
    { href: "/podcast", label: "Podcast" },
    { href: "/blog", label: "Blog" },
    { href: "/#get-involved", label: "Get Involved" },
    { href: "/#contact", label: "Contact" },
  ];

  const navigateToSection = (href) => {
    const [pathname, hash] = href.split("#");

    if (pathname === "/" || pathname === "") {
      setLocation("/");
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      setLocation("/");
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 border-b border-sage-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="Your Logo" className="h-20 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) =>
                item.href.startsWith("/#") ? (
                  <button
                    key={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      navigateToSection(item.href);
                    }}
                    className="text-sage-700 hover:text-sage-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sage-700 hover:text-sage-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Button className="bg-sage-600 hover:bg-sage-700 text-cream-100 ml-4">
                Book
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-sage-100 inline-flex items-center justify-center p-2 rounded-md text-sage-600 hover:text-sage-900 hover:bg-sage-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sage-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream-300 rounded-lg mt-2">
              {navItems.map((item) =>
                item.href.startsWith("/#") ? (
                  <button
                    key={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      navigateToSection(item.href);
                    }}
                    className="text-sage-700 hover:text-sage-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sage-700 hover:text-sage-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <a href="https://calendly.com/confidencethroughcreation/30min?month=2025-06">
                <Button className="bg-sage-600 hover:bg-sage-700 text-cream-100 w-full mt-4">
                  Book
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
