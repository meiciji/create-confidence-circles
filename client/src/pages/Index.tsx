
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Confidence Through Creation - Empowering Girls Through Digital Creation & Technology";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join Confidence Through Creation, a nonprofit empowering girls from underrepresented communities through digital creation, technology, and creative arts programs. Build confidence through hands-on learning.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Mission />
      <Footer />
    </div>
  );
};

export default Index;
