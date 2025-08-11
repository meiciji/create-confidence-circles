import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GetInvolved from "@/components/GetInvolved";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Get Involved - Confidence Through Creation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join our mission! Become a participant, mentor, volunteer, or supporter. Multiple ways to get involved with Confidence Through Creation and help empower girls through technology and creative arts.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default ContactPage;