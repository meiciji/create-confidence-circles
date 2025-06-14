
import { Quote, TrendingUp, Users2, Lightbulb } from 'lucide-react';

const Mission = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Problem */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-8">
            The Challenge We're Addressing
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-sage-50 rounded-lg p-8 border-l-4 border-sage-600 mb-8">
              <Quote className="h-8 w-8 text-sage-600 mb-4" />
              <p className="text-lg text-sage-800 italic leading-relaxed">
                "Despite progress in gender equality, leadership in business and tech remains overwhelmingly male-dominated—even in industries designed for and driven by women."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-cream-100 rounded-lg p-6">
                <TrendingUp className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-sage-900 mb-2">10%</div>
                <p className="text-sage-700">of Fortune 500 CEOs are women</p>
              </div>
              
              <div className="bg-cream-100 rounded-lg p-6">
                <Users2 className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-sage-900 mb-2">&lt;2%</div>
                <p className="text-sage-700">of VC funding goes to women-led startups</p>
              </div>
              
              <div className="bg-cream-100 rounded-lg p-6">
                <Lightbulb className="h-12 w-12 text-sage-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-sage-900 mb-2">Gap</div>
                <p className="text-sage-700">Even in female-driven industries, leadership remains male-dominated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solution */}
        <div className="bg-gradient-to-r from-sage-100 to-mint-100 rounded-xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-6">
              Our Origin Story
            </h3>
            <p className="text-lg text-sage-800 leading-relaxed mb-8">
              After discovering her voice through social media creation, Mei Ying founded <strong>Confidence Through Creation</strong> to help girls—especially those from underrepresented or underserved communities—build self-worth and leadership through digital creation.
            </p>
            <p className="text-lg text-sage-800 leading-relaxed">
              Whether through tech, art, business, or media, CTC helps young creators turn ideas into real-world impact and connects that process to access, equity, and systemic change.
            </p>
          </div>
        </div>

        {/* Impact Message */}
        <div className="text-center mt-16">
          <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
            We believe that when girls see themselves as creators and leaders, they don't just change their own lives—they change the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
