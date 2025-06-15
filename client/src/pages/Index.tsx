
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import GetInvolved from '@/components/GetInvolved';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Mission />
      <Programs />
      <Impact />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
