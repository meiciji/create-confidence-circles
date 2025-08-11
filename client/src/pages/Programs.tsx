import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Programs from "@/components/Programs";

const ProgramsPage = () => {
  useEffect(() => {
    document.title = "Our Programs - Confidence Through Creation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our empowering programs for girls including digital creation workshops, mentorship opportunities, and technology education. Learn coding, design, and leadership skills in a supportive community.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Programs />
      <Footer />
    </div>
  );
};

export default ProgramsPage;