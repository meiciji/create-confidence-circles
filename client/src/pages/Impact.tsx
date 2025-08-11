import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";

const ImpactPage = () => {
  useEffect(() => {
    document.title = "Impact | Confidence Through Creation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'See the real impact of our programs empowering girls through technology and creative arts. Read success stories, view statistics, and learn how we\'re building confident future leaders.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Impact />
      <Footer />
    </div>
  );
};

export default ImpactPage;